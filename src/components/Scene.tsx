import React from 'react';
import {AbsoluteFill, interpolate, useCurrentFrame} from 'remotion';

type SceneProps = {
  start: number;
  end: number;
  tone?: 'red' | 'gold' | 'cyan' | 'blue';
  children: React.ReactNode;
};

const tones = {
  red: 'radial-gradient(circle at 15% 20%, rgba(193,18,31,.35), transparent 45%), radial-gradient(circle at 80% 75%, rgba(102,7,8,.3), transparent 40%)',
  gold: 'radial-gradient(circle at 20% 20%, rgba(242,183,5,.28), transparent 50%), radial-gradient(circle at 80% 70%, rgba(56,189,248,.18), transparent 45%)',
  cyan: 'radial-gradient(circle at 50% 20%, rgba(56,189,248,.28), transparent 52%), radial-gradient(circle at 85% 80%, rgba(148,163,184,.16), transparent 45%)',
  blue: 'radial-gradient(circle at 10% 80%, rgba(11,28,45,.7), transparent 50%), radial-gradient(circle at 85% 15%, rgba(56,189,248,.13), transparent 45%)'
};

export const Scene: React.FC<SceneProps> = ({start, end, tone = 'blue', children}) => {
  const frame = useCurrentFrame();
  if (frame < start || frame >= end) return null;
  const local = frame - start;
  const len = end - start;
  const fadeIn = interpolate(local, [0, 12], [0, 1], {extrapolateRight: 'clamp'});
  const fadeOut = interpolate(local, [len - 12, len], [1, 0], {extrapolateLeft: 'clamp'});
  const zoom = interpolate(local, [0, len], [1.06, 1], {extrapolateRight: 'clamp'});

  return (
    <AbsoluteFill
      style={{
        opacity: Math.min(fadeIn, fadeOut),
        transform: `scale(${zoom})`,
        background:
          `${tones[tone]}, repeating-linear-gradient(135deg, rgba(148,163,184,.08) 0 3px, transparent 3px 16px), linear-gradient(150deg,#080A0F 0%,#0B1C2D 58%,#080A0F 100%)`
      }}
    >
      <AbsoluteFill style={{background: 'linear-gradient(105deg, transparent 0 15%, rgba(248,250,252,.05) 15% 20%, transparent 20% 100%)'}} />
      {children}
    </AbsoluteFill>
  );
};
