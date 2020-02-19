import { css, cssClass } from '../styled';
import { palette, fontSize, space, theme } from '../utils';

export const Rating = styleProps => cssClass`
  align-items: center;
  display: flex;

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;

export const RatingItem = styleProps => cssClass`
  color: ${styleProps.isActive ? 'gold' : palette('white900')(styleProps)};
  display: inline-flex;
  font-size: ${fontSize('400')(styleProps)}rem;
  transition: color 0.1s, transform 0.2s;

  ${!styleProps.disabled &&
    css`
      &:hover {
        transform: scale(1.2);
      }
      &:hover:active {
        transform: scale(1.1);
      }
    `}

  ${styleProps.disabled &&
    css`
      cursor: not-allowed;
      opacity: 0.5;
    `}

  &:not(:first-of-type) {
    margin-left: ${space(1)(styleProps)}rem;
  }

  & {
    ${theme(`${styleProps.themeKey}.css.root`)(styleProps)};
  }
`;
