import * as React from 'react';
import * as PropTypes from 'prop-types';
import { InlineBlockProps as ReakitInlineBlockProps } from 'reakit/ts/InlineBlock/InlineBlock';

import { Omit } from '../types';
import Icon from '../Icon';
import _Tag, { RemoveButton, TagContent } from './styled';

export type LocalTagProps = {
  className?: string;
  children: React.ReactNode;
  onRemove?(): void;
  kind?: 'outlined';
  palette?: string;
  size?: string;
};
export type TagProps = Omit<ReakitInlineBlockProps, 'size'> & LocalTagProps;

export const Tag: React.FunctionComponent<LocalTagProps> = ({ children, onRemove, size, ...props }) => (
  <_Tag styledSize={size} {...props}>
    <TagContent isRemovable={Boolean(onRemove)}>{children}</TagContent>
    {Boolean(onRemove) && (
      <RemoveButton onClick={onRemove} kind={props.kind === 'outlined' ? 'ghost' : undefined} palette={props.palette}>
        <Icon a11yLabel="Close" icon="times" />
      </RemoveButton>
    )}
  </_Tag>
);

Tag.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  kind: PropTypes.oneOf(['outlined']) as PropTypes.Validator<LocalTagProps['kind']>,
  onRemove: PropTypes.func,
  palette: PropTypes.string,
  size: PropTypes.string
};
Tag.defaultProps = {
  className: undefined,
  kind: undefined,
  onRemove: undefined,
  palette: 'text',
  size: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TagProps> = Tag;
export default C;
