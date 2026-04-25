import { motion } from 'framer-motion';
import { useEffect } from 'react';
import { useLang } from '@/hooks/useLang';
import { track } from '@/lib/track';
import type { Speaker, BuildCredit } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

// Stable analytics key from a speaker's full name. "Neta Keret" → "neta",
// "Dotan Beck" → "dotan". Strips any non-ASCII just in case.
function speakerSlug(name: string): string {
  return name.split(' ')[0].toLowerCase().replace(/[^a-z]/g, '') || 'unknown';
}

export function Who() {
  const { t } = useLang();
  const w = t.who;

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
          <span className="mono-label text-cobalt force-ltr">{w.tag}</span>
          <span className="hairline" />
          <span className="mono-label text-graphite">{w.meta}</span>
        </div>
        <h1 className="mt-6 max-w-[22ch] text-display-l font-medium tracking-tight text-ink md:text-display-xl">
          {w.title}
        </h1>
        <p className="mt-5 max-w-prose text-body-l text-graphite">{w.intro}</p>
        <p className="mt-4 font-mono text-mono-label uppercase text-smoke">
          {w.talkTitle}
        </p>
      </motion.header>

      {/* Speakers */}
      <section className="mt-20 md:mt-28">
        <ul className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
          {w.list.map((sp, i) => (
            <SpeakerBlock key={sp.name} speaker={sp} index={i} />
          ))}
        </ul>
      </section>

      {/* Credits */}
      <section className="mt-20 md:mt-28">
        <div className="flex items-center gap-3">
          <span className="mono-label text-cobalt force-ltr">{w.creditsLabel}</span>
          <span className="hairline" />
        </div>

        <p className="mt-6 max-w-prose text-body-l text-graphite">{w.creditsIntro}</p>

        <dl className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 md:mt-12 md:grid-cols-4 md:gap-8">
          {w.credits.map((c, i) => (
            <CreditItem key={c.label} credit={c} index={i} />
          ))}
        </dl>
      </section>

      {/* Footer nav */}
      <section className="mt-20 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-chalk pt-10 md:mt-28">
        <a
          href="#/lecture"
          className="font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline"
        >
          {w.lectureLabel}
        </a>
        <a
          href={w.watchUxiUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline"
        >
          {w.watchUxiLabel}
        </a>
      </section>
    </main>
  );
}

function SpeakerBlock({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: index * 0.08, ease }}
      className="card flex flex-col gap-6"
    >
      {speaker.imageUrl ? (
        <img
          src={speaker.imageUrl}
          alt={speaker.name}
          loading="lazy"
          className="h-32 w-32 flex-shrink-0 rounded-lg object-cover object-top md:h-40 md:w-40"
        />
      ) : (
        <div
          aria-hidden="true"
          className="flex h-32 w-32 items-center justify-center rounded-lg bg-ink font-mono text-[36px] font-medium text-bone md:h-40 md:w-40 md:text-[44px]"
        >
          {speaker.initials}
        </div>
      )}

      <div>
        <div className="text-display-m font-medium tracking-tight text-ink">
          {speaker.name}
        </div>
        <div className="mt-2 font-mono text-mono-label uppercase text-graphite">
          {speaker.role}
        </div>
        <p className="mt-5 max-w-prose text-body text-graphite">{speaker.bio}</p>

        {speaker.linkedinUrl && (
          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href={speaker.linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track(`outbound-linkedin-${speakerSlug(speaker.name)}-who`)}
              className="font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline force-ltr"
            >
              {speaker.linkedinLabel ?? 'LINKEDIN ↗'}
            </a>
            {speaker.emailUrl && (
              <a
                href={speaker.emailUrl}
                className="font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline force-ltr"
              >
                {speaker.emailLabel ?? 'EMAIL ↗'}
              </a>
            )}
          </div>
        )}
      </div>
    </motion.li>
  );
}

function CreditItem({ credit, index }: { credit: BuildCredit; index: number }) {
  const content = (
    <>
      <dt className="font-mono text-mono-label uppercase text-smoke">{credit.label}</dt>
      <dd className="mt-2 text-body text-ink">{credit.value}</dd>
    </>
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.4, delay: Math.min(index * 0.05, 0.2), ease }}
      className="border-t border-chalk pt-5"
    >
      {credit.url ? (
        <a
          href={credit.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block underline-offset-4 hover:underline"
        >
          {content}
        </a>
      ) : (
        content
      )}
    </motion.div>
  );
}
