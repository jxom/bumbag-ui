import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={60} fill="none" {...props}>
    <path fill="#4F4F4F" d="M0 0h120v60H0z" />
    <rect x={18.5} y={11.5} width={83} height={36} rx={3.5} fill="#fff" stroke="#212121" />
    <path d="M92 24H27v3.548h65V24zM59.5 31.452H27V35h32.5v-3.548z" fill="#3926A5" fillOpacity={0.12} />
  </svg>
);

export default SvgComponent;
