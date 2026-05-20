import React from 'react';

export const FooterDisclaimer: React.FC<{text?: string}> = ({text = 'Conteúdo informativo. Consulte fontes oficiais de saúde.'}) => (
  <div style={{position: 'absolute', bottom: 34, left: 70, right: 70, fontSize: 22, color: '#a5b4c5', textAlign: 'center', letterSpacing: 0.4}}>{text}</div>
);
