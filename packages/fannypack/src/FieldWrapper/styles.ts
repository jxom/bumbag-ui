import { cssClass } from '../styled';
import { theme } from '../utils';

export const FieldWrapper = styleProps => cssClass`
  & {
    ${theme(`${styleProps.themeKey}.base`)(styleProps)};
  }
`;
