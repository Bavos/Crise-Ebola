import React from 'react';
import {spring, useCurrentFrame, useVideoConfig} from 'remotion';

export const Stamp: React.FC<{start: number; text: string; color?: string; x?: number; y?: number}> = ({start, text, color = '#F2B705', x = 1260, y = 120}) => {
  const frame = useCurrentFrame() - start;
  const {fps} = useVideoConfig();
  const s = spring({frame, fps, config: {damping: 10, stiffness: 200}});
  return <div style={{position:'absolute',left:x,top:y,padding:'18px 28px',border:`5px solid ${color}`,color,fontSize:54,fontWeight:900,letterSpacing:2,transform:`rotate(-8deg) scale(${s})`,background:'rgba(8,10,15,.45)'}}>{text}</div>;
};
