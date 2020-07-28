import { Box as ReakitBox } from 'reakit';

import { Breakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Flex, FlexProps } from '../Flex';

import * as styles from './styles';

export type LocalLevelProps = {
  spacing?: string;
  verticalBelow?: Breakpoint;
};
export type LevelProps = FlexProps & LocalLevelProps;

const useProps = createHook<LevelProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const flexProps = Flex.useProps(props);

    const className = useClassName({
      style: styles.Level,
      styleProps: props,
      themeKey,
      themeKeyOverride,
      prevClassName: flexProps.className,
    });

    return { ...flexProps, className };
  },
  { defaultProps: { alignX: 'center', spacing: 'major-2', verticalBelow: 'desktop' }, themeKey: 'Level' }
);

export const Level = createComponent<LevelProps>(
  (props) => {
    const textProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: textProps });
  },
  {
    attach: {
      useProps,
    },
    themeKey: 'Level',
  }
);
