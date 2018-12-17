import InlineBlock from '@jmoxey/reakit/InlineBlock';
import { palette, theme } from 'styled-tools';

import styled, { css } from '../styled';
import { LocalTagProps } from './Tag';

const sizeAttributes: any = {
  medium: css`
    font-size: 1em;

    & {
      ${theme('fannypack.Tag.sizes.medium')};
    }
  `,
  large: css`
    font-size: 1.25em;

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

const Tag = styled(InlineBlock)<LocalTagProps & { styledSize: LocalTagProps['size'] }>`
  background-color: ${palette()};
  border-radius: 4px;
  color: ${props => palette(`${props.palette}Inverted`)};
  fill: ${props => palette(`${props.palette}Inverted`)};
  font-size: ${theme('fannypack.fontSizes.small')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  padding: 0.2em 0.4em;

  & {
    ${props => props.styledSize && sizeAttributes[props.styledSize]};
    ${props => props.kind === 'outlined' && outlinedProperties};
  }

  & {
    ${theme('fannypack.Tag.base')};
  }
`;

export default Tag;
