import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from 'reakit/ts/Box/Box';

import _Text from './styled';

export type LocalTextProps = {
  className?: string;
  children?: React.ReactNode;
  color?: string;
};
export type TextProps = ReakitBoxProps & LocalTextProps;

export const Text: React.FunctionComponent<LocalTextProps> = ({ children, ...props }) => (
  <_Text use="span" {...props}>
    {children}
  </_Text>
);

Text.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  color: PropTypes.string
};
Text.defaultProps = {
  className: undefined,
  children: undefined,
  color: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TextProps> = Text;
export default C;
