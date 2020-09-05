import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { InterpolationWithTheme } from '@emotion/core';

import { ActionButtonsProps } from '../ActionButtons';
import { AlertProps } from '../Alert';
import { AutosuggestProps, AutosuggestFieldProps } from '../Autosuggest';
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
  CalloutIconProps,
} from '../Callout';
import { CardProps } from '../Card';
import { ClickableProps } from '../Clickable';
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
  DialogIconProps,
} from '../Dialog';
import { DisclosureProps, DisclosureContentProps } from '../Disclosure';
import { DividerProps } from '../Divider';
import {
  DropdownMenuProps,
  DropdownMenuPopoverProps,
  DropdownMenuButtonProps,
  DropdownMenuDividerProps,
  DropdownMenuGroupProps,
  DropdownMenuItemProps,
  DropdownMenuOptionGroupProps,
  DropdownMenuOptionItemProps,
} from '../DropdownMenu';
import { FieldStackProps } from '../FieldStack';
import { FieldWrapperProps } from '../FieldWrapper';
import { FlexProps } from '../Flex';
import { GridProps } from '../Grid/Grid';
import { GridItemProps } from '../Grid/GridItem';
import { GroupProps } from '../Group';
import { HeadingProps } from '../Heading';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { InlineProps } from '../Inline';
import { InlineBlockProps } from '../InlineBlock';
import { InlineFlexProps } from '../InlineFlex';
import { InputProps, InputFieldProps } from '../Input';
import { KeyProps } from '../Key';
import { LabelProps } from '../Label';
import { LevelProps } from '../Level';
import { StackProps } from '../Stack';
import { LinkProps } from '../Link';
import { ListProps } from '../List/List';
import { ListItemProps } from '../List/ListItem';
import { ModalProps, ModalBackdropProps, ModalDisclosureProps } from '../Modal';
import {
  MenuProps,
  MenuDividerProps,
  MenuGroupProps,
  MenuItemProps,
  MenuOptionGroupProps,
  MenuOptionItemProps,
} from '../Menu';
import { NavigationProps } from '../Navigation';
import { OptionButtonsProps, OptionButtonProps } from '../OptionButtons';
import { OverlayProps, OverlayDisclosureProps } from '../Overlay';
import {
  PageContentProps,
  PageContentWrapperProps,
  PageWithSidebarProps,
  PageWithSidebarDisclosureProps,
  PageWithSidebarMinimizeProps,
  PageWithHeaderProps,
  PageWithHeaderDisclosureProps,
} from '../Page';
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
  PopoverTitleProps,
} from '../Popover';
import { PortalProps } from '../Portal';
import { ProgressBarProps } from '../ProgressBar';
import { RadioProps, RadioGroupProps, RadioGroupFieldProps } from '../Radio';
import { RatingProps, RatingItemProps } from '../Rating';
import { RoverProps } from '../Rover';
import { SelectProps, SelectFieldProps } from '../Select';
import { SelectMenuProps, SelectMenuFieldProps } from '../SelectMenu';
import { SetProps } from '../Set';
import { SideNavProps, SideNavItemProps, SideNavLevelProps } from '../SideNav';
import { DrawerProps, DrawerDisclosureProps } from '../Drawer';
import { SpinnerProps } from '../Spinner';
import { SwitchProps, SwitchFieldProps, SwitchGroupProps, SwitchGroupFieldProps } from '../Switch';
import { TabbableProps } from '../Tabbable';
import { TabsProps, TabsListProps, TabsTabProps, TabsPanelProps } from '../Tabs';
import {
  TableProps,
  TableRowProps,
  TableBodyProps,
  TableCellProps,
  TableHeadProps,
  TableHeadCellProps,
  TableFootProps,
} from '../Table';
import { TagProps } from '../Tag';
import { TextProps } from '../Text';
import { TextareaProps, TextareaFieldProps } from '../Textarea';
import { ToastProps } from '../Toast';
import { TooltipProps, TooltipArrowProps, TooltipContentProps, TooltipReferenceProps } from '../Tooltip';
import { TopNavProps, TopNavItemProps, TopNavSectionProps } from '../TopNav';
import { TemplateProps } from '../_template';
import { ParsedIcons, ParseIconsOpts } from '../utils/parseIcons';
import { Breakpoint, Placement } from './props';

