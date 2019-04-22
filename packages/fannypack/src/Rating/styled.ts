import { theme, palette } from 'styled-tools';

import { Box } from '../primitives';
import styled, { css } from '../styled';
import { RatingProps } from './Rating';
import { RatingStarProps } from './RatingStar';

export const Rating = styled(Box)`
  & {
    ${theme('fannypack.Rating.base')};
  }
`;

export const starSizes: any = {
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

export const RatingStar = styled(Box)<RatingStarProps>`
  width: 1.5rem;
  height: 1.5rem;

  & {
    ${theme('fannypack.Rating.Star.base')};
  }

  ${props => (props.size ? starSizes[props.size || ''] : null)};

  & path {
    fill: ${props => (props.active ? theme('fannypack.Rating.Star.color')(props) || 'gold' : palette('white800'))};
  }
`;
