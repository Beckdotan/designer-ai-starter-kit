import { useCallback, useEffect, useState } from 'react';
import { content, type Lang } from '@/content';

const STORAGE_KEY = 'uxi-starter-kit:lang';

function readInitialLang(): Lang {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem(STORAGE_KEY);
  if (stored === 'en' || stored === 'he') return stored;
  return 'en';
}

export function useLang() {
  const [lang, setLangState] = useState<Lang>(readInitialLang);
  const t = content[lang];

  useEffect(() => {
    const html = document.documentElement;
    html.setAttribute('lang', t.lang);
    html.setAttribute('dir', t.dir);
  }, [t.lang, t.dir]);

  const setLang = useCallback((next: Lang) => {
    setLangState(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }, []);

  const toggle = useCallback(() => {
    setLang(lang === 'en' ? 'he' : 'en');
  }, [lang, setLang]);

  return { lang, t, setLang, toggle };
}
