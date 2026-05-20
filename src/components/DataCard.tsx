import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

type Props = {label: string; value: number; suffix?: string; delay: number; tone?: 'gold' | 'red'};

export const DataCard: React.FC<Props> = ({label, value, suffix = '', delay, tone = 'gold'}) => {
  const frame = useCurrentFrame() - delay;
  const {fps} = useVideoConfig();
  const scale = spring({fps, frame, config: {damping: 12, stiffness: 110}});
  const shown = Math.round(interpolate(frame, [0, 25], [0, value], {extrapolateRight: 'clamp'}));

  return (
    <div
      style={{
        width: 420,
        padding: '24px 26px',
        borderRadius: 14,
        border: `1px solid ${tone === 'gold' ? '#c5923d' : '#7f1d1d'}`,
        background: tone === 'gold' ? 'rgba(30,22,11,0.85)' : 'rgba(37,12,12,0.86)',
        color: '#f8fafc',
        transform: `scale(${Math.max(0, scale)})`
      }}
    >
      <div style={{fontSize: 54, fontWeight: 900}}>{shown}{suffix}</div>
      <div style={{fontSize: 25, color: '#cbd5e1'}}>{label}</div>
    </div>
  );
};
