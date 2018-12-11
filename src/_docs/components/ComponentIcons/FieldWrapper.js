import React from 'react';

const SvgComponent = props => (
  <svg width={100} height={61} fill="none" {...props}>
    <rect x={0.5} y={14.125} width={99} height={27} rx={3.5} stroke="#000" />
    <path d="M75.564 49.625H0v3.649h75.564v-3.649z" fill="#444bc9" />
    <path d="M37.782 57.288H0v3.649h37.782v-3.65z" fill="#444bc9" fillOpacity={0.12} />
    <path d="M50 0H0v5.417h50V0z" fill="#444bc9" />
  </svg>
);

export default SvgComponent;