export type Stylesheet = InterpolationWithTheme<any>;
export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);
export type Variant<ThemeConfig> = { [key: string]: ThemeConfig };

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
  styles?: {
    base: ThemeAttribute<Stylesheet>;
  };
  fontSize?: number;
};
export type ModesThemeConfig = {
  localStoragePrefix?: string;
  enableLocalStorage?: boolean;
  useSystemColorMode?: boolean;
};
export type FontsThemeConfig = {
  importUrls?: Array<string>;
  default?: string;
  heading?: string;
  mono?: string;
  [key: string]: string | Array<string>;
};
export type FontMetricsThemeConfig = {
  [key: string]: {
    capHeight: number;
    ascent: number;
    descent: number;
    lineGap: number;
    unitsPerEm: number;
  };
};
export type FontSizeThemeConfig = {
  [key: string]: number;
};
export type FontWeightsThemeConfig = {
  [key: string]: number;
};
export type LineHeightsThemeConfig = {
  [key: string]: number;
};
export type LetterSpacingsThemeConfig = {
  [key: string]: string;
};
export type SpacingThemeConfig = {
  minorUnit?: ThemeAttribute<number>;
  majorUnit?: ThemeAttribute<number>;
  [key: string]: ThemeAttribute<number | string>;
};
export type PaletteThemeConfig = {
  [key: string]: string | { [key: string]: PaletteThemeConfig };
  modes?: {
    [key: string]: PaletteThemeConfig;
  };
};

