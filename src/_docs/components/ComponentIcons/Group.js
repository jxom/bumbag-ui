import React from 'react';

const SvgComponent = props => (
  <svg width={139} height={30} fill="none" {...props}>
    <path d="M4 .5h65.5v29H4A3.5 3.5 0 0 1 .5 26V4A3.5 3.5 0 0 1 4 .5z" fill="#444bc9" stroke="#000" />
    <path d="M134.5 29.5H69V.5h65.5A3.5 3.5 0 0 1 138 4v22a3.5 3.5 0 0 1-3.5 3.5z" stroke="#000" />
    <path d="M132.539 13H77.5v4.265h55.039V13z" fill="#444bc9" />
    <path d="M61.539 13H6.5v4.265h55.039V13z" fill="#fff" />
  </svg>
);

export default SvgComponent;
