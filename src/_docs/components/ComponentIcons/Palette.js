import React from 'react';

const SvgComponent = props => (
  <svg width={114} height={32} fill="none" {...props}>
    <path d="M111.737 2.552H89.842v26.896h21.895V2.552z" fill="#3926A5" />
    <path d="M89.842 2.552H67.947v26.896h21.895V2.552z" fill="#3926A5" fillOpacity={0.8} />
    <path d="M67.947 2.552H46.053v26.896h21.894V2.552z" fill="#3926A5" fillOpacity={0.6} />
    <path opacity={0.4} d="M46.053 2.552H24.158v26.896h21.895V2.552z" fill="#3926A5" />
    <path opacity={0.2} d="M24.158 2.552H2.263v26.896h21.895V2.552z" fill="#3926A5" />
    <path d="M113 1H1v30h112V1z" fill="#3926A5" fillOpacity={0.12} stroke="#08175D" />
  </svg>
);

export default SvgComponent;