export type ActionButtonsThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ActionButtonsProps>;
  variants?: Variant<ActionButtonsThemeConfig>;
  modes?: Variant<ActionButtonsThemeConfig>;
};
export type AlertThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Description?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Title?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  IconWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  CloseButton?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AlertProps>;
  variants?: Variant<AlertThemeConfig>;
  modes?: Variant<AlertThemeConfig>;
};
export type AutosuggestThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  StaticItem?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ClearButton?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ClearButtonWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Input?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Popover?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ItemText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AutosuggestProps>;
  variants?: Variant<AutosuggestThemeConfig>;
  modes?: Variant<AutosuggestThemeConfig>;
};
export type AutosuggestFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<AutosuggestFieldProps>;
  variants?: Variant<AutosuggestFieldThemeConfig>;
  modes?: Variant<AutosuggestFieldThemeConfig>;
};
export type AvatarThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    circle?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AvatarProps>;
  variants?: Variant<AvatarThemeConfig>;
  modes?: Variant<AvatarThemeConfig>;
};
export type BadgeThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    attached?: ThemeAttribute<Stylesheet>;
    sizes?: {
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<BadgeProps>;
  variants?: Variant<BadgeThemeConfig>;
  modes?: Variant<BadgeThemeConfig>;
};
export type BreadcrumbThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbItemProps>;
  };
  Separator?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbSeparatorProps>;
  };
  Link?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BreadcrumbLinkProps>;
  };
  defaultProps?: Partial<BreadcrumbProps>;
  variants?: Variant<BreadcrumbThemeConfig>;
  modes?: Variant<BreadcrumbThemeConfig>;
};
export type BlockThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BlockProps>;
  variants?: Variant<BlockThemeConfig>;
  modes?: Variant<BlockThemeConfig>;
};
export type BlockquoteThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BlockquoteProps>;
};
export type BoxThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BoxProps>;
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
};
export type ButtonThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<ButtonThemeConfig>;
  modes?: Variant<ButtonThemeConfig>;
};
export type CalloutThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutContentProps>;
  };
  Header?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutHeaderProps>;
  };
  Title?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutTitleProps>;
  };
  Footer?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutFooterProps>;
  };
  IconWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<CalloutIconProps>;
  };
  Close?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CalloutProps>;
  variants?: Variant<CalloutThemeConfig>;
  modes?: Variant<CalloutThemeConfig>;
};
export type CardThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Header?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Footer?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Title?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CardProps>;
  variants?: Variant<CardThemeConfig>;
  modes?: Variant<CardThemeConfig>;
};
export type CheckboxThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CheckboxProps>;
  variants?: Variant<CheckboxThemeConfig>;
  modes?: Variant<CheckboxThemeConfig>;
};
export type CheckboxFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxFieldProps>;
  variants?: Variant<CheckboxFieldThemeConfig>;
  modes?: Variant<CheckboxFieldThemeConfig>;
};
export type CheckboxGroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupProps>;
  variants?: Variant<CheckboxGroupThemeConfig>;
  modes?: Variant<CheckboxGroupThemeConfig>;
};
export type CheckboxGroupFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupFieldProps>;
  variants?: Variant<CheckboxGroupFieldThemeConfig>;
  modes?: Variant<CheckboxGroupFieldThemeConfig>;
};
export type ClickableThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ClickableProps>;
  variants?: Variant<ClickableThemeConfig>;
  modes?: Variant<ClickableThemeConfig>;
};
export type CodeThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    block?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CodeProps>;
  variants?: Variant<CodeThemeConfig>;
  modes?: Variant<CodeThemeConfig>;
};
export type ColumnsThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Column?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ColumnProps>;
  };
  defaultProps?: Partial<ColumnsProps>;
  variants?: Variant<ColumnsThemeConfig>;
  modes?: Variant<ColumnsThemeConfig>;
};
export type ContainerThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    layout?: ThemeAttribute<Stylesheet>;
    fluid?: ThemeAttribute<Stylesheet>;
  };
  tabletMargin?: ThemeAttribute<number>;
  fluidMargin?: ThemeAttribute<number>;
  defaultProps?: Partial<ContainerProps>;
  variants?: Variant<ContainerThemeConfig>;
  modes?: Variant<ContainerThemeConfig>;
};
export type DialogThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogContentProps>;
  };
  Header?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogHeaderProps>;
  };
  Title?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogTitleProps>;
  };
  Footer?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogFooterProps>;
  };
  IconWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DialogIconProps>;
  };
  Close?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<DialogProps>;
  variants?: Variant<DialogThemeConfig>;
  modes?: Variant<DialogThemeConfig>;
};
export type DividerThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DividerProps>;
  variants?: Variant<DividerThemeConfig>;
  modes?: Variant<DividerThemeConfig>;
};
export type DropdownMenuThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Popover?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuPopoverProps>;
  };
  Button?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuButtonProps>;
  };
  Divider?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuDividerProps>;
  };
  Group?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuGroupProps>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuItemProps>;
  };
  OptionGroup?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuOptionGroupProps>;
  };
  OptionItem?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuOptionItemProps>;
  };
  defaultProps?: Partial<DropdownMenuProps>;
  variants?: Variant<DropdownMenuThemeConfig>;
  modes?: Variant<DropdownMenuThemeConfig>;
};
export type FieldStackThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FieldStackProps>;
  variants?: Variant<FieldStackThemeConfig>;
  modes?: Variant<FieldStackThemeConfig>;
};
export type FieldWrapperThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  DescriptionText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  HintText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  OptionalText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  RequiredText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ValidationText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  TooltipTrigger?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  TooltipPopover?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<FieldWrapperProps>;
  variants?: Variant<FieldWrapperThemeConfig>;
  modes?: Variant<FieldWrapperThemeConfig>;
};
export type FlexThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FlexProps>;
  variants?: Variant<FlexThemeConfig>;
  modes?: Variant<FlexThemeConfig>;
};
export type GridThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<GridItemProps>;
  };
  defaultProps?: Partial<GridProps>;
  variants?: Variant<GridThemeConfig>;
  modes?: Variant<GridThemeConfig>;
};
export type GroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<GroupProps>;
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      first?: ThemeAttribute<Stylesheet>;
      middle?: ThemeAttribute<Stylesheet>;
      last?: ThemeAttribute<Stylesheet>;
    };
  };
  variants?: Variant<GroupThemeConfig>;
  modes?: Variant<GroupThemeConfig>;
};
export type HeadingThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h1?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  h2?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  h3?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  h4?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  h5?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  h6?: {
    fontSize?: string;
    shrinkScale?: number;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      shrinked?: ThemeAttribute<Stylesheet>;
    };
  };
  subHeading?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<HeadingProps>;
  variants?: Variant<HeadingThemeConfig>;
  modes?: Variant<HeadingThemeConfig>;
};
export type DisclosureThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DisclosureProps>;
  variants?: Variant<DisclosureThemeConfig>;
  modes?: Variant<DisclosureThemeConfig>;
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DisclosureContentProps>;
    variants?: Variant<DisclosureThemeConfig['Content']>;
    modes?: Variant<DisclosureThemeConfig['Content']>;
  };
};
export type HighlightedCodeThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    block?: ThemeAttribute<Stylesheet>;
  };
  Pre?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Line?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Token?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<CodeProps>;
  variants?: Variant<CodeThemeConfig>;
  modes?: Variant<CodeThemeConfig>;
};
export type IconThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<IconThemeConfig>;
  modes?: Variant<IconThemeConfig>;
};
export type ImageThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    fixed?: ThemeAttribute<Stylesheet>;
    cover?: ThemeAttribute<Stylesheet>;
    contain?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};
