import { cssClass, theme } from '../styled';

export const Block = styleProps => cssClass`
  display: block;

  & {
    ${theme('Block.base')(styleProps)};
  }
`;
