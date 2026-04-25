import type { ReactNode } from 'react';
import { track } from '@/lib/track';

// Renders inline [text](url) markdown-style links inside a plain string.
// External URLs open in a new tab. Leaves surrounding text as plain text nodes.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

// High-value outbound destinations get a tracking event. The Gem URL is the
// prompt-helper a designer is meant to copy into their workflow; AI Studio is
// the build environment they'll spend time in. Other URLs aren't tracked.
const TRACK_PATTERNS: Array<[RegExp, string]> = [
  [/gemini\.google\.com\/gem/i, 'outbound-gem'],
  [/aistudio\.google\.com/i, 'outbound-aistudio'],
];

function trackKeyForUrl(url: string): string | undefined {
  for (const [pattern, key] of TRACK_PATTERNS) {
    if (pattern.test(url)) return key;
  }
  return undefined;
}

export function linkify(source: string): ReactNode[] {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let key = 0;

  for (const match of source.matchAll(LINK_RE)) {
    const [full, text, url] = match;
    const start = match.index ?? 0;

    if (start > lastIndex) {
      nodes.push(source.slice(lastIndex, start));
    }

    const isExternal = /^https?:\/\//.test(url);
    const trackKey = isExternal ? trackKeyForUrl(url) : undefined;
    nodes.push(
      <a
        key={`lnk-${key++}`}
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
        onClick={trackKey ? () => track(trackKey) : undefined}
        className="underline decoration-cobalt/40 decoration-2 underline-offset-4 transition-colors duration-200 ease-quart hover:decoration-cobalt"
      >
        {text}
      </a>,
    );

    lastIndex = start + full.length;
  }

  if (lastIndex < source.length) {
    nodes.push(source.slice(lastIndex));
  }

  return nodes.length ? nodes : [source];
}
