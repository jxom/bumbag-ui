import styled from 'reakit/styled';
import { css } from 'reakit/styled';
import { theme, palette } from 'styled-tools';

export const Rating = styled.div`
  & {
    ${theme('fannypack.Rating.base')};
  }
`;

const starSizes = {
  small: css`
    & {
      width: 1rem;
      height: 1rem;
    }
    & {
      ${theme('fannypack.Rating.Star.sizes.small')};
    }
  `,
  medium: css`
    & {
      width: 2rem;
      height: 2rem;
    }
    & {
      ${theme('fannypack.Rating.Star.sizes.medium')};
    }
  `,
  large: css`
    & {
      width: 3rem;
      height: 3rem;
    }
    & {
      ${theme('fannypack.Rating.Star.sizes.large')};
    }
  `
};

export const RatingStar = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  & {
    ${theme('fannypack.Rating.Star.base')};
  }

  ${props => starSizes[props.size]} /* Extend size styles */;

  & path {
    fill: ${props => (props.active ? theme('fannypack.Rating.Star.color')(props) || 'gold' : palette('whiteDarkest'))};
  }
`;
