import React from 'react';
import {useCurrentFrame} from 'remotion';

export const Particles: React.FC = () => {
  const f = useCurrentFrame();
  return <>{Array.from({length: 70}).map((_, i) => <div key={i} style={{position:'absolute',left:(i*139)%1920,top:(i*97+f*(0.6+(i%4)*0.2))%1080,width:(i%3)+2,height:(i%3)+2,background:i%5===0?'#38BDF8':'#F8FAFC',opacity:0.08+(i%7)*0.03,borderRadius:99}} />)}</>;
};