export type InlineThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineProps>;
  variants?: Variant<InlineThemeConfig>;
  modes?: Variant<InlineThemeConfig>;
};
export type InlineBlockThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineBlockProps>;
  variants?: Variant<InlineBlockThemeConfig>;
  modes?: Variant<InlineBlockThemeConfig>;
};
export type InlineFlexThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineFlexProps>;
  variants?: Variant<InlineFlexThemeConfig>;
  modes?: Variant<InlineFlexThemeConfig>;
};
export type InputThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<InputProps>;
  variants?: Variant<InputThemeConfig>;
  modes?: Variant<InputThemeConfig>;
};
export type InputFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InputFieldProps>;
  variants?: Variant<InputFieldThemeConfig>;
  modes?: Variant<InputFieldThemeConfig>;
};
export type KeyThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<KeyProps>;
  variants?: Variant<KeyThemeConfig>;
  modes?: Variant<KeyThemeConfig>;
};
export type LabelThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LabelProps>;
  variants?: Variant<LabelThemeConfig>;
  modes?: Variant<LabelThemeConfig>;
};
export type LevelThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LevelProps>;
  variants?: Variant<LevelThemeConfig>;
  modes?: Variant<LevelThemeConfig>;
};
export type StackThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    child?: {
      base?: ThemeAttribute<Stylesheet>;
      horizontal?: ThemeAttribute<Stylesheet>;
      vertical?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<StackProps>;
  variants?: Variant<StackThemeConfig>;
  modes?: Variant<StackThemeConfig>;
};
export type LinkThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    hover?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
  };
  Block?: LinkThemeConfig;
  Inline?: LinkThemeConfig;
  defaultProps?: Partial<LinkProps>;
  variants?: Variant<LinkThemeConfig>;
  modes?: Variant<LinkThemeConfig>;
};
export type ListThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    ordered?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ListItemProps>;
    variants?: Variant<ListThemeConfig['Item']>;
    modes?: Variant<ListThemeConfig['Item']>;
  };
  defaultProps?: Partial<ListProps>;
  variants?: Variant<ListThemeConfig>;
  modes?: Variant<ListThemeConfig>;
};
export type MenuThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Divider?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuDividerProps>;
    variants?: Variant<MenuThemeConfig['Divider']>;
    modes?: Variant<MenuThemeConfig['Divider']>;
  };
  Group?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuGroupProps>;
    variants?: Variant<MenuThemeConfig['Group']>;
    modes?: Variant<MenuThemeConfig['Group']>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuItemProps>;
    variants?: Variant<MenuThemeConfig['Item']>;
    modes?: Variant<MenuThemeConfig['Item']>;
  };
  OptionGroup?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuOptionGroupProps>;
    variants?: Variant<MenuThemeConfig['OptionGroup']>;
    modes?: Variant<MenuThemeConfig['OptionGroup']>;
  };
  OptionItem?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuOptionItemProps>;
    variants?: Variant<MenuThemeConfig['OptionItem']>;
    modes?: Variant<MenuThemeConfig['OptionItem']>;
  };
  defaultProps?: Partial<MenuProps>;
  variants?: Variant<MenuThemeConfig>;
  modes?: Variant<MenuThemeConfig>;
};
export type ModalThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<ModalThemeConfig>;
  modes?: Variant<ModalThemeConfig>;
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
    variants?: Variant<ModalThemeConfig['Disclosure']>;
    modes?: Variant<ModalThemeConfig['Disclosure']>;
  };
  Backdrop?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalBackdropProps>;
    variants?: Variant<ModalThemeConfig['Backdrop']>;
    modes?: Variant<ModalThemeConfig['Backdrop']>;
  };
};
export type NavigationThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<NavigationProps>;
  variants?: Variant<NavigationThemeConfig>;
  modes?: Variant<NavigationThemeConfig>;
};
export type OptionButtonsThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<OptionButtonsProps>;
  variants?: Variant<OptionButtonsThemeConfig>;
  modes?: Variant<OptionButtonsThemeConfig>;
  Button?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<OptionButtonProps>;
    variants?: Variant<OptionButtonsThemeConfig['Button']>;
    modes?: Variant<OptionButtonsThemeConfig['Button']>;
  };
  Wrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
};
export type OverlayThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<OverlayThemeConfig>;
  modes?: Variant<OverlayThemeConfig>;
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
    variants?: Variant<OverlayThemeConfig['Disclosure']>;
    modes?: Variant<OverlayThemeConfig['Disclosure']>;
  };
};
export type PageContentThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageContentProps>;
  variants?: Variant<PageContentThemeConfig>;
  modes?: Variant<PageContentThemeConfig>;
  Wrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageContentWrapperProps>;
    variants?: Variant<PageContentThemeConfig['Wrapper']>;
    modes?: Variant<PageContentThemeConfig['Wrapper']>;
  };
};
export type PageWithSidebarThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageWithSidebarProps>;
  variants?: Variant<PageWithSidebarThemeConfig>;
  modes?: Variant<PageWithSidebarThemeConfig>;
  Spacer?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Sidebar?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  SidebarExpandedWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  SidebarCollapsedWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithSidebarDisclosureProps>;
    variants?: Variant<PageWithSidebarThemeConfig['Disclosure']>;
    modes?: Variant<PageWithSidebarThemeConfig['Disclosure']>;
  };
  Minimize?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithSidebarMinimizeProps>;
    variants?: Variant<PageWithSidebarThemeConfig['Minimize']>;
    modes?: Variant<PageWithSidebarThemeConfig['Minimize']>;
  };
};
export type PageWithHeaderThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageWithHeaderProps>;
  variants?: Variant<PageWithHeaderThemeConfig>;
  modes?: Variant<PageWithHeaderThemeConfig>;
  Header?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithHeaderDisclosureProps>;
    variants?: Variant<PageWithHeaderThemeConfig['Disclosure']>;
    modes?: Variant<PageWithHeaderThemeConfig['Disclosure']>;
  };
};
export type PaginationThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  PrepositionText?: { styles?: { base?: ThemeAttribute<Stylesheet> } };
  Button?: ButtonThemeConfig;
  Select?: SelectThemeConfig;
  defaultProps?: Partial<PaginationProps>;
  variants?: Variant<PaginationThemeConfig>;
  modes?: Variant<PaginationThemeConfig>;
};
export type ParagraphThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ParagraphProps>;
  variants?: Variant<ParagraphThemeConfig>;
  modes?: Variant<ParagraphThemeConfig>;
};
export type PopoverThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverArrowProps>;
    variants?: Variant<PopoverThemeConfig['Arrow']>;
    modes?: Variant<PopoverThemeConfig['Arrow']>;
  };
  Backdrop?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverBackdropProps>;
    variants?: Variant<PopoverThemeConfig['Backdrop']>;
    modes?: Variant<PopoverThemeConfig['Backdrop']>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverContentProps>;
    variants?: Variant<PopoverThemeConfig['Content']>;
    modes?: Variant<PopoverThemeConfig['Content']>;
  };
  Close?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverDisclosureProps>;
    variants?: Variant<PopoverThemeConfig['Disclosure']>;
    modes?: Variant<PopoverThemeConfig['Disclosure']>;
  };
  Header?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverHeaderProps>;
    variants?: Variant<PopoverThemeConfig['Header']>;
    modes?: Variant<PopoverThemeConfig['Header']>;
  };
  Footer?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverFooterProps>;
    variants?: Variant<PopoverThemeConfig['Footer']>;
    modes?: Variant<PopoverThemeConfig['Footer']>;
  };
  Title?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverTitleProps>;
    variants?: Variant<PopoverThemeConfig['Title']>;
    modes?: Variant<PopoverThemeConfig['Title']>;
  };
  defaultProps?: Partial<PopoverProps>;
  variants?: Variant<PopoverThemeConfig>;
  modes?: Variant<PopoverThemeConfig>;
};
export type PortalThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PortalProps>;
  variants?: Variant<PortalThemeConfig>;
  modes?: Variant<PortalThemeConfig>;
};
export type ProgressBarThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Indicator?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<ProgressBarProps>;
  variants?: Variant<ProgressBarThemeConfig>;
  modes?: Variant<ProgressBarThemeConfig>;
};
export type RadioThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<RadioProps>;
  variants?: Variant<RadioThemeConfig>;
  modes?: Variant<RadioThemeConfig>;
};
export type RatingThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<RatingItemProps>;
    variants?: Variant<RatingThemeConfig['Item']>;
    modes?: Variant<RatingThemeConfig['Item']>;
  };
  defaultProps?: Partial<RatingProps>;
  variants?: Variant<RatingThemeConfig>;
  modes?: Variant<RatingThemeConfig>;
};
export type RadioGroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupProps>;
  variants?: Variant<RadioGroupThemeConfig>;
  modes?: Variant<RadioGroupThemeConfig>;
};
export type RadioGroupFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupFieldProps>;
  variants?: Variant<RadioGroupFieldThemeConfig>;
  modes?: Variant<RadioGroupFieldThemeConfig>;
};
export type RoverThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RoverProps>;
  variants?: Variant<RoverThemeConfig>;
  modes?: Variant<RoverThemeConfig>;
};
export type SideNavThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Level?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    Title?: {
      styles?: {
        base?: ThemeAttribute<Stylesheet>;
      };
    };
    defaultProps?: Partial<SideNavLevelProps>;
    variants?: Variant<SideNavThemeConfig['Level']>;
    modes?: Variant<SideNavThemeConfig['Level']>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      active?: ThemeAttribute<Stylesheet>;
      focus?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<SideNavItemProps>;
    variants?: Variant<SideNavThemeConfig['Item']>;
    modes?: Variant<SideNavThemeConfig['Item']>;
  };
  defaultProps?: Partial<SideNavProps>;
  variants?: Variant<SideNavThemeConfig>;
  modes?: Variant<SideNavThemeConfig>;
};
export type TabbableThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TabbableProps>;
  variants?: Variant<TabbableThemeConfig>;
  modes?: Variant<TabbableThemeConfig>;
};
export type TableThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Head?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableHeadProps>;
    variants?: Variant<TableThemeConfig['Head']>;
    modes?: Variant<TableThemeConfig['Head']>;
  };
  HeadCell?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableHeadCellProps>;
    variants?: Variant<TableThemeConfig['HeadCell']>;
    modes?: Variant<TableThemeConfig['HeadCell']>;
  };
  Body?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableBodyProps>;
    variants?: Variant<TableThemeConfig['Body']>;
    modes?: Variant<TableThemeConfig['Body']>;
  };
  Cell?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableCellProps>;
    variants?: Variant<TableThemeConfig['Cell']>;
    modes?: Variant<TableThemeConfig['Cell']>;
  };
  Row?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableRowProps>;
    variants?: Variant<TableThemeConfig['Row']>;
    modes?: Variant<TableThemeConfig['Row']>;
  };
  Foot?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableFootProps>;
    variants?: Variant<TableThemeConfig['Foot']>;
    modes?: Variant<TableThemeConfig['Foot']>;
  };
  defaultProps?: Partial<TableProps>;
  variants?: Variant<TableThemeConfig>;
  modes?: Variant<TableThemeConfig>;
};
export type TabsThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  List?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsListProps>;
    variants?: Variant<TabsThemeConfig['List']>;
    modes?: Variant<TabsThemeConfig['List']>;
  };
  Tab?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      selected?: ThemeAttribute<Stylesheet>;
      focus?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsTabProps>;
    variants?: Variant<TabsThemeConfig['Tab']>;
    modes?: Variant<TabsThemeConfig['Tab']>;
  };
  Panel?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsPanelProps>;
    variants?: Variant<TabsThemeConfig['Panel']>;
    modes?: Variant<TabsThemeConfig['Panel']>;
  };
  defaultProps?: Partial<TabsProps>;
  variants?: Variant<TabsThemeConfig>;
  modes?: Variant<TabsThemeConfig>;
};
export type TagThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    outlined?: ThemeAttribute<Stylesheet>;
    sizes?: {
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Close?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<TagProps>;
  variants?: Variant<TagThemeConfig>;
  modes?: Variant<TagThemeConfig>;
};
export type TextThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Block?: LinkThemeConfig;
  Inline?: LinkThemeConfig;
  defaultProps?: Partial<TextProps>;
  variants?: Variant<TextThemeConfig>;
  modes?: Variant<TextThemeConfig>;
};
export type TextareaThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<TextareaProps>;
  variants?: Variant<TextareaThemeConfig>;
  modes?: Variant<TextareaThemeConfig>;
};
export type TextareaFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextareaFieldProps>;
  variants?: Variant<TextareaFieldThemeConfig>;
  modes?: Variant<TextareaFieldThemeConfig>;
};
export type ToastThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Overlay?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<ToastProps>;
  variants?: Variant<ToastThemeConfig>;
  modes?: Variant<ToastThemeConfig>;
  placement?: Placement;
  showCountdown?: boolean;
  timeout?: number;
};
export type TooltipThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
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
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipArrowProps>;
    variants?: Variant<TooltipThemeConfig['Arrow']>;
    modes?: Variant<TooltipThemeConfig['Arrow']>;
  };
  Content?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipContentProps>;
    variants?: Variant<TooltipThemeConfig['Content']>;
    modes?: Variant<TooltipThemeConfig['Content']>;
  };
  Reference?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipReferenceProps>;
    variants?: Variant<TooltipThemeConfig['Reference']>;
    modes?: Variant<TooltipThemeConfig['Reference']>;
  };
  defaultProps?: Partial<TooltipProps>;
  variants?: Variant<TooltipThemeConfig>;
  modes?: Variant<TooltipThemeConfig>;
};
export type TopNavThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Section?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TopNavSectionProps>;
    variants?: Variant<TopNavThemeConfig['Section']>;
    modes?: Variant<TopNavThemeConfig['Section']>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      active?: ThemeAttribute<Stylesheet>;
      focus?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TopNavItemProps>;
    variants?: Variant<TopNavThemeConfig['Item']>;
    modes?: Variant<TopNavThemeConfig['Item']>;
  };
  defaultProps?: Partial<TopNavProps>;
  variants?: Variant<TopNavThemeConfig>;
  modes?: Variant<TopNavThemeConfig>;
};
export type SelectThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SelectProps>;
  variants?: Variant<SelectThemeConfig>;
  modes?: Variant<SelectThemeConfig>;
};
export type SelectFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SelectFieldProps>;
  variants?: Variant<SelectFieldThemeConfig>;
  modes?: Variant<SelectFieldThemeConfig>;
};
export type SelectMenuThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  StaticItem?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Button?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonIconsWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonIcon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Popover?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  ItemText?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  SearchInputWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  SearchInput?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SelectMenuProps>;
  variants?: Variant<SelectMenuThemeConfig>;
  modes?: Variant<SelectMenuThemeConfig>;
};
export type SelectMenuFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SelectMenuFieldProps>;
  variants?: Variant<SelectMenuFieldThemeConfig>;
  modes?: Variant<SelectMenuFieldThemeConfig>;
};
export type SetThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    child?: {
      base?: ThemeAttribute<Stylesheet>;
      horizontal?: ThemeAttribute<Stylesheet>;
      vertical?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SetProps>;
  variants?: Variant<SetThemeConfig>;
  modes?: Variant<SetThemeConfig>;
};
export type DrawerThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    placements?: {
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<DrawerProps>;
  variants?: Variant<DrawerThemeConfig>;
  modes?: Variant<DrawerThemeConfig>;
  Disclosure?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DrawerDisclosureProps>;
    variants?: Variant<DrawerThemeConfig['Disclosure']>;
    modes?: Variant<DrawerThemeConfig['Disclosure']>;
  };
};
export type SpinnerThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    sizes?: {
      small?: ThemeAttribute<Stylesheet>;
      default?: ThemeAttribute<Stylesheet>;
      medium?: ThemeAttribute<Stylesheet>;
      large?: ThemeAttribute<Stylesheet>;
    };
  };
  vector?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  loaderCircle?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  trackCircle?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SpinnerProps>;
  variants?: Variant<SpinnerThemeConfig>;
  modes?: Variant<SpinnerThemeConfig>;
};
export type SwitchThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  HiddenInput?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SwitchProps>;
  variants?: Variant<SwitchThemeConfig>;
  modes?: Variant<SwitchThemeConfig>;
};
export type SwitchFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchFieldProps>;
  variants?: Variant<SwitchFieldThemeConfig>;
  modes?: Variant<SwitchFieldThemeConfig>;
};
export type SwitchGroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupProps>;
  variants?: Variant<SwitchGroupThemeConfig>;
  modes?: Variant<SwitchGroupThemeConfig>;
};
export type SwitchGroupFieldThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupFieldProps>;
  variants?: Variant<SwitchGroupFieldThemeConfig>;
  modes?: Variant<SwitchGroupFieldThemeConfig>;
};
export type TemplateThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TemplateProps>;
  variants?: Variant<TemplateThemeConfig>;
  modes?: Variant<TemplateThemeConfig>;
};

