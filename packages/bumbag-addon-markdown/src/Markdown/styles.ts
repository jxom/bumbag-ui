import { cssClass } from 'bumbag/styled';
import { theme } from 'bumbag/utils';

export const Markdown = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
