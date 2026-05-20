import {interpolate, spring} from 'remotion';

export const clamp = (v:number,min:number,max:number)=>Math.max(min,Math.min(max,v));
export const sceneProgress=(f:number,s:number,e:number)=>clamp((f-s)/(e-s),0,1);
export const fadeIn=(f:number,d=16)=>interpolate(f,[0,d],[0,1],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
export const fadeOut=(f:number,start:number,end:number)=>interpolate(f,[start,end],[1,0],{extrapolateLeft:'clamp',extrapolateRight:'clamp'});
export const slideUp=(f:number,y=80,d=18)=>interpolate(f,[0,d],[y,0],{extrapolateRight:'clamp'});
export const slideLeft=(f:number,x=120,d=18)=>interpolate(f,[0,d],[x,0],{extrapolateRight:'clamp'});
export const scaleIn=(f:number,fps:number)=>spring({frame:f,fps,config:{damping:18,stiffness:130,mass:0.8}});
export const pulse=(f:number,base=1,amp=0.06,speed=6)=>base+Math.sin(f/speed)*amp;
