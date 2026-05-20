import React from 'react';
import {AbsoluteFill, interpolate, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {AbstractAfricaMap} from './components/AbstractAfricaMap';
import {DataCard} from './components/DataCard';
import {FooterDisclaimer} from './components/FooterDisclaimer';
import {Particles} from './components/Particles';
import {Scene} from './components/Scene';
import {Stamp} from './components/Stamp';
import {Timeline} from './components/Timeline';
import {TitleBlock} from './components/TitleBlock';
import {SceneIllustration} from './components/SceneIllustration';

const helpers = {
  fadeIn: (f: number, d = 12) => interpolate(f, [0, d], [0, 1], {extrapolateRight: 'clamp'}),
  slideUp: (f: number, from = 44, d = 18) => interpolate(f, [0, d], [from, 0], {extrapolateRight: 'clamp'}),
  scaleIn: (f: number, fps: number) => spring({frame: f, fps, config: {damping: 12, stiffness: 130}}),
  pulse: (f: number, base = 1, amp = 0.08) => base + Math.sin(f / 4) * amp
};

export const Video: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, Montserrat, Arial, sans-serif', backgroundColor: '#080A0F'}}>
      <Particles />

      <Scene start={0} end={90} tone="red">
        <TitleBlock start={0} lines={['EBOLA', 'BUNDIBUGYO']} subtitle="Alerta global e vigilância reforçada em 2026" />
        <div style={{position:'absolute',left:90,right:90,top:470,height:10,background:'#C1121F',boxShadow:'0 0 30px #C1121F',transform:`scaleX(${helpers.pulse(frame,1,0.2)})`,transformOrigin:'left'}}/>
        <Stamp start={10} text="ALERTA" color="#C1121F" x={1400} y={160} />
        <SceneIllustration scene={1} start={0} />
      </Scene>

      <Scene start={90} end={180} tone="gold">
        <TitleBlock start={90} lines={['17 MAI 2026']} subtitle="OMS declara Emergência de Saúde Pública de Importância Internacional" />
        <Timeline start={95} labelLeft="PHEIC / ESPII" labelRight="Resposta internacional coordenada" />
        <Stamp start={104} text="OMS" color="#F2B705" x={1470} y={120}/>
        <SceneIllustration scene={2} start={90} />
      </Scene>

      <Scene start={180} end={300} tone="cyan">
        <TitleBlock start={180} lines={['ITURI, RDC']} subtitle="Epicentro inicial e casos em Kampala ligados a viagens" />
        <AbstractAfricaMap start={184} />
        <SceneIllustration scene={3} start={180} />
      </Scene>

      <Scene start={300} end={420} tone="gold">
        <TitleBlock start={300} lines={['NÚMEROS-CHAVE']} subtitle="Dados OMS em 16 de maio de 2026" />
        <DataCard start={314} x={80} value={8} label="confirmados em laboratório" tone="cyan" />
        <DataCard start={324} x={680} value={246} label="casos suspeitos" tone="gold" />
        <DataCard start={334} x={1280} value={80} label="mortes suspeitas" tone="red" />
        <SceneIllustration scene={4} start={300} />
      </Scene>

      <Scene start={420} end={540} tone="red">
        <TitleBlock start={420} lines={['POR QUE CHAMOU', 'ATENÇÃO GLOBAL?']} subtitle="Cepa rara + resposta precisa ser rápida" />
        <SceneIllustration scene={5} start={420} />
        {['Cepa Bundibugyo é rara.', 'Sem vacina licenciada específica aprovada.', 'Sem terapêutica específica aprovada para Bundibugyo.'].map((t, i) => {
          const local = frame - 438 - i * 12;
          return <div key={t} style={{position:'absolute',left:110,top:360+i*155,width:1700,padding:'24px 28px',fontSize:46,fontWeight:700,color:'#F8FAFC',background:'linear-gradient(90deg, rgba(193,18,31,.35), rgba(11,28,45,.75))',border:'2px solid #C1121F',opacity:helpers.fadeIn(local),transform:`translateY(${helpers.slideUp(local)}px)`}}>• {t}</div>;
        })}
      </Scene>

      <Scene start={540} end={660} tone="blue">
        <TitleBlock start={540} lines={['COMO TRANSMITE?']} subtitle="Contato direto com fluidos e materiais contaminados" />
        <SceneIllustration scene={6} start={540} />
        <svg viewBox="0 0 1600 560" style={{position:'absolute',left:150,top:360,width:1620}}>
          {[{x:160,y:220,t:'Sangue e secreções'},{x:620,y:120,t:'Órgãos e fluidos'},{x:1080,y:220,t:'Materiais contaminados'},{x:1420,y:120,t:'Pessoa infectada'}].map((n, i) => {
            const local = frame - 558 - i * 10;
            const s = helpers.scaleIn(local, fps);
            return <g key={n.t} transform={`translate(${n.x},${n.y}) scale(${s})`}><circle r="66" fill="rgba(8,10,15,.95)" stroke="#38BDF8" strokeWidth="5"/><text y="110" x="-100" fill="#F8FAFC" fontSize="40" fontWeight="700">{n.t}</text></g>;
          })}
          <line x1="160" y1="220" x2="620" y2="120" stroke="#94A3B8" strokeWidth="6"/>
          <line x1="620" y1="120" x2="1080" y2="220" stroke="#94A3B8" strokeWidth="6"/>
          <line x1="1080" y1="220" x2="1420" y2="120" stroke="#94A3B8" strokeWidth="6"/>
        </svg>
      </Scene>

      <Scene start={660} end={810} tone="gold">
        <TitleBlock start={660} lines={['ALERTA NÃO É PÂNICO']} subtitle="É coordenação, vigilância e informação confiável" />
        <div style={{position:'absolute',left:120,top:410,width:1680,height:300,border:'3px solid #F2B705',background:'linear-gradient(90deg, rgba(242,183,5,.12), rgba(56,189,248,.12))',display:'grid',gridTemplateColumns:'1fr 1fr 1fr',gap:18,padding:20}}>
          {['Coordenação internacional','Monitoramento contínuo','Comunicação clara'].map((b,i)=><div key={b} style={{display:'flex',alignItems:'center',justifyContent:'center',fontSize:48,fontWeight:800,color:'#F8FAFC',border:'2px solid #94A3B8',transform:`scale(${helpers.pulse(frame+i*7,1,0.03)})`}}>{b}</div>)}
        </div>
        <SceneIllustration scene={7} start={660} />
        <Stamp start={688} text="CONTEXTO" color="#38BDF8" x={1360} y={118} />
      </Scene>

      <Scene start={810} end={900} tone="cyan">
        <TitleBlock start={810} lines={['DESCONFIE DO CAOS', 'CONFIRA FONTES OFICIAIS']} subtitle="Informação confiável protege mais do que boatos." />
        <SceneIllustration scene={8} start={810} />
        <Stamp start={820} text="VERIFICADO" color="#F2B705" x={1320} y={140} />
        <FooterDisclaimer text="Conteúdo informativo. Consulte OMS, CDC e autoridades locais." />
        <AbsoluteFill style={{backgroundColor:'#080A0F',opacity:interpolate(frame,[870,900],[0,1],{extrapolateLeft:'clamp'})}} />
      </Scene>
    </AbsoluteFill>
  );
};
