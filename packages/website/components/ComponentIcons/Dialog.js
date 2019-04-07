import React from 'react';

const SvgComponent = props => (
  <svg width={93} height={50} fill="none" {...props}>
    <g clipPath="url(#prefix__clip0)">
      <path d="M.385 14.583h91.538z" fill="#fff" />
      <path d="M.385 14.583h91.538" stroke="#08175D" strokeLinecap="square" />
      <path d="M.385 37.083h91.538z" fill="#fff" />
      <path d="M.385 37.083h91.538" stroke="#08175D" strokeLinecap="square" />
      <path
        d="M88.846.417H3.462C1.762.417.385 1.909.385 3.75v42.5c0 1.841 1.377 3.333 3.077 3.333h85.384c1.7 0 3.077-1.492 3.077-3.333V3.75c0-1.84-1.377-3.333-3.077-3.333z"
        fill="#fff"
        stroke="#08175D"
      />
      <path
        d="M67.126 12H9v3.65h58.126V12zM84.564 22H9v3.649h75.564V22zM46.782 29.663H9v3.649h37.782v-3.65z"
        fill="#444bc9"
        fillOpacity={0.12}
      />
      <path
        d="M83.314 39.23H67.692c-.85 0-1.538.747-1.538 1.667v4.584c0 .92.689 1.666 1.538 1.666h15.622c.85 0 1.538-.746 1.538-1.666v-4.584c0-.92-.689-1.666-1.538-1.666z"
        fill="#444bc9"
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M82.973 42.699H68.18v1.225h14.793V42.7z" fill="#fff" />
      <path
        d="M61.923 39.23h-15.77c-.849 0-1.538.747-1.538 1.667v4.584c0 .92.69 1.666 1.539 1.666h15.77c.849 0 1.538-.746 1.538-1.666v-4.584c0-.92-.69-1.666-1.539-1.666z"
        fill="#444bc9"
        fillOpacity={0.12}
        stroke="#08175D"
        strokeWidth={0.5}
      />
      <path d="M61.567 42.699H46.659v1.225h14.908V42.7z" fill="#444bc9" />
    </g>
    <defs>
      <clipPath id="prefix__clip0">
        <path fill="#fff" d="M0 0h92.308v50H0z" />
      </clipPath>
    </defs>
  </svg>
);

export default SvgComponent;
