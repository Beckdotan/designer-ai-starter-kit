import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useEffect, useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { Timeline } from '@/components/Timeline';
import { track } from '@/lib/track';
import type { LectureSlide } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;
const BASE = '/designer-ai-starter-kit';

export function Lecture() {
  const { t, lang } = useLang();
  const l = t.lecture;
  const isRTL = lang === 'he';
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, []);

  return (
    <main className="mx-auto min-h-screen max-w-content px-5 pb-24 pt-24 md:px-8 md:pt-32">
      <motion.header
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease }}
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

      {/* Journey — timeline */}
      <section className="mt-20 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="mono-label text-cobalt force-ltr">{l.journeyLabel}</span>
          <span className="hairline" />
        </div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5, ease }}
          className="mt-6 max-w-[22ch] text-display-l font-medium tracking-tight text-ink"
        >
          {l.journeyTitle}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-15%' }}
          transition={{ duration: 0.5, delay: 0.1, ease }}
          className="mt-4 max-w-prose text-body-l text-graphite"
        >
          {l.journeyIntro}
        </motion.p>

        <div className="mt-12 md:mt-16">
          <Timeline beats={l.beats} />
        </div>
      </section>

      {/* Slides */}
      <section className="mt-20 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="mono-label text-cobalt force-ltr">{l.slidesLabel}</span>
          <span className="hairline" />
        </div>

        <ul className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 md:gap-5">
          {l.slides.map((s, i) => (
            <SlideCard
              key={s.file}
              slide={s}
              index={i}
              onOpen={() => setLightboxIndex(i)}
            />
          ))}
        </ul>
      </section>

      <SlideLightbox
        slides={l.slides}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onIndexChange={setLightboxIndex}
        isRTL={isRTL}
      />

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
      <section className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-chalk pt-10 md:mt-28">
        <a
          href={l.watchUxiUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track('cta-watch-talk-outro')}
          className="font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline"
        >
          {l.watchUxiLabel}
        </a>
        <a
          href="#/who"
          className="font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline"
        >
          {l.whoLabel}
        </a>
      </section>
    </main>
  );
}

function SlideCard({
  slide,
  index,
  onOpen,
}: {
  slide: LectureSlide;
  index: number;
  onOpen: () => void;
}) {
  const src = `${BASE}/lecture/${slide.file}`;

  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-6%' }}
      transition={{ duration: 0.4, delay: (index % 3) * 0.05, ease }}
      className="overflow-hidden rounded-xl border border-chalk bg-paper shadow-card"
    >
      <button
        type="button"
        onClick={onOpen}
        aria-label={`Open slide ${index + 1}`}
        className="group relative block aspect-[16/9] w-full overflow-hidden bg-gradient-to-br from-paper via-bone to-chalk focus:outline-none focus-visible:ring-2 focus-visible:ring-cobalt focus-visible:ring-offset-2"
      >
        <img
          src={src}
          alt={slide.caption}
          loading="lazy"
          onError={(e) => {
            (e.currentTarget as HTMLImageElement).style.display = 'none';
          }}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 ease-quart group-hover:scale-[1.02]"
        />
        {slide.video && (
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 grid place-items-center"
          >
            <span className="grid h-14 w-14 place-items-center rounded-full bg-ink/70 text-bone shadow-lift backdrop-blur-sm transition-transform duration-200 ease-quart group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="h-6 w-6 translate-x-[2px]" fill="currentColor">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        )}
      </button>
    </motion.li>
  );
}

function SlideLightbox({
  slides,
  index,
  onClose,
  onIndexChange,
  isRTL,
}: {
  slides: LectureSlide[];
  index: number | null;
  onClose: () => void;
  onIndexChange: (i: number) => void;
  isRTL: boolean;
}) {
  const open = index !== null;
  const total = slides.length;

  const prev = useCallback(() => {
    if (index === null || index <= 0) return;
    onIndexChange(index - 1);
  }, [index, onIndexChange]);

  const next = useCallback(() => {
    if (index === null || index >= total - 1) return;
    onIndexChange(index + 1);
  }, [index, onIndexChange, total]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowLeft') (isRTL ? next : prev)();
      else if (e.key === 'ArrowRight') (isRTL ? prev : next)();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose, prev, next, isRTL]);

  return (
    <AnimatePresence>
      {open && index !== null && (
        <motion.div
          key="slide-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`Slide ${index + 1} of ${total}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2, ease }}
          onClick={onClose}
          className="fixed inset-0 z-[90] grid place-items-center bg-ink/92 px-4 py-6"
        >
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onClose();
            }}
            aria-label="Close"
            className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-bone/10 text-bone transition-colors duration-200 hover:bg-bone/20 md:right-6 md:top-6"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>

          {index > 0 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              aria-label="Previous slide"
              className={`absolute top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-bone text-ink shadow-lift ring-1 ring-ink/10 transition-all duration-200 ease-quart hover:scale-105 hover:bg-cobalt hover:text-bone md:h-16 md:w-16 ${isRTL ? 'right-3 md:right-8' : 'left-3 md:left-8'}`}
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRTL ? 'M9 6l6 6-6 6' : 'M15 18l-6-6 6-6'} />
              </svg>
            </button>
          )}

          {index < total - 1 && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              aria-label="Next slide"
              className={`absolute top-1/2 z-10 grid h-14 w-14 -translate-y-1/2 place-items-center rounded-full bg-bone text-ink shadow-lift ring-1 ring-ink/10 transition-all duration-200 ease-quart hover:scale-105 hover:bg-cobalt hover:text-bone md:h-16 md:w-16 ${isRTL ? 'left-3 md:left-8' : 'right-3 md:right-8'}`}
            >
              <svg viewBox="0 0 24 24" className="h-7 w-7 md:h-8 md:w-8" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d={isRTL ? 'M15 18l-6-6 6-6' : 'M9 6l6 6-6 6'} />
              </svg>
            </button>
          )}

          <AnimatePresence mode="wait" initial={false}>
            {slides[index].video ? (
              <motion.video
                key={slides[index].video}
                src={`${BASE}/lecture/${slides[index].video}`}
                poster={`${BASE}/lecture/${slides[index].file}`}
                controls
                autoPlay
                playsInline
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-lift"
              />
            ) : (
              <motion.img
                key={slides[index].file}
                src={`${BASE}/lecture/${slides[index].file}`}
                alt={slides[index].caption}
                onClick={(e) => e.stopPropagation()}
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.18, ease }}
                className="max-h-[88vh] max-w-[92vw] rounded-lg object-contain shadow-lift"
              />
            )}
          </AnimatePresence>

          <span className="absolute bottom-4 left-1/2 -translate-x-1/2 font-mono text-mono-label uppercase text-bone/60 force-ltr">
            {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
