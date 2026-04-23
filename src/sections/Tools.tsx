import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import type { Tool } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Tools() {
  const { t } = useLang();
  return (
    <section id="tools" className="section bg-paper">
      <div className="section-inner">
        <SectionHeader
          tag={t.tools.tag}
          meta={t.tools.meta}
          title={t.tools.title}
          intro={t.tools.intro}
        />

        <Featured tool={t.tools.featured} />

        <ul className="mt-4 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-5 md:gap-5 lg:grid-cols-3">
          {t.tools.supporting.map((tool, i) => (
            <Supporting key={tool.name} tool={tool} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Featured({ tool }: { tool: Tool }) {
  return (
    <motion.a
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, ease }}
      href={tool.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-2xl border border-ink/15 bg-ink p-6 transition-all duration-200 ease-quart hover:-translate-y-0.5 hover:shadow-lift md:p-10"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-full bg-cobalt px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-bone">
          ★ FEATURED
        </span>
        <span className="hairline bg-bone/20" />
      </div>

      <h3 className="mt-6 text-display-l font-medium tracking-tight text-bone">{tool.name}</h3>
      <p className="mt-5 max-w-prose text-body-l text-bone/75">{tool.oneLiner}</p>

      {tool.terminal && (
        <pre
          dir="ltr"
          className="force-ltr mt-8 whitespace-pre-wrap rounded-lg bg-terminal-warm p-5 font-mono text-mono-body text-terminal-fg md:p-6"
        >
          {tool.terminal}
        </pre>
      )}

      <div className="mt-8 flex items-center gap-2 font-mono text-mono-body text-cobalt-light">
        <span className="force-ltr">{tool.displayUrl}</span>
        <span
          aria-hidden="true"
          className="inline-block transition-transform duration-200 ease-quart group-hover:translate-x-1 rtl:rotate-180"
        >
          →
        </span>
      </div>
    </motion.a>
  );
}

function Supporting({ tool, index }: { tool: Tool; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-8%' }}
      transition={{ duration: 0.45, delay: (index % 3) * 0.05, ease }}
    >
      <a
        href={tool.url}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-full flex-col rounded-xl border border-chalk bg-bone p-6 transition-all duration-200 ease-quart hover:-translate-y-0.5 hover:border-cobalt/40 hover:shadow-card"
      >
        <h4 className="text-display-m font-medium tracking-tight text-ink">{tool.name}</h4>
        <p className="mt-3 flex-1 text-body-s text-graphite">{tool.oneLiner}</p>
        <div className="mt-6 flex items-center gap-2 font-mono text-mono-body text-cobalt">
          <span className="force-ltr">{tool.displayUrl}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 ease-quart group-hover:translate-x-1 rtl:rotate-180"
          >
            →
          </span>
        </div>
      </a>
    </motion.li>
  );
}
