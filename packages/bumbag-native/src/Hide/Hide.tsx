import * as React from 'react';
import { useTheme } from 'bumbag/utils/useTheme';

import { Direction } from '../types';
import { useBreakpoint } from '../utils/useBreakpoint';
import { getNextBreakpoint } from '../utils/getNextBreakpoint';

export type LocalHideProps = {
  // When **above** the breakpoint specified, children will be hidden.
  above?: string;
  // When **below** the breakpoint specified, children will be hidden.
  below?: string;
  // The direction of the breakpoints. `'width' | 'height'`
  direction?: Direction;
  children: React.ReactNode;
};
export type HideProps = LocalHideProps;

export function Hide(props: HideProps) {
  const { above, below, direction = 'width', children } = props;

  const { theme } = useTheme();

  let breakpoint;
  if (above) {
    const aboveBreakpoint = getNextBreakpoint(above, { direction, theme });
    breakpoint = `min-${aboveBreakpoint}`;
  } else if (below) {
    breakpoint = `max-${below}`;
  }

  const isWithin = useBreakpoint(direction, breakpoint);

  return isWithin ? null : children;
}
