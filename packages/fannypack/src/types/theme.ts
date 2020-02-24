import { IconDefinition } from '@fortawesome/fontawesome-common-types';

import { ActionButtonsProps } from '../ActionButtons';
import { AlertProps } from '../Alert';
import { AvatarProps } from '../Avatar';
import { BadgeProps } from '../Badge';
import { ButtonProps } from '../Button';
import { BlockProps } from '../Block';
import { BlockquoteProps } from '../Blockquote';
import { BoxProps } from '../Box';
import { BreadcrumbProps, BreadcrumbLinkProps, BreadcrumbSeparatorProps, BreadcrumbItemProps } from '../Breadcrumb';
import {
  CalloutProps,
  CalloutContentProps,
  CalloutHeaderProps,
  CalloutTitleProps,
  CalloutFooterProps,
  CalloutIconProps
} from '../Callout';
import { CardProps } from '../Card';
import { CheckboxProps, CheckboxFieldProps, CheckboxGroupProps, CheckboxGroupFieldProps } from '../Checkbox';
import { CodeProps } from '../Code';
import { ColumnsProps, ColumnProps } from '../Columns';
import { ContainerProps } from '../Container';
import {
  DialogProps,
  DialogContentProps,
  DialogHeaderProps,
  DialogTitleProps,
  DialogFooterProps,
  DialogIconProps
} from '../Dialog';
import { DividerProps } from '../Divider';
import {
  DropdownMenuProps,
  DropdownMenuPopoverProps,
  DropdownMenuDisclosureProps,
  DropdownMenuDividerProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps
} from '../DropdownMenu';
import { FieldSetProps } from '../FieldSet';
import { FieldWrapperProps } from '../FieldWrapper';
import { FlexProps } from '../Flex';
import { GridProps } from '../Grid/Grid';
import { GridItemProps } from '../Grid/GridItem';
import { GroupProps } from '../Group';
import { HiddenProps, HiddenDisclosureProps } from '../Hidden';
import { HeadingProps } from '../Heading';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { InlineProps } from '../Inline';
import { InlineBlockProps } from '../InlineBlock';
import { InlineFlexProps } from '../InlineFlex';
import { InputProps, InputFieldProps } from '../Input';
import { LabelProps } from '../Label';
import { LayoutSetProps } from '../LayoutSet';
import { LinkProps } from '../Link';
import { ListProps } from '../List/List';
import { ListItemProps } from '../List/ListItem';
import { ModalProps, ModalBackdropProps, ModalDisclosureProps } from '../Modal';
import { NavigationProps } from '../Navigation';
import { OverlayProps, OverlayDisclosureProps } from '../Overlay';
import { PaginationProps } from '../Pagination';
import { ParagraphProps } from '../Paragraph';
import {
  PopoverProps,
  PopoverArrowProps,
  PopoverBackdropProps,
  PopoverContentProps,
  PopoverDisclosureProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  PopoverTitleProps
} from '../Popover';
import { PortalProps } from '../Portal';
import { ProgressBarProps } from '../ProgressBar';
import { RadioProps, RadioGroupProps, RadioGroupFieldProps } from '../Radio';
import { RatingProps, RatingItemProps } from '../Rating';
import { RoverProps } from '../Rover';
import { SelectProps, SelectFieldProps } from '../Select';
import { SetProps } from '../Set';
import { SpinnerProps } from '../Spinner';
import { SwitchProps, SwitchFieldProps, SwitchGroupProps, SwitchGroupFieldProps } from '../Switch';
import { TabbableProps } from '../Tabbable';
import { TabsProps, TabsListProps, TabsTabProps, TabsPanelProps } from '../Tabs';
import { TagProps } from '../Tag';
import { TextProps } from '../Text';
import { TextareaProps, TextareaFieldProps } from '../Textarea';
import { TooltipProps, TooltipArrowProps, TooltipContentProps, TooltipReferenceProps } from '../Tooltip';
import { TemplateProps } from '../_template';
import { ParsedIcons, Opts as ParseIconsOpts } from '../utils/parseIcons';

export type Stylesheet = any; // TODO: fix

export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);

