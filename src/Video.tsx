import React from 'react';
import {AbsoluteFill, interpolate, Sequence, spring, useCurrentFrame, useVideoConfig} from 'remotion';
import {Scene} from './components/Scene';
import {TitleBlock} from './components/TitleBlock';
import {Timeline} from './components/Timeline';
import {AbstractAfricaMap} from './components/AbstractAfricaMap';
import {DataCard} from './components/DataCard';
import {Particles} from './components/Particles';
import {Stamp} from './components/Stamp';
import {FooterDisclaimer} from './components/FooterDisclaimer';

const fx = {
  fadeIn: (f: number, d = 14) => interpolate(f, [0, d], [0, 1], {extrapolateRight: 'clamp'}),
  slideUp: (f: number, y = 30, d = 18) => interpolate(f, [0, d], [y, 0], {extrapolateRight: 'clamp'}),
  scaleIn: (f: number, fps: number) => spring({frame: f, fps, config: {damping: 14, stiffness: 120}}),
  pulse: (f: number, base = 1, amp = 0.04) => base + Math.sin(f / 5) * amp
};

export const Video: React.FC = () => {
  const frame = useCurrentFrame();
  const {fps} = useVideoConfig();

  return (
    <AbsoluteFill style={{fontFamily: 'Inter, Montserrat, Arial, sans-serif', backgroundColor: '#0b0f14'}}>
      <Particles />

      <Scene start={0} end={120} tone="red">
        <TitleBlock title="EBOLA BUNDIBUGYO" subtitle="O alerta que reacendeu a vigilância global" start={0} />
        <div style={{position: 'absolute', left: 130, right: 130, top: 420, height: 4, background: '#7f1d1d', transform: `scaleX(${fx.pulse(frame, 1, 0.12)})`, transformOrigin: 'left', boxShadow: '0 0 20px #7f1d1d'}} />
        <FooterDisclaimer />
      </Scene>

      <Scene start={120} end={240} tone="gold">
        <TitleBlock title="17 MAI 2026" subtitle="OMS declara emergência internacional" start={120} />
        <Timeline start={120} />
        <Stamp text="ESPII / PHEIC" start={128} />
      </Scene>

      <Scene start={240} end={390} tone="neutral">
        <TitleBlock title="Epicentro inicial: Ituri, RDC" subtitle="Casos também ligados a Uganda" start={240} />
        <AbstractAfricaMap start={240} />
      </Scene>

      <Scene start={390} end={540} tone="gold">
        <div style={{position: 'absolute', top: 170, left: 130, color: '#f8fafc', fontSize: 58, fontWeight: 800}}>Atualização de campo</div>
        <div style={{position: 'absolute', top: 290, left: 130, display: 'flex', gap: 28}}>
          <DataCard label="confirmados" value={8} delay={395} />
          <DataCard label="suspeitos" value={246} delay={402} />
          <DataCard label="mortes suspeitas" value={80} delay={409} tone="red" />
        </div>
        <div style={{position: 'absolute', left: 136, top: 650, color: '#9fb1c5', fontSize: 24}}>Dados OMS — 16 mai 2026</div>
      </Scene>

      <Scene start={540} end={690} tone="red">
        <TitleBlock title="Por que preocupa?" start={540} />
        {['Cepa rara', 'Diagnóstico e resposta precisam ser rápidos', 'Sem vacina licenciada específica'].map((b, i) => {
          const local = frame - 560 - i * 18;
          return (
            <div key={b} style={{position: 'absolute', left: 170, top: 330 + i * 110, opacity: fx.fadeIn(local), transform: `translateY(${fx.slideUp(local)}px)`, background: 'rgba(55,15,15,0.85)', border: '1px solid #7f1d1d', padding: '24px 30px', width: 980, color: '#f3f4f6', fontSize: 36}}>
              • {b}
            </div>
          );
        })}
        <Stamp text="ALERTA" start={560} color="#b45309" />
      </Scene>

      <Scene start={690} end={840} tone="neutral">
        <TitleBlock title="Como transmite?" start={690} />
        <svg viewBox="0 0 1000 600" style={{position: 'absolute', left: 440, top: 260, width: 980}}>
          {[{x: 120, y: 200, t: 'Contato direto com fluidos'}, {x: 420, y: 100, t: 'Pessoa sintomática'}, {x: 760, y: 240, t: 'Animais infectados'}].map((n, i) => {
            const local = frame - 710 - i * 12;
            const s = fx.scaleIn(local, fps);
            return <g key={n.t} transform={`translate(${n.x},${n.y}) scale(${s})`}><circle r="46" fill="rgba(30,41,59,0.88)" stroke="#c5923d" strokeWidth="4"/><text y="90" fill="#f8fafc" fontSize="28">{n.t}</text></g>;
          })}
          <line x1="120" y1="200" x2="420" y2="100" stroke="#94a3b8" strokeWidth="4" />
          <line x1="420" y1="100" x2="760" y2="240" stroke="#94a3b8" strokeWidth="4" />
        </svg>
      </Scene>

      <Scene start={840} end={1020} tone="gold">
        <TitleBlock title="Alerta não é pânico." subtitle="É coordenação, vigilância e informação." start={840} />
        <div style={{position: 'absolute', left: 200, right: 200, top: 470, display: 'flex', justifyContent: 'space-between'}}>
          {new Array(6).fill(null).map((_, i) => (
            <div key={i} style={{width: 160, height: 160, borderRadius: '50%', border: '2px solid #c5923d', opacity: 0.4 + i * 0.1, transform: `scale(${fx.pulse(frame + i * 6, 1, 0.03)})`}} />
          ))}
        </div>
      </Scene>

      <Scene start={1020} end={1200} tone="neutral">
        <TitleBlock title="DESCONFIE DO CAOS." subtitle="CONFIRA FONTES OFICIAIS." start={1020} />
        <Stamp text="VERIFICADO" start={1036} color="#d1a145" />
        <FooterDisclaimer text="Conteúdo informativo. Consulte OMS, CDC e autoridades locais." />
      </Scene>

      <Sequence from={1140}>
        <AbsoluteFill style={{backgroundColor: '#000', opacity: interpolate(frame, [1140, 1200], [0, 1], {extrapolateLeft: 'clamp'})}} />
      </Sequence>
    </AbsoluteFill>
  );
};
