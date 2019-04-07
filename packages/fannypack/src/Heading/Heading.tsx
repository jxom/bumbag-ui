import * as React from 'react';
import * as PropTypes from 'prop-types';
import classNames from 'classnames';
import { HeadingProps as ReakitHeadingProps } from 'reakit/ts/Heading/Heading';

import _Heading from './styled';

export type LocalHeadingProps = {
  children: React.ReactNode;
  className?: string;
  isSubHeading?: boolean;
};
export type HeadingProps = LocalHeadingProps & ReakitHeadingProps;

export const Heading: React.FunctionComponent<LocalHeadingProps> = ({
  children,
  className,
  isSubHeading,
  ...props
}) => (
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

export const headingPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isSubHeading: PropTypes.bool
};
Heading.propTypes = headingPropTypes;

export const headingDefaultProps = {
  className: undefined,
  isSubHeading: false
};
Heading.defaultProps = headingDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<HeadingProps> = Heading;
export default C;
