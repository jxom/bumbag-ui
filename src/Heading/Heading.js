// @flow
import React, { type Node } from 'react';
import classNames from 'classnames';
import _Heading from 'reakit/Heading';

type Props = {
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
  className: null,
  isSubHeading: false
};

export default Heading;
