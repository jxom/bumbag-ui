/* eslint-disable react/prop-types */
import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _get from 'lodash/get';

import { withTheme } from '../styled';
import { SetProps } from '../Set/Set';
import _FieldSet from './styled';

export type LocalFieldSetProps = {
  children: React.ReactNode;
  isHorizontal?: boolean;
  spacing?: string;
  theme?: Object;
};
export type FieldSetProps = SetProps & LocalFieldSetProps;

export const FieldSet: React.FunctionComponent<LocalFieldSetProps> = ({ children, theme, ...props }) => {
  const spacing = props.spacing || _get(theme, 'fannypack.FieldSet.spacing');
  return (
    <_FieldSet isVertical={!props.isHorizontal} {...props} spacing={spacing}>
      {children}
    </_FieldSet>
  );
};

export const fieldSetPropTypes = {
  children: PropTypes.node.isRequired,
  isHorizontal: PropTypes.bool,
  spacing: PropTypes.string
};
FieldSet.propTypes = fieldSetPropTypes;

export const fieldSetDefaultProps = {
  isHorizontal: false,
  spacing: undefined
};
FieldSet.defaultProps = fieldSetDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<FieldSetProps> = withTheme(FieldSet);
export default C;
