import React from 'react';

const SvgComponent = props => (
  <svg width={80} height={50} fill="none" {...props}>
    <path fill="#3926A5" d="M0 0h80v50H0z" />
    <g clipPath="url(#prefix__clip0)">
      <path d="M9.256 17.722h61.026M9.256 32.722h61.026" stroke="#08175D" strokeLinecap="square" />
      <path
        d="M68.23 8.278H11.309c-1.133 0-2.052.995-2.052 2.222v28.333c0 1.228.919 2.223 2.052 2.223H68.23c1.133 0 2.051-.995 2.051-2.223V10.5c0-1.227-.918-2.222-2.051-2.222z"
        fill="#fff"
        stroke="#08175D"
      />
      <path
        d="M64.542 34.154H54.128c-.566 0-1.025.497-1.025 1.111v3.056c0 .613.459 1.11 1.025 1.11h10.414c.567 0 1.026-.497 1.026-1.11v-3.056c0-.614-.46-1.111-1.026-1.111z"
        fill="#3926A5"
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M64.316 36.466h-9.862v.817h9.862v-.817z" fill="#fff" />
      <path
        d="M50.282 34.154H39.77c-.566 0-1.025.497-1.025 1.111v3.056c0 .613.459 1.11 1.025 1.11h10.513c.567 0 1.026-.497 1.026-1.11v-3.056c0-.614-.46-1.111-1.026-1.111z"
        fill="#3926A5"
        fillOpacity={0.12}
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M50.044 36.466h-9.938v.817h9.938v-.817z" fill="#3926A5" />
      <path d="M66 15.667H14v3.548h52v-3.548zM40 23.118H14v3.549h26v-3.549z" fill="#3926A5" fillOpacity={0.12} />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" transform="translate(9 8)" d="M0 0h61.538v33.333H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
