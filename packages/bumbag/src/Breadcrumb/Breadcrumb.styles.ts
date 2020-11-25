import { css, cssClass } from '../styled';
import { fontWeight, space, theme } from '../utils';

export const Breadcrumb = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const BreadcrumbItem = (styleProps) => cssClass`
  &&&&&:not(:last-child) {
    margin-right: ${space(2)(styleProps)}rem;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const BreadcrumbSeparator = (styleProps) => cssClass`
  display: inline;
  margin-left: ${space(2)(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const BreadcrumbLink = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
