import { Box as ReakitBox, RoverProps as ReakitRoverProps, useRover as useReakitRover } from 'reakit';
import _omit from 'lodash/omit';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import * as styles from './styles';

export type LocalRoverProps = {};
export type RoverProps = BoxProps & ReakitRoverProps & LocalRoverProps;

const useProps = createHook<RoverProps>(
  (props, themeKey) => {
    let {
      disabled,
      focusable,
      orientation,
      stops,
      currentId,
      register,
      unregister,
      move,
      next,
      previous,
      first,
      last,
      stopId,
      unstable_clickKeys,
      unstable_moves,
      ...htmlProps
    } = props;
    const roverProps = useReakitRover(
      {
        disabled,
        focusable,
        orientation,
        stops,
        currentId,
        register,
        unregister,
        move,
        next,
        previous,
        first,
        last,
        stopId,
        unstable_clickKeys,
        unstable_moves
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...roverProps });

    const className = useClassName({
      style: styles.Rover,
      styleProps: props,
      themeKey,
      prevClassName: htmlProps.className
    });

    return { ...htmlProps, className };
  },
  { themeKey: 'Rover' }
);

export const Rover = createComponent<RoverProps>(
  props => {
    const roverProps = useProps(props);
    return createElement({ children: props.children, component: ReakitBox, use: props.use, htmlProps: roverProps });
  },
  {
    attach: {
      useProps
    },
    themeKey: 'Rover'
  }
);
