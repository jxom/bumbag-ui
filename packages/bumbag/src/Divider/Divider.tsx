import { Box as ReakitBox, useSeparator as useReakitSeparator, SeparatorProps as ReakitSeparatorProps } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './Divider.styles';

export type LocalDividerProps = {};
export type DividerProps = BoxProps & ReakitSeparatorProps & LocalDividerProps;

const useProps = createHook<DividerProps>(
  (props, { themeKey }) => {
    let { orientation, ...htmlProps } = props;
    const separatorProps = useReakitSeparator(
      {
        orientation,
      },
      htmlProps
    );
    const boxProps = Box.useProps({ ...props, ...separatorProps });

    const className = useClassName({
      style: styles.Divider,
      styleProps: props,
      themeKey,
      prevClassName: boxProps.className,
    });

    return { ...boxProps, className, children: undefined };
  },
  { themeKey: 'Divider' }
);

export const Divider = createComponent<DividerProps>(
  (props) => {
    const dividerProps = useProps(props);
    return createElement({ component: ReakitBox, use: props.use, htmlProps: dividerProps });
  },
  {
    attach: {
      useProps,
      displayName: 'Divider',
    },
    defaultProps: {
      use: 'hr',
    },
    themeKey: 'Divider',
  }
);
