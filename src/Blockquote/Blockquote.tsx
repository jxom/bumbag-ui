// @flow
import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { BlockquoteProps as ReakitBlockquoteProps } from 'reakit/ts/Blockquote/Blockquote';

import { Palette } from '../types';
import _Blockquote from './styled';

export interface LocalBlockquoteProps {
  children: React.ReactNode;
  className?: string;
  palette?: Palette;
}
export type BlockquoteProps = LocalBlockquoteProps & ReakitBlockquoteProps;

const defaultProps: Partial<LocalBlockquoteProps> = {
  className: undefined,
  palette: undefined
};

export const Blockquote: React.FunctionComponent<LocalBlockquoteProps> = ({ children, className, ...props }) => (
  <_Blockquote className={className} {...props}>
    {children}
  </_Blockquote>
);

Blockquote.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  palette: PropTypes.string
};
Blockquote.defaultProps = defaultProps;

const C: React.FunctionComponent<BlockquoteProps> = Blockquote;
export default C;
