import * as React from 'react';
import { Box as ReakitBox } from 'reakit';

import { Palette, Size } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Badge.styles';

export type LocalBadgeProps = {
  /** Indicates if the badge is attached to it's parent. */
  isAttached?: boolean;
  /** The color of the badge. */
  palette?: Palette;
  /** The size of the badge. */
  size?: Size;
};
export type BadgeProps = BoxProps & LocalBadgeProps;

const useProps = createHook<BadgeProps>(
  (props, { themeKey }) => {
    const ref = React.useRef();
    const boxProps = Box.useProps({ ...props, ref });

    const className = useClassName({
      style: styles.Badge,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    React.useEffect(() => {
      if (ref && ref.current) {
        // @ts-ignore
        const parentElement = ref.current.parentElement;
        parentElement.setAttribute('style', 'position:relative;');
      }
    }, []);

    return { ...boxProps, className };
  },
  { defaultProps: { palette: 'primary' }, themeKey: 'Badge' }
);

export const Badge = createComponent<BadgeProps>(
  (props) => {
    const badgeProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: badgeProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Badge',
    },
    defaultProps: {},
    themeKey: 'Badge',
  }
);
