import React from 'react';

const SvgComponent = props => (
  <svg width={84} height={37} fill="none" {...props}>
    <path stroke="#000" d="M.5.5h83v36H.5z" />
    <rect x={12.5} y={6.5} width={59} height={25.429} rx={3.5} fill="#fff" stroke="#212121" />
    <rect x={20.571} y={12.429} width={20} height={2.857} rx={1.429} fill="#3926A5" />
    <rect x={20.571} y={18.143} width={42.857} height={2.857} rx={1.429} fill="#3926A5" />
    <rect x={20.571} y={23.857} width={42.857} height={2.857} rx={1.429} fill="#3926A5" />
  </svg>
);

export default SvgComponent;
