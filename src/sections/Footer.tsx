import { useLang } from '@/hooks/useLang';

export function Footer() {
  const { t } = useLang();
  return (
    <footer id="footer" className="bg-ink px-5 py-12 text-bone md:px-8 md:py-20">
      <div className="mx-auto w-full max-w-content">
        <div className="text-body-s text-bone/85">{t.footer.credits}</div>

        <div className="my-10 h-px bg-bone/10 md:my-14" />

        <div className="flex flex-col gap-3 font-mono text-mono-label text-bone/60 md:flex-row md:items-center md:justify-between">
          <span className="force-ltr">{t.footer.builtWith}</span>
          <a
            href="#hero"
            className="text-bone/85 underline-offset-4 hover:underline"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            ↑ {t.nav.backToTop.toUpperCase()}
          </a>
        </div>
      </div>
    </footer>
  );
}
