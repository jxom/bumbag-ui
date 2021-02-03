import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { InterpolationWithTheme } from '@emotion/core';
import { ThemeConfig as CoreThemeConfig } from 'bumbag/types';
import { ParsedIcons, ParseIconsOpts } from 'bumbag/utils/parseIcons';

import { BoxKeyboardAvoidingProps, BoxProps, BoxSafeProps, BoxScrollProps, BoxTouchableProps } from '../Box';
import { ButtonProps } from '../Button';
import { HeadingProps } from '../Heading';
import { IconProps } from '../Icon';
import { ImageProps } from '../Image';
import { SpinnerProps } from '../Spinner';
import { TextProps } from '../Text';

export type Stylesheet = InterpolationWithTheme<any>;
export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);
export type Variant<ThemeConfig> = { [key: string]: ThemeConfig };

export type AltitudesThemeConfig = {
  [key: string]: ThemeAttribute<Stylesheet>;
};
type BreakpointsThemeConfig = {
  height: {
    [key: string]: ThemeAttribute<number>;
  };
  width: {
    [key: string]: ThemeAttribute<number>;
  };
};

export type BoxThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Safe?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BoxSafeProps>;
    variants?: Variant<BoxThemeConfig['Safe']>;
    modes?: Variant<BoxThemeConfig['Safe']>;
  };
  Touchable?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BoxTouchableProps>;
    variants?: Variant<BoxThemeConfig['Touchable']>;
    modes?: Variant<BoxThemeConfig['Touchable']>;
  };
  KeyboardAvoiding?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BoxKeyboardAvoidingProps>;
    variants?: Variant<BoxThemeConfig['KeyboardAvoiding']>;
    modes?: Variant<BoxThemeConfig['KeyboardAvoiding']>;
  };
  Scroll?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<BoxScrollProps>;
    variants?: Variant<BoxThemeConfig['Scroll']>;
    modes?: Variant<BoxThemeConfig['Scroll']>;
  };
  defaultProps?: Partial<BoxProps>;
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
};

export type ButtonThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    disabled?: ThemeAttribute<Stylesheet>;
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
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      after?: ThemeAttribute<Stylesheet>;
      before?: ThemeAttribute<Stylesheet>;
    };
  };
  Spinner?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Text?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
      hoveractive?: ThemeAttribute<Stylesheet>;
      outlined?: ThemeAttribute<Stylesheet>;
      ghost?: ThemeAttribute<Stylesheet>;
      link?: ThemeAttribute<Stylesheet>;
      sizes?: {
        small?: ThemeAttribute<Stylesheet>;
        default?: ThemeAttribute<Stylesheet>;
        medium?: ThemeAttribute<Stylesheet>;
        large?: ThemeAttribute<Stylesheet>;
      };
    };
  };
  defaultProps?: Partial<ButtonProps>;
  variants?: Variant<ButtonThemeConfig>;
  modes?: Variant<ButtonThemeConfig>;
};

export type FlexThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<BoxProps>;
  variants?: Variant<BoxThemeConfig>;
  modes?: Variant<BoxThemeConfig>;
};

export type HeadingThemeConfig = {
  fontSize?: string;
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<HeadingProps>;
  variants?: Variant<HeadingThemeConfig>;
  modes?: Variant<HeadingThemeConfig>;
  H1?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
  H2?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
  H3?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
  H4?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
  H5?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
  H6?: {
    fontSize?: string;
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
    defaultProps?: Partial<HeadingProps>;
    variants?: Variant<HeadingThemeConfig>;
    modes?: Variant<HeadingThemeConfig>;
  };
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
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};

export type SpinnerThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  sizes?: {
    small?: string;
    default?: string;
    medium?: string;
    large?: string;
  };
  defaultProps?: Partial<SpinnerProps>;
  variants?: Variant<SpinnerThemeConfig>;
  modes?: Variant<SpinnerThemeConfig>;
};

export type TextThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<TextProps>;
  variants?: Variant<TextThemeConfig>;
  modes?: Variant<TextThemeConfig>;
};

export type ThemeConfig = {
  altitudes?: AltitudesThemeConfig;
  borders?: CoreThemeConfig['borders'];
  borderRadii?: CoreThemeConfig['borderRadii'];
  breakpoints?: BreakpointsThemeConfig;
  fonts?: CoreThemeConfig['fonts'];
  fontSizes?: CoreThemeConfig['fontSizes'];
  fontWeights?: CoreThemeConfig['fontWeights'];
  icons?: CoreThemeConfig['icons'];
  lineHeights?: CoreThemeConfig['lineHeights'];
  letterSpacings?: CoreThemeConfig['letterSpacings'];
  spacing?: CoreThemeConfig['spacing'];
  palette?: CoreThemeConfig['palette'];

  Box?: BoxThemeConfig;
  Button?: ButtonThemeConfig;
  Flex?: FlexThemeConfig;
  Heading?: HeadingThemeConfig;
  Icon?: IconThemeConfig;
  Image?: ImageThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Text?: TextThemeConfig;
};
