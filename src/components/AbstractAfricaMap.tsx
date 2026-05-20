import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const AbstractAfricaMap: React.FC<{start: number}> = ({start}) => {
  const frame = useCurrentFrame() - start;
  const pulse = 1 + Math.sin(frame / 4) * 0.08;
  const pathOpacity = interpolate(frame, [0, 20], [0, 1], {extrapolateRight: 'clamp'});

  return (
    <svg viewBox="0 0 900 700" style={{position: 'absolute', right: 90, top: 130, width: 780, opacity: pathOpacity}}>
      <path d="M318 90L390 120L480 118L548 166L590 242L626 320L580 420L542 512L460 560L380 610L300 592L236 520L180 430L176 358L212 276L260 224L282 154Z" fill="rgba(24,33,44,0.85)" stroke="#94a3b8" strokeWidth="4"/>
      <circle cx="500" cy="300" r={18 * pulse} fill="rgba(127,29,29,0.35)" stroke="#ef4444" strokeWidth="3"/>
      <circle cx="500" cy="300" r="6" fill="#f8fafc"/>
      <circle cx="590" cy="282" r="7" fill="#cbd5e1"/>
      <line x1="500" y1="300" x2="590" y2="282" stroke="#c5923d" strokeWidth="3" strokeDasharray="10 8"/>
      <text x="510" y="282" fill="#f8fafc" fontSize="22">Ituri</text>
      <text x="606" y="270" fill="#f8fafc" fontSize="20">Uganda</text>
    </svg>
  );
};
