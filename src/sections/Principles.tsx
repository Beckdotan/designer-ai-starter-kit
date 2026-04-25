import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import { useCopy } from '@/hooks/useCopy';
import { useReducedMotion } from '@/hooks/useReducedMotion';
import type { Principle } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Principles() {
  const { t } = useLang();
  return (
    <section id="principles" className="section bg-paper">
      <div className="section-inner">
        <SectionHeader
          tag={t.principles.tag}
          meta={t.principles.meta}
          title={t.principles.title}
          intro={t.principles.intro}
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-5 lg:grid-cols-3">
          {t.principles.items.map((p, i) => (
            <PrincipleCard
              key={p.number}
              principle={p}
              index={i}
              copyLabel={t.principles.copyLabel}
              copiedLabel={t.principles.copiedLabel}
            />
          ))}
        </ul>

        <StarterPromptBlock />
      </div>
    </section>
  );
}

function PrincipleCard({
  principle,
  index,
  copyLabel,
  copiedLabel,
}: {
  principle: Principle;
  index: number;
  copyLabel: string;
  copiedLabel: string;
}) {
  const { copied, copy } = useCopy();
  const reduced = useReducedMotion();

  return (
    <motion.li
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.06, ease }}
      className="group"
    >
      <div
        className={`card flex h-full flex-col transition-shadow duration-200 ease-quart hover:shadow-lift hover:border-cobalt/40 ${
          copied && !reduced
            ? 'ring-2 ring-cobalt ring-offset-0'
            : ''
        }`}
      >
        <span className="font-mono text-mono-body text-cobalt">{principle.number}</span>

        <h3 className="mt-3 text-display-m font-medium tracking-tight text-ink">
          {principle.name}
        </h3>

        <p className="mt-3 text-body text-graphite">{principle.explanation}</p>

        <div className="mt-5 flex-1" />

        <div className="relative mt-4">
          <pre
            dir="ltr"
            className="force-ltr whitespace-pre-wrap break-words rounded-lg bg-terminal-bg p-4 font-mono text-mono-body text-terminal-fg"
          >
            {copied && !reduced ? (
              <span className="text-cobalt-light">✓ copied to clipboard</span>
            ) : (
              principle.snippet
            )}
          </pre>

          <button
            type="button"
            onClick={() => copy(principle.snippet)}
            aria-label={`Copy snippet for ${principle.name}`}
            className="absolute end-2 top-2 rounded-md bg-ink/60 px-2.5 py-1.5 font-mono text-[10px] uppercase tracking-[0.12em] text-bone/80 backdrop-blur-sm transition-all duration-200 ease-quart hover:bg-cobalt hover:text-bone md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100"
          >
            {copied ? copiedLabel : copyLabel}
          </button>
        </div>
      </div>
    </motion.li>
  );
}

function StarterPromptBlock() {
  const { t } = useLang();
  const { copied, copy } = useCopy();
  const reduced = useReducedMotion();
  const p = t.principles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease }}
      className={`mt-20 rounded-2xl border border-chalk bg-bone p-6 shadow-card md:mt-28 md:p-10 ${
        copied && !reduced ? 'ring-2 ring-cobalt ring-offset-0' : ''
      }`}
    >
      <div className="flex items-center gap-3">
        <span className="mono-label text-cobalt force-ltr">{p.starterPromptLabel}</span>
        <span className="hairline" />
      </div>

      <h3 className="mt-5 max-w-[36ch] text-display-m font-medium tracking-tight text-ink">
        {p.starterPromptTask}
      </h3>
      <p className="mt-4 max-w-prose text-body text-graphite">{p.starterPromptNote}</p>

      <div className="relative mt-8">
        <pre
          dir="ltr"
          className="force-ltr max-h-[60vh] overflow-auto whitespace-pre rounded-xl bg-terminal-bg p-5 font-mono text-mono-body leading-[1.65] text-terminal-fg md:p-6"
        >
          {copied && !reduced ? (
            <span className="text-cobalt-light">✓ copied to clipboard — paste into AI Studio and run</span>
          ) : (
            p.starterPrompt
          )}
        </pre>
        <button
          type="button"
          onClick={() => copy(p.starterPrompt)}
          aria-label="Copy starter prompt"
          className="absolute end-3 top-3 rounded-md bg-ink/70 px-3 py-2 font-mono text-[11px] uppercase tracking-[0.12em] text-bone transition-all duration-200 ease-quart hover:bg-cobalt"
        >
          {copied ? p.copiedLabel : p.copyLabel}
        </button>
      </div>

      <p className="mt-6 max-w-prose border-s-2 border-cobalt/40 ps-4 text-body text-graphite">
        <span className="mono-label me-2 text-cobalt force-ltr">{p.starterPromptTipLabel}</span>
        {p.starterPromptTip}
      </p>
    </motion.div>
  );
}
