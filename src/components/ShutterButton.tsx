import { motion, useAnimationControls } from 'framer-motion';
import { useCallback } from 'react';
import { flash } from '@/hooks/useFlash';

type Props = {
  label: string;
  onPress?: () => void;
  href?: string;
  tone?: 'light' | 'dark';
  size?: 'md' | 'lg';
};

// Tactile shutter button — concentric rings with a pressable inner disc.
// On activation: brief press-scale, fires global flash, runs onPress/href scroll.
export function ShutterButton({
  label,
  onPress,
  href,
  tone = 'light',
  size = 'lg',
}: Props) {
  const controls = useAnimationControls();

  const outerSize = size === 'lg' ? 'h-28 w-28 md:h-36 md:w-36' : 'h-20 w-20';
  const ringBorder = tone === 'light' ? 'border-bone/60' : 'border-ink/70';
  const labelColor = tone === 'light' ? 'text-bone/80' : 'text-ink/75';
  const innerBg = tone === 'light' ? 'bg-bone' : 'bg-ink';
  const innerPressBg = tone === 'light' ? '#2C5FFF' : '#2C5FFF';

  const runPress = useCallback(async () => {
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
      aria-label={label}
      className="group inline-flex flex-col items-center gap-5 focus-visible:outline-none"
    >
      <span
        className={`relative grid place-items-center rounded-full border-2 ${ringBorder} ${outerSize} bg-bone/5 backdrop-blur-sm transition-all duration-200 ease-quart group-hover:scale-[1.03] group-active:scale-[0.97] group-focus-visible:ring-2 group-focus-visible:ring-cobalt group-focus-visible:ring-offset-4 group-focus-visible:ring-offset-transparent`}
      >
        <motion.span
          animate={controls}
          initial={false}
          className={`block h-[78%] w-[78%] rounded-full ${innerBg} shadow-[inset_0_1px_0_rgba(255,255,255,0.4),0_6px_18px_-6px_rgba(0,0,0,0.45)]`}
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
