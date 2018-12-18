import { InterpolationValue } from 'styled-components';

export type Stylesheet = InterpolationValue[];
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
export type BlockquoteThemeConfig = {
  base?: Stylesheet;
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
export type FontSizeThemeConfig = {
  small?: number;
  medium?: number;
  large?: number;
  xlarge?: number;
  xxlarge?: number;
  xxxlarge?: number;
};
export type FontWeightsThemeConfig = {
  normal?: number;
  semibold?: number;
  bold?: number;
};
export type GlobalThemeConfig = {
  base?: Stylesheet;
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
export type IconThemeConfig = {
  base?: Stylesheet;
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
  spacing?: {
    xxsmall?: number;
    xsmall?: number;
    small?: number;
    medium?: number;
    large?: number;
    xlarge?: number;
    xxlarge?: number;
  };
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
  textLight?: string;
  textLighter?: string;
  textLightest?: string;
  textTint?: string;
  textInverted?: string;
  textTintInverted?: string;

  black?: string;

  white?: string;
  whiteDark?: string;
  whiteDarker?: string;
  whiteDarkest?: string;

  grayLightest?: string;
  grayLighter?: string;
  grayLight?: string;
  gray?: string;
  grayDark?: string;
  grayDarker?: string;
  grayDarkest?: string;

  default?: string;
  defaultInverted?: string;

  primary?: string;
  primaryLight?: string;
  primaryLighter?: string;
  primaryLightest?: string;
  primaryDark?: string;
  primaryDarker?: string;
  primaryDarkest?: string;
  primaryTint?: string;
  primaryInverted?: string;
  primaryTintInverted?: string;

  info?: string;
  infoLight?: string;
  infoLighter?: string;
  infoLightest?: string;
  infoDark?: string;
  infoDarker?: string;
  infoDarkest?: string;
  infoTint?: string;
  infoInverted?: string;
  infoTintInverted?: string;

  success?: string;
  successLight?: string;
  successLighter?: string;
  successLightest?: string;
  successDark?: string;
  successDarker?: string;
  successDarkest?: string;
  successTint?: string;
  successInverted?: string;
  successTintInverted?: string;

  danger?: string;
  dangerLight?: string;
  dangerLighter?: string;
  dangerLightest?: string;
  dangerDark?: string;
  dangerDarker?: string;
  dangerDarkest?: string;
  dangerTint?: string;
  dangerInverted?: string;
  dangerTintInverted?: string;

  warning?: string;
  warningLight?: string;
  warningLighter?: string;
  warningLightest?: string;
  warningDark?: string;
  warningDarker?: string;
  warningDarkest?: string;
  warningTint?: string;
  warningInverted?: string;
  warningTintInverted?: string;
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
export type SetThemeConfig = {
  base?: Stylesheet;
  child?: Stylesheet;
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
export type ThemeConfig = {
  palette?: PaletteThemeConfig;

  global?: GlobalThemeConfig;
  layout?: LayoutThemeConfig;
  fontSizes?: FontSizeThemeConfig;
  fontWeights?: FontWeightsThemeConfig;

  Alert?: AlertThemeConfig;
  Avatar?: AvatarThemeConfig;
  Backdrop?: BackdropThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
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
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  Icon?: IconThemeConfig;
  Image?: ImageThemeConfig;
  Input?: InputThemeConfig;
  Label?: LabelThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Navigation?: NavigationThemeConfig;
  Overlay?: OverlayThemeConfig;
  Pane?: PaneThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Popover?: PopoverThemeConfig;
  Radio?: RadioThemeConfig;
  RadioGroup?: RadioGroupThemeConfig;
  Rating?: RatingThemeConfig;
  Select?: SelectThemeConfig;
  Set?: SetThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Switch?: SwitchThemeConfig;
  Table?: TableThemeConfig;
  Tabs?: TabsThemeConfig;
  Tag?: TagThemeConfig;
  Text?: TextThemeConfig;
  Textarea?: TextareaThemeConfig;

  reakit?: any;
};
