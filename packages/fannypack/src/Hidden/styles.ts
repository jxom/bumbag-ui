import { css, cssClass } from '../styled';
import { space, theme } from '../utils';

export const Hidden = styleProps => cssClass`
  & {
    ${theme('Hidden.base')(styleProps)};
  }
`;

export const HiddenDisclosure = styleProps => cssClass`
  & {
    ${theme('HiddenDisclosure.base')(styleProps)};
  }
`;
