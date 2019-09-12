import { Box as ReakitBox, HiddenProps as ReakitHiddenProps, useHidden as useReakitHidden } from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalHiddenProps = {};
export type HiddenProps = BoxProps & ReakitHiddenProps & LocalHiddenProps;

const useProps = createHook<HiddenProps>(
  (props, themeKey) => {
    let {
      visible,
      unstable_hiddenId,
      unstable_animating,
      unstable_animated,
      unstable_stopAnimation,
      unstable_setIsMounted,
      ...htmlProps
    } = props;
    const hiddenProps = useReakitHidden(
      {
        visible,
        unstable_hiddenId,
        unstable_animating,
        unstable_animated,
        unstable_stopAnimation,
        unstable_setIsMounted
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...hiddenProps });

    const className = useClassName({
      style: styles.Hidden,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Hidden' }
);

export const Hidden = createComponent<HiddenProps>(
  props => {
    const hiddenProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: hiddenProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Hidden'
  }
);
