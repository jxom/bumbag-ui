// @flow
import React from 'react';

import { css } from 'reakit/styled';
import styled from 'reakit/styled';
import { theme, palette } from 'styled-tools';

import type { Size } from '../types';

const sizes = {
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

const Star = styled.svg`
  width: 1.5rem;
  height: 1.5rem;

  & {
    ${theme('rating.star.base')};
  }

  ${props => sizes[props.size]} /* Extend size styles */;

  & path {
    fill: ${props => (props.active ? theme('rating.star.color') || palette('black') : palette('whiteDarkest'))};
  }
`;

type Props = {
  size?: Size,
  active?: boolean
};

const RatingStar = ({ size, active, ...props }: Props) => (
  <Star size={size} active={active} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" {...props}>
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
  </Star>
);

RatingStar.defaultProps = {
  size: 'default',
  index: 0,
  active: false
};

export default RatingStar;
