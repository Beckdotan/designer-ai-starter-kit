import { motion } from 'framer-motion';

type Props = {
  tag: string;
  meta: string;
  title: string;
  intro: string;
  tone?: 'light' | 'dark';
};

export function SectionHeader({ tag, meta, title, intro, tone = 'light' }: Props) {
  const isDark = tone === 'dark';
  return (
    <header className="mb-12 md:mb-20">
      <div className="flex items-center gap-3 md:gap-4">
        <span
          className={`mono-label ${isDark ? 'text-bone/60' : 'text-smoke'} force-ltr`}
          aria-hidden="true"
        >
          {tag}
        </span>
        <span className={`hairline ${isDark ? 'bg-bone/15' : 'bg-chalk'}`} />
        <span className={`mono-label ${isDark ? 'text-bone/60' : 'text-graphite'}`}>{meta}</span>
      </div>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
        className={`mt-6 max-w-[22ch] text-display-l font-medium tracking-tight ${
          isDark ? 'text-bone' : 'text-ink'
        }`}
      >
        {title}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-15%' }}
        transition={{ duration: 0.5, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
        className={`mt-4 max-w-prose text-body-l ${isDark ? 'text-bone/75' : 'text-graphite'}`}
      >
        {intro}
      </motion.p>
    </header>
  );
}
