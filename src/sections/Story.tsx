import { AnimatePresence, motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import { linkify } from '@/utils/linkify';
import type { StoryBeat, StoryTakeaway } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Story() {
  const { t } = useLang();
  const s = t.story;

  return (
    <section id="story" className="section bg-bone">
      <div className="section-inner">
        <SectionHeader
          tag={s.tag}
          meta={s.meta}
          title={s.title}
          intro={s.intro}
        />

        {/* Mobile / sub-md: vertical rail */}
        <div className="md:hidden">
          <TimelineVertical beats={s.beats} />
        </div>

        {/* Desktop / md+: horizontal rail with detail panel */}
        <div className="hidden md:block">
          <TimelineHorizontal beats={s.beats} />
        </div>

        <Takeaways label={s.takeawaysLabel} items={s.takeaways} />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.4, ease }}
          className="mt-10 flex md:mt-14"
        >
          <a
            href="#/lecture"
            className="group inline-flex items-center gap-2 font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline"
          >
            {s.readFullLabel}
          </a>
        </motion.div>
      </div>
    </section>
  );
}

/* ───── Vertical (mobile) ───── */

function TimelineVertical({ beats }: { beats: StoryBeat[] }) {
  return (
    <div className="relative">
      <div
        aria-hidden="true"
        className="absolute start-[15px] top-4 bottom-4 w-[2px] bg-cobalt/20"
      />

      <ol className="space-y-8">
        {beats.map((beat, i) =>
          beat.isPivot ? (
            <VerticalMarker key={beat.number} beat={beat} index={i} />
          ) : (
            <VerticalBeat key={beat.number} beat={beat} index={i} />
          ),
        )}
      </ol>
    </div>
  );
}

function VerticalBeat({ beat, index }: { beat: StoryBeat; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.05, 0.25), ease }}
      className="relative ps-12"
    >
      <span
        aria-hidden="true"
        className="absolute start-0 top-0 z-10 grid h-8 w-8 place-items-center rounded-full border-2 border-cobalt bg-bone font-mono text-[11px] text-cobalt"
      >
        {beat.number}
      </span>

      <article className="card">
        <h3 className="max-w-[28ch] text-display-m font-medium tracking-tight text-ink">
          {beat.headline}
        </h3>
        {beat.body && (
          <p className="mt-4 max-w-prose text-body text-graphite">{linkify(beat.body)}</p>
        )}
        {beat.quote && <Quote beat={beat} />}
      </article>
    </motion.li>
  );
}

function VerticalMarker({ beat, index }: { beat: StoryBeat; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.25), ease }}
      className="relative ps-12"
    >
      <span
        aria-hidden="true"
        className="absolute start-[8px] top-[6px] z-10 grid h-4 w-4 place-items-center rounded-full border-2 border-cobalt bg-cobalt"
      />
      <div className="flex items-center gap-3 py-2">
        <span className="font-mono text-mono-label uppercase text-cobalt">
          {beat.shortLabel ?? beat.headline}
        </span>
      </div>
    </motion.li>
  );
}

/* ───── Horizontal (desktop) ───── */

