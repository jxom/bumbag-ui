import { cssClass } from '../styled';
import { palette, theme, fontWeight } from '../utils';

export const Link = (styleProps) => cssClass`
  color: ${palette('primary')(styleProps)};
  fill: ${palette('primary')(styleProps)};
  cursor: pointer;
  font-weight: ${fontWeight('semibold')(styleProps)};
  text-decoration: none;

  &:hover {
    text-decoration: underline;

    & {
      ${theme(styleProps.themeKey, `css.hover`)(styleProps)};
    }
  }

  &:focus {
    & {
      ${theme(styleProps.themeKey, `css.focus`)(styleProps)};
    }
  }

  & .fp-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
