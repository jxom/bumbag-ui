import * as React from 'react';
import classNames from 'classnames';
import { ImageProps as ReakitImageProps } from '@jmoxey/reakit/ts';

import _Image from './styled';

export type LocalImageProps = {
  use?: any;
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

Image.defaultProps = {
  use: undefined,
  className: undefined,
  fit: undefined,
  fitPosition: undefined,
  isFixed: false
};

const C: React.FunctionComponent<ImageProps> = Image;
export default C;
