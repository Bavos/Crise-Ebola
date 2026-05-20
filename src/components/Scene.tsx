import {AbsoluteFill, useCurrentFrame} from 'remotion';
import {fadeIn, fadeOut} from '../utils/motion';
export const Scene = ({start,end,children}:{start:number;end:number;children:React.ReactNode}) => {const f=useCurrentFrame(); if(f<start||f>=end) return null; const local=f-start; return <AbsoluteFill style={{opacity:fadeIn(local,10)*fadeOut(f,end-12,end)}}>{children}</AbsoluteFill>;};
