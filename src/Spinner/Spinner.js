import React from 'react';
import PropTypes from 'prop-types';

import { Spinner as StyledSpinner } from './styled';

const Spinner = ({ className, color, palette, size }) => (
  <StyledSpinner
    className={className}
    color={color}
    palette={palette}
    size={size}
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 50 50"
    xmlSpace="preserve"
  >
    <path d="M43.935,25.145c0-10.318-8.364-18.683-18.683-18.683c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615c8.072,0,14.615,6.543,14.615,14.615H43.935z">
      <animateTransform
        attributeType="xml"
        attributeName="transform"
        type="rotate"
        from="0 25 25"
        to="360 25 25"
        dur="0.6s"
        repeatCount="indefinite"
      />
    </path>
  </StyledSpinner>
);

Spinner.propTypes = {
  className: PropTypes.string,
  color: PropTypes.string,
  palette: PropTypes.oneOf(['default', 'primary', 'secondary', 'success', 'danger', 'warning']),
  size: PropTypes.oneOf(['small', 'default', 'medium', 'large'])
};

Spinner.defaultProps = {
  className: null,
  color: null,
  palette: 'primary',
  size: 'default'
};

export default Spinner;
