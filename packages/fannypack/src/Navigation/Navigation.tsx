import * as React from 'react';
import * as PropTypes from 'prop-types';
import { NavigationProps as ReakitNavigationProps } from 'reakit/ts';

import _Navigation from './styled';

export type LocalNavigationProps = {
  a11yTitle?: string;
  children: React.ReactNode;
  className?: string;
  use?: any;
};
export type NavigationProps = ReakitNavigationProps & LocalNavigationProps;

export const Navigation: React.FunctionComponent<LocalNavigationProps> = ({ a11yTitle, children, ...props }) => (
  // @ts-ignore
  <_Navigation aria-label={a11yTitle} {...props} role={props.use ? 'navigation' : props.role}>
    {children}
  </_Navigation>
);

export const navigationPropTypes = {
  a11yTitle: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  role: PropTypes.string,
  use: PropTypes.any
};
Navigation.propTypes = navigationPropTypes;

export const navigationDefaultProps = {
  a11yTitle: undefined,
  className: undefined,
  role: undefined,
  use: undefined
};
Navigation.defaultProps = navigationDefaultProps;

const C: React.FunctionComponent<NavigationProps> = Navigation;
export default C;
