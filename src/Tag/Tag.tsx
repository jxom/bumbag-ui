import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { InlineBlockProps as ReakitInlineBlockProps } from 'reakit/ts/InlineBlock/InlineBlock';

import _Tag from './styled';

export type LocalTagProps = {
  className?: string;
  children: React.ReactNode;
  kind?: 'outlined';
  palette?: string;
  size?: string;
};
export type TagProps = ReakitInlineBlockProps & LocalTagProps;

export const Tag: React.FunctionComponent<LocalTagProps> = ({ children, ...props }) => (
  <_Tag {...props}>{children}</_Tag>
);

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['outlined']),
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
export default Tag;
