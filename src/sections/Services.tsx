import { motion } from 'framer-motion';
import { SectionHeader } from '@/components/SectionHeader';
import { useLang } from '@/hooks/useLang';
import { track } from '@/lib/track';

const ease = [0.2, 0.7, 0.2, 1] as const;

export function Services() {
  const { t } = useLang();
  const s = t.services;

  return (
    <section
      id="services"
      className="section"
      style={{ backgroundColor: '#17140F' }}
      aria-label="Services"
    >
      <div className="section-inner">
        <SectionHeader
          tag={s.tag}
          meta={s.meta}
          title={s.title}
          intro={s.intro}
          tone="dark"
        />

        {/* Three offerings */}
        <ul className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-0 md:rounded-xl md:border md:border-bone/12 md:bg-bone/[0.02]">
          {s.offerings.map((o, i) => (
            <motion.li
              key={o.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10%' }}
              transition={{ duration: 0.45, delay: i * 0.08, ease }}
              className={`card-dark md:rounded-none md:border-0 ${
                i > 0 ? 'md:border-s md:border-bone/12' : ''
              }`}
            >
              <span className="font-mono text-mono-label uppercase text-cobalt-light">
                {o.label}
              </span>
              <h3 className="mt-4 text-display-m font-medium tracking-tight text-bone">
                {o.title}
              </h3>
              <p className="mt-4 text-body text-bone/75">{o.body}</p>
            </motion.li>
          ))}
        </ul>

        {/* Bio + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-10%' }}
          transition={{ duration: 0.5, ease }}
          className="mt-10 flex flex-col gap-8 rounded-2xl border border-bone/12 p-6 md:mt-12 md:flex-row md:items-center md:justify-between md:p-10"
          style={{ backgroundColor: 'rgba(250,250,247,0.02)' }}
        >
          <div className="flex items-center gap-5">
            <HeadshotPlaceholder />
            <div>
              <div className="text-display-m font-medium tracking-tight text-bone">
                {s.bioName}
              </div>
              <div className="mt-1 font-mono text-mono-label uppercase text-bone/60">
                {s.bioRole}
              </div>
              <p className="mt-3 max-w-[40ch] text-body-s text-bone/75">{s.bioBody}</p>
            </div>
          </div>

          <a
            href={s.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track('outbound-linkedin')}
            className="btn-outline group w-full md:w-auto"
          >
            <span>{s.cta}</span>
            <span
              aria-hidden="true"
              className="inline-block transition-transform duration-200 ease-quart group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            >
              ↗
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

function HeadshotPlaceholder() {
  return (
    <img
      src="/designer-ai-starter-kit/who/dotan.jpg"
      alt="Dotan Beck"
      loading="lazy"
      className="h-16 w-16 flex-shrink-0 rounded-lg object-cover object-top md:h-20 md:w-20"
    />
  );
}
