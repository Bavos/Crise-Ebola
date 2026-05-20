import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const SceneIllustration: React.FC<{scene: number; start: number}> = ({scene, start}) => {
  const f = useCurrentFrame() - start;
  const o = interpolate(f, [0, 18], [0, 0.95], {extrapolateRight: 'clamp'});

  const common = {position: 'absolute' as const, right: 40, top: 120, width: 820, height: 820, opacity: o};

  if (scene === 1) {
    return <svg viewBox="0 0 820 820" style={common}><defs><radialGradient id="g1"><stop offset="0%" stopColor="#f59e0b" stopOpacity=".55"/><stop offset="100%" stopColor="#0b1c2d" stopOpacity="0"/></radialGradient></defs><rect width="820" height="820" fill="url(#g1)"/><path d="M110 620C220 420 380 300 590 220" stroke="#c1121f" strokeWidth="12" fill="none"/><circle cx="590" cy="220" r="70" fill="rgba(248,250,252,.16)"/><circle cx="590" cy="220" r="30" fill="#f8fafc"/></svg>;
  }

  if (scene === 2) {
    return <svg viewBox="0 0 820 820" style={common}><rect width="820" height="820" fill="rgba(11,28,45,.65)"/><g transform="translate(140 170)"><rect x="0" y="0" width="520" height="380" rx="24" fill="rgba(248,250,252,.06)" stroke="#f2b705" strokeWidth="6"/><text x="38" y="92" fill="#F8FAFC" fontSize="56" fontWeight="700">DECLARAÇÃO OMS</text><text x="38" y="176" fill="#94A3B8" fontSize="38">17 maio 2026</text><text x="38" y="256" fill="#38BDF8" fontSize="34">Emergência internacional</text><text x="38" y="320" fill="#F8FAFC" fontSize="30">Surto Bundibugyo</text></g></svg>;
  }

  if (scene === 3) {
    return <svg viewBox="0 0 820 820" style={common}><rect width="820" height="820" fill="rgba(8,10,15,.45)"/><path d="M220 130L320 150L430 210L520 270L560 360L540 460L500 590L410 640L300 610L210 540L150 430L132 330L170 250Z" fill="#0B1C2D" stroke="#94A3B8" strokeWidth="6"/><circle cx="445" cy="305" r="18" fill="#C1121F"/><circle cx="525" cy="286" r="10" fill="#38BDF8"/><line x1="445" y1="305" x2="525" y2="286" stroke="#F2B705" strokeWidth="5"/></svg>;
  }

  return <svg viewBox="0 0 820 820" style={common}><defs><linearGradient id="bg" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="rgba(11,28,45,.9)"/><stop offset="100%" stopColor="rgba(102,7,8,.6)"/></linearGradient></defs><rect width="820" height="820" fill="url(#bg)"/><g stroke="#94A3B8" strokeWidth="2" opacity=".5">{Array.from({length:10}).map((_,i)=><line key={i} x1={80} y1={100+i*60} x2={740} y2={120+i*55}/> )}</g><circle cx="650" cy="180" r="92" fill="rgba(242,183,5,.2)"/><rect x="90" y="520" width="640" height="180" rx="16" fill="rgba(8,10,15,.5)" stroke="#38BDF8" strokeWidth="4"/></svg>;
};
