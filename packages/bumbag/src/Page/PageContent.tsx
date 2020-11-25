import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Container, ContainerProps } from '../Container';

import { PageContentWrapper, PageContentWrapperProps } from './PageContentWrapper';
import * as styles from './Page.styles';

export type LocalPageContentProps = {
  /** Props to spread onto the wrapper component. */
  wrapperProps?: Partial<PageContentWrapperProps>;
};
export type PageContentProps = ContainerProps & LocalPageContentProps;

const useProps = createHook<PageContentProps>(
  (props, { themeKey }) => {
    const { overrides, wrapperProps, ...restProps } = props;
    const containerProps = Container.useProps({
      ...restProps,
      wrapElement: (element) => (
        <PageContentWrapper overrides={overrides} {...wrapperProps}>
          {element}
        </PageContentWrapper>
      ),
    });

    const className = useClassName({
      style: styles.PageContent,
      styleProps: props,
      themeKey,
      prevClassName: containerProps.className,
    });

    return { ...containerProps, className };
  },
  { defaultProps: { breakpoint: 'tablet', isLayout: true }, themeKey: 'PageContent' }
);

export const PageContent = createComponent<PageContentProps>(
  (props) => {
    const pageContentProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageContentProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'PageContent',
    },
    themeKey: 'PageContent',
  }
);
