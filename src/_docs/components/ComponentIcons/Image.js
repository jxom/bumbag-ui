import React from 'react';

const SvgComponent = props => (
  <svg width={58} height={50} fill="none" {...props}>
    <path d="M57.143.389H0v48.897h57.143V.389z" fill="#444bc9" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.741 26.39l5.915 6.257 9.37-12.551 13.117 21.428H9.286L18.74 26.39z"
      fill="#fff"
    />
    <path d="M18.357 20a5.357 5.357 0 1 0 0-10.714 5.357 5.357 0 0 0 0 10.714z" fill="#fff" />
  </svg>
);

export default SvgComponent;
