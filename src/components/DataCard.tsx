import React from 'react';
import {interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const DataCard: React.FC<{start: number; x: number; value: number; label: string; tone?: 'gold' | 'red' | 'cyan'}> = ({start, x, value, label, tone = 'gold'}) => {
  const frame = useCurrentFrame() - start;
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 12, stiffness: 140}});
  const n = Math.round(interpolate(frame, [0, 26], [0, value], {extrapolateRight: 'clamp'}));
  const border = tone === 'red' ? '#C1121F' : tone === 'cyan' ? '#38BDF8' : '#F2B705';

  return (
    <div style={{position: 'absolute', left: x, top: 320, width: 560, height: 390, border: `4px solid ${border}`, background: 'linear-gradient(165deg, rgba(8,10,15,.95), rgba(11,28,45,.85))', borderRadius: 20, padding: 28, transform: `scale(${Math.max(0, s)})`}}>
      <div style={{fontSize: 148, fontWeight: 900, color: '#F8FAFC', lineHeight: 1}}>{n}</div>
      <div style={{fontSize: 44, color: '#cbd5e1', marginTop: 16, fontWeight: 700, textTransform: 'uppercase'}}>{label}</div>
    </div>
  );
};
