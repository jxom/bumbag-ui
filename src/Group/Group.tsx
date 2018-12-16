import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { GroupProps as ReakitGroupProps } from 'reakit/ts';
// @ts-ignore
import _get from 'lodash/get';
import { withTheme } from '../styled';
import { Omit, Breakpoint, breakpointPropType } from '../types';
import _Group from './styled';

export type LocalGroupProps = {
  children: React.ReactNode;
  className?: string;
  isVertical?: boolean;
  theme?: Object;
  verticalAt?: Breakpoint | number;
};
export type GroupProps = LocalGroupProps & Omit<ReakitGroupProps, 'verticalAt'>;

const getVerticalBreakpoint = ({ breakpoint, theme }: { breakpoint?: Breakpoint | number; theme?: Object }) => {
  return typeof breakpoint === 'number' ? breakpoint : _get(theme, `fannypack.layout[${breakpoint}Breakpoint]`);
};

export const Group: React.FunctionComponent<LocalGroupProps> = ({
  children,
  className,
  isVertical,
  theme,
  verticalAt: _verticalAt,
  ...props
}) => {
  const verticalAt = getVerticalBreakpoint({ breakpoint: _verticalAt, theme });
  return (
    <_Group className={className} vertical={isVertical} verticalAt={verticalAt} {...props}>
      {children}
    </_Group>
  );
};

Group.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVertical: PropTypes.bool,
  theme: PropTypes.object,
  verticalAt: PropTypes.oneOfType([breakpointPropType, PropTypes.number])
};
Group.defaultProps = {
  className: undefined,
  isVertical: false,
  theme: {},
  verticalAt: undefined
};

// @ts-ignore
const C: React.FunctionComponent<GroupProps> = withTheme(Group);
export default C;
