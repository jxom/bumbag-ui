import React from 'react';
import {
  Box as ReakitBox,
  DisclosureRegionProps as ReakitDisclosureRegionProps,
  useDisclosureRegion as useReakitDisclosureRegion
} from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { DisclosureContext } from './DisclosureState';
import * as styles from './styles';

export type LocalDisclosureRegionProps = {};
export type DisclosureRegionProps = BoxProps & ReakitDisclosureRegionProps & LocalDisclosureRegionProps;

const useProps = createHook<DisclosureRegionProps>(
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
    const disclosureRegionProps = useReakitDisclosureRegion(
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
    htmlProps = Box.useProps({ ...props, ...disclosureRegionProps });

    const className = useClassName({
      style: styles.DisclosureRegion,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Disclosure.Region' }
);

export const DisclosureRegion = createComponent<DisclosureRegionProps>(
  props => {
    const disclosureRegionProps = useProps(props);
    return createElement({
      children: props.children,
      component: ReakitBox,
      use: props.use,
      htmlProps: disclosureRegionProps
    });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Disclosure.Region'
  }
);
