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
import { RadioProps, RadioGroupProps, RadioGroupFieldProps } from '../Radio';
import { RoverProps } from '../Rover';
import { SelectProps, SelectFieldProps } from '../Select';
import { SetProps } from '../Set';
import { SpinnerProps } from '../Spinner';
import { SwitchProps, SwitchFieldProps, SwitchGroupProps, SwitchGroupFieldProps } from '../Switch';
import { TabbableProps } from '../Tabbable';
import { TagProps } from '../Tag';
import { TextProps } from '../Text';
import { TextareaProps, TextareaFieldProps } from '../Textarea';
import { TooltipProps, TooltipArrowProps, TooltipContentProps, TooltipReferenceProps } from '../Tooltip';
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
  base?: ThemeAttribute<Stylesheet>;
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
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<ActionButtonsProps>;
};
export type AlertThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Description?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Title?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  IconWrapper?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  CloseButton?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<AlertProps>;
};
export type AvatarThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  circle?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: ThemeAttribute<Stylesheet>;
    default?: ThemeAttribute<Stylesheet>;
    medium?: ThemeAttribute<Stylesheet>;
    large?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<AvatarProps>;
};
export type BadgeThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  attached?: ThemeAttribute<Stylesheet>;
  sizes?: {
    default?: ThemeAttribute<Stylesheet>;
    medium?: ThemeAttribute<Stylesheet>;
    large?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BadgeProps>;
};
export type BreadcrumbThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<BreadcrumbItemProps>;
  };
  Separator?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<BreadcrumbSeparatorProps>;
  };
  Link?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<BreadcrumbLinkProps>;
  };
  defaultProps?: Partial<BreadcrumbProps>;
};
export type BlockThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<BlockProps>;
};
export type BlockquoteThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<BlockquoteProps>;
};
export type BoxThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<BoxProps>;
};
export type ButtonThemeConfig = {
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
  defaultProps?: Partial<ButtonProps>;
};
export type CalloutThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<CalloutContentProps>;
  };
  Header?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<CalloutHeaderProps>;
  };
  Title?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<CalloutTitleProps>;
  };
  Footer?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<CalloutFooterProps>;
  };
  IconWrapper?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<CalloutIconProps>;
  };
  Close?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CalloutProps>;
};
export type CardThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Header?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Footer?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Title?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CardProps>;
};
export type CheckboxThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  HiddenInput?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CheckboxProps>;
};
export type CheckboxFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<CheckboxFieldProps>;
};
export type CheckboxGroupThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<CheckboxGroupProps>;
};
export type CheckboxGroupFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<CheckboxGroupFieldProps>;
};
export type CodeThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  block?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<CodeProps>;
};
export type ColumnsThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<ColumnsProps>;
  Column?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<ColumnProps>;
  };
};
export type ContainerThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  layout?: ThemeAttribute<Stylesheet>;
  fluid?: ThemeAttribute<Stylesheet>;
  tabletMargin?: ThemeAttribute<number>;
  fluidMargin?: ThemeAttribute<number>;
  defaultProps?: Partial<ContainerProps>;
};
export type DialogThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<DialogContentProps>;
  };
  Header?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<DialogHeaderProps>;
  };
  Title?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<DialogTitleProps>;
  };
  Footer?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<DialogFooterProps>;
  };
  IconWrapper?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<DialogIconProps>;
  };
  Close?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DialogProps>;
};
export type DividerThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  vertical?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<DividerProps>;
};
export type FieldWrapperThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Label?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  DescriptionText?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  HintText?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  OptionalText?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  RequiredText?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  ValidationText?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  TooltipTrigger?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  TooltipPopover?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FieldWrapperProps>;
};
export type FlexThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<FlexProps>;
};
export type GridThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<GridItemProps>;
  };
  defaultProps?: Partial<GridProps>;
};
export type GroupThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<GroupProps>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
    first?: ThemeAttribute<Stylesheet>;
    middle?: ThemeAttribute<Stylesheet>;
    last?: ThemeAttribute<Stylesheet>;
  };
};
export type HeadingThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  h1?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h2?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h3?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h4?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h5?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  h6?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  subHeading?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<HeadingProps>;
};
export type HiddenThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<HiddenProps>;
  Disclosure?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<HiddenDisclosureProps>;
  };
};
export type HighlightedCodeThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  block?: ThemeAttribute<Stylesheet>;
  Pre?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Line?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Token?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<CodeProps>;
};
export type IconThemeConfig = {
  base?: Stylesheet;
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
  base?: ThemeAttribute<Stylesheet>;
  fixed?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  cover?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  contain?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
};
export type InlineThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<InlineProps>;
};
export type InlineBlockThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<InlineBlockProps>;
};
export type InlineFlexThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<InlineFlexProps>;
};
export type InputThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  disabled?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  focus?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  placeholder?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    default?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    medium?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    large?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Spinner?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<InputProps>;
};
export type InputFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<InputFieldProps>;
};
export type LabelThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<LabelProps>;
};
export type LayoutSetThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  horizontal?: ThemeAttribute<Stylesheet>;
  vertical?: ThemeAttribute<Stylesheet>;
  child?: {
    base?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LayoutSetProps>;
};
export type LinkThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  hover?: ThemeAttribute<Stylesheet>;
  focus?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<LinkProps>;
};
export type ListThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  ordered?: ThemeAttribute<Stylesheet>;
  horizontal?: ThemeAttribute<Stylesheet>;
  Item?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<ListItemProps>;
  };
  defaultProps?: Partial<ListProps>;
};
export type ModalThemeConfig = {
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
  defaultProps?: Partial<ModalProps>;
  Disclosure?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<ModalDisclosureProps>;
  };
  Backdrop?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<ModalBackdropProps>;
  };
};
export type NavigationThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<NavigationProps>;
};
export type OverlayThemeConfig = {
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
  defaultProps?: Partial<OverlayProps>;
  Disclosure?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<OverlayDisclosureProps>;
  };
};
export type ParagraphThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<ParagraphProps>;
};
export type PopoverThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Arrow?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverArrowProps>;
  };
  Backdrop?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverBackdropProps>;
  };
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverContentProps>;
  };
  Close?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Disclosure?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverDisclosureProps>;
  };
  Header?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverHeaderProps>;
  };
  Footer?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverFooterProps>;
  };
  Title?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<PopoverTitleProps>;
  };
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
  defaultProps?: Partial<PopoverProps>;
};
export type PortalThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<PortalProps>;
};
export type RadioThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  HiddenInput?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<RadioProps>;
};
export type RadioGroupThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<RadioGroupProps>;
};
export type RadioGroupFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<RadioGroupFieldProps>;
};
export type RoverThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<RoverProps>;
};
export type TabbableThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  disabled?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<TabbableProps>;
};
export type TagThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Close?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  outlined?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    default?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    medium?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    large?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<TagProps>;
};
export type TextThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<TextProps>;
};
export type TextareaThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  disabled?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  focus?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  placeholder?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    default?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    medium?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    large?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Wrapper?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Spinner?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextareaProps>;
};
export type TextareaFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<TextareaFieldProps>;
};
export type TooltipThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Arrow?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<TooltipArrowProps>;
  };
  Content?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<TooltipContentProps>;
  };
  Reference?: {
    base?: ThemeAttribute<Stylesheet>;
    defaultProps?: Partial<TooltipReferenceProps>;
  };
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
  defaultProps?: Partial<TooltipProps>;
};
export type SelectThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  disabled?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Wrapper?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Spinner?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    default?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    medium?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    large?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<SelectProps>;
};
export type SelectFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<SelectFieldProps>;
};
export type SetThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  horizontal?: ThemeAttribute<Stylesheet>;
  vertical?: ThemeAttribute<Stylesheet>;
  child?: {
    base?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SetProps>;
};
export type SpinnerThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  vector?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  loaderCircle?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  trackCircle?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: ThemeAttribute<Stylesheet>;
    default?: ThemeAttribute<Stylesheet>;
    medium?: ThemeAttribute<Stylesheet>;
    large?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SpinnerProps>;
};
export type SwitchThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  Icon?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  HiddenInput?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SwitchProps>;
};
export type SwitchFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<SwitchFieldProps>;
};
export type SwitchGroupThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<SwitchGroupProps>;
};
export type SwitchGroupFieldThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<SwitchGroupFieldProps>;
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
  Paragraph?: ParagraphThemeConfig;
  Popover?: PopoverThemeConfig;
  Portal?: PortalThemeConfig;
  Radio?: RadioThemeConfig;
  RadioGroup?: RadioGroupThemeConfig;
  RadioGroupField?: RadioGroupFieldThemeConfig;
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
  Tag?: TagThemeConfig;
  Text?: TextThemeConfig;
  Textarea?: TextareaThemeConfig;
  TextareaField?: TextareaFieldThemeConfig;
  Tooltip?: TooltipThemeConfig;
};
