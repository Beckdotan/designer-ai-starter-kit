import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useLang } from '@/hooks/useLang';
import { useHashRoute } from '@/hooks/useHashRoute';

const ease = [0.2, 0.7, 0.2, 1] as const;

type Route = 'home' | 'lecture' | 'who';

function toRouteKey(hash: string): Route {
  if (hash === '/lecture') return 'lecture';
  if (hash === '/who') return 'who';
  return 'home';
}

export function TopNav() {
  const { t } = useLang();
  const route = toRouteKey(useHashRoute());
  const nav = t.topNav;
  const [solid, setSolid] = useState(route !== 'home');

  useEffect(() => {
    if (route !== 'home') {
      setSolid(true);
      return;
    }
    const hero = document.getElementById('hero');
    if (!hero) {
      setSolid(true);
      return;
    }
    // Nav stays transparent while any pixel of the Hero is still behind it.
    // rootMargin's -44px top matches the nav's h-11 (44px) so the Hero
    // hidden behind the nav still counts as "intersecting".
    const observer = new IntersectionObserver(
      ([entry]) => setSolid(!entry.isIntersecting),
      { rootMargin: '-44px 0px 0px 0px', threshold: 0 },
    );
    observer.observe(hero);
    return () => observer.disconnect();
  }, [route]);

  const overHero = !solid;

  const goHome = (e: React.MouseEvent) => {
    e.preventDefault();
    window.location.hash = '';
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const goToWhy = (e: React.MouseEvent) => {
    e.preventDefault();
    if (route !== 'home') {
      window.location.hash = '';
      setTimeout(() => {
        document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
      }, 60);
    } else {
      document.getElementById('why')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease }}
      className={`fixed inset-x-0 top-0 z-40 h-11 border-b transition-colors duration-300 ease-quart ${
        overHero
          ? 'border-transparent bg-transparent'
          : 'border-chalk bg-bone/80 backdrop-blur-md'
      }`}
      aria-label="Primary"
    >
      <div className="mx-auto flex h-full max-w-content items-center justify-start gap-6 px-5 pe-28 md:gap-10 md:px-8 md:pe-40">
        <a
          href="#"
          onClick={goHome}
          className={`font-mono text-mono-label uppercase tracking-wider underline-offset-4 hover:underline force-ltr transition-colors duration-300 ${
            overHero ? 'text-bone/85 hover:text-bone' : 'text-ink'
          }`}
        >
          {nav.brand}
        </a>

        <ul className="flex items-center gap-4 md:gap-7">
          <li>
            <a
              href="#why"
              onClick={goToWhy}
              aria-current={route === 'home' ? 'page' : undefined}
              className={linkClass(route === 'home', overHero)}
            >
              {nav.links.toolkit}
            </a>
          </li>
          <li>
            <a
              href="#/lecture"
              aria-current={route === 'lecture' ? 'page' : undefined}
              className={linkClass(route === 'lecture', overHero)}
            >
              {nav.links.lecture}
            </a>
          </li>
          <li>
            <a
              href="#/who"
              aria-current={route === 'who' ? 'page' : undefined}
              className={linkClass(route === 'who', overHero)}
            >
              {nav.links.who}
            </a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

function linkClass(active: boolean, overHero: boolean) {
  const base =
    'font-mono text-mono-label uppercase underline-offset-4 transition-colors duration-300 ease-quart';
  if (overHero) {
    return [
      base,
      active ? 'text-bone' : 'text-bone/60 hover:text-bone',
      active ? 'underline decoration-bone decoration-[1.5px]' : 'hover:underline',
    ].join(' ');
  }
  return [
    base,
    active ? 'text-cobalt' : 'text-graphite hover:text-ink',
    active ? 'underline decoration-cobalt decoration-[1.5px]' : 'hover:underline',
  ].join(' ');
}
