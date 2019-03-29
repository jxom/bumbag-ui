import React from 'react';

const SvgComponent = props => (
  <svg width={82} height={12} fill="none" {...props}>
    <path
      d="M33.906 0H1.094C.49 0 0 .651 0 1.455v9.09C0 11.35.49 12 1.094 12h32.812C34.51 12 35 11.349 35 10.546V1.455C35 .65 34.51 0 33.906 0z"
      fill="#444bc9"
    />
    <path d="M31.309 5.273H3.965V7.09h27.344V5.273z" fill="#fff" />
    <path
      d="M80.906 0H48.094C47.49 0 47 .651 47 1.455v9.09c0 .804.49 1.455 1.094 1.455h32.812C81.51 12 82 11.349 82 10.546V1.455C82 .65 81.51 0 80.906 0z"
      fill="#444bc9"
    />
    <path d="M78.309 5.273H50.965V7.09h27.344V5.273z" fill="#fff" />
  </svg>
);

export default SvgComponent;
