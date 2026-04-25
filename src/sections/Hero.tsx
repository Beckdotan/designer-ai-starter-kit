import { motion } from 'framer-motion';
import { useLang } from '@/hooks/useLang';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import { ShutterButton } from '@/components/ShutterButton';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Hero() {
  const { t } = useLang();
  const reduced = useReducedMotion();
  const words = t.hero.headline.split(' ');

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full flex-col justify-end overflow-hidden bg-ink px-5 pb-16 pt-28 md:justify-center md:px-8 md:pb-32 md:pt-40"
      aria-label="Hero"
    >
      {!reduced && (
        <video
          className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-70"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/designer-ai-starter-kit/hero-poster.jpg"
          aria-hidden="true"
        >
          <source src="/designer-ai-starter-kit/hero.mp4" type="video/mp4" />
        </video>
      )}

      {/* atmospheric gradient — replaces video when reduced-motion OR video missing */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 30% 40%, rgba(44,95,255,0.25), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 70%, rgba(127,160,255,0.18), transparent 60%), #0A0A0A',
        }}
      />

      {/* scrim */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
        style={{
          background:
            'linear-gradient(180deg, rgba(10,10,10,0.35) 0%, rgba(10,10,10,0.65) 75%, #0A0A0A 100%)',
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-content flex-col gap-10 md:flex-row md:items-center md:justify-between md:gap-16">
        {/* Left column: text */}
        <div className="md:flex-1">
          {/* Receipt chip */}
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease }}
            className="mb-8 inline-flex max-w-full flex-wrap items-center gap-x-3 gap-y-2 rounded-full border border-bone/15 bg-bone/5 px-4 py-2 font-mono text-mono-label text-bone/80 backdrop-blur-md md:mb-10"
            dir={t.dir}
          >
            <span>{t.hero.receiptPrefix}</span>
            <span className="text-bone/40">·</span>
            {t.hero.receiptItems.map((item, i) => (
              <span key={item} className="flex items-center gap-3">
                <span className="text-bone">{item}</span>
                {i < t.hero.receiptItems.length - 1 && (
                  <span className="text-bone/40">·</span>
                )}
              </span>
            ))}
            <span className="text-bone/40">·</span>
            <span>{t.hero.receiptSuffix}</span>
            <a
              href="https://claude.com/product/claude-code"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cobalt-light underline-offset-4 hover:underline"
            >
              {t.hero.receiptLinkLabel}
            </a>
          </motion.div>

          {/* Headline */}
          <h1 className="max-w-[14ch] text-display-xl font-medium text-bone">
            {words.map((word, i) => (
              <motion.span
                key={`${word}-${i}`}
                initial={{ opacity: 0, y: 14, filter: 'blur(8px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                transition={{
                  duration: 0.5,
                  delay: 0.2 + i * 0.12,
                  ease,
                }}
                className="inline-block whitespace-pre"
              >
                {word}
                {i < words.length - 1 ? ' ' : ''}
              </motion.span>
            ))}
          </h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease }}
            className="mt-6 max-w-prose text-body-l text-bone/85 md:mt-8"
          >
            {t.hero.subhead}
          </motion.p>
        </div>

        {/* Right column: shutter button */}
        <motion.div
          initial={{ opacity: 0, y: 10, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.55, delay: 1.05, ease }}
          className="flex items-center justify-start md:justify-end"
        >
          <ShutterButton label={t.hero.cta} href="#why" tone="light" size="lg" />
        </motion.div>
      </div>
    </section>
  );
}
