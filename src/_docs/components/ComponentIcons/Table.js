import React from 'react';

const SvgComponent = props => (
  <svg width={83} height={48} fill="none" {...props}>
    <path fill="#fff" stroke="#000" d="M.5.5h82v47H.5z" />
    <path
      d="M24 18H4v5h20v-5zM52 18H32v5h20v-5zM80 18H60v5h20v-5zM24 28H4v5h20v-5zM52 28H32v5h20v-5zM80 28H60v5h20v-5zM24 38H4v5h20v-5zM52 38H32v5h20v-5zM80 38H60v5h20v-5z"
      fill="#444bc9"
      fillOpacity={0.12}
    />
    <path d="M.5.5h82v12H.5V.5z" fill="#444bc9" stroke="#000" />
    <path d="M24 4H4v5h20V4zM52 4H32v5h20V4zM80 4H60v5h20V4z" fill="#fff" />
  </svg>
);

export default SvgComponent;
