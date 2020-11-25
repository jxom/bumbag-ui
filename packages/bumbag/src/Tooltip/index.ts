import * as styles from './Tooltip.styles';
import { Tooltip as _Tooltip, TooltipContent, TooltipArrow, TooltipReference } from './Tooltip';
import { useTooltipState, TooltipState } from './TooltipState';

export * from './Tooltip';
export * from './TooltipState';
export const Tooltip = Object.assign(_Tooltip, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Reference: TooltipReference,
  useState: useTooltipState,
  State: TooltipState,
});
export { styles as tooltipStyles };
