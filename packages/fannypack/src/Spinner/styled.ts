import { palette, theme } from 'styled-tools';

import styled, { css, keyframes } from '../styled';
import { LocalSpinnerProps } from './Spinner';

export const defaultDashArrayValue = 126;
export const defaultDashOffset = '60px';

export const sizes: any = {
  small: css`
    & {
      font-size: 14px;
      border-width: 2px;
    }
    & {
      ${theme('fannypack.Spinner.sizes.small')};
    }
  `,
  medium: css`
    & {
      font-size: 28px;
    }
    & {
      ${theme('fannypack.Spinner.sizes.medium')};
    }
  `,
  large: css`
    & {
      font-size: 36px;
    }
    & {
      ${theme('fannypack.Spinner.sizes.large')};
    }
  `
};

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const spinnerAnimation = css`
  animation: ${rotate} 0.6s infinite linear;
`;

export const Circle = styled.circle<{ color?: string; value?: number }>`
  stroke-dasharray: ${defaultDashArrayValue};
  stroke-dashoffset: ${props =>
    typeof props.value === 'number'
      ? `${defaultDashArrayValue - (props.value / 100) * defaultDashArrayValue}px`
      : defaultDashOffset};
  stroke: ${(props: any) => palette(props.color)};
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
`;

const Spinner = styled.svg<LocalSpinnerProps & { styledSize: LocalSpinnerProps['size']; value?: number }>`
  font-size: 20px;
  height: 1em;
  width: 1em;
  transform: rotate(-90deg);

  ${props => typeof props.value === 'undefined' && spinnerAnimation};

  & {
    ${theme('fannypack.Spinner.base')};
  }

  ${props => props.styledSize && sizes[props.styledSize]};
`;

export default Spinner;
