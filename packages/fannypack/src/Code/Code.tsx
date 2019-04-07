import * as React from 'react';
import * as PropTypes from 'prop-types';
import { CodeProps as ReakitCodeProps } from 'reakit/ts';

import _Code from './styled';

export type LocalCodeProps = {
  children: React.ReactNode;
  className?: string;
  codeClassName?: string;
  isBlock?: boolean;
};
export type CodeProps = LocalCodeProps & ReakitCodeProps;

export const Code: React.FunctionComponent<LocalCodeProps> = ({
  children,
  className,
  codeClassName,
  isBlock,
  ...props
}) => (
  <_Code block={isBlock} {...props}>
    {children}
  </_Code>
);

export const codePropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  codeClassName: PropTypes.string,
  isBlock: PropTypes.bool
};
Code.propTypes = codePropTypes;

export const codeDefaultProps = {
  className: undefined,
  codeClassName: undefined,
  isBlock: false
};
Code.defaultProps = codeDefaultProps;

const C: React.FunctionComponent<CodeProps> = Code;
export default C;
