import { cssClass } from '../styled';
import { theme } from '../utils';

export const Rover = styleProps => cssClass`
  & {
    ${theme('Rover.base')(styleProps)};
  }
`;
