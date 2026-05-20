import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type SceneProps = {
  start: number;
  end: number;
  children: React.ReactNode;
  tone?: 'red' | 'gold' | 'neutral';
};

export const Scene: React.FC<SceneProps> = ({start, end, children, tone = 'neutral'}) => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();
  const local = frame - start;
  const duration = end - start;

  if (frame < start || frame >= end) return null;

  const zoom = interpolate(local, [0, duration], [1.04, 1], {extrapolateRight: 'clamp'});
  const fade = Math.min(
    interpolate(local, [0, 15], [0, 1], {extrapolateRight: 'clamp'}),
    interpolate(local, [duration - 15, duration], [1, 0], {extrapolateLeft: 'clamp'})
  );
  const grain = spring({fps, frame: local, config: {damping: 200}});

  const overlays: Record<SceneProps['tone'], string> = {
    red: 'radial-gradient(circle at 20% 30%, rgba(127,29,29,0.28), transparent 65%)',
    gold: 'radial-gradient(circle at 80% 20%, rgba(180,130,40,0.22), transparent 70%)',
    neutral: 'radial-gradient(circle at 50% 50%, rgba(148,163,184,0.08), transparent 70%)'
  };

  return (
    <AbsoluteFill
      style={{
        opacity: fade,
        transform: `scale(${zoom})`,
        background:
          `${overlays[tone]}, repeating-linear-gradient(45deg, rgba(255,255,255,0.03) 0 2px, transparent 2px 8px),` +
          'linear-gradient(160deg, #0b0f14 0%, #12161d 60%, #090c11 100%)'
      }}
    >
      <AbsoluteFill
        style={{
          opacity: 0.08 + grain * 0.07,
          mixBlendMode: 'screen',
          backgroundImage:
            'radial-gradient(circle at 25% 15%, rgba(255,255,255,0.7) 0 1px, transparent 1px), radial-gradient(circle at 75% 85%, rgba(255,255,255,0.55) 0 1px, transparent 1px)',
          backgroundSize: '6px 6px, 7px 7px'
        }}
      />
      {children}
    </AbsoluteFill>
  );
};
