import { cssClass } from '../styled';
import { fontWeight, theme } from '../utils';

export const Pagination = styleProps => cssClass`
  display: flex;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PaginationButton = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PaginationSelect = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const PaginationPrepositionText = styleProps => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
