import React from 'react';
import {interpolate, useCurrentFrame} from 'remotion';

export const Timeline: React.FC<{start: number; labelLeft: string; labelRight: string}> = ({start, labelLeft, labelRight}) => {
  const frame = useCurrentFrame() - start;
  const w = interpolate(frame, [0, 35], [0, 1450], {extrapolateRight: 'clamp'});
  return <div style={{position:'absolute',left:180,bottom:190,width:1450}}><div style={{fontSize:40,color:'#94A3B8',marginBottom:14,fontWeight:700}}>{labelLeft}</div><div style={{height:14,background:'rgba(148,163,184,.2)',borderRadius:999}}><div style={{height:14,width:w,borderRadius:999,background:'linear-gradient(90deg,#C1121F,#F2B705,#38BDF8)'}}/></div><div style={{fontSize:40,color:'#F8FAFC',marginTop:14,fontWeight:700,textAlign:'right'}}>{labelRight}</div></div>;
};
