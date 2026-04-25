import { AnimatePresence, motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { useFlashSubscriber } from '@/hooks/useFlash';
import { useReducedMotion } from '@/hooks/useReducedMotion';

// Full-viewport white flash. Mount once at the App root.
// Subscribes to the global flash bus; respects prefers-reduced-motion.
export function FlashOverlay() {
  const [active, setActive] = useState(false);
  const reduced = useReducedMotion();

  useFlashSubscriber(() => {
    if (reduced) return;
    setActive(true);
  });

  useEffect(() => {
    if (!active) return;
    const id = window.setTimeout(() => setActive(false), 360);
    return () => window.clearTimeout(id);
  }, [active]);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key="flash"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 0.95, 0.08, 0.8, 0] }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.34,
            times: [0, 0.18, 0.42, 0.6, 1],
            ease: [0.2, 0.7, 0.2, 1],
          }}
          className="pointer-events-none fixed inset-0 z-[100] bg-bone"
          aria-hidden="true"
        />
      )}
    </AnimatePresence>
  );
}
