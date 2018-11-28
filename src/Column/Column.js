// @flow
import React, { type Node } from 'react';

import type { ColumnSpread, ColumnSpreadOffset } from '../types';
import ColumnsContext from '../Columns/ColumnsContext';
import _Column from './styled';

type Props = {
  children: Node,
  className?: string,
  spread?: ColumnSpread,
  spreadMobile?: ColumnSpread,
  spreadTablet?: ColumnSpread,
  spreadDesktop?: ColumnSpread,
  spreadWidescreen?: ColumnSpread,
  spreadFullHD?: ColumnSpread,
  spreadOffset?: ColumnSpreadOffset,
  spreadMobileOffset?: ColumnSpreadOffset,
  spreadTabletOffset?: ColumnSpreadOffset,
  spreadDesktopOffset?: ColumnSpreadOffset,
  spreadWidescreenOffset?: ColumnSpreadOffset,
  spreadFullHDOffset?: ColumnSpreadOffset
};

const Column = ({
  children,
  className,
  spread,
  spreadMobile,
  spreadTablet,
  spreadDesktop,
  spreadWidescreen,
  spreadFullHD,
  spreadOffset,
  spreadMobileOffset,
  spreadTabletOffset,
  spreadDesktopOffset,
  spreadWidescreenOffset,
  spreadFullHDOffset,
  ...props
}: Props) => (
  <ColumnsContext.Consumer>
    {({ isGapless, minBreakpoint }) => (
      <_Column
        className={className}
        isGapless={isGapless}
        minBreakpoint={minBreakpoint}
        spread={spread}
        spreadMobile={spreadMobile}
        spreadTablet={spreadTablet}
        spreadDesktop={spreadDesktop}
        spreadWidescreen={spreadWidescreen}
        spreadFullHD={spreadFullHD}
        spreadOffset={spreadOffset}
        spreadMobileOffset={spreadMobileOffset}
        spreadTabletOffset={spreadTabletOffset}
        spreadDesktopOffset={spreadDesktopOffset}
        spreadWidescreenOffset={spreadWidescreenOffset}
        spreadFullHDOffset={spreadFullHDOffset}
        {...props}
      >
        {children}
      </_Column>
    )}
  </ColumnsContext.Consumer>
);

Column.defaultProps = {
  className: undefined,
  spread: undefined,
  spreadMobile: undefined,
  spreadTablet: undefined,
  spreadDesktop: undefined,
  spreadWidescreen: undefined,
  spreadFullHD: undefined,
  spreadOffset: undefined,
  spreadMobileOffset: undefined,
  spreadTabletOffset: undefined,
  spreadDesktopOffset: undefined,
  spreadWidescreenOffset: undefined,
  spreadFullHDOffset: undefined
};

export default Column;
