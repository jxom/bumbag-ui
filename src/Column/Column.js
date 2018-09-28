// @flow
import React, { type Node } from 'react';

import type { ColumnSpread, ColumnSpreadOffset } from '../types';
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

const Column = ({ children, className, spread, spreadOffset, ...props }: Props) => (
  <_Column className={className} spread={spread} spreadOffset={spreadOffset} {...props}>
    {children}
  </_Column>
);

Column.defaultProps = {
  className: null,
  spread: null,
  spreadMobile: null,
  spreadTablet: null,
  spreadDesktop: null,
  spreadWidescreen: null,
  spreadFullHD: null,
  spreadOffset: null,
  spreadMobileOffset: null,
  spreadTabletOffset: null,
  spreadDesktopOffset: null,
  spreadWidescreenOffset: null,
  spreadFullHDOffset: null
};

export default Column;
