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
import { LabelProps } from '../Label';
import { StackProps } from '../Stack';
import { LinkProps } from '../Link';
import { ListProps } from '../List/List';
import { ListItemProps } from '../List/ListItem';
import { ModalProps, ModalBackdropProps, ModalDisclosureProps } from '../Modal';
import { MenuProps, MenuDividerProps, MenuGroupProps, MenuItemProps } from '../Menu';
import { NavigationProps } from '../Navigation';
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
import { ParsedIcons, Opts as ParseIconsOpts } from '../utils/parseIcons';
import { Placement } from './props';

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
  css?: {
    root: ThemeAttribute<Stylesheet>;
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
export type FontSizeThemeConfig = {
  [key: string]: number;
};
export type FontWeightsThemeConfig = {
  [key: string]: number;
};
export type SpacingThemeConfig = {
  minorUnit?: ThemeAttribute<number>;
  majorUnit?: ThemeAttribute<number>;
  [key: string]: ThemeAttribute<number | string>;
};
export type PaletteThemeConfig = {
  [key: string]: string;
};

export type ActionButtonsThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ActionButtonsProps>;
  variants?: Variant<ActionButtonsThemeConfig>;
  modes?: Variant<ActionButtonsThemeConfig>;
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
  variants?: Variant<AlertThemeConfig>;
  modes?: Variant<AlertThemeConfig>;
};
export type AutosuggestThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  StaticItem?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ClearButton?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ClearButtonWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Input?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Popover?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ItemText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<AutosuggestProps>;
  variants?: Variant<AutosuggestThemeConfig>;
  modes?: Variant<AutosuggestThemeConfig>;
};
export type AutosuggestFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<AutosuggestFieldProps>;
  variants?: Variant<AutosuggestFieldThemeConfig>;
  modes?: Variant<AutosuggestFieldThemeConfig>;
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
  variants?: Variant<AvatarThemeConfig>;
  modes?: Variant<AvatarThemeConfig>;
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
  variants?: Variant<BadgeThemeConfig>;
  modes?: Variant<BadgeThemeConfig>;
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
  variants?: Variant<BreadcrumbThemeConfig>;
  modes?: Variant<BreadcrumbThemeConfig>;
};
export type BlockThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BlockProps>;
  variants?: Variant<BlockThemeConfig>;
  modes?: Variant<BlockThemeConfig>;
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
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
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
  variants?: Variant<ButtonThemeConfig>;
  modes?: Variant<ButtonThemeConfig>;
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
  variants?: Variant<CalloutThemeConfig>;
  modes?: Variant<CalloutThemeConfig>;
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
  variants?: Variant<CardThemeConfig>;
  modes?: Variant<CardThemeConfig>;
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
  variants?: Variant<CheckboxThemeConfig>;
  modes?: Variant<CheckboxThemeConfig>;
};
export type CheckboxFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxFieldProps>;
  variants?: Variant<CheckboxFieldThemeConfig>;
  modes?: Variant<CheckboxFieldThemeConfig>;
};
export type CheckboxGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupProps>;
  variants?: Variant<CheckboxGroupThemeConfig>;
  modes?: Variant<CheckboxGroupThemeConfig>;
};
export type CheckboxGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxGroupFieldProps>;
  variants?: Variant<CheckboxGroupFieldThemeConfig>;
  modes?: Variant<CheckboxGroupFieldThemeConfig>;
};
export type ClickableThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ClickableProps>;
  variants?: Variant<ClickableThemeConfig>;
  modes?: Variant<ClickableThemeConfig>;
};
export type CodeThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    block?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CodeProps>;
  variants?: Variant<CodeThemeConfig>;
  modes?: Variant<CodeThemeConfig>;
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
  variants?: Variant<ColumnsThemeConfig>;
  modes?: Variant<ColumnsThemeConfig>;
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
  variants?: Variant<ContainerThemeConfig>;
  modes?: Variant<ContainerThemeConfig>;
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
  variants?: Variant<DialogThemeConfig>;
  modes?: Variant<DialogThemeConfig>;
};
export type DividerThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DividerProps>;
  variants?: Variant<DividerThemeConfig>;
  modes?: Variant<DividerThemeConfig>;
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
  Button?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DropdownMenuButtonProps>;
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
  variants?: Variant<DropdownMenuThemeConfig>;
  modes?: Variant<DropdownMenuThemeConfig>;
};
export type FieldStackThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FieldStackProps>;
  variants?: Variant<FieldStackThemeConfig>;
  modes?: Variant<FieldStackThemeConfig>;
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
  variants?: Variant<FieldWrapperThemeConfig>;
  modes?: Variant<FieldWrapperThemeConfig>;
};
export type FlexThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FlexProps>;
  variants?: Variant<FlexThemeConfig>;
  modes?: Variant<FlexThemeConfig>;
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
  variants?: Variant<GridThemeConfig>;
  modes?: Variant<GridThemeConfig>;
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
  variants?: Variant<GroupThemeConfig>;
  modes?: Variant<GroupThemeConfig>;
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
  variants?: Variant<HeadingThemeConfig>;
  modes?: Variant<HeadingThemeConfig>;
};
export type DisclosureThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DisclosureProps>;
  variants?: Variant<DisclosureThemeConfig>;
  modes?: Variant<DisclosureThemeConfig>;
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DisclosureContentProps>;
    variants?: Variant<DisclosureThemeConfig['Content']>;
    modes?: Variant<DisclosureThemeConfig['Content']>;
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
  variants?: Variant<CodeThemeConfig>;
  modes?: Variant<CodeThemeConfig>;
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
  variants?: Variant<IconThemeConfig>;
  modes?: Variant<IconThemeConfig>;
};
export type ImageThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    fixed?: ThemeAttribute<Stylesheet>;
    cover?: ThemeAttribute<Stylesheet>;
    contain?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};
