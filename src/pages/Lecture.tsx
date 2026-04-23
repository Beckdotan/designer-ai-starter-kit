import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { LangToggle } from '@/components/LangToggle';
import { useLang } from '@/hooks/useLang';
import type { LectureSlide } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;
const BASE = '/designer-ai-starter-kit';

export function Lecture() {
  const { t } = useLang();
  const l = t.lecture;

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <>
      <LangToggle />
      <main className="mx-auto min-h-screen max-w-content px-5 pb-24 pt-24 md:px-8 md:pt-32">
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.location.hash = '';
          }}
          className="inline-flex items-center gap-2 font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline"
        >
          {l.backLabel}
        </a>

        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease }}
          className="mt-12 md:mt-20"
        >
          <div className="flex items-center gap-3">
            <span className="mono-label text-cobalt force-ltr">{l.kicker}</span>
            <span className="hairline" />
          </div>
          <h1 className="mt-6 max-w-[22ch] text-display-l font-medium tracking-tight text-ink md:text-display-xl">
            {l.talkTitle}
          </h1>
          <p className="mt-5 font-mono text-mono-label uppercase text-graphite">
            {l.speakersLine}
          </p>
        </motion.header>

        {/* Slides */}
        <section className="mt-16 md:mt-24">
          <div className="flex items-center gap-3">
            <span className="mono-label text-smoke force-ltr">{l.slidesLabel}</span>
            <span className="hairline" />
          </div>

          <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
            {l.slides.map((s, i) => (
              <SlideCard key={s.file} slide={s} index={i} />
            ))}
          </ul>

          <p className="mt-6 font-mono text-mono-label uppercase text-smoke">
            {l.slidesPlaceholder}
          </p>
        </section>

        {/* Transcript */}
        <section className="mt-20 md:mt-28">
          <div className="flex items-center gap-3">
            <span className="mono-label text-cobalt force-ltr">{l.transcriptLabel}</span>
            <span className="hairline" />
          </div>

          <div className="mt-8 max-w-prose space-y-6">
            {l.transcriptParagraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-10%' }}
                transition={{ duration: 0.4, delay: i * 0.04, ease }}
                className="text-body-l text-graphite"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </section>

        {/* Outro */}
        <section className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-28">
          <a
            href={l.watchUxiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline"
          >
            {l.watchUxiLabel}
          </a>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.location.hash = '';
            }}
            className="font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline"
          >
            {l.backLabel}
          </a>
        </section>
      </main>
    </>
  );
}

function SlideCard({ slide, index }: { slide: LectureSlide; index: number }) {
  const src = `${BASE}/lecture/${slide.file}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05, ease }}
      className="overflow-hidden rounded-xl border border-chalk bg-paper shadow-card"
    >
      <div className="relative aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-paper via-bone to-chalk">
        <img
          src={src}
          alt={slide.caption}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <span className="pointer-events-none absolute inset-0 grid place-items-center font-mono text-mono-label uppercase text-smoke">
          {slide.file}
        </span>
      </div>
      <div className="p-4 md:p-5">
        <p className="text-body-s text-graphite">{slide.caption}</p>
      </div>
    </motion.li>
  );
}