export type BreakpointsThemeConfig = {
  mobile?: ThemeAttribute<number>;
  tablet?: ThemeAttribute<number>;
  desktop?: ThemeAttribute<number>;
  widescreen?: ThemeAttribute<number>;
  fullHD?: ThemeAttribute<number>;
};
export type AltitudesThemeConfig = {
  [key: string]: ThemeAttribute<Stylesheet>;
};
export type BordersThemeConfig = {
  default?: ThemeAttribute<{ color: string; width: string }>;
  [key: string]: ThemeAttribute<{ color: string; width: string }>;
};
export type BorderRadiiThemeConfig = {
  default?: ThemeAttribute<string>;
  [key: string]: ThemeAttribute<string>;
};
export type GlobalThemeConfig = {
  css?: {
    root: ThemeAttribute<Stylesheet>;
  };
  fontFamily?: string;
  fontSize?: number;
};
export type FontSizeThemeConfig = {
  [key: string]: number;
};
export type FontWeightsThemeConfig = {
  [key: string]: number;
};
export type LayoutThemeConfig = {
  gapUnit?: ThemeAttribute<number>;
  minorUnit?: ThemeAttribute<number>;
  majorUnit?: ThemeAttribute<number>;
};
export type PaletteThemeConfig = {
  [key: string]: string;
};

