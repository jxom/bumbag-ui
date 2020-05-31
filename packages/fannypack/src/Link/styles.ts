import { cssClass } from '../styled';
import { palette, theme } from '../utils';

export const Link = (styleProps) => cssClass`
  color: ${palette('primary')(styleProps)};
  fill: ${palette('primary')(styleProps)};
  cursor: pointer;
  text-decoration: underline;
  text-decoration-skip: ink edges;

  &:hover {
    color: ${palette('primary900')(styleProps)};
    fill: ${palette('primary900')(styleProps)};

    & {
      ${theme(styleProps.themeKey, `css.hover`)(styleProps)};
    }
  }

  &:focus {
    outline-style: dashed;

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
