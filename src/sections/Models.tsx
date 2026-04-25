import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import { track } from '@/lib/track';
import type { ModelGuide } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

// Stable analytics key from a model label. "Nano Banana" → "nano-banana".
function docsSlug(label: string): string {
  return label.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '') || 'unknown';
}

export function Models() {
  const { t } = useLang();
  return (
    <section id="models" className="section bg-bone">
      <div className="section-inner">
        <SectionHeader
          tag={t.models.tag}
          meta={t.models.meta}
          title={t.models.title}
          intro={t.models.intro}
        />

        <ul className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
          {t.models.items.map((m, i) => (
            <Card key={m.label} item={m} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function Card({ item, index }: { item: ModelGuide; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.45, delay: index * 0.08, ease }}
    >
      <a
        href={item.url}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track(`outbound-docs-${docsSlug(item.label)}`)}
        className="group flex h-full flex-col rounded-xl border border-chalk bg-bone p-6 transition-all duration-200 ease-quart hover:-translate-y-0.5 hover:border-cobalt/40 hover:shadow-lift md:p-8"
      >
        <div className="flex items-center justify-between">
          <span className="font-mono text-mono-label uppercase text-ink">{item.label}</span>
          <span className="font-mono text-mono-label uppercase text-smoke">{item.kind}</span>
        </div>
        <div className="mt-4 h-px bg-chalk" />

        <p className="mt-6 flex-1 text-body text-graphite">{item.description}</p>

        <div className="mt-8 flex items-center gap-2 font-mono text-mono-body text-cobalt">
          <span className="force-ltr truncate">{item.displayUrl}</span>
          <span
            aria-hidden="true"
            className="inline-block transition-transform duration-200 ease-quart group-hover:translate-x-1 rtl:group-hover:-translate-x-1 rtl:rotate-180"
          >
            →
          </span>
        </div>
      </a>
    </motion.li>
  );
}
