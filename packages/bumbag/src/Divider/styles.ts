import { cssClass } from '../styled';
import { palette, space, theme } from '../utils';

export const Divider = (styleProps) => cssClass`
    border: 1px solid ${palette('white800', { dark: 'gray700' })(styleProps)};
    border-width: 0 0 1px 0;
    padding: 0;
    width: auto;
    height: 0;

    &[aria-orientation="vertical"] {
      border-width: 0 1px 0 0;
      width: 0;
      height: auto;

      & {
        ${theme(styleProps.themeKey, `styles.vertical`)(styleProps)};
      }
    }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
