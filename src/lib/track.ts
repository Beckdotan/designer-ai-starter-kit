// Thin wrapper around the GoatCounter beacon. No-ops if the script hasn't
// loaded (local dev, blocked by an extension, DNT enabled). Exports two helpers:
//   trackPath('/lecture')  — virtual pageview for SPA route changes
//   track('cta-press-to-start') — interaction event (Pages panel row, event:true)

type GoatCounter = {
  count: (opts: { path: string; title?: string; event?: boolean }) => void;
  no_onload?: boolean;
};

declare global {
  interface Window {
    goatcounter?: GoatCounter;
  }
}

function gc(): GoatCounter | undefined {
  if (typeof window === 'undefined') return;
  const g = window.goatcounter;
  return g && typeof g.count === 'function' ? g : undefined;
}

export function trackPath(path: string, title?: string) {
  gc()?.count({ path, title });
}

export function track(name: string) {
  gc()?.count({ path: name, event: true });
}
