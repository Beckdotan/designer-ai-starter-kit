import { useEffect, useState } from 'react';

// Singleton flash trigger. Any component can call `flash()` to fire the global
// FlashOverlay once. The overlay subscribes via `useFlashSubscriber`.

type Listener = () => void;
const listeners = new Set<Listener>();

export function flash() {
  listeners.forEach((fn) => fn());
}

export function useFlashSubscriber(onFire: Listener) {
  useEffect(() => {
    listeners.add(onFire);
    return () => {
      listeners.delete(onFire);
    };
  }, [onFire]);
}

// Convenience hook: returns a local counter that increments each time flash() is
// called. Use this to trigger re-renders / animations driven by the flash event.
export function useFlashPulse() {
  const [pulse, setPulse] = useState(0);
  useFlashSubscriber(() => setPulse((n) => n + 1));
  return pulse;
}
