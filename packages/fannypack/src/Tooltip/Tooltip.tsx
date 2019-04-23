import * as React from 'react';
import * as PropTypes from 'prop-types';
import { TooltipProps as ReakitTooltipProps } from 'reakit/ts/Tooltip/Tooltip';

import { Placement, placementPropType } from '../types';
import _Tooltip from './styled';

export type LocalTooltipProps = {
  className?: string;
  children: React.ReactNode;
  delay?: string;
  duration?: string;
  expand?: boolean;
  /** Space between the tooltip content and the trigger. */
  gutter?: number | string;
  fade?: boolean;
  /** Placement of the tooltip. */
  placement?: Placement;
  slide?: boolean;
  timing?: string;
};
export type TooltipProps = ReakitTooltipProps & LocalTooltipProps;

export const Tooltip: React.FunctionComponent<LocalTooltipProps> = ({ children, ...props }) => (
  <_Tooltip {...props}>{children}</_Tooltip>
);

export const tooltipPropTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  delay: PropTypes.string,
  duration: PropTypes.string,
  expand: PropTypes.bool,
  gutter: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  fade: PropTypes.bool,
  placement: placementPropType,
  slide: PropTypes.bool,
  timing: PropTypes.string
};
Tooltip.propTypes = tooltipPropTypes;

export const tooltipDefaultProps: Partial<LocalTooltipProps> = {
  className: undefined,
  delay: undefined,
  duration: '100ms',
  expand: false,
  fade: false,
  gutter: 4,
  placement: 'bottom',
  slide: false,
  timing: 'ease-in-out'
};
Tooltip.defaultProps = tooltipDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<TooltipProps> = Tooltip;
export default C;
