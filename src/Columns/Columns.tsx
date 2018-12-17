import * as React from 'react';
import * as PropTypes from 'prop-types';
import { BoxProps as ReakitBoxProps } from '@jmoxey/reakit/ts';

import { breakpointPropType } from '../types';
import ColumnsContext from './ColumnsContext';
import _Columns from './styled';

export type LocalColumnsProps = {
  children: React.ReactNode;
  className?: string;
  isGapless?: boolean;
  isOneLine?: boolean;
  minBreakpoint?: 'tablet' | 'mobile';
};
export type ColumnsProps = LocalColumnsProps & ReakitBoxProps;

export const Columns: React.FunctionComponent<LocalColumnsProps> = ({
  children,
  className,
  isGapless,
  isOneLine,
  minBreakpoint,
  ...props
}) => (
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

Columns.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isGapless: PropTypes.bool,
  isOneLine: PropTypes.bool,
  minBreakpoint: PropTypes.oneOf(['tablet', 'mobile']) as PropTypes.Validator<LocalColumnsProps['minBreakpoint']>
};
Columns.defaultProps = {
  className: undefined,
  isGapless: false,
  isOneLine: false,
  minBreakpoint: undefined
};

const C: React.FunctionComponent<ColumnsProps> = Columns;
export default C;
