import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={60} fill="none" {...props}>
    <rect width="120" height="60" rx="4" fill="#fff" />
    <rect x="18.5" y="11.5" width="83" height="36" rx="3.5" fill="#fff" stroke="#212121" />
    <path d="M92 24H27V27.5484H92V24Z" fill="#3926A5" fillOpacity="0.12" />
    <path d="M59.5 31.4517H27V35H59.5V31.4517Z" fill="#3926A5" fillOpacity="0.12" />
  </svg>
);

export default SvgComponent;