function TimelineHorizontal({ beats }: { beats: StoryBeat[] }) {
  const firstRegular = useMemo(() => beats.find((b) => !b.isPivot), [beats]);
  const [activeNumber, setActiveNumber] = useState<string | undefined>(
    firstRegular?.number,
  );
  const active = beats.find((b) => b.number === activeNumber) ?? firstRegular;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease }}
      className="rounded-2xl border border-chalk bg-bone p-8 shadow-card lg:p-12"
    >
      {/* Rail */}
      <div className="relative">
        <div
          aria-hidden="true"
          className="absolute start-0 end-0 top-5 h-[2px] bg-cobalt/20"
        />

        <ol className="relative flex items-start justify-between gap-4">
          {beats.map((beat) => (
            <HorizontalDot
              key={beat.number}
              beat={beat}
              active={beat.number === active?.number}
              onActivate={(n) => !beat.isPivot && setActiveNumber(n)}
            />
          ))}
        </ol>
      </div>

      {/* Detail panel */}
      <div className="mt-12 min-h-[220px] border-t border-chalk pt-10 lg:min-h-[240px]">
        <AnimatePresence mode="wait" initial={false}>
          {active && !active.isPivot && (
            <motion.div
              key={active.number}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -4 }}
              transition={{ duration: 0.22, ease }}
              className="grid grid-cols-1 gap-8 lg:grid-cols-[auto,1fr]"
            >
              <div className="flex items-start gap-4 lg:w-[200px]">
                <span className="font-mono text-mono-body text-cobalt">{active.number}</span>
              </div>

              <div>
                <h3 className="max-w-[34ch] text-display-m font-medium tracking-tight text-ink">
                  {active.headline}
                </h3>
                {active.body && (
                  <p className="mt-4 max-w-prose text-body text-graphite">
                    {linkify(active.body)}
                  </p>
                )}
                {active.quote && (
                  <div className="mt-5 max-w-prose">
                    <Quote beat={active} compact />
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
}

function HorizontalDot({
  beat,
  active,
  onActivate,
}: {
  beat: StoryBeat;
  active: boolean;
  onActivate: (n: string) => void;
}) {
  const isPivot = beat.isPivot === true;
  const fire = () => onActivate(beat.number);

  const dotClass = isPivot
    ? 'h-4 w-4 border-[3px] border-cobalt bg-cobalt mt-[12px]'
    : active
    ? 'h-10 w-10 border-2 border-cobalt bg-cobalt text-bone'
    : 'h-10 w-10 border-2 border-cobalt bg-bone text-cobalt';

  const labelClass = isPivot
    ? 'text-cobalt'
    : active
    ? 'text-ink'
    : 'text-graphite';

  return (
    <li className="relative flex min-w-0 flex-1 flex-col items-center text-center">
      {isPivot ? (
        <span aria-hidden="true" className={`z-10 rounded-full ${dotClass}`} />
      ) : (
        <button
          type="button"
          onMouseEnter={fire}
          onFocus={fire}
          onClick={fire}
          aria-label={`Show beat ${beat.number}: ${beat.headline}`}
          aria-pressed={active}
          className={`z-10 grid place-items-center rounded-full font-mono text-mono-body transition-colors duration-200 ease-quart ${dotClass}`}
        >
          {beat.number}
        </button>
      )}

      <span
        className={`mt-4 max-w-[12ch] font-mono text-mono-label uppercase leading-tight transition-colors duration-200 ease-quart ${labelClass}`}
      >
        {beat.shortLabel ?? beat.headline}
      </span>
    </li>
  );
}

/* ───── Shared ───── */

function Quote({ beat, compact = false }: { beat: StoryBeat; compact?: boolean }) {
  return (
    <figure
      className={`${compact ? 'mt-0' : 'mt-6'} border-s-2 border-cobalt/60 bg-paper/70 p-4 md:p-5`}
      dir={beat.quoteLang === 'he' ? 'rtl' : 'ltr'}
    >
      <blockquote
        className={`${
          beat.quoteLang === 'he'
            ? 'font-sans text-[18px] leading-snug md:text-[22px]'
            : 'font-sans text-body-l italic'
        } text-ink`}
      >
        {beat.quote}
      </blockquote>
      {beat.quoteAttribution && (
        <figcaption className="mt-2 font-mono text-mono-label uppercase text-graphite">
          — {beat.quoteAttribution}
        </figcaption>
      )}
    </figure>
  );
}

function Takeaways({
  label,
  items,
}: {
  label: string;
  items: StoryTakeaway[];
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease }}
      className="mt-20 rounded-2xl border border-chalk bg-paper p-6 shadow-card md:mt-28 md:p-10"
    >
      <div className="flex items-center gap-3">
        <span className="mono-label text-cobalt force-ltr">{label}</span>
        <span className="hairline" />
      </div>

      <ul className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
        {items.map((i) => (
          <li key={i.number} className="border-t border-chalk pt-5">
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-mono-body text-cobalt">{i.number}</span>
              <h4 className="max-w-[22ch] text-display-m font-medium tracking-tight text-ink">
                {i.headline}
              </h4>
            </div>
            <p className="mt-3 max-w-prose text-body text-graphite">
              {renderEmphasis(i.body)}
            </p>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}

function renderEmphasis(source: string) {
  const parts = source.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-medium text-ink">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{part}</span>;
  });
}
