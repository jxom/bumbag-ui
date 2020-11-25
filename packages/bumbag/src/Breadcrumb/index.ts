import * as styles from './Breadcrumb.styles';
import { Breadcrumb as _Breadcrumb, BreadcrumbItem, BreadcrumbSeparator, BreadcrumbLink } from './Breadcrumb';

export * from './Breadcrumb';
export const Breadcrumb = Object.assign(_Breadcrumb, {
  Item: BreadcrumbItem,
  Separator: BreadcrumbSeparator,
  Link: BreadcrumbLink,
});
export { styles as breadcrumbStyles };
