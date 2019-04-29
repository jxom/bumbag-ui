import { InterpolationValue } from 'styled-components';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { ParsedIcons, Opts as ParseIconsOpts } from '../parseIcons';

export type Stylesheet = InterpolationValue[];
export type ActionButtonsThemeConfig = {
  base?: Stylesheet;
};
export type AvatarThemeConfig = {
  base?: Stylesheet;
};
export type AlertThemeConfig = {
  base?: Stylesheet;
  tint?: Stylesheet;
  Title?: {
    base?: Stylesheet;
  };
  Close?: {
    base?: Stylesheet;
    hover?: Stylesheet;
  };
};
export type BackdropThemeConfig = {
  base?: Stylesheet;
};
export type BadgeThemeConfig = {
  base?: Stylesheet;
  absolute?: Stylesheet;
  sizes?: {
    medium?: Stylesheet;
    lərge?: Stylesheet;
  };
};
export type BlockquoteThemeConfig = {
  base?: Stylesheet;
};
export type BreadcrumbThemeConfig = {
  base?: Stylesheet;
  Step?: {
    base?: Stylesheet;
  };
  List?: {
    base?: Stylesheet;
  };
  Link?: {
    base?: Stylesheet;
  };
  Span?: {
    base?: Stylesheet;
  };
};
export type ButtonThemeConfig = {
  base?: Stylesheet;
  disabled?: Stylesheet;
  link?: Stylesheet;
  loading?: Stylesheet;
  static?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type CalloutThemeConfig = {
  base?: Stylesheet;
  tint?: Stylesheet;
  Content?: {
    base: Stylesheet;
  };
  Header?: {
    base: Stylesheet;
  };
  Footer?: {
    base: Stylesheet;
  };
  Title?: {
    base: Stylesheet;
  };
  Tint?: {
    base: Stylesheet;
  };
  Icon?: {
    base: Stylesheet;
  };
  Close?: {
    base?: Stylesheet;
    hover?: Stylesheet;
  };
};
export type CalloutOverlayThemeConfig = {
  base?: Stylesheet;
  Callout?: {
    base?: Stylesheet;
    mobile?: Stylesheet;
  };
};
export type CardThemeConfig = {
  base?: Stylesheet;
  Content?: {
    base?: Stylesheet;
  };
  Header?: {
    base?: Stylesheet;
  };
  Footer?: {
    base?: Stylesheet;
  };
  Title?: {
    base?: Stylesheet;
  };
};
export type CheckboxThemeConfig = {
  base?: Stylesheet;
  label?: Stylesheet;
  checked?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  icon?: {
    checked?: Stylesheet;
    unchecked?: Stylesheet;
    uncheckedDisabled?: Stylesheet;
    checkedDisabled?: Stylesheet;
  };
};
export type CodeThemeConfig = {
  base?: Stylesheet;
  block?: Stylesheet;
  inline?: Stylesheet;
};
export type ColumnThemeConfig = {
  base?: Stylesheet;
};
export type ColumnsThemeConfig = {
  base?: Stylesheet;
};
export type ContainerThemeConfig = {
  base?: Stylesheet;
  fluidMargin: string;
  tabletMargin: string;
};
export type DocsThemeConfig = {
  logoPath?: string;
};
export type DialogThemeConfig = {
  base?: Stylesheet;
  Header?: {
    base?: Stylesheet;
  };
  Content?: {
    base?: Stylesheet;
  };
  Footer?: {
    base?: Stylesheet;
  };
};
export type DividerThemeConfig = {
  base?: Stylesheet;
  content?: Stylesheet;
  vertical?: Stylesheet;
};
export type FieldWrapperThemeConfig = {
  base?: Stylesheet;
  label?: Stylesheet;
  description?: Stylesheet;
  hint?: Stylesheet;
  optional?: Stylesheet;
  validation?: Stylesheet;
};
export type FieldSetThemeConfig = {
  base?: Stylesheet;
  horizontal?: Stylesheet;
  vertical?: Stylesheet;
};
export type FontSizeThemeConfig = {
  100?: number;
  150?: number;
  200?: number;
  300?: number;
  400?: number;
  500?: number;
  600?: number;
  700?: number;
  800?: number;
  900?: number;
};
export type FontWeightsThemeConfig = {
  normal?: number;
  semibold?: number;
  bold?: number;
};
export type GlobalThemeConfig = {
  base?: Stylesheet;
  fontFamily?: string;
  fallbackFontFamily?: string;
  fontSize?: number;
};
export type GroupThemeConfig = {
  base?: Stylesheet;
};
export type HeadingThemeConfig = {
  base?: Stylesheet;
  h1?: Stylesheet;
  h2?: Stylesheet;
  h3?: Stylesheet;
  h4?: Stylesheet;
  h5?: Stylesheet;
  h6?: Stylesheet;
  subHeading?: Stylesheet;
};
export type HiddenThemeConfig = {
  base?: Stylesheet;
  Hide?: {
    base?: Stylesheet;
  };
  Show?: {
    base?: Stylesheet;
  };
  Toggle?: {
    base?: Stylesheet;
  };
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
  };
};
export type ImageThemeConfig = {
  base?: Stylesheet;
  fixed?: Stylesheet;
  fit?: {
    base?: Stylesheet;
    cover?: Stylesheet;
    contain?: Stylesheet;
  };
};
export type InputThemeConfig = {
  base?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  placeholder?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type LabelThemeConfig = {
  base?: Stylesheet;
};
export type LayoutThemeConfig = {
  mobileBreakpoint?: number;
  tabletBreakpoint?: number;
  desktopBreakpoint?: number;
  widescreenBreakpoint?: number;
  fullHDBreakpoint?: number;
  gapFactor?: number;
  minorUnit?: number;
  majorUnit?: number;
};
export type LayoutSetThemeConfig = {
  base?: Stylesheet;
  horizontal?: Stylesheet;
  vertical?: Stylesheet;
};
export type LinkThemeConfig = {
  base?: Stylesheet;
};
export type ListThemeConfig = {
  base?: Stylesheet;
  item?: {
    base?: Stylesheet;
  };
};
export type MarkdownThemeConfig = {
  base?: Stylesheet;
};
export type MenuThemeConfig = {
  base: Stylesheet;
  horizontal: Stylesheet;
  vertical: Stylesheet;
  Item: {
    base: Stylesheet;
    disabled: Stylesheet;
    icon: Stylesheet;
    focus: Stylesheet;
    hover: Stylesheet;
    active: Stylesheet;
  };
  Divider: {
    base: Stylesheet;
  };
  Group: {
    base: Stylesheet;
    title: Stylesheet;
  };
};
export type NavigationThemeConfig = {
  base?: Stylesheet;
};
export type OverlayThemeConfig = {
  base?: Stylesheet;
  Hide?: {
    base?: Stylesheet;
  };
  Show?: {
    base?: Stylesheet;
  };
  Toggle?: {
    base?: Stylesheet;
  };
};
export type PaletteThemeConfig = {
  text?: string;
  text400?: string;
  text300?: string;
  text100?: string;
  textTint?: string;
  textInverted?: string;
  textTintInverted?: string;

  black?: string;

  white?: string;
  white600?: string;
  white700?: string;
  white800?: string;

  gray100?: string;
  gray200?: string;
  gray300?: string;
  gray400?: string;
  gray?: string;
  gray600?: string;
  gray700?: string;
  gray800?: string;
  gray900?: string;

  default?: string;
  defaultInverted?: string;

  primary200?: string;
  primary300?: string;
  primary400?: string;
  primary?: string;
  primary600?: string;
  primary700?: string;
  primary800?: string;
  primaryTint?: string;
  primaryInverted?: string;
  primaryTintInverted?: string;

  info200?: string;
  info300?: string;
  info400?: string;
  info?: string;
  info600?: string;
  info700?: string;
  info800?: string;
  infoTint?: string;
  infoInverted?: string;
  infoTintInverted?: string;

  success200?: string;
  success300?: string;
  success400?: string;
  success?: string;
  success600?: string;
  success700?: string;
  success800?: string;
  successTint?: string;
  successInverted?: string;
  successTintInverted?: string;

  danger200?: string;
  danger300?: string;
  danger400?: string;
  danger?: string;
  danger600?: string;
  danger700?: string;
  danger800?: string;
  dangerTint?: string;
  dangerInverted?: string;
  dangerTintInverted?: string;

  warning200?: string;
  warning300?: string;
  warning400?: string;
  warning?: string;
  warning600?: string;
  warning700?: string;
  warning800?: string;
  warningTint?: string;
  warningInverted?: string;
  warningTintInverted?: string;
};
export type PageThemeConfig = {
  Content?: {
    base?: Stylesheet;
    fluid?: Stylesheet;
    mobile?: Stylesheet;
    defaultProps?: Object;
  };
};
export type PaneThemeConfig = {
  base?: Stylesheet;
  border?: {
    default?: Stylesheet;
    shadow?: Stylesheet;
  };
};
export type ParagraphThemeConfig = {
  base?: Stylesheet;
};
export type PopoverThemeConfig = {
  base?: Stylesheet;
  Hide?: {
    base?: Stylesheet;
  };
  Show?: {
    base?: Stylesheet;
  };
  Toggle?: {
    base?: Stylesheet;
  };
  Close?: {
    base?: Stylesheet;
  };
};
export type PortalThemeConfig = {
  base?: Stylesheet;
};
export type ProgressBarThemeConfig = {
  base?: Stylesheet;
  indicator?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type RadioThemeConfig = {
  base?: Stylesheet;
  label?: Stylesheet;
  checked?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  icon?: {
    checked?: Stylesheet;
    unchecked?: Stylesheet;
    uncheckedDisabled?: Stylesheet;
    checkedDisabled?: Stylesheet;
  };
};
export type RadioGroupThemeConfig = {
  base?: Stylesheet;
  horizontal?: Stylesheet;
};
export type RatingThemeConfig = {
  base?: Stylesheet;
  Star?: {
    base?: Stylesheet;
    color?: string;
    sizes?: {
      small?: Stylesheet;
      medium?: Stylesheet;
      large?: Stylesheet;
    };
  };
};
export type SelectThemeConfig = {
  base?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type SelectMenuThemeConfig = {
  base: Stylesheet;
  horizontal: Stylesheet;
  vertical: Stylesheet;
  Item: {
    base: Stylesheet;
    disabled: Stylesheet;
    icon: Stylesheet;
    focus: Stylesheet;
    hover: Stylesheet;
    active: Stylesheet;
  };
  Divider: {
    base: Stylesheet;
  };
  Group: {
    base: Stylesheet;
    title: Stylesheet;
  };
  Button: {
    base: Stylesheet;
  };
  Popover: {
    base: Stylesheet;
  };
  SearchInput: {
    base: Stylesheet;
  };
  Icon: {
    base: Stylesheet;
  };
  LoadingSpinner: {
    base: Stylesheet;
  };
  StaticItem: {
    base: Stylesheet;
  };
  LoadingItemSpinner: {
    base: Stylesheet;
  };
  BottomSection: {
    base: Stylesheet;
  };
  TopSection: {
    base: Stylesheet;
  };
  ActionButton: {
    base: Stylesheet;
  };
  Tag: {
    base: Stylesheet;
  };
};
export type SetThemeConfig = {
  base?: Stylesheet;
  child?: Stylesheet;
};
export type SidebarThemeConfig = {
  base?: Stylesheet;
  Show?: {
    base?: Stylesheet;
  };
  Hide?: {
    base?: Stylesheet;
  };
  Close?: {
    base?: Stylesheet;
  };
};
export type SpinnerThemeConfig = {
  base?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type SwitchThemeConfig = {
  base?: Stylesheet;
  label?: Stylesheet;
  checked?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  icon?: {
    checked?: Stylesheet;
    unchecked?: Stylesheet;
    uncheckedDisabled?: Stylesheet;
    checkedDisabled?: Stylesheet;
  };
};
export type TableThemeConfig = {
  base?: Stylesheet;
  borderColor?: string;
  spacing?: number;
  hover?: {
    backgroundColor: string;
  };
  striped?: {
    backgroundColor: string;
  };
  Body?: {
    base?: Stylesheet;
  };
  Caption?: {
    base?: Stylesheet;
  };
  Cell?: {
    base?: Stylesheet;
  };
  Foot?: {
    base?: Stylesheet;
  };
  Head?: {
    base?: Stylesheet;
  };
  HeadCell?: {
    base?: Stylesheet;
  };
  Row?: {
    base?: Stylesheet;
  };
};
export type TabsThemeConfig = {
  base?: Stylesheet;
  Tab?: {
    base?: Stylesheet;
    active?: Stylesheet;
    focus?: Stylesheet;
    hover?: Stylesheet;
    boxed?: {
      base?: Stylesheet;
      active?: Stylesheet;
    };
    default?: {
      base?: Stylesheet;
      active?: Stylesheet;
    };
  };
  Panel?: {
    base?: Stylesheet;
  };
};
export type TagThemeConfig = {
  base?: Stylesheet;
  sizes?: {
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type TextThemeConfig = {
  base?: Stylesheet;
};
export type TextareaThemeConfig = {
  base?: Stylesheet;
  disabled?: Stylesheet;
  focus?: Stylesheet;
  placeholder?: Stylesheet;
  sizes?: {
    small?: Stylesheet;
    medium?: Stylesheet;
    large?: Stylesheet;
  };
};
export type ToastThemeConfig = {
  base?: Stylesheet;
  tint?: Stylesheet;
  Close?: {
    base?: Stylesheet;
    hover?: Stylesheet;
  };
  Content?: {
    base?: Stylesheet;
  };
  CountdownBar?: {
    base?: Stylesheet;
    autoDismissTimeout?: Stylesheet;
    background?: Stylesheet;
  };
  Title?: {
    base?: Stylesheet;
  };
  Icon?: {
    base?: Stylesheet;
    wrapper?: Stylesheet;
  };
};
export type ToastsThemeConfig = {
  base?: Stylesheet;
};
export type WebFontLoader = {
  [key: string]: Object;
};

export type ThemeConfig = {
  palette?: PaletteThemeConfig;

  _docs?: DocsThemeConfig;
  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;
  webFontLoader?: WebFontLoader;

  ActionButtons?: ActionButtonsThemeConfig;
  Alert?: AlertThemeConfig;
  Avatar?: AvatarThemeConfig;
  Backdrop?: BackdropThemeConfig;
  Badge?: BadgeThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
  Breadcrumb?: BreadcrumbThemeConfig;
  Button?: ButtonThemeConfig;
  Checkbox?: CheckboxThemeConfig;
  Callout?: CalloutThemeConfig;
  CalloutOverlay?: CalloutOverlayThemeConfig;
  Card?: CardThemeConfig;
  Code?: CodeThemeConfig;
  Column?: ColumnThemeConfig;
  Columns?: ColumnsThemeConfig;
  Container?: ContainerThemeConfig;
  Dialog?: DialogThemeConfig;
  Divider?: DividerThemeConfig;
  FieldWrapper?: FieldWrapperThemeConfig;
  FieldSet?: FieldSetThemeConfig;
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  Hidden?: HiddenThemeConfig;
  Icon?: IconThemeConfig;
  Image?: ImageThemeConfig;
  Input?: InputThemeConfig;
  Label?: LabelThemeConfig;
  LayoutSet?: LayoutSetThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Markdown?: MarkdownThemeConfig;
  Menu?: MenuThemeConfig;
  Navigation?: NavigationThemeConfig;
  Overlay?: OverlayThemeConfig;
  Page?: PageThemeConfig;
  Pane?: PaneThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Popover?: PopoverThemeConfig;
  Portal?: PortalThemeConfig;
  ProgressBar?: ProgressBarThemeConfig;
  Radio?: RadioThemeConfig;
  RadioGroup?: RadioGroupThemeConfig;
  Rating?: RatingThemeConfig;
  Select?: SelectThemeConfig;
  SelectMenu?: SelectMenuThemeConfig;
  Set?: SetThemeConfig;
  Sidebar?: SidebarThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Switch?: SwitchThemeConfig;
  Table?: TableThemeConfig;
  Tabs?: TabsThemeConfig;
  Tag?: TagThemeConfig;
  Text?: TextThemeConfig;
  Textarea?: TextareaThemeConfig;
  Toast?: ToastThemeConfig;
  Toasts?: ToastsThemeConfig;

  reakit?: any;
};
export type TimelineThemeConfig = {
  base?: Stylesheet;
  Bullet?: {
    base?: Stylesheet;
  };
  Step?: {
    base?: Stylesheet;
  };
  StepHeading?: {
    base?: Stylesheet;
  };
  StepDetail?: {
    base?: Stylesheet;
  };
};
