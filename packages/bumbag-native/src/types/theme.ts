import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { InterpolationWithTheme } from '@emotion/core';
import { ThemeConfig as CoreThemeConfig } from 'bumbag/types';
import { ParsedIcons, ParseIconsOpts } from 'bumbag/utils/parseIcons';

import { BoxKeyboardAvoidingProps, BoxProps, BoxSafeProps, BoxScrollProps, BoxTouchableProps } from '../Box';
import { ButtonProps } from '../Button';
import { CheckboxProps, CheckboxFieldProps, CheckboxGroupProps, CheckboxGroupFieldProps } from '../Checkbox';
import { FieldWrapperProps } from '../FieldWrapper';
import { FlexProps } from '../Flex';
import { GroupProps } from '../Group';
import { HeadingProps } from '../Heading';
import { IconProps } from '../Icon';
import { InputProps, InputFieldProps } from '../Input';
import { ImageProps } from '../Image';
import { LevelProps } from '../Level';
import { MenuProps, MenuItemProps } from '../Menu';
import { PressableProps } from '../Pressable';
import { RadioProps, RadioGroupProps, RadioGroupFieldProps } from '../Radio';
import { SpinnerProps } from '../Spinner';
import { SetProps } from '../Set';
import { StackProps } from '../Stack';
import { SwitchProps, SwitchFieldProps, SwitchGroupProps, SwitchGroupFieldProps } from '../Switch';
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

export type CheckboxThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Icon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  CheckIcon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
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

export type FieldWrapperThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  LabelWrapper?: {
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
  HintTextWrapper?: {
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
  ValidationTextWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<FieldWrapperProps>;
  variants?: Variant<FieldWrapperThemeConfig>;
  modes?: Variant<FieldWrapperThemeConfig>;
};

export type CheckboxGroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Set?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
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

export type FlexThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<FlexProps>;
  variants?: Variant<FlexThemeConfig>;
  modes?: Variant<FlexThemeConfig>;
};

export type GroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<GroupProps>;
  variants?: Variant<GroupThemeConfig>;
  modes?: Variant<GroupThemeConfig>;
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

export type InputThemeConfig = {
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
  IconWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  LabelWrapper?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
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

export type ImageThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};

export type LevelThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<LevelProps>;
  variants?: Variant<LevelThemeConfig>;
  modes?: Variant<LevelThemeConfig>;
};

export type MenuThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
      hover?: ThemeAttribute<Stylesheet>;
      hoveractive?: ThemeAttribute<Stylesheet>;
    };
    BeforeWrapper?: {
      styles?: {
        base?: ThemeAttribute<Stylesheet>;
      };
    };
    AfterWrapper?: {
      styles?: {
        base?: ThemeAttribute<Stylesheet>;
      };
    };
    Content?: {
      styles?: {
        base?: ThemeAttribute<Stylesheet>;
      };
    };
    ContentText?: {
      styles?: {
        base?: ThemeAttribute<Stylesheet>;
      };
    };
    defaultProps?: Partial<MenuItemProps>;
    variants?: Variant<MenuThemeConfig['Item']>;
    modes?: Variant<MenuThemeConfig['Item']>;
  };
  defaultProps?: Partial<MenuProps>;
  variants?: Variant<MenuThemeConfig>;
  modes?: Variant<MenuThemeConfig>;
};

export type PressableThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<PressableProps>;
  variants?: Variant<PressableThemeConfig>;
  modes?: Variant<PressableThemeConfig>;
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
  CheckIcon?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  defaultProps?: Partial<RadioProps>;
  variants?: Variant<RadioThemeConfig>;
  modes?: Variant<RadioThemeConfig>;
};

export type RadioGroupThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Set?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
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

export type SetThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
    vertical?: ThemeAttribute<Stylesheet>;
    horizontal?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<SetProps>;
  variants?: Variant<SetThemeConfig>;
  modes?: Variant<SetThemeConfig>;
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

export type StackThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<StackProps>;
  variants?: Variant<StackThemeConfig>;
  modes?: Variant<StackThemeConfig>;
};

export type SwitchThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  Toggle?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Label?: {
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
  Set?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
  };
  Item?: {
    styles?: {
      base?: ThemeAttribute<Stylesheet>;
    };
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
  breakpoints?: {
    ios?: BreakpointsThemeConfig;
    android?: BreakpointsThemeConfig;
    web?: BreakpointsThemeConfig;
  };
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
  Checkbox?: CheckboxThemeConfig;
  CheckboxField?: CheckboxThemeConfig;
  CheckboxGroup?: CheckboxGroupThemeConfig;
  CheckboxGroupField?: CheckboxGroupFieldThemeConfig;
  FieldWrapper?: FieldWrapperThemeConfig;
  Flex?: FlexThemeConfig;
  Group?: GroupThemeConfig;
  Heading?: HeadingThemeConfig;
  Icon?: IconThemeConfig;
  Input?: InputThemeConfig;
  InputField?: InputFieldThemeConfig;
  Image?: ImageThemeConfig;
  Level?: LevelThemeConfig;
  Menu?: MenuThemeConfig;
  Pressable?: PressableThemeConfig;
  Radio?: RadioThemeConfig;
  RadioGroup?: RadioGroupThemeConfig;
  RadioGroupField?: RadioGroupFieldThemeConfig;
  Set?: SetThemeConfig;
  Spinner?: SpinnerThemeConfig;
  Stack?: StackThemeConfig;
  Switch?: SwitchThemeConfig;
  SwitchGroup?: SwitchGroupThemeConfig;
  SwitchField?: SwitchFieldThemeConfig;
  SwitchGroupField?: SwitchGroupFieldThemeConfig;
  Text?: TextThemeConfig;
};
