import React from 'react';
import PropTypes from 'prop-types';
import Base from 'reakit/Base';

import { colors, colorsInverted } from '../theme/colors';
import * as sharedPropTypes from '../prop-types';
import Loader from '../Loader';
import {
  BaseButton as StyledBaseButton,
  LinkButton as StyledLinkButton,
  OutlinedButton as StyledOutlinedButton,
  LoaderWrapper
} from './styled';

const Button = ({ children, className, color, isLink, isLoading, isOutlined, size, ...props }) => {
  let Component = StyledBaseButton;
  if (isLink) {
    Component = StyledLinkButton;
  } else if (isOutlined) {
    Component = StyledOutlinedButton;
  }
  return (
    <Component className={className} color={color} isLoading={isLoading} isOutlined={isOutlined} size={size} {...props}>
      {isLoading ? (
        <LoaderWrapper>
          <Loader color={isLink || isOutlined ? colors[color] : colorsInverted[color]} />
        </LoaderWrapper>
      ) : null}
      <Base>{children}</Base>
    </Component>
  );
};

Button.propTypes = {
  as: PropTypes.any,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  /** Color of the button. Available values: "default", "primary", "secondary", "success", "warning", "danger" */
  color: sharedPropTypes.color,
  /** Adds a loading indicator to the button. */
  isLoading: PropTypes.bool,
  /** Button appears as a link, and has no 'button'-like styling. */
  isLink: PropTypes.bool,
  /** An outline is placed on the button. */
  isOutlined: PropTypes.bool,
  /** Size of the button. Available values: "small", "default", "medium", "large" */
  size: sharedPropTypes.size
};

Button.defaultProps = {
  as: null,
  className: null,
  color: 'default',
  isLoading: false,
  isLink: false,
  isOutlined: false,
  size: 'default'
};

export default Button;
