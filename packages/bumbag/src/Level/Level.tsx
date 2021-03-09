import { Box as ReakitBox } from 'reakit';

import { Breakpoint } from '../types';
import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Flex, FlexProps } from '../Flex';

import * as styles from './Level.styles';

export type LocalLevelProps = {
  /** Sets the orientation of the level. */
  orientation?: 'vertical' | 'horizontal';
  /** Sets the spacing of the level when it snaps to a vertical orientation. */
  spacing?: string;
  /** Sets the breakpoint at which the level should become vertical; null to disable vertical snapping. */
  verticalBelow?: Breakpoint | null;
};
export type LevelProps = FlexProps & LocalLevelProps;

const useProps = createHook<LevelProps>(
  (props, { themeKey }) => {
    const flexProps = Flex.useProps(props);

    const className = useClassName({
      style: styles.Level,
      styleProps: props,
      themeKey,
      prevClassName: flexProps.className,
    });

    return { ...flexProps, className };
  },
  {
    defaultProps: { alignX: 'center', orientation: 'horizontal', spacing: 'major-2', verticalBelow: 'tablet' },
    themeKey: 'Level',
  }
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
