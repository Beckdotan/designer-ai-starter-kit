import { useEffect, useState } from 'react';
import { useLang } from '@/hooks/useLang';

export function BackToTop() {
  const { t } = useLang();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 800);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label={t.nav.backToTop}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed bottom-4 end-4 z-40 flex h-11 w-11 items-center justify-center rounded-md bg-cobalt font-mono text-[16px] text-bone shadow-lift transition-all duration-300 ease-quart hover:bg-cobalt-ink md:hidden ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-4 opacity-0'
      }`}
    >
      ↑
    </button>
  );
}
