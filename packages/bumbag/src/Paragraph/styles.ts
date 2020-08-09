import { cssClass } from '../styled';
import { getCapsizeStyles, theme } from '../utils';

export const Paragraph = (styleProps) => cssClass`
  ${getCapsizeStyles({ lineHeight: 'paragraph', includeBottomGap: true })(styleProps)};

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
