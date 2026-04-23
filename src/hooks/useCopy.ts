import { useCallback, useEffect, useRef, useState } from 'react';

const COPIED_MS = 1200;

export function useCopy() {
  const [copied, setCopied] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
    };
  }, []);

  const copy = useCallback(async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      if (timeoutRef.current) window.clearTimeout(timeoutRef.current);
      timeoutRef.current = window.setTimeout(() => setCopied(false), COPIED_MS);
      return true;
    } catch {
      return false;
    }
  }, []);

  return { copied, copy };
}
