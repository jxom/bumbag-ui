import { cssClass } from '../styled';
import { getCapsizeStyles, theme, fontWeight } from '../utils';

export const Label = (styleProps) => cssClass`
  display: block;
  font-weight: 500;
  ${getCapsizeStyles({ lineHeight: '100', includeBottomGap: true })(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
