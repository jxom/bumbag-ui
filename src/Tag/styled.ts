import InlineFlex from 'reakit/InlineFlex';
import { palette, theme } from 'styled-tools';

import styled, { css, space } from '../styled';
import Button from '../Button';
import { Box } from '../primitives';

import { LocalTagProps } from './Tag';

const sizeAttributes: any = {
  medium: css`
    font-size: 1em;
    height: 2rem;

    & {
      ${theme('fannypack.Tag.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.25em;
    height: 2.5rem;

    & {
      ${theme('fannypack.Tag.sizes.large')};
    }
  `
};

const outlinedProperties = css`
  & {
    background-color: unset;
    border: 1px solid ${palette()};
    color: ${palette()};
    fill: ${palette()};
  }
  & {
    ${theme('fannypack.Tag.outlined')};
  }
`;

export const RemoveButton = styled(Button)`
  background: none;
  padding: 0 ${space(1)}rem;
  height: 100%;

  ${props =>
    props.kind !== 'ghost' &&
    css`
      color: ${(props: any) => palette(`${props.palette}Inverted`)};
    `};

  &:focus {
    box-shadow: inset ${props => palette(props.palette === 'default' ? 'primary' : `${props.palette}300`)(props)} 0px
      0px 0px 2px;
  }

  & {
    ${theme('fannypack.Tag.RemoveButton.base')};
  }
`;

export const TagContent = styled(Box)<{ isRemovable: boolean }>`
  padding: 0 ${space(2)}em;

  ${props =>
    props.isRemovable &&
    css`
      padding-right: 0rem;
    `};

  & {
    ${theme('fannypack.Tag.TagContent.base')};
  }
`;

const Tag = styled(InlineFlex)<LocalTagProps & { styledSize: LocalTagProps['size'] }>`
  align-items: center;
  background-color: ${palette()};
  border-radius: 4px;
  color: ${props => palette(`${props.palette}Inverted`)};
  fill: ${props => palette(`${props.palette}Inverted`)};
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  height: 1.5rem;
  justify-content: center;

  & {
    ${props => props.styledSize && sizeAttributes[props.styledSize]};
    ${props => props.kind === 'outlined' && outlinedProperties};
  }

  & {
    ${theme('fannypack.Tag.base')};
  }
`;

export default Tag;
