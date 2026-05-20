import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const AbstractAfricaMap: React.FC<{start: number}> = ({start}) => {
  const f = useCurrentFrame() - start;
  const o = interpolate(f, [0, 14], [0, 1], {extrapolateRight: 'clamp'});
  const p = 1 + Math.sin(f / 5) * 0.1;
  return (
    <svg viewBox="0 0 1200 760" style={{position: 'absolute', left: 640, top: 150, width: 1220, opacity: o}}>
      <path d="M346 84L468 98L604 162L720 226L784 346L760 458L708 604L590 678L446 640L324 560L240 430L214 312L258 210Z" fill="rgba(11,28,45,.92)" stroke="#94A3B8" strokeWidth="7"/>
      <circle cx="628" cy="286" r={22 * p} fill="rgba(193,18,31,.25)" stroke="#C1121F" strokeWidth="6" />
      <circle cx="628" cy="286" r="8" fill="#F8FAFC"/>
      <circle cx="744" cy="262" r="8" fill="#38BDF8"/>
      <line x1="628" y1="286" x2="744" y2="262" stroke="#F2B705" strokeWidth="6" strokeDasharray="14 10"/>
      <text x="646" y="260" fill="#F8FAFC" fontSize="34" fontWeight="700">Ituri, RDC</text>
      <text x="760" y="246" fill="#F8FAFC" fontSize="30" fontWeight="700">Kampala, Uganda</text>
    </svg>
  );
};
