import React from 'react';

const SvgComponent = props => (
  <svg width={72} height={27} fill="none" {...props}>
    <path
      d="M68.813 1H3.186C1.98 1 1 2.357 1 4.03v18.94C1 24.643 1.98 26 3.188 26h65.624C70.022 26 71 24.643 71 22.97V4.03C71 2.357 70.02 1 68.812 1z"
      fill="#444bc9"
      stroke="#08175D"
    />
    <path d="M54 12H9v4h45v-4zM61 18l-3.464-3.75h6.928L61 18zM61 9l3.464 3.75h-6.928L61 9z" fill="#fff" />
  </svg>
);

export default SvgComponent;
