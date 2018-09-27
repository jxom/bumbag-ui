import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import { palette, theme } from 'styled-tools';

const sizes = {
  small: css`
    & {
      width: 1rem;
      height: 1rem;
    }
    & {
      ${theme('spinner.sizes.small')};
    }
  `,
  medium: css`
    & {
      width: 2rem;
      height: 2rem;
    }
    & {
      ${theme('spinner.sizes.medium')};
    }
  `,
  large: css`
    & {
      width: 3rem;
      height: 3rem;
    }
    & {
      ${theme('spinner.sizes.large')};
    }
  `
};

export default styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  & {
    ${theme('spinner.base')};
  }

  ${props => sizes[props.size]} /* Extend size styles */;

  & path {
    fill: ${props => props.color || palette()(props)};
  }
`;
