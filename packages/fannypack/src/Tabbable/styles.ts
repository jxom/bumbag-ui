import { cssClass } from '../styled';
import { theme } from '../utils';

export const Tabbable = styleProps => cssClass`
  &[disabled],
  &[aria-disabled="true"] {
    opacity: 0.5;

    & {
      ${theme('Tabbable.disabled')(styleProps)};
    }
  }

  & {
    ${theme('Tabbable.base')(styleProps)};
  }
`;
