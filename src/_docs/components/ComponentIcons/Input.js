import React from 'react';

const SvgComponent = props => (
  <svg width={100} height={28} fill="none" {...props}>
    <rect x={0.5} y={0.5} width={99} height={27} rx={3.5} stroke="#000" />
  </svg>
);

export default SvgComponent;
