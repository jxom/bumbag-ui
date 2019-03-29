import { InlineFlex } from '../primitives';
import styled, { css, palette, theme } from '../styled';
import { LocalBadgeProps } from './Badge';

const sizeAttributes: any = {
  medium: css`
    & {
      font-size: 1rem;
      ${theme('fannypack.Badge.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 1.25rem;
      ${theme('fannypack.Badge.sizes.large')};
    }
  `
};

export default styled(InlineFlex)<LocalBadgeProps>`
  align-items: center;
  border-radius: 1rem;
  justify-content: center;
  background-color: ${palette()};
  box-sizing: content-box;
  padding: 0 0.4em;
  color: ${props => palette(`${props.palette}Inverted`)};
  fill: ${props => palette(`${props.palette}Inverted`)};
  font-size: ${theme('fannypack.fontSizes.100')}rem;
  font-weight: ${theme('fannypack.fontWeights.semibold')};
  height: 1.2em;

  ${props =>
    !props.children &&
    css`
      & {
        height: 0.5rem;
        width: 0.5rem;
        padding: 0px;
      }
    `}

  ${props =>
    props.isAbsolute &&
    css`
      position: absolute;
      top: -0.4em;
      right: -0.4em;

      & {
        ${theme('fannypack.Badge.absolute')};
      }
    `}

  ${props => props.size && sizeAttributes[props.size]}

  & {
    ${theme('fannypack.Badge.base')};
  }
`;
