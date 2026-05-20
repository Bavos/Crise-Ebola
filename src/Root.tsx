import {Composition, registerRoot} from 'remotion';
import {Video} from './Video';

const Root = () => (
  <Composition id="Main" component={Video} durationInFrames={900} fps={30} width={1920} height={1080} />
);

registerRoot(Root);
