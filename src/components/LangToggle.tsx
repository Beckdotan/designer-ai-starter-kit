import { useLang } from '@/hooks/useLang';

export function LangToggle() {
  const { lang, t, setLang } = useLang();
  return (
    <div
      className="fixed end-4 top-4 z-50 flex items-center gap-0 rounded-full border border-chalk bg-bone/90 backdrop-blur-md md:end-8 md:top-6"
      role="group"
      aria-label={t.langToggle.ariaLabel}
    >
      <button
        type="button"
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`min-h-11 min-w-11 rounded-full px-4 py-2 font-mono text-mono-label uppercase transition-colors duration-200 ease-quart ${
          lang === 'en' ? 'bg-ink text-bone' : 'text-graphite hover:text-ink'
        }`}
      >
        {t.langToggle.en}
      </button>
      <button
        type="button"
        onClick={() => setLang('he')}
        aria-pressed={lang === 'he'}
        className={`min-h-11 min-w-11 rounded-full px-4 py-2 font-sans text-[14px] font-medium transition-colors duration-200 ease-quart ${
          lang === 'he' ? 'bg-ink text-bone' : 'text-graphite hover:text-ink'
        }`}
      >
        {t.langToggle.he}
      </button>
    </div>
  );
}
