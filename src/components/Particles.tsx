import React from 'react';
import {useCurrentFrame} from 'remotion';

export const Particles: React.FC = () => {
  const frame = useCurrentFrame();
  const points = new Array(28).fill(null).map((_, i) => {
    const x = (i * 67) % 1920;
    const y = ((i * 131 + frame * (0.6 + (i % 3) * 0.2)) % 1080);
    const o = 0.08 + (i % 5) * 0.03;
    return <div key={i} style={{position: 'absolute', left: x, top: y, width: 3, height: 3, borderRadius: '50%', background: '#f8fafc', opacity: o}} />;
  });
  return <>{points}</>;
};
