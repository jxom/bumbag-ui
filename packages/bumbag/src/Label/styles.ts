import { cssClass } from '../styled';
import { fontSize, theme, fontWeight } from '../utils';

export const Label = (styleProps) => cssClass`
  display: block;
  font-weight: ${fontWeight('semibold')(styleProps)};
  line-height: 1;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
