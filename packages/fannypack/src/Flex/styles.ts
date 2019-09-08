import { cssClass } from '../styled';
import { theme } from '../utils';

export const Flex = styleProps => cssClass`
  display: flex;

  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
