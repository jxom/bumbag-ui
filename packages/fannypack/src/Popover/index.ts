import * as styles from './styles';
import {
  Popover as _Popover,
  PopoverArrow,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTitle
} from './Popover';
import { PopoverBackdrop } from './PopoverBackdrop';
import { PopoverDisclosure } from './PopoverDisclosure';
import { usePopoverState } from './PopoverState';

export * from './Popover';
export * from './PopoverBackdrop';
export * from './PopoverDisclosure';
export * from './PopoverState';
export const Popover = Object.assign(_Popover, {
  Arrow: PopoverArrow,
  Backdrop: PopoverBackdrop,
  Content: PopoverContent,
  Disclosure: PopoverDisclosure,
  Footer: PopoverFooter,
  Header: PopoverHeader,
  Title: PopoverTitle,
  useState: usePopoverState
});
export { styles as popoverStyles };