export type ThemeConfig = {
  useCSSVariables?: boolean;

  altitudes?: AltitudesThemeConfig;
  borders?: BordersThemeConfig;
  borderRadii?: BorderRadiiThemeConfig;
  breakpoints?: BreakpointsThemeConfig;
  fonts?: FontsThemeConfig;
  fontMetrics?: FontMetricsThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
  lineHeights?: LineHeightsThemeConfig;
  letterSpacings?: LetterSpacingsThemeConfig;
  modes?: ModesThemeConfig;
  spacing?: SpacingThemeConfig;
  palette?: PaletteThemeConfig;

  ActionButtons?: ActionButtonsThemeConfig;
  Alert?: AlertThemeConfig;
  Autosuggest?: AutosuggestThemeConfig;
  AutosuggestField?: AutosuggestFieldThemeConfig;
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
  Clickable?: ClickableThemeConfig;
  Code?: CodeThemeConfig;
  Columns?: ColumnsThemeConfig;
  Container?: ContainerThemeConfig;
  Dialog?: DialogThemeConfig;
  Disclosure?: DisclosureThemeConfig;
  Drawer?: DrawerThemeConfig;
  DropdownMenu?: DropdownMenuThemeConfig;
  FieldWrapper?: FieldWrapperThemeConfig;
  Flex?: FlexThemeConfig;
  Grid?: GridThemeConfig;
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  HighlightedCode?: HighlightedCodeThemeConfig;
  Icon?: IconThemeConfig;
  Image?: ImageThemeConfig;
  Inline?: InlineThemeConfig;
  InlineBlock?: InlineBlockThemeConfig;
  InlineFlex?: InlineFlexThemeConfig;
  Input?: InputThemeConfig;
  InputField?: InputFieldThemeConfig;
  Key?: KeyThemeConfig;
  Stack?: StackThemeConfig;
  Label?: LabelThemeConfig;
  Level?: LevelThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Menu?: MenuThemeConfig;
  Modal?: ModalThemeConfig;
  Navigation?: NavigationThemeConfig;
  OptionButtons?: OptionButtonsThemeConfig;
  Overlay?: OverlayThemeConfig;
  PageContent?: PageContentThemeConfig;
  PageWithSidebar?: PageWithSidebarThemeConfig;
  PageWithHeader?: PageWithHeaderThemeConfig;
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
  SelectMenu?: SelectThemeConfig;
  SelectMenuField?: SelectMenuFieldThemeConfig;
  Set?: SetThemeConfig;
  SideNav?: SideNavThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Switch?: SwitchThemeConfig;
  SwitchField?: SwitchFieldThemeConfig;
  SwitchGroup?: SwitchGroupThemeConfig;
  SwitchGroupField?: SwitchGroupFieldThemeConfig;
  Tabbable?: TabbableThemeConfig;
  Table?: TableThemeConfig;
  Tabs?: TabsThemeConfig;
  Tag?: TagThemeConfig;
  Text?: TextThemeConfig;
  Textarea?: TextareaThemeConfig;
  TextareaField?: TextareaFieldThemeConfig;
  Toast?: ToastThemeConfig;
  Tooltip?: TooltipThemeConfig;
  TopNav?: TopNavThemeConfig;
  Template?: TemplateThemeConfig;
};
