import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import type { Speaker } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Speakers() {
  const { t } = useLang();
  const s = t.speakers;

  return (
    <section id="speakers" className="section bg-paper">
      <div className="section-inner">
        <SectionHeader
          tag={s.tag}
          meta={s.meta}
          title={s.title}
          intro={s.intro}
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5">
          {s.list.map((sp, i) => (
            <SpeakerCard key={sp.name} speaker={sp} index={i} />
          ))}
        </ul>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-14">
          <a
            href="#/lecture"
            className="font-mono text-mono-label uppercase text-cobalt underline-offset-4 hover:underline"
          >
            {s.readFullLabel}
          </a>
          <a
            href={s.watchUxiUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-mono-label uppercase text-graphite underline-offset-4 hover:text-ink hover:underline"
          >
            {s.watchUxiLabel}
          </a>
        </div>
      </div>
    </section>
  );
}

function SpeakerCard({ speaker, index }: { speaker: Speaker; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.45, delay: index * 0.06, ease }}
      className="card flex items-start gap-5"
    >
      <div
        aria-hidden="true"
        className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg bg-ink font-mono text-[18px] font-medium text-bone md:h-20 md:w-20 md:text-[22px]"
      >
        {speaker.initials}
      </div>
      <div className="min-w-0">
        <div className="text-display-m font-medium tracking-tight text-ink">{speaker.name}</div>
        <div className="mt-1 font-mono text-mono-label uppercase text-graphite">{speaker.role}</div>
        <p className="mt-3 text-body-s text-graphite">{speaker.bio}</p>
      </div>
    </motion.li>
  );
}