export type InlineThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineProps>;
  variants?: Variant<InlineThemeConfig>;
  modes?: Variant<InlineThemeConfig>;
};
export type InlineBlockThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineBlockProps>;
  variants?: Variant<InlineBlockThemeConfig>;
  modes?: Variant<InlineBlockThemeConfig>;
};
export type InlineFlexThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InlineFlexProps>;
  variants?: Variant<InlineFlexThemeConfig>;
  modes?: Variant<InlineFlexThemeConfig>;
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
  variants?: Variant<InputThemeConfig>;
  modes?: Variant<InputThemeConfig>;
};
export type InputFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InputFieldProps>;
  variants?: Variant<InputFieldThemeConfig>;
  modes?: Variant<InputFieldThemeConfig>;
};
export type LabelThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LabelProps>;
  variants?: Variant<LabelThemeConfig>;
  modes?: Variant<LabelThemeConfig>;
};
export type StackThemeConfig = {
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
  defaultProps?: Partial<StackProps>;
  variants?: Variant<StackThemeConfig>;
  modes?: Variant<StackThemeConfig>;
};
export type LinkThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    hover?: ThemeAttribute<Stylesheet>;
    focus?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LinkProps>;
  variants?: Variant<LinkThemeConfig>;
  modes?: Variant<LinkThemeConfig>;
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
    variants?: Variant<ListThemeConfig['Item']>;
    modes?: Variant<ListThemeConfig['Item']>;
  };
  defaultProps?: Partial<ListProps>;
  variants?: Variant<ListThemeConfig>;
  modes?: Variant<ListThemeConfig>;
};
export type MenuThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Divider?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuDividerProps>;
    variants?: Variant<MenuThemeConfig['Divider']>;
    modes?: Variant<MenuThemeConfig['Divider']>;
  };
  Group?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuGroupProps>;
    variants?: Variant<MenuThemeConfig['Group']>;
    modes?: Variant<MenuThemeConfig['Group']>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<MenuItemProps>;
    variants?: Variant<MenuThemeConfig['Item']>;
    modes?: Variant<MenuThemeConfig['Item']>;
  };
  defaultProps?: Partial<MenuProps>;
  variants?: Variant<MenuThemeConfig>;
  modes?: Variant<MenuThemeConfig>;
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
  variants?: Variant<ModalThemeConfig>;
  modes?: Variant<ModalThemeConfig>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
    variants?: Variant<ModalThemeConfig['Disclosure']>;
    modes?: Variant<ModalThemeConfig['Disclosure']>;
  };
  Backdrop?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalBackdropProps>;
    variants?: Variant<ModalThemeConfig['Backdrop']>;
    modes?: Variant<ModalThemeConfig['Backdrop']>;
  };
};
export type NavigationThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<NavigationProps>;
  variants?: Variant<NavigationThemeConfig>;
  modes?: Variant<NavigationThemeConfig>;
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
  variants?: Variant<OverlayThemeConfig>;
  modes?: Variant<OverlayThemeConfig>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<ModalDisclosureProps>;
    variants?: Variant<OverlayThemeConfig['Disclosure']>;
    modes?: Variant<OverlayThemeConfig['Disclosure']>;
  };
};
export type PageContentThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageContentProps>;
  variants?: Variant<PageContentThemeConfig>;
  modes?: Variant<PageContentThemeConfig>;
  Wrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageContentWrapperProps>;
    variants?: Variant<PageContentThemeConfig['Wrapper']>;
    modes?: Variant<PageContentThemeConfig['Wrapper']>;
  };
};
export type PageWithSidebarThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageWithSidebarProps>;
  variants?: Variant<PageWithSidebarThemeConfig>;
  modes?: Variant<PageWithSidebarThemeConfig>;
  Spacer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Sidebar?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  SidebarExpandedWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  SidebarCollapsedWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithSidebarDisclosureProps>;
    variants?: Variant<PageWithSidebarThemeConfig['Disclosure']>;
    modes?: Variant<PageWithSidebarThemeConfig['Disclosure']>;
  };
  Minimize?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithSidebarMinimizeProps>;
    variants?: Variant<PageWithSidebarThemeConfig['Minimize']>;
    modes?: Variant<PageWithSidebarThemeConfig['Minimize']>;
  };
};
export type PageWithHeaderThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PageWithHeaderProps>;
  variants?: Variant<PageWithHeaderThemeConfig>;
  modes?: Variant<PageWithHeaderThemeConfig>;
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PageWithHeaderDisclosureProps>;
    variants?: Variant<PageWithHeaderThemeConfig['Disclosure']>;
    modes?: Variant<PageWithHeaderThemeConfig['Disclosure']>;
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
  variants?: Variant<PaginationThemeConfig>;
  modes?: Variant<PaginationThemeConfig>;
};
export type ParagraphThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ParagraphProps>;
  variants?: Variant<ParagraphThemeConfig>;
  modes?: Variant<ParagraphThemeConfig>;
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
    variants?: Variant<PopoverThemeConfig['Arrow']>;
    modes?: Variant<PopoverThemeConfig['Arrow']>;
  };
  Backdrop?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverBackdropProps>;
    variants?: Variant<PopoverThemeConfig['Backdrop']>;
    modes?: Variant<PopoverThemeConfig['Backdrop']>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverContentProps>;
    variants?: Variant<PopoverThemeConfig['Content']>;
    modes?: Variant<PopoverThemeConfig['Content']>;
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
    variants?: Variant<PopoverThemeConfig['Disclosure']>;
    modes?: Variant<PopoverThemeConfig['Disclosure']>;
  };
  Header?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverHeaderProps>;
    variants?: Variant<PopoverThemeConfig['Header']>;
    modes?: Variant<PopoverThemeConfig['Header']>;
  };
  Footer?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<PopoverFooterProps>;
    variants?: Variant<PopoverThemeConfig['Footer']>;
    modes?: Variant<PopoverThemeConfig['Footer']>;
  };
  Title?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PortalProps>;
  variants?: Variant<PortalThemeConfig>;
  modes?: Variant<PortalThemeConfig>;
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
  variants?: Variant<ProgressBarThemeConfig>;
  modes?: Variant<ProgressBarThemeConfig>;
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
  variants?: Variant<RadioThemeConfig>;
  modes?: Variant<RadioThemeConfig>;
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
    variants?: Variant<RatingThemeConfig['Item']>;
    modes?: Variant<RatingThemeConfig['Item']>;
  };
  defaultProps?: Partial<RatingProps>;
  variants?: Variant<RatingThemeConfig>;
  modes?: Variant<RatingThemeConfig>;
};
export type RadioGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupProps>;
  variants?: Variant<RadioGroupThemeConfig>;
  modes?: Variant<RadioGroupThemeConfig>;
};
export type RadioGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioGroupFieldProps>;
  variants?: Variant<RadioGroupFieldThemeConfig>;
  modes?: Variant<RadioGroupFieldThemeConfig>;
};
export type RoverThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RoverProps>;
  variants?: Variant<RoverThemeConfig>;
  modes?: Variant<RoverThemeConfig>;
};
export type SideNavThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Level?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    Title?: {
      css?: {
        root?: ThemeAttribute<Stylesheet>;
      };
    };
    defaultProps?: Partial<SideNavLevelProps>;
    variants?: Variant<SideNavThemeConfig['Level']>;
    modes?: Variant<SideNavThemeConfig['Level']>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TabbableProps>;
  variants?: Variant<TabbableThemeConfig>;
  modes?: Variant<TabbableThemeConfig>;
};
export type TableThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Head?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableHeadProps>;
    variants?: Variant<TableThemeConfig['Head']>;
    modes?: Variant<TableThemeConfig['Head']>;
  };
  HeadCell?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableHeadCellProps>;
    variants?: Variant<TableThemeConfig['HeadCell']>;
    modes?: Variant<TableThemeConfig['HeadCell']>;
  };
  Body?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableBodyProps>;
    variants?: Variant<TableThemeConfig['Body']>;
    modes?: Variant<TableThemeConfig['Body']>;
  };
  Cell?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableCellProps>;
    variants?: Variant<TableThemeConfig['Cell']>;
    modes?: Variant<TableThemeConfig['Cell']>;
  };
  Row?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TableRowProps>;
    variants?: Variant<TableThemeConfig['Row']>;
    modes?: Variant<TableThemeConfig['Row']>;
  };
  Foot?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  List?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsListProps>;
    variants?: Variant<TabsThemeConfig['List']>;
    modes?: Variant<TabsThemeConfig['List']>;
  };
  Tab?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
      selected?: ThemeAttribute<Stylesheet>;
      focus?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TabsTabProps>;
    variants?: Variant<TabsThemeConfig['Tab']>;
    modes?: Variant<TabsThemeConfig['Tab']>;
  };
  Panel?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<TagThemeConfig>;
  modes?: Variant<TagThemeConfig>;
};
export type TextThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextProps>;
  variants?: Variant<TextThemeConfig>;
  modes?: Variant<TextThemeConfig>;
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
  variants?: Variant<TextareaThemeConfig>;
  modes?: Variant<TextareaThemeConfig>;
};
export type TextareaFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextareaFieldProps>;
  variants?: Variant<TextareaFieldThemeConfig>;
  modes?: Variant<TextareaFieldThemeConfig>;
};
export type ToastThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Overlay?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
    variants?: Variant<TooltipThemeConfig['Arrow']>;
    modes?: Variant<TooltipThemeConfig['Arrow']>;
  };
  Content?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TooltipContentProps>;
    variants?: Variant<TooltipThemeConfig['Content']>;
    modes?: Variant<TooltipThemeConfig['Content']>;
  };
  Reference?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  Section?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<TopNavSectionProps>;
    variants?: Variant<TopNavThemeConfig['Section']>;
    modes?: Variant<TopNavThemeConfig['Section']>;
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
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
  variants?: Variant<SelectThemeConfig>;
  modes?: Variant<SelectThemeConfig>;
};
export type SelectFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SelectFieldProps>;
  variants?: Variant<SelectFieldThemeConfig>;
  modes?: Variant<SelectFieldThemeConfig>;
};
export type SelectMenuThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  StaticItem?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Button?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonIconsWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ButtonIcon?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Popover?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  ItemText?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  SearchInputWrapper?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  SearchInput?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SelectMenuProps>;
  variants?: Variant<SelectMenuThemeConfig>;
  modes?: Variant<SelectMenuThemeConfig>;
};
export type SelectMenuFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SelectMenuFieldProps>;
  variants?: Variant<SelectMenuFieldThemeConfig>;
  modes?: Variant<SelectMenuFieldThemeConfig>;
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
  variants?: Variant<SetThemeConfig>;
  modes?: Variant<SetThemeConfig>;
};
export type DrawerThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
    placements?: {
      left?: ThemeAttribute<Stylesheet>;
      right?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<DrawerProps>;
  variants?: Variant<DrawerThemeConfig>;
  modes?: Variant<DrawerThemeConfig>;
  Disclosure?: {
    css?: {
      root?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<DrawerDisclosureProps>;
    variants?: Variant<DrawerThemeConfig['Disclosure']>;
    modes?: Variant<DrawerThemeConfig['Disclosure']>;
  };
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
  variants?: Variant<SpinnerThemeConfig>;
  modes?: Variant<SpinnerThemeConfig>;
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
  variants?: Variant<SwitchThemeConfig>;
  modes?: Variant<SwitchThemeConfig>;
};
export type SwitchFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchFieldProps>;
  variants?: Variant<SwitchFieldThemeConfig>;
  modes?: Variant<SwitchFieldThemeConfig>;
};
export type SwitchGroupThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupProps>;
  variants?: Variant<SwitchGroupThemeConfig>;
  modes?: Variant<SwitchGroupThemeConfig>;
};
export type SwitchGroupFieldThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchGroupFieldProps>;
  variants?: Variant<SwitchGroupFieldThemeConfig>;
  modes?: Variant<SwitchGroupFieldThemeConfig>;
};
export type TemplateThemeConfig = {
  css?: {
    root?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TemplateProps>;
  variants?: Variant<TemplateThemeConfig>;
  modes?: Variant<TemplateThemeConfig>;
};

export type ThemeConfig = {
  altitudes?: AltitudesThemeConfig;
  borders?: BordersThemeConfig;
  borderRadii?: BorderRadiiThemeConfig;
  breakpoints?: BreakpointsThemeConfig;
  fonts?: FontsThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  global?: GlobalThemeConfig;
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
  Stack?: StackThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Menu?: MenuThemeConfig;
  Modal?: ModalThemeConfig;
  Navigation?: NavigationThemeConfig;
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
