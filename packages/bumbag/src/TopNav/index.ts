import * as styles from './TopNav.styles';
import { TopNav as _TopNav } from './TopNav';
import { TopNavSection } from './TopNavSection';
import { TopNavItem } from './TopNavItem';

export * from './TopNav';
export * from './TopNavSection';
export * from './TopNavItem';
export const TopNav = Object.assign(_TopNav, {
  Section: TopNavSection,
  Item: TopNavItem,
});
export { styles as topNavStyles };
