// @flow
import React from 'react';

import ColumnsContext from './ColumnsContext';
import _Columns from './styled';

type Props = {
  children: Node,
  className?: string,
  isGapless?: boolean,
  isOneLine?: boolean,
  minBreakpoint?: 'tablet' | 'mobile'
};

const Columns = ({ children, className, isGapless, isOneLine, minBreakpoint, ...props }: Props) => (
  <ColumnsContext.Provider value={{ isGapless, minBreakpoint }}>
    <_Columns
      className={className}
      isGapless={isGapless}
      isOneLine={isOneLine}
      minBreakpoint={minBreakpoint}
      {...props}
    >
      {children}
    </_Columns>
  </ColumnsContext.Provider>
);

Columns.defaultProps = {
  className: null,
  isGapless: false,
  isOneLine: false,
  minBreakpoint: null
};

export default Columns;
