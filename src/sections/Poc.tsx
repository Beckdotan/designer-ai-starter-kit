import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import { linkify } from '@/utils/linkify';
import type { PocStep } from '@/content/types';

export function Poc() {
  const { t } = useLang();
  return (
    <section id="poc" className="section bg-bone">
      <div className="section-inner">
        <SectionHeader
          tag={t.poc.tag}
          meta={t.poc.meta}
          title={t.poc.title}
          intro={t.poc.intro}
        />

        <ol className="relative space-y-16 md:space-y-24">
          {t.poc.steps.map((step, i) => (
            <Step key={step.number} step={step} index={i} last={i === t.poc.steps.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function Step({ step, last }: { step: PocStep; index: number; last: boolean }) {
  return (
    <motion.li
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-12%' }}
      transition={{ duration: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
      className="relative grid grid-cols-[auto_1fr] gap-x-5 gap-y-6 md:grid-cols-[96px_1fr] md:gap-x-10"
    >
      {/* Number + rail */}
      <div className="relative flex flex-col items-start">
        <span className="font-mono text-[48px] leading-none text-cobalt md:text-[72px]">
          {step.number}
        </span>
        {!last && (
          <span
            aria-hidden="true"
            className="mt-6 hidden w-px flex-1 bg-chalk md:block"
            style={{ minHeight: '100%' }}
          />
        )}
      </div>

      {/* Body */}
      <div className="pt-2 md:pt-3">
        <h3 className="max-w-[28ch] text-display-m font-medium tracking-tight text-ink">
          {step.title}
        </h3>
        <p className="mt-4 max-w-prose text-body text-graphite">{linkify(step.body)}</p>

        {/* Screenshot placeholder — swap /public/poc-step-0N.png to replace */}
        <div
          className="mt-8 aspect-[16/9] w-full max-w-3xl overflow-hidden rounded-xl border border-chalk bg-paper shadow-card"
          role="img"
          aria-label={step.screenshotAlt}
        >
          <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-paper via-bone to-chalk">
            <div className="text-center">
              <div className="mono-label text-smoke">SCREENSHOT · STEP {step.number}</div>
              <div className="mt-2 text-body-s text-smoke">{step.screenshotAlt}</div>
            </div>
          </div>
        </div>
      </div>
    </motion.li>
  );
}
