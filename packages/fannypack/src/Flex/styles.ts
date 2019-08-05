import { cssClass, theme } from '../styled';

export const Flex = styleProps => cssClass`
  display: flex;

  & {
    ${theme('Flex.base')(styleProps)};
  }
`;
