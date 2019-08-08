import { cssClass, theme } from '../styled';

export const InlineFlex = styleProps => cssClass`
  display: inline-flex;

  & {
    ${theme('InlineFlex.base')(styleProps)};
  }
`;
