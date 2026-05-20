import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

type Props = {title: string; subtitle?: string; start: number};

export const TitleBlock: React.FC<Props> = ({title, subtitle, start}) => {
  const frame = useCurrentFrame() - start;
  const y = interpolate(frame, [0, 20], [30, 0], {extrapolateRight: 'clamp'});
  const opacity = interpolate(frame, [0, 15], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <div style={{position: 'absolute', left: 130, top: 150, color: '#f5f7fb', opacity, transform: `translateY(${y}px)`}}>
      <div style={{fontSize: 76, fontWeight: 900, letterSpacing: 2, lineHeight: 1.05, textTransform: 'uppercase'}}>{title}</div>
      {subtitle && <div style={{marginTop: 18, fontSize: 34, color: '#c8d4df', maxWidth: 1180}}>{subtitle}</div>}
    </div>
  );
};
