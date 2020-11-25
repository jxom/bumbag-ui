import { cssClass } from '../styled';
import { getCapsizeStyles, palette, theme, fontWeight } from '../utils';

export const Link = (styleProps) => cssClass`
  color: ${palette('primary', { dark: 'primary300' })(styleProps)};
  fill: ${palette('primary', { dark: 'primary300' })(styleProps)};
  cursor: pointer;
  font-weight: ${fontWeight('semibold')(styleProps)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;

    & {
      ${theme(styleProps.themeKey, `styles.hover`)(styleProps)};
    }
  }

  &:focus {
    & {
      ${theme(styleProps.themeKey, `styles.focus`)(styleProps)};
    }
  }

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const LinkBlock = (styleProps) => cssClass`
  ${Link(styleProps)};

  display: block;

  ${getCapsizeStyles({ lineHeight: 'default' })(styleProps)};
`;

export const LinkInline = (styleProps) => cssClass`
  ${Link(styleProps)};
`;
