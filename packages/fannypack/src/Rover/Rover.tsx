import React from 'react';
import { Box as ReakitBox, RoverProps as ReakitRoverProps, useRover as useReakitRover } from 'reakit';
import _omit from 'lodash/omit';
import _merge from 'lodash/merge';

import { useClassName, createComponent, createElement, createHook } from '../utils';
import { Box, BoxProps } from '../Box';

import { RoverContext } from './RoverState';
import * as styles from './styles';

export type LocalRoverProps = {};
export type RoverProps = BoxProps & ReakitRoverProps & LocalRoverProps;

const useProps = createHook<RoverProps>(
  (props, { themeKey, themeKeyOverride }) => {
    const roverContext = React.useContext(RoverContext);
    props = { ...props, ...roverContext.rover };

    let {
      baseId,
      disabled,
      focusable,
      orientation,
      stops,
      id,
      currentId,
      register,
      unregister,
      move,
      next,
      previous,
      first,
      last,
      stopId,
      unstable_clickOnEnter,
      unstable_clickOnSpace,
      unstable_idCountRef,
      unstable_moves,
      ...htmlProps
    } = props;
    const roverProps = useReakitRover(
      {
        baseId,
        disabled,
        focusable,
        orientation,
        stops,
        id,
        currentId,
        register,
        unregister,
        move,
        next,
        previous,
        first,
        last,
        stopId: process.env.NODE_ENV === 'test' ? 'test' : stopId,
        unstable_clickOnEnter,
        unstable_clickOnSpace,
        unstable_idCountRef,
        unstable_moves
      },
      htmlProps
    );
    htmlProps = Box.useProps({ ...props, ...roverProps });

    const className = useClassName({
      style: styles.Rover,
      styleProps: props,
      themeKey,
      themeKeyOverride,
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
