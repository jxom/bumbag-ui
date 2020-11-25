import React from 'react';
import {
  Box as ReakitBox,
  DisclosureContentProps as ReakitDisclosureContentProps,
  useDisclosureContent as useReakitDisclosureContent,
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DisclosureContext } from './DisclosureState';
import * as styles from './Disclosure.styles';

export type LocalDisclosureContentProps = {};
export type DisclosureContentProps = BoxProps & ReakitDisclosureContentProps & LocalDisclosureContentProps;

const useProps = createHook<DisclosureContentProps>(
  (props, { themeKey }) => {
    const disclosureContext = React.useContext(DisclosureContext);
    props = { ...props, ...disclosureContext.disclosure };

    let { baseId, visible, animating, animated, stopAnimation, ...htmlProps } = props;
    const disclosureContentProps = useReakitDisclosureContent(
      {
        baseId: process.env.NODE_ENV === 'test' ? 'test' : baseId,
        visible,
        animating,
        animated,
        stopAnimation,
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...disclosureContentProps });

    const className = useClassName({
      style: styles.DisclosureContent,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Disclosure.Content' }
);

export const DisclosureContent = createComponent<DisclosureContentProps>(
  (props) => {
    const disclosureContentProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: disclosureContentProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'Disclosure.Content',
    },
    themeKey: 'Disclosure.Content',
  }
);