export type ActionButtonsThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ActionButtonsProps>;
};
export type AlertThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Description?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  IconWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  CloseButton?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AlertProps>;
};
export type AvatarThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    circle?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AvatarProps>;
};
export type BadgeThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    attached?: ThemeAttribute<Stylesheet>;
    sizes?: {
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<BadgeProps>;
};
export type BreadcrumbThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbItemProps>;
  };
  Separator?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbSeparatorProps>;
  };
  Link?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbLinkProps>;
  };
  defaultProps?: Partial<BreadcrumbProps>;
};
export type BlockThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BlockProps>;
};
export type BlockquoteThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BlockquoteProps>;
};
export type BoxThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BoxProps>;
};
export type ButtonThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
    ghost?: ThemeAttribute<Stylesheet>;
    hover?: ThemeAttribute<Stylesheet>;
    hoveractive?: ThemeAttribute<Stylesheet>;
    loading?: ThemeAttribute<Stylesheet>;
    link?: ThemeAttribute<Stylesheet>;
    outlined?: ThemeAttribute<Stylesheet>;
    static?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<ButtonProps>;
};
export type CalloutThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutContentProps>;
  };
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutHeaderProps>;
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutTitleProps>;
  };
  Footer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutFooterProps>;
  };
  IconWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutIconProps>;
  };
  Close?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CalloutProps>;
};
export type CardThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Footer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CardProps>;
};
export type CheckboxThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CheckboxProps>;
};
export type CheckboxFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxFieldProps>;
};
export type CheckboxGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupProps>;
};
export type CheckboxGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupFieldProps>;
};
export type CodeThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    block?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CodeProps>;
};
export type ColumnsThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Column?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ColumnProps>;
  };
  defaultProps?: Partial<ColumnsProps>;
};
export type ContainerThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    layout?: ThemeAttribute<Stylesheet>;
    fluid?: ThemeAttribute<Stylesheet>;
  };
  tabletMargin?: ThemeAttribute<number>;
  fluidMargin?: ThemeAttribute<number>;
  defaultProps?: Partial<ContainerProps>;
};
export type DialogThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogContentProps>;
  };
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogHeaderProps>;
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogTitleProps>;
  };
  Footer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogFooterProps>;
  };
  IconWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogIconProps>;
  };
  Close?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<DialogProps>;
};
export type DividerThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DividerProps>;
};
export type DropdownMenuThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Popover?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuPopoverProps>;
  };
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuDisclosureProps>;
  };
  Divider?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuDividerProps>;
  };
  Group?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuGroupProps>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuItemProps>;
  };
  defaultProps?: Partial<DropdownMenuProps>;
};
export type FieldSetThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FieldSetProps>;
};
export type FieldWrapperThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  DescriptionText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  HintText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  OptionalText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  RequiredText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ValidationText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  TooltipTrigger?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  TooltipPopover?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<FieldWrapperProps>;
};
export type FlexThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FlexProps>;
};
export type GridThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<GridItemProps>;
  };
  defaultProps?: Partial<GridProps>;
};
export type GroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<GroupProps>;
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
      first?: ThemeAttribute<Stylesheet>;
      middle?: ThemeAttribute<Stylesheet>;
      last?: ThemeAttribute<Stylesheet>;
    };
  };
};
export type HeadingThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  h1?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  h2?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  h3?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  h4?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  h5?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  h6?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  subHeading?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<HeadingProps>;
};
export type HiddenThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<HiddenProps>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HiddenDisclosureProps>;
  };
};
export type HighlightedCodeThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    block?: ThemeAttribute<Stylesheet>;
  };
  Pre?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Line?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Token?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CodeProps>;
};
export type IconThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  iconSets?: Array<{
    icons: IconDefinition[];
    prefix?: ParseIconsOpts['prefix'];
    type: ParseIconsOpts['type'];
  }>;
  icons?: ParsedIcons;
  iconNames?: {
    info?: string;
    warning?: string;
    success?: string;
    danger?: string;
    [key: string]: string;
  };
  defaultProps?: Partial<IconProps>;
};
export type ImageThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    fixed?: ThemeAttribute<Stylesheet>;
    cover?: ThemeAttribute<Stylesheet>;
    contain?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
};
export type InlineThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineProps>;
};
export type InlineBlockThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineBlockProps>;
};
export type InlineFlexThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineFlexProps>;
};
export type InputThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
    placeholder?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<InputProps>;
};
export type InputFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InputFieldProps>;
};
export type LabelThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LabelProps>;
};
export type LayoutSetThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    child?: {
      root?: ThemeAttribute<Stylesheet>;
      horizontal?: ThemeAttribute<Stylesheet>;
      vertical?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<LayoutSetProps>;
};
export type LinkThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    hover?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LinkProps>;
};
export type ListThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    ordered?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ListItemProps>;
  };
  defaultProps?: Partial<ListProps>;
};
export type ModalThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    placements?: {
      center?: ThemeAttribute<Stylesheet>;
      top?: ThemeAttribute<Stylesheet>;
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
      bottom?: ThemeAttribute<Stylesheet>;
      topStart?: ThemeAttribute<Stylesheet>;
      topEnd?: ThemeAttribute<Stylesheet>;
      bottomStart?: ThemeAttribute<Stylesheet>;
      bottomEnd?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<ModalProps>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
  };
  Backdrop?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalBackdropProps>;
  };
};
export type NavigationThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<NavigationProps>;
};
export type OverlayThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    placements?: {
      center?: ThemeAttribute<Stylesheet>;
      top?: ThemeAttribute<Stylesheet>;
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
      bottom?: ThemeAttribute<Stylesheet>;
      topStart?: ThemeAttribute<Stylesheet>;
      topEnd?: ThemeAttribute<Stylesheet>;
      bottomStart?: ThemeAttribute<Stylesheet>;
      bottomEnd?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<OverlayProps>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
  };
};
export type PaginationThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  PrepositionText?: { css?: { root?: ThemeAttribute<Stylesheet> } };
  Button?: ButtonThemeConfig;
  Select?: SelectThemeConfig;
  defaultProps?: Partial<PaginationProps>;
};
export type ParagraphThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ParagraphProps>;
};
export type PopoverThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    placements?: {
      center?: ThemeAttribute<Stylesheet>;
      top?: ThemeAttribute<Stylesheet>;
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
      bottom?: ThemeAttribute<Stylesheet>;
      topStart?: ThemeAttribute<Stylesheet>;
      topEnd?: ThemeAttribute<Stylesheet>;
      bottomStart?: ThemeAttribute<Stylesheet>;
      bottomEnd?: ThemeAttribute<Stylesheet>;
    };
  };
  Arrow?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverArrowProps>;
  };
  Backdrop?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverBackdropProps>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverContentProps>;
  };
  Close?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverDisclosureProps>;
  };
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverHeaderProps>;
  };
  Footer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverFooterProps>;
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverTitleProps>;
  };
  defaultProps?: Partial<PopoverProps>;
};
export type PortalThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PortalProps>;
};
export type ProgressBarThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Indicator?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<ProgressBarProps>;
};
export type RadioThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<RadioProps>;
};
export type RatingThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<RatingItemProps>;
  };
  defaultProps?: Partial<RatingProps>;
};
export type RadioGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupProps>;
};
export type RadioGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupFieldProps>;
};
export type RoverThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RoverProps>;
};
export type TabbableThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TabbableProps>;
};
export type TabsThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  List?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsListProps>;
  };
  Tab?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
      selected?: ThemeAttribute<Stylesheet>;
      focus?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsTabProps>;
  };
  Panel?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsPanelProps>;
  };
  defaultProps?: Partial<TabsProps>;
};
export type TagThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    outlined?: ThemeAttribute<Stylesheet>;
    sizes?: {
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Close?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<TagProps>;
};
export type TextThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextProps>;
};
export type TextareaThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
    placeholder?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<TextareaProps>;
};
export type TextareaFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextareaFieldProps>;
};
export type TooltipThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    placements?: {
      center?: ThemeAttribute<Stylesheet>;
      top?: ThemeAttribute<Stylesheet>;
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
      bottom?: ThemeAttribute<Stylesheet>;
      topStart?: ThemeAttribute<Stylesheet>;
      topEnd?: ThemeAttribute<Stylesheet>;
      bottomStart?: ThemeAttribute<Stylesheet>;
      bottomEnd?: ThemeAttribute<Stylesheet>;
    };
  };
  Arrow?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipArrowProps>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipContentProps>;
  };
  Reference?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipReferenceProps>;
  };
  defaultProps?: Partial<TooltipProps>;
};
export type SelectThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SelectProps>;
};
export type SelectFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SelectFieldProps>;
};
export type SetThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    child?: {
      root?: ThemeAttribute<Stylesheet>;
      horizontal?: ThemeAttribute<Stylesheet>;
      vertical?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SetProps>;
};
export type SpinnerThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  vector?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  loaderCircle?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  trackCircle?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SpinnerProps>;
};
export type SwitchThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SwitchProps>;
};
export type SwitchFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchFieldProps>;
};
export type SwitchGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupProps>;
};
export type SwitchGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupFieldProps>;
};
export type TemplateThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TemplateProps>;
};

