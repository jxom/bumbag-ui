import * as styles from './styles';
import { PageContent } from './PageContent';
import { PageContentWrapper } from './PageContentWrapper';

export const Page = Object.assign(
  {},
  {
    Content: PageContent,
    ContentWrapper: PageContentWrapper
  }
);

export * from './PageContent';
export * from './PageContentWrapper';
export { styles as pageContentStyles };
