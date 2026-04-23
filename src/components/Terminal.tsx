import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  tone?: 'dark' | 'warm';
  className?: string;
};

export function Terminal({ children, tone = 'dark', className = '' }: Props) {
  const bg = tone === 'warm' ? 'bg-terminal-warm' : 'bg-terminal-bg';
  return (
    <pre
      dir="ltr"
      className={`force-ltr whitespace-pre-wrap break-words rounded-lg ${bg} p-4 font-mono text-mono-body text-terminal-fg md:p-5 ${className}`}
    >
      {children}
    </pre>
  );
}
