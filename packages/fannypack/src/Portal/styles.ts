import { cssClass } from '../styled';
import { theme } from '../utils';

export const Portal = styleProps => cssClass`
  & {
    ${theme('Portal.base')(styleProps)};
  }
`;
