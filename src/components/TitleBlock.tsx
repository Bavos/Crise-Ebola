import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const TitleBlock: React.FC<{start: number; lines: string[]; subtitle?: string}> = ({start, lines, subtitle}) => {
  const frame = useCurrentFrame() - start;
  const opacity = interpolate(frame, [0, 10], [0, 1], {extrapolateRight: 'clamp'});
  const y = interpolate(frame, [0, 16], [40, 0], {extrapolateRight: 'clamp'});

  return (
    <div style={{position: 'absolute', left: 88, top: 92, opacity, transform: `translateY(${y}px)`, width: 1740}}>
      <div style={{position: 'absolute', inset: -40, background: 'radial-gradient(circle at 30% 40%, rgba(242,183,5,.25), transparent 55%)', filter: 'blur(8px)'}} />
      {lines.map((line) => (
        <div key={line} style={{fontSize: 128, lineHeight: 1, fontWeight: 900, letterSpacing: 2, color: '#F8FAFC', textTransform: 'uppercase'}}>{line}</div>
      ))}
      {subtitle ? <div style={{marginTop: 30, fontSize: 56, color: '#d8e3f0', fontWeight: 700, maxWidth: 1580}}>{subtitle}</div> : null}
    </div>
  );
};
