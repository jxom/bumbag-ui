import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={40} fill="none" {...props}>
    <path fill="#fff" stroke="#000" d="M.5.5h119v39H.5z" />
    <path fill="#3926A5" d="M0 0h2v40H0z" />
    <path d="M110 12H10v5.417h100V12zM60 23.375H10v5.417h50v-5.417z" fill="#3926A5" fillOpacity={0.12} />
  </svg>
);

export default SvgComponent;
