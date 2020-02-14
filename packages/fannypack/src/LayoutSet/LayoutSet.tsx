import { Box as ReakitBox } from 'reakit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Set, SetProps } from '../Set';

import * as styles from './styles';

export type LocalLayoutSetProps = {
  isHorizontal?: boolean;
};
export type LayoutSetProps = SetProps & LocalLayoutSetProps;

const useProps = createHook<LayoutSetProps>(
  (props = {}, { themeKey, themeKeyOverride }) => {
    let isVertical = props.isVertical || !props.isHorizontal;

    const setProps = Set.useProps({ ...props, isVertical }, { themeKey: 'LayoutSet' });

    const className = useClassName({
      style: styles.LayoutSet,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: setProps.className
    });

    return { ...setProps, className };
  },
  {
    defaultProps: {
      isHorizontal: false,
      spacing: 'major-4',
      verticalBreakpoint: 'max-tablet'
    },
    themeKey: 'LayoutSet'
  }
);

export const LayoutSet = createComponent<LayoutSetProps>(
  props => {
    const layoutSetProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: layoutSetProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'LayoutSet'
  }
);