export type ThemeConfig = {
  altitudes?: AltitudesThemeConfig;
  borders?: BordersThemeConfig;
  borderRadii?: BorderRadiiThemeConfig;
  breakpoints?: BreakpointsThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  palette?: PaletteThemeConfig;

  ActionButtons?: ActionButtonsThemeConfig;
  Alert?: AlertThemeConfig;
  Avatar?: AvatarThemeConfig;
  Badge?: BadgeThemeConfig;
  Breadcrumb?: BreadcrumbThemeConfig;
  Box?: BoxThemeConfig;
  Block?: BlockThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
  Button?: ButtonThemeConfig;
  Callout?: CalloutThemeConfig;
  Card?: CardThemeConfig;
  Checkbox?: CheckboxThemeConfig;
  CheckboxField?: CheckboxFieldThemeConfig;
  CheckboxGroup?: CheckboxGroupThemeConfig;
  CheckboxGroupField?: CheckboxGroupFieldThemeConfig;
  Code?: CodeThemeConfig;
  Columns?: ColumnsThemeConfig;
  Container?: ContainerThemeConfig;
  Dialog?: DialogThemeConfig;
  DropdownMenu?: DropdownMenuThemeConfig;
  FieldWrapper?: FieldWrapperThemeConfig;
  Flex?: FlexThemeConfig;
  Grid?: GridThemeConfig;
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  Hidden?: HiddenThemeConfig;
  HighlightedCode?: HighlightedCodeThemeConfig;
  Icon?: IconThemeConfig;
  Image?: ImageThemeConfig;
  Inline?: InlineThemeConfig;
  InlineBlock?: InlineBlockThemeConfig;
  InlineFlex?: InlineFlexThemeConfig;
  Input?: InputThemeConfig;
  InputField?: InputFieldThemeConfig;
  LayoutSet?: LayoutSetThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Modal?: ModalThemeConfig;
  Navigation?: NavigationThemeConfig;
  Overlay?: OverlayThemeConfig;
  Pagination?: PaginationThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Popover?: PopoverThemeConfig;
  Portal?: PortalThemeConfig;
  ProgressBar?: ProgressBarThemeConfig;
  Radio?: RadioThemeConfig;
  RadioGroup?: RadioGroupThemeConfig;
  RadioGroupField?: RadioGroupFieldThemeConfig;
  Rating?: RatingThemeConfig;
  Rover?: RoverThemeConfig;
  Select?: SelectThemeConfig;
  SelectField?: SelectFieldThemeConfig;
  Set?: SetThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Switch?: SwitchThemeConfig;
  SwitchField?: SwitchFieldThemeConfig;
  SwitchGroup?: SwitchGroupThemeConfig;
  SwitchGroupField?: SwitchGroupFieldThemeConfig;
  Tabbable?: TabbableThemeConfig;
  Tabs?: TabsThemeConfig;
  Tag?: TagThemeConfig;
  Text?: TextThemeConfig;
  Textarea?: TextareaThemeConfig;
  TextareaField?: TextareaFieldThemeConfig;
  Tooltip?: TooltipThemeConfig;
  Template?: TemplateThemeConfig;
};
