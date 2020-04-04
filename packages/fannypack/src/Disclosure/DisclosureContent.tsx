import React from 'react';
import {
  Box as ReakitBox,
  DisclosureContentProps as ReakitDisclosureContentProps,
  useDisclosureContent as useReakitDisclosureContent
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DisclosureContext } from './DisclosureState';
import * as styles from './styles';

export type LocalDisclosureContentProps = {};
export type DisclosureContentProps = BoxProps & ReakitDisclosureContentProps & LocalDisclosureContentProps;

const useProps = createHook<DisclosureContentProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const disclosureContext = React.useContext(DisclosureContext);
    props = { ...props, ...disclosureContext.disclosure };

    let {
      baseId,
      visible,
      unstable_animating,
      unstable_animated,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...htmlProps
    } = props;
    const disclosureContentProps = useReakitDisclosureContent(
      {
        baseId,
        visible,
        unstable_animating,
        unstable_animated,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...disclosureContentProps });

    const className = useClassName({
      style: styles.DisclosureContent,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Disclosure.Content' }
);

export const DisclosureContent = createComponent<DisclosureContentProps>(
  props => {
    const disclosureContentProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: disclosureContentProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Disclosure.Content'
  }
);
