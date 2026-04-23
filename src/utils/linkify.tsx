import type { ReactNode } from 'react';

// Renders inline [text](url) markdown-style links inside a plain string.
// External URLs open in a new tab. Leaves surrounding text as plain text nodes.
const LINK_RE = /\[([^\]]+)\]\(([^)]+)\)/g;

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
    nodes.push(
      <a
        key={`lnk-${key++}`}
        href={url}
        target={isExternal ? '_blank' : undefined}
        rel={isExternal ? 'noopener noreferrer' : undefined}
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
