import {useCurrentFrame} from 'remotion';
import {interpolate} from 'remotion';
export const BigStatCounter=({to,start}:{to:number;start:number})=>{const f=useCurrentFrame();const v=Math.round(interpolate(f,[start,start+25],[0,to],{extrapolateLeft:'clamp',extrapolateRight:'clamp'}));return <div style={{fontSize:170,fontWeight:900,color:'#E11D2E',lineHeight:1}}>{v}</div>};
