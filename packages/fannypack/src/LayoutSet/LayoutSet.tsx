/* eslint-disable react/prop-types */
import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import { SetProps } from '../Set/Set';
import _LayoutSet from './styled';

export type LocalLayoutSetProps = {
  children: React.ReactNode;
  isHorizontal?: boolean;
  spacing?: string;
  theme?: Object;
};
export type LayoutSetProps = SetProps & LocalLayoutSetProps;

export const LayoutSet: React.FunctionComponent<LocalLayoutSetProps> = ({ children, theme, ...props }) => {
  const spacing = props.spacing || _get(theme, 'fannypack.LayoutSet.spacing');
  return (
    <_LayoutSet isVertical={!props.isHorizontal} {...props} spacing={spacing}>
      {children}
    </_LayoutSet>
  );
};

LayoutSet.propTypes = {
  children: PropTypes.node.isRequired,
  isHorizontal: PropTypes.bool,
  spacing: PropTypes.string
};

LayoutSet.defaultProps = {
  isHorizontal: false,
  spacing: undefined
};

// @ts-ignore
const C: React.FunctionComponent<LayoutSetProps> = withTheme(LayoutSet);
export default C;
