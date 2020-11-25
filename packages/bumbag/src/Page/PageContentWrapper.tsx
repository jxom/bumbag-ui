import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Page.styles';

export type LocalPageContentWrapperProps = {};
export type PageContentWrapperProps = BoxProps & LocalPageContentWrapperProps;

const useProps = createHook<PageContentWrapperProps>(
  (props, { themeKey }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.PageContentWrapper,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className };
  },
  { themeKey: 'PageContent.Wrapper' }
);

export const PageContentWrapper = createComponent<PageContentWrapperProps>(
  (props) => {
    const pageContentWrapperProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageContentWrapperProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'PageContent.Wrapper',
    },
    themeKey: 'PageContent.Wrapper',
  }
);
