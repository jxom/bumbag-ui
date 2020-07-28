import { cssClass } from '../styled';
import { space, theme } from '../utils';

export const Paragraph = (styleProps) => cssClass`
  &:not(:last-child) {
    margin-bottom: ${space(4)(styleProps)}rem;
  }

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
