import styled from 'reakit/styled';
import { css } from 'reakit/styled';
import { theme, palette } from 'styled-tools';

export const Rating = styled.div``;

const starSizes = {
  small: css`
    & {
      width: 1rem;
      height: 1rem;
    }
    & {
      ${theme('rating.sizes.small')};
    }
  `,
  medium: css`
    & {
      width: 2rem;
      height: 2rem;
    }
    & {
      ${theme('rating.sizes.medium')};
    }
  `,
  large: css`
    & {
      width: 3rem;
      height: 3rem;
    }
    & {
      ${theme('rating.sizes.large')};
    }
  `
};

export const RatingStar = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  & {
    ${theme('rating.Star.base')};
  }

  ${props => starSizes[props.size]} /* Extend size styles */;

  & path {
    fill: ${props => (props.active ? theme('rating.star.color') || palette('black') : palette('whiteDarkest'))};
  }
`;
