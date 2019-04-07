import * as React from 'react';
import * as PropTypes from 'prop-types';
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

export const groupPropTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  isVertical: PropTypes.bool,
  theme: PropTypes.object,
  verticalAt: PropTypes.oneOfType([breakpointPropType, PropTypes.number])
};
Group.propTypes = groupPropTypes;

export const groupDefaultProps = {
  className: undefined,
  isVertical: false,
  theme: {},
  verticalAt: undefined
};
Group.defaultProps = groupDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<GroupProps> = withTheme(Group);
export default C;
