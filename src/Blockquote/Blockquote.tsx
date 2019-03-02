import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BlockquoteProps as ReakitBlockquoteProps } from 'reakit/ts/Blockquote/Blockquote';

import { Palette } from '../types';
import _Blockquote from './styled';

export type LocalBlockquoteProps = {
  children: React.ReactNode;
  className?: string;
  palette?: string;
};
export type BlockquoteProps = LocalBlockquoteProps & ReakitBlockquoteProps;

export const Blockquote: React.FunctionComponent<LocalBlockquoteProps> = ({ children, className, ...props }) => (
  <_Blockquote className={className} {...props}>
    {children}
  </_Blockquote>
);

export const blockquotePropTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  palette: PropTypes.string
};
Blockquote.propTypes = blockquotePropTypes;

const blockquoteDefaultProps: Partial<LocalBlockquoteProps> = {
  className: undefined,
  palette: undefined
};
Blockquote.defaultProps = blockquoteDefaultProps;

const C: React.FunctionComponent<BlockquoteProps> = Blockquote;
export default C;
