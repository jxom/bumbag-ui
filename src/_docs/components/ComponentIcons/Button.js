import React from 'react';

const SvgComponent = props => (
  <svg width={72} height={30} fill="none" {...props}>
    <path
      d="M69.248 1H3.202C1.986 1 1 2.527 1 4.412v21.323c0 1.885.986 3.412 2.202 3.412h66.046c1.216 0 2.202-1.527 2.202-3.412V4.412C71.45 2.527 70.464 1 69.248 1z"
      fill="#444bc9"
      stroke="#08175D"
    />
    <path d="M64.02 13.368H8.98v4.264h55.04v-4.264z" fill="#fff" />
  </svg>
);

export default SvgComponent;
