import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InlineBlockProps as ReakitInlineBlockProps } from '@jmoxey/reakit/ts/InlineBlock/InlineBlock';

import { Omit } from '../types';
import _Tag from './styled';

export type LocalTagProps = {
  className?: string;
  children: React.ReactNode;
  kind?: 'outlined';
  palette?: string;
  size?: string;
};
export type TagProps = Omit<ReakitInlineBlockProps, 'size'> & LocalTagProps;

export const Tag: React.FunctionComponent<LocalTagProps> = ({ children, size, ...props }) => (
  <_Tag styledSize={size} {...props}>
    {children}
  </_Tag>
);

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['outlined']) as PropTypes.Validator<LocalTagProps['kind']>,
  palette: PropTypes.string,
  size: PropTypes.string
};
Tag.defaultProps = {
  className: undefined,
  kind: undefined,
  palette: 'text',
  size: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TagProps> = Tag;
export default C;
