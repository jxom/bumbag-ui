import { cssClass } from '../styled';
import { theme } from '../utils';

export const InlineBlock = styleProps => cssClass`
  display: inline-block;

  & {
    ${theme('InlineBlock.base')(styleProps)};
  }
`;
