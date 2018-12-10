import React from 'react';

const SvgComponent = props => (
  <svg width={98} height={41} fill="none" {...props}>
    <path
      d="M20.286 39.571c10.65 0 19.285-8.634 19.285-19.285S30.937 1 20.286 1 1 9.635 1 20.286C1 30.936 9.635 39.57 20.286 39.57z"
      fill="#fff"
      stroke="#3926A5"
    />
    <path d="M28.86 14.571l-11.499 11.5-4.297-4.297" stroke="#3926A5" strokeWidth={4} />
    <path
      d="M77.286 39.571c10.65 0 19.285-8.634 19.285-19.285S87.937 1 77.286 1 58 9.635 58 20.286c0 10.65 8.635 19.285 19.286 19.285z"
      fill="#fff"
      stroke="#3926A5"
    />
    <path d="M83.156 14.286l-11.45 11.571" stroke="#3926A5" strokeWidth={4} />
    <g filter="url(#prefix__filter0_i)">
      <path d="M72.13 14.286l11.45 11.571-11.45-11.571z" fill="#000" />
    </g>
    <path d="M72.13 14.286l11.45 11.571" stroke="#3926A5" strokeWidth={4} />
    <defs>
      <filter
        id="prefix__filter0_i"
        x={72.129}
        y={14.286}
        width={11.451}
        height={12.571}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={1} />
        <feGaussianBlur stdDeviation={1.5} />
        <feComposite in2="hardAlpha" operator="arithmetic" k2={-1} k3={1} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0" />
        <feBlend in2="shape" result="effect1_innerShadow" />
      </filter>
    </defs>
  </svg>
);

export default SvgComponent;
