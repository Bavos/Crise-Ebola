import React from 'react';

export const FooterDisclaimer: React.FC<{text?: string}> = ({text = 'Conteúdo informativo. Consulte fontes oficiais de saúde.'}) => (
  <div style={{position:'absolute',left:50,right:50,bottom:26,fontSize:26,color:'#c0cedc',textAlign:'center',fontWeight:600}}>{text}</div>
);
