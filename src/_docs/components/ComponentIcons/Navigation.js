import React from 'react';

const SvgComponent = props => (
  <svg width={106} height={10} fill="none" {...props}>
    <path d="M68 0H38v5h30V0z" fill="#fff" />
    <path d="M68 8H38v2h30V8z" fill="#444bc9" />
    <path d="M106 0H76v5h30V0z" fill="#fff" />
    <path d="M106 8H76v2h30V8z" fill="#444bc9" />
    <path d="M30 0H0v5h30V0z" fill="#fff" />
    <path d="M30 8H0v2h30V8z" fill="#444bc9" />
  </svg>
);

export default SvgComponent;
