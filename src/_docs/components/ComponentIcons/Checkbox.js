import React from 'react';

const SvgComponent = props => (
  <svg width={72} height={51} fill="none" {...props}>
    <path
      d="M20.375 1H1.625C1.28 1 1 2.085 1 3.424v15.152C1 19.915 1.28 21 1.625 21h18.75c.345 0 .625-1.085.625-2.424V3.424C21 2.085 20.72 1 20.375 1zM20.375 30H1.625C1.28 30 1 31.085 1 32.424v15.152C1 48.915 1.28 50 1.625 50h18.75c.345 0 .625-1.085.625-2.424V32.424c0-1.339-.28-2.424-.625-2.424z"
      stroke="#444bc9"
    />
    <path d="M72 9H28v5h44V9zM72 38H28v5h44v-5z" fill="#444bc9" fillOpacity={0.12} />
    <path d="M19 35L8.08 46 4 41.89" stroke="#444bc9" strokeWidth={4} />
  </svg>
);

export default SvgComponent;
