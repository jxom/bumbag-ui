import { cssClass, theme } from '../styled';

export const InlineBlock = styleProps => cssClass`
  display: inline-block;

  & {
    ${theme('InlineBlock.base')(styleProps)};
  }
`;
