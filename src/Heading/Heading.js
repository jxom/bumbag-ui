// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';

import type { Palette } from '../types';
import _Heading from './styled';

type Props = {
  as?: any,
  children: Node,
  className?: string,
  isSubHeading?: boolean,
  palette?: Palette
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
  as: null,
  className: null,
  isSubHeading: false,
  palette: null
};

export default Heading;
