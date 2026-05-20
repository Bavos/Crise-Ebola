import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Timeline: React.FC<{start: number}> = ({start}) => {
  const frame = useCurrentFrame() - start;
  const width = interpolate(frame, [0, 30], [0, 1200], {extrapolateRight: 'clamp'});
  return (
    <div style={{position: 'absolute', left: 150, bottom: 180, width: 1200, height: 10, borderRadius: 99, background: 'rgba(148,163,184,0.15)'}}>
      <div style={{width, height: 10, borderRadius: 99, background: 'linear-gradient(90deg,#7f1d1d,#c5923d)'}} />
    </div>
  );
};
