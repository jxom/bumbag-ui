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

export const Label: React.FunctionComponent<LocalLabelProps> = ({ children, className, ...props }) => (
  <_Label className={className} fontWeight="600" marginBottom="minor-1" {...props}>
    {children}
  </_Label>
);

Label.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  htmlFor: PropTypes.string
};
Label.defaultProps = {
  htmlFor: undefined,
  className: undefined
};

// @ts-ignore
const C: React.FunctionComponent<LabelProps> = Label;
export default Label;
