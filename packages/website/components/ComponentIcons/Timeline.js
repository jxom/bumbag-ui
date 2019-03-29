import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={60} viewBox="0 0 120 60" fill="none">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H116C118.209 0 120 1.79086 120 4V56C120 58.2091 118.209 60 116 60H4C1.79086 60 0 58.2091 0 56V4Z"
      fill="#fff"
    />
    <rect x="30" y="6" width="28" height="3.65" fill="#E7E5F4" />
    <rect x="30" y="14" width="60" height="3.65" fill="#E7E5F4" />
    <rect x="30" y="25" width="28" height="3.65" fill="#E7E5F4" />
    <rect x="30" y="33" width="60" height="3.65" fill="#E7E5F4" />
    <rect x="30" y="44" width="28" height="3.65" fill="#E7E5F4" />
    <rect x="30" y="52" width="60" height="3.65" fill="#E7E5F4" />
    <line x1="20.5" y1="12" x2="20.5" y2="30" stroke="#3926A5" />
    <line x1="20.5" y1="32" x2="20.5" y2="50" stroke="#E7E5F4" />
    <circle cx="20.5" cy="11.5" r="2.5" fill="#3926A5" />
    <circle cx="20.5" cy="30.5" r="2.5" fill="#3926A5" />
    <circle cx="20.5" cy="49.5" r="2.5" fill="#E7E5F4" />
  </svg>
);

export default SvgComponent;
