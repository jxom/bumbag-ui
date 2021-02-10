import * as React from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'bumbag/utils/useTheme';
import { theme as getTheme } from './theme';

import { Direction } from '../types';

export function useBreakpoint(direction: Direction, breakpoint: string) {
  const { theme } = useTheme();
  const breakpoints = getTheme('breakpoints')({ theme });
  const directionBreakpoints = breakpoints[direction];
  const size = Dimensions.get('window')[direction];

  function isWithin(directionBreakpoints) {
    const directionBreakpointsArray = Object.entries(directionBreakpoints);

    if (breakpoint.includes('max-')) {
      const strippedBreakpoint = breakpoint.replace('max-', '');
      const maxSize = directionBreakpoints[strippedBreakpoint];
      return size < maxSize;
    } else if (breakpoint.includes('min-')) {
      const strippedBreakpoint = breakpoint.replace('min-', '');
      const targetBreakpointIndex =
        directionBreakpointsArray.findIndex((breakpoint) => breakpoint[0] === strippedBreakpoint) - 1;
      const minSize = directionBreakpointsArray?.[targetBreakpointIndex]?.[1];
      return size >= minSize;
    } else {
      const maxSize = directionBreakpoints[breakpoint];

      const targetBreakpointIndex = directionBreakpointsArray.findIndex((bp) => bp[0] === breakpoint) - 1;
      const minSize = directionBreakpointsArray?.[targetBreakpointIndex]?.[1] || 0;

      return size < maxSize && size >= minSize;
    }
  }

  if (Array.isArray(directionBreakpoints)) {
    return directionBreakpoints.some((directionBreakpoints) => isWithin(directionBreakpoints));
  }
  return isWithin(directionBreakpoints);
}
