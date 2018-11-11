import styled, { css, keyframes } from 'reakit/styled';
import { palette, theme } from 'styled-tools';
import { Box } from '../primitives';

const sizes = {
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
export const spinnerProperties = css`
  animation: ${rotate} 0.6s infinite linear;
  border: 0.1em solid ${props => palette(props.color)(props)};
  border-radius: 100%;
  border-right-color: transparent;
  border-top-color: transparent;
  display: inline-block;
  height: 1em;
  width: 1em;
  position: relative;
`;

export default styled(Box)`
  font-size: 20px;
  ${spinnerProperties};

  & {
    ${theme('fannypack.Spinner.base')};
  }

  ${props => sizes[props.size]} /* Extend size styles */;
`;
