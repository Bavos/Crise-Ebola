import {AbsoluteFill, staticFile} from 'remotion';
import {Scene} from './components/Scene';
import {ImagePanel} from './components/ImagePanel';
import {TitleBlock} from './components/TitleBlock';
import {Stamp} from './components/Stamp';
import {Timeline} from './components/Timeline';
import {DataCard} from './components/DataCard';
import {BigStatCounter} from './components/BigStatCounter';
import {FooterDisclaimer} from './components/FooterDisclaimer';
import {GlitchText} from './components/GlitchText';
import {SourceTag} from './components/SourceTag';
import {SceneOverlay} from './components/SceneOverlay';
import {RadarOverlay} from './components/RadarOverlay';
import {NetworkOverlay} from './components/NetworkOverlay';

export const Video = () => (
  <AbsoluteFill style={{backgroundColor:'#05070C',fontFamily:'Inter, Arial, sans-serif'}}>
    <Scene start={0} end={90}><ImagePanel src={staticFile('images/I1.png')} start={0} end={90}/><SceneOverlay/><RadarOverlay/><TitleBlock title={['EBOLA','BUNDIBUGYO']} subtitle='O alerta que voltou ao radar global'/><Stamp text='2026'/></Scene>
    <Scene start={90} end={210}><ImagePanel src={staticFile('images/I2.png')} start={90} end={210} panX={-28}/><SceneOverlay/><Timeline/><TitleBlock title='17 MAI 2026' subtitle='OMS declara emergência internacional'/><Stamp text='ALERTA GLOBAL'/></Scene>
    <Scene start={210} end={360}><ImagePanel src={staticFile('images/I3.png')} start={210} end={360} panX={24}/><SceneOverlay/><NetworkOverlay/><TitleBlock title='Epicentro: ITURI, RDC' subtitle='Casos ligados a Uganda'/></Scene>
    <Scene start={360} end={540}><ImagePanel src={staticFile('images/IR.png')} start={360} end={540}/><SceneOverlay/><div style={{position:'absolute',left:70,right:70,top:150,display:'flex',gap:20}}><DataCard label='confirmados'><BigStatCounter to={8} start={372}/></DataCard><DataCard label='suspeitos'><BigStatCounter to={246} start={384}/></DataCard><DataCard label='mortes suspeitas'><BigStatCounter to={80} start={396}/></DataCard></div><FooterDisclaimer text='Dados OMS — 16 mai 2026'/></Scene>
    <Scene start={540} end={690}><ImagePanel src={staticFile('images/I5.png')} start={540} end={690} panX={-16}/><SceneOverlay/><div style={{position:'absolute',left:90,top:90}}><GlitchText text='POR QUE PREOCUPA?'/></div><div style={{position:'absolute',left:90,top:330,fontSize:56,color:'#F8FAFC',fontWeight:700}}>Cepa rara<br/>Sem vacina específica licenciada<br/>Resposta precisa ser rápida</div></Scene>
    <Scene start={690} end={810}><ImagePanel src={staticFile('images/I6.png')} start={690} end={810}/><SceneOverlay/><NetworkOverlay/><TitleBlock title='TRANSMISSÃO' subtitle='Contato direto com fluidos · Pessoa sintomática'/></Scene>
    <Scene start={810} end={900}><ImagePanel src={staticFile('images/I7.png')} start={810} end={900}/><SceneOverlay/><TitleBlock title={['ALERTA NÃO É PÂNICO.','É INFORMAÇÃO.']}/><Stamp text='VERIFICADO'/><FooterDisclaimer text='Consulte OMS, CDC e autoridades locais.'/><SourceTag text='Resposta coordenada e vigilância.'/></Scene>
  </AbsoluteFill>
);
