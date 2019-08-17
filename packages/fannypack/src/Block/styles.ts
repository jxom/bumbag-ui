import { cssClass } from '../styled';
import { theme } from '../utils';

export const Block = styleProps => cssClass`
  display: block;

  & {
    ${theme('Block.base')(styleProps)};
  }
`;
