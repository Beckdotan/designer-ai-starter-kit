import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import type { Takeaway } from '@/content/types';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Why() {
  const { t } = useLang();
  const w = t.why;

  return (
    <section id="why" className="section bg-paper">
      <div className="section-inner">
        <SectionHeader tag={w.tag} meta={w.meta} title={w.title} intro={w.intro} />

        <ul className="grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-x-12 md:gap-y-14">
          {w.takeaways.map((item, i) => (
            <TakeawayItem key={item.number} item={item} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function TakeawayItem({ item, index }: { item: Takeaway; index: number }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10%' }}
      transition={{ duration: 0.5, delay: Math.min(index * 0.06, 0.24), ease }}
      className="border-t border-chalk pt-6"
    >
      <div className="flex items-baseline gap-4">
        <span className="font-mono text-mono-body text-cobalt">{item.number}</span>
        <h3 className="max-w-[22ch] text-display-m font-medium tracking-tight text-ink">
          {item.headline}
        </h3>
      </div>
      <p className="mt-5 max-w-prose text-body-l text-graphite">
        {renderEmphasis(item.body)}
      </p>
    </motion.li>
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
