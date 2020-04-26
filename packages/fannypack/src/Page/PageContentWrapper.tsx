import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalPageContentWrapperProps = {};
export type PageContentWrapperProps = BoxProps & LocalPageContentWrapperProps;

const useProps = createHook<PageContentWrapperProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const boxProps = Box.useProps(props);

    const className = useClassName({
      style: styles.PageContentWrapper,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: boxProps.className
    });

    return { ...boxProps, className };
  },
  { themeKey: 'PageContent.Wrapper' }
);

export const PageContentWrapper = createComponent<PageContentWrapperProps>(
  props => {
    const pageContentWrapperProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: pageContentWrapperProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'PageContent.Wrapper'
  }
);
