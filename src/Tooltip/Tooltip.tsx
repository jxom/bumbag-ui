import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
import { TooltipProps as ReakitTooltipProps } from 'reakit/ts/Tooltip/Tooltip';

import { Placement, placementPropType } from '../types';
import _Tooltip from './styled';

export interface LocalTooltipProps {
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
}
export type TooltipProps = ReakitTooltipProps & LocalTooltipProps;

export const Tooltip: React.FunctionComponent<LocalTooltipProps> = ({ children, ...props }) => (
  <_Tooltip {...props}>{children}</_Tooltip>
);

Tooltip.propTypes = {
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
Tooltip.defaultProps = {
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

// @ts-ignore
const C: React.FunctionComponent<TooltipProps> = Tooltip;
export default C;
