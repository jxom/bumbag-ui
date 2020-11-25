import { cssClass } from '../styled';
import { palette, theme } from '../utils';

export const Icon = (styleProps) => cssClass`
  fill: ${styleProps.color ? palette(styleProps.color)(styleProps) : 'inherit'};
  position: relative;
  height: 1em;
  width: 1em;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
