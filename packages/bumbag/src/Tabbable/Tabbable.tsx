import { Box as ReakitBox, TabbableProps as ReakitTabbableProps, useTabbable as useReakitTabbable } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Tabbable.styles';

export type LocalTabbableProps = {};
export type TabbableProps = BoxProps & ReakitTabbableProps & LocalTabbableProps;

const useProps = createHook<TabbableProps>(
  (props, { themeKey }) => {
    let { disabled, focusable, ...htmlProps } = props;
    const tabbableProps = useReakitTabbable(
      {
        disabled,
        focusable,
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...tabbableProps });

    const className = useClassName({
      style: styles.Tabbable,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className,
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Tabbable' }
);

export const Tabbable = createComponent<TabbableProps>(
  (props) => {
    const tabbableProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: tabbableProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Tabbable',
    },
    themeKey: 'Tabbable',
  }
);
