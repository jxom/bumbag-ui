import { ButtonProps } from '../Button';
import { BlockProps } from '../Block';
import { BlockquoteProps } from '../Blockquote';
import { BoxProps } from '../Box';
import { CodeProps } from '../Code';
import { ColumnsProps, ColumnProps } from '../Columns';
import { ContainerProps } from '../Container';
import { FlexProps } from '../Flex';
import { GridProps } from '../Grid/Grid';
import { GridItemProps } from '../Grid/GridItem';
import { GroupProps } from '../Group';
import { HiddenProps, HiddenDisclosureProps } from '../Hidden';
import { HeadingProps } from '../Heading';
import { InlineProps } from '../Inline';
import { InlineBlockProps } from '../InlineBlock';
import { InlineFlexProps } from '../InlineFlex';
import { LayoutSetProps } from '../LayoutSet';
import { LinkProps } from '../Link';
import { ListProps } from '../List/List';
import { ListItemProps } from '../List/ListItem';
import { ModalProps, ModalBackdropProps, ModalDisclosureProps } from '../Modal';
import { OverlayProps, OverlayDisclosureProps } from '../Overlay';
import { ParagraphProps } from '../Paragraph';
import { PortalProps } from '../Portal';
import { RoverProps } from '../Rover';
import { TabbableProps } from '../Tabbable';
import { TextProps } from '../Text';
import { SetProps } from '../Set';

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
export type PortalThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<PortalProps>;
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
export type TextThemeConfig = {
  base?: ThemeAttribute<Stylesheet>;
  defaultProps?: Partial<TextProps>;
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

  Box?: BoxThemeConfig;
  Block?: BlockThemeConfig;
  Blockquote?: BlockquoteThemeConfig;
  Button?: ButtonThemeConfig;
  Code?: CodeThemeConfig;
  Columns?: ColumnsThemeConfig;
  Container?: ContainerThemeConfig;
  Flex?: FlexThemeConfig;
  Grid?: GridThemeConfig;
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  Hidden?: HiddenThemeConfig;
  HighlightedCode?: HighlightedCodeThemeConfig;
  Inline?: InlineThemeConfig;
  InlineBlock?: InlineBlockThemeConfig;
  InlineFlex?: InlineFlexThemeConfig;
  LayoutSet?: LayoutSetThemeConfig;
  Link?: LinkThemeConfig;
  List?: ListThemeConfig;
  Modal?: ModalThemeConfig;
  Overlay?: OverlayThemeConfig;
  Paragraph?: ParagraphThemeConfig;
  Portal?: PortalThemeConfig;
  Rover?: RoverThemeConfig;
  Tabbable?: TabbableThemeConfig;
  Text?: TextThemeConfig;
  Set?: SetThemeConfig;
};
