import { useEffect, useState } from 'react';

function readHash(): string {
  if (typeof window === 'undefined') return '';
  // Normalize: drop leading '#'. So '#/lecture' → '/lecture', '' → ''.
  return window.location.hash.replace(/^#/, '');
}

export function useHashRoute() {
  const [route, setRoute] = useState<string>(readHash);

  useEffect(() => {
    const onChange = () => setRoute(readHash());
    window.addEventListener('hashchange', onChange);
    return () => window.removeEventListener('hashchange', onChange);
  }, []);

  return route;
}
