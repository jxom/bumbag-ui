import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const Paragraph = (styleProps) => cssClass`
  & .fp-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
