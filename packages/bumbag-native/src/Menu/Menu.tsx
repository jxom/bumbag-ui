import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Menu.styles';

export type LocalMenuProps = {
  hasDividers?: boolean;
};
export type MenuProps = BoxProps & LocalMenuProps;

const useProps = createHook<MenuProps>(
  (props) => {
    const { hasDividers } = props;

    const boxProps = Box.useProps(props);

    const children = Array.isArray(props.children) ? props.children : [props.children];

    return {
      ...boxProps,
      children: children.map((child, i) =>
        child
          ? React.cloneElement(child as any, {
              hasDivider: hasDividers && i < children.length - 1,
            })
          : null
      ),
    };
  },
  { themeKey: 'native.Menu' }
);

export const Menu = createComponent<MenuProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Menu,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Menu',
    },
    themeKey: 'native.Menu',
  }
);
