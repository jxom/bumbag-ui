import React from 'react';

const SvgComponent = props => (
  <svg width={65} height={50} fill="none" {...props}>
    <path stroke="#000" strokeDasharray="2 2" d="M.5.5h64v49H.5z" />
    <path stroke="#000" d="M5.5 5.5h54v39h-54z" />
    <path fill="#444bc9" stroke="#000" d="M15.5 20.5h34v9h-34z" />
    <path stroke="#000" strokeDasharray="2 2" d="M10.5 10.5h44v29h-44z" />
  </svg>
);

export default SvgComponent;
