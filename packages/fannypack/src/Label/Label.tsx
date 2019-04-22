import * as React from 'react';
import * as PropTypes from 'prop-types';
import { LabelProps as ReakitLabelProps } from 'reakit/ts';

import _Label from './styled';

export type LocalLabelProps = {
  children: React.ReactNode;
  className?: string;
  htmlFor?: string;
};
export type LabelProps = LocalLabelProps & ReakitLabelProps;

export const Label: React.FunctionComponent<LocalLabelProps> = ({ children, ...props }) => (
  <_Label {...props}>{children}</_Label>
);

export const labelPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string
};
Label.propTypes = labelPropTypes;

export const labelDefaultProps = {
  htmlFor: undefined,
  className: undefined
};
Label.defaultProps = labelDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<LabelProps> = Label;
export default Label;
