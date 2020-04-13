import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Container, ContainerProps } from '../Container';

import { PageContentWrapper, PageContentWrapperProps } from './PageContentWrapper';
import * as styles from './styles';

export type LocalPageContentProps = {
  wrapperProps?: Partial<PageContentWrapperProps>;
};
export type PageContentProps = ContainerProps & LocalPageContentProps;

const useProps = createHook<PageContentProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const { overrides, wrapperProps, ...restProps } = props;
    const containerProps = Container.useProps({
      ...restProps,
      wrapElement: element => (
        <PageContentWrapper overrides={overrides} {...wrapperProps}>
          {element}
        </PageContentWrapper>
      )
    });

    const className = useClassName({
      style: styles.PageContent,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: containerProps.className
    });

    return { ...containerProps, className };
  },
  { themeKey: 'Page.Content' }
);

export const PageContent = createComponent<PageContentProps>(
  props => {
    const pageContentProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageContentProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Page.Content'
  }
);
