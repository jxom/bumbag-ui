import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { ImageProps as ReakitImageProps } from 'reakit/ts';

import _Image from './styled';

export type LocalImageProps = {
  children?: React.ReactNode;
  className?: string;
  /** How the image fits its bounds */
  fit?: 'cover' | 'contain';
  /** Positioning of the fitted image. Value can be "top", "left", "center", "right", "bottom" or an "x y" coordinate */
  fitPosition?: string;
  /** Fix the width of the image. It will not be responsive. */
  isFixed?: boolean;
};
export type ImageProps = LocalImageProps & ReakitImageProps;

export const Image: React.FunctionComponent<LocalImageProps> = ({ children, className, isFixed, ...props }) => (
  <_Image
    className={classNames({
      [className || '']: Boolean(className)
    })}
    isFixed={isFixed}
    {...props}
  >
    {children}
  </_Image>
);

Image.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  fit: PropTypes.oneOf(['cover', 'contain']) as PropTypes.Validator<LocalImageProps['fit']>,
  fitPosition: PropTypes.string,
  isFixed: PropTypes.bool
};
Image.defaultProps = {
  children: undefined,
  className: undefined,
  fit: undefined,
  fitPosition: undefined,
  isFixed: false
};

const C: React.FunctionComponent<ImageProps> = Image;
export default C;
