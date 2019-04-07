import * as React from 'react';
import * as PropTypes from 'prop-types';
import { HiddenProps as ReakitHiddenProps } from 'reakit/ts/Hidden/Hidden';

import {
  AnimateProps,
  animateDefaultProps,
  animatePropTypes,
  RestrictHideProps,
  restrictDefaultProps,
  restrictHidePropTypes
} from '../types';
import HiddenContainer, { HiddenContainerProps } from './HiddenContainer';
import HiddenShow, { HiddenShowProps } from './HiddenShow';
import HiddenHide, { HiddenHideProps } from './HiddenHide';
import HiddenToggle, { HiddenToggleProps } from './HiddenToggle';
import _Hidden from './styled';

export type LocalHiddenProps = AnimateProps &
  RestrictHideProps & {
    children: React.ReactNode;
    className?: string;
    isVisible?: boolean;
  };
export type HiddenProps = ReakitHiddenProps & LocalHiddenProps;
export type HiddenComponents = {
  Container: React.FunctionComponent<HiddenContainerProps>;
  Show: React.FunctionComponent<HiddenShowProps>;
  Hide: React.FunctionComponent<HiddenHideProps>;
  Toggle: React.FunctionComponent<HiddenToggleProps>;
};

export const Hidden: React.FunctionComponent<LocalHiddenProps> & HiddenComponents = ({
  children,
  isVisible,
  ...props
}) => (
  <_Hidden visible={isVisible} {...props}>
    {children}
  </_Hidden>
);

Hidden.Container = HiddenContainer;
Hidden.Show = HiddenShow;
Hidden.Hide = HiddenHide;
Hidden.Toggle = HiddenToggle;

export const hiddenPropTypes = {
  ...animatePropTypes,
  ...restrictHidePropTypes,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVisible: PropTypes.bool
};
Hidden.propTypes = hiddenPropTypes;

export const hiddenDefaultProps = {
  ...animateDefaultProps,
  ...restrictDefaultProps,
  className: undefined,
  isVisible: undefined
};
Hidden.defaultProps = hiddenDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<HiddenProps> & HiddenComponents = Hidden;
export default C;
