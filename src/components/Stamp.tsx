import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Stamp: React.FC<{text: string; start: number; color?: string}> = ({text, start, color = '#c5923d'}) => {
  const frame = useCurrentFrame() - start;
  const {fps} = useVideoConfig();
  const s = spring({fps, frame, config: {damping: 9, stiffness: 160}});
  return (
    <div style={{position: 'absolute', right: 180, top: 120, border: `4px solid ${color}`, color, padding: '18px 26px', fontWeight: 900, fontSize: 38, letterSpacing: 2, transform: `rotate(-8deg) scale(${s})`, opacity: s}}>
      {text}
    </div>
  );
};
