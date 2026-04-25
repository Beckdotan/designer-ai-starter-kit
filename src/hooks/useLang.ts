import { useCallback, useEffect, useSyncExternalStore } from 'react';
import { content, type Lang } from '@/content';

const STORAGE_KEY = 'uxi-starter-kit:lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'he') return stored;
  return 'en';
}

// Single shared store so every useLang() consumer reflects toggles in real time.
let currentLang: Lang = readInitialLang();
const listeners = new Set<() => void>();

function subscribe(cb: () => void): () => void {
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot(): Lang {
  return currentLang;
}

function setLangGlobal(next: Lang) {
  if (currentLang === next) return;
  currentLang = next;
  if (typeof window !== 'undefined') {
    window.localStorage.setItem(STORAGE_KEY, next);
  }
  listeners.forEach((cb) => cb());
}

export function useLang() {
  const lang = useSyncExternalStore(subscribe, getSnapshot, getSnapshot);
  const t = content[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', t.lang);
    html.setAttribute('dir', t.dir);
  }, [t.lang, t.dir]);

  const setLang = useCallback((next: Lang) => {
    setLangGlobal(next);
  }, []);

  const toggle = useCallback(() => {
    setLangGlobal(currentLang === 'en' ? 'he' : 'en');
  }, []);

  return { lang, t, setLang, toggle };
}
