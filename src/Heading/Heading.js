// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import type { Palette } from '../types';
import _Heading from './styled';

type Props = {
  use?: any,
  color?: Palette,
  children: Node,
  className?: string,
  isSubHeading?: boolean
};

const Heading = ({ children, className, isSubHeading, ...props }: Props) => (
  <_Heading
    className={classNames({
      [className || '']: Boolean(className),
      heading: !isSubHeading,
      'sub-heading': isSubHeading
    })}
    isSubHeading={isSubHeading}
    {...props}
  >
    {children}
  </_Heading>
);

Heading.defaultProps = {
  use: undefined,
  className: undefined,
  color: undefined,
  isSubHeading: false
};

export default Heading;
