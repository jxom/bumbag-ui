// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import _Image from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  /** How the image fits its bounds */
  fit?: 'cover' | 'contain',
  /** Positioning of the fitted image. Value can be "top", "left", "center", "right", "bottom" or an "x y" coordinate */
  fitPosition?: string,
  /** Fix the width of the image. It will not be responsive. */
  isFixed?: boolean
};

const Image = ({ children, className, isFixed, ...props }: Props) => (
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
  as: null,
  className: null,
  fit: null,
  fitPosition: null,
  isFixed: false
};

export default Image;
