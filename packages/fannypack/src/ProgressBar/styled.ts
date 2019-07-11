import { tint } from 'polished';
import { Box } from '../primitives';
import styled, { css, palette, theme } from '../styled';
import { LocalProgressBarProps } from './ProgressBar';

const sizeAttributes: any = {
  small: css`
    height: 0.6rem;

    & {
      ${theme('fannypack.ProgressBar.sizes.small')};
    }
  `,
  default: css`
    & {
      ${theme('fannypack.ProgressBar.sizes.default')};
    }
  `,
  medium: css`
    height: 1.5rem;

    & {
      ${theme('fannypack.ProgressBar.sizes.medium')};
    }
  `,
  large: css`
    height: 2rem;

    & {
      ${theme('fannypack.ProgressBar.sizes.large')};
    }
  `
};

export const ProgressBarIndicator = styled(Box)`
  height: 100%;
  background-color: ${(props: any) => palette(props.color, props.color)};
  transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  width: ${props => props.value || '0'}%;

  & {
    ${theme('fannypack.ProgressBar.indicator')};
  }
`;

export const ProgressBar = styled(Box)<LocalProgressBarProps & { styledSize?: string }>`
  border-radius: 3px;
  overflow: hidden;
  width: 100%;
  height: 1rem;
  background-color: ${(props: any) => tint(0.9, palette(props.color, props.color)(props))};

  ${props => props.styledSize && sizeAttributes[props.styledSize || '']}

  & {
    ${theme('fannypack.ProgressBar.base')};
  }
`;

export default ProgressBar;
