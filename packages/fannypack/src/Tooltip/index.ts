import * as styles from './styles';
import { Tooltip as _Tooltip, TooltipContent, TooltipArrow, TooltipReference } from './Tooltip';
import { useTooltipState } from './TooltipState';

export * from './Tooltip';
export * from './TooltipState';
export const Tooltip = Object.assign(_Tooltip, {
  Arrow: TooltipArrow,
  Content: TooltipContent,
  Reference: TooltipReference,
  useState: useTooltipState
});
export { styles as tooltipStyles };
