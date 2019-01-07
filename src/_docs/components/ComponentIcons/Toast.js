import React from 'react';

const SvgComponent = props => (
  <svg width={120} height={60} viewBox="0 0 120 60" fill="none">
    <path
      d="M0 4C0 1.79086 1.79086 0 4 0H116C118.209 0 120 1.79086 120 4V56C120 58.2091 118.209 60 116 60H4C1.79086 60 0 58.2091 0 56V4Z"
      fill="#fff"
    />
    <g filter="url(#filter0_d)">
      <path
        d="M111.05 6H56.9496C55.8729 6 55 6.57672 55 7.28814V23.7119C55 24.4233 55.8729 25 56.9496 25H111.05C112.127 25 113 24.4233 113 23.7119V7.28814C113 6.57672 112.127 6 111.05 6Z"
        fill="#fff"
        stroke="#08175D"
      />
      <rect x="70.207" y="11.7" width="17.741" height="1.387" fill="#E7E5F4" />
      <rect x="70.207" y="15.12" width="38.017" height="1.387" fill="#E7E5F4" />
      <rect x="70.207" y="18.54" width="38.017" height="1.387" fill="#E7E5F4" />
      <path
        d="M62.5 19C64.433 19 66 17.433 66 15.5C66 13.567 64.433 12 62.5 12C60.567 12 59 13.567 59 15.5C59 17.433 60.567 19 62.5 19Z"
        fill="#3926A5"
        stroke="#3926A5"
      />
      <path
        d="M62.6312 17.7507C62.2952 17.7507 62.0332 17.6427 61.8452 17.4267C61.6572 17.2107 61.5632 16.9167 61.5632 16.5447V14.6967H62.8352V16.4907C62.8352 16.5827 62.8592 16.6547 62.9072 16.7067C62.9592 16.7547 63.0252 16.7787 63.1052 16.7787C63.1852 16.7787 63.2672 16.7547 63.3512 16.7067L63.4172 17.5407C63.3292 17.6087 63.2132 17.6607 63.0692 17.6967C62.9292 17.7327 62.7832 17.7507 62.6312 17.7507ZM62.1992 14.2467C62.0112 14.2467 61.8512 14.1887 61.7192 14.0727C61.5912 13.9527 61.5272 13.8067 61.5272 13.6347C61.5272 13.4627 61.5952 13.3187 61.7312 13.2027C61.8672 13.0867 62.0232 13.0287 62.1992 13.0287C62.3832 13.0287 62.5412 13.0887 62.6732 13.2087C62.8092 13.3287 62.8772 13.4707 62.8772 13.6347C62.8772 13.8107 62.8092 13.9567 62.6732 14.0727C62.5372 14.1887 62.3792 14.2467 62.1992 14.2467Z"
        fill="#fff"
      />
    </g>
    <defs>
      <filter
        id="filter0_d"
        x="49.5"
        y="1.5"
        width="69"
        height="30"
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="2.5" />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
      </filter>
    </defs>
  </svg>
);

export default SvgComponent;
