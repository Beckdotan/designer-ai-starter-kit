import { motion, useAnimationControls } from 'framer-motion';
import { useCallback, useState } from 'react';
import { flash } from '@/hooks/useFlash';
import { useReducedMotion } from '@/hooks/useReducedMotion';

type Props = {
  label: string;
  onPress?: () => void;
  href?: string;
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
};

// Tactile shutter button — concentric rings with a pressable inner disc.
// Idle "standby sonar" — two rippling rings + breathing glow draw attention until
// the user engages (hover/focus/press), at which point the pulses settle.
// On activation: brief press-scale, fires global flash, runs onPress/href scroll.
export function ShutterButton({
  label,
  onPress,
  href,
  tone = 'light',
  size = 'lg',
}: Props) {
  const controls = useAnimationControls();
  const reduced = useReducedMotion();
  const [engaged, setEngaged] = useState(false);
  const showPulse = !reduced && !engaged;

  const outerSize = size === 'lg' ? 'h-28 w-28 md:h-36 md:w-36' : 'h-20 w-20';
  const ringBorder = tone === 'light' ? 'border-bone/60' : 'border-ink/70';
  const labelColor = tone === 'light' ? 'text-bone/80' : 'text-ink/75';
  const innerBg = tone === 'light' ? 'bg-bone' : 'bg-ink';
  const innerPressBg = tone === 'light' ? '#2C5FFF' : '#2C5FFF';

  const settle = useCallback(() => setEngaged(true), []);

  const runPress = useCallback(async () => {
    setEngaged(true);
    flash();
    await controls.start({
      scale: [1, 0.9, 1],
      backgroundColor: [
        tone === 'light' ? '#FAFAF7' : '#0A0A0A',
        innerPressBg,
        tone === 'light' ? '#FAFAF7' : '#0A0A0A',
      ],
      transition: { duration: 0.34, times: [0, 0.35, 1], ease: [0.2, 0.7, 0.2, 1] },
    });
    onPress?.();
    if (href) {
      if (href.startsWith('#')) {
        const el = document.querySelector(href);
        el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.location.href = href;
      }
    }
  }, [controls, href, innerPressBg, onPress, tone]);

  return (
    <button
      type="button"
      onClick={runPress}
      onMouseEnter={settle}
      onFocus={settle}
      aria-label={label}
      className="group inline-flex flex-col items-center gap-5 focus-visible:outline-none"
    >
      <span
        className={`relative grid place-items-center rounded-full border-2 ${ringBorder} ${outerSize} bg-bone/5 backdrop-blur-sm transition-all duration-200 ease-quart group-hover:scale-[1.03] group-active:scale-[0.97] group-focus-visible:ring-2 group-focus-visible:ring-cobalt group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-transparent`}
      >
        {/* Standby breathing glow — soft cobalt halo, like a ready LED */}
        {showPulse && (
          <motion.span
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 rounded-full"
            initial={{ boxShadow: '0 0 0 0 rgba(44,95,255,0)' }}
            animate={{
              boxShadow: [
                '0 0 0 0 rgba(44,95,255,0)',
                '0 0 28px 4px rgba(44,95,255,0.40)',
                '0 0 0 0 rgba(44,95,255,0)',
              ],
            }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        )}

        {/* Sonar ping rings — staggered, ripple outward */}
        {showPulse && (
          <>
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-cobalt-light"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: [0.2, 0.7, 0.2, 1] }}
            />
            <motion.span
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 rounded-full border border-cobalt-light"
              initial={{ scale: 1, opacity: 0 }}
              animate={{ scale: [1, 1.5], opacity: [0.6, 0] }}
              transition={{
                duration: 2.4,
                repeat: Infinity,
                ease: [0.2, 0.7, 0.2, 1],
                delay: 1.2,
              }}
            />
          </>
        )}

        <motion.span
          animate={controls}
          initial={false}
          className={`relative block h-[78%] w-[78%] rounded-full ${innerBg} shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_18px_-6px_rgba(0,0,0,0.45)]`}
        />
      </span>
      <span
        className={`font-mono text-mono-label uppercase ${labelColor} transition-colors duration-200 ease-quart group-hover:text-bone`}
      >
        {label}
      </span>
    </button>
  );
}
