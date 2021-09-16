import * as React from 'react';
import { Animated, TextInputProps as RNTextInputProps } from 'react-native';
import {
  createComponent,
  createElement,
  createHook,
  hexToRgb,
  mergeRefs,
  omitCSSProps,
  pickCSSProps,
  useTheme,
} from 'bumbag/utils';
import { Palette, Size } from 'bumbag/types';

import { Box, BoxProps } from '../Box';
import { Icon, IconProps } from '../Icon';
import { FieldWrapper, FieldWrapperProps } from '../FieldWrapper';
import { Pressable } from '../Pressable';
import { palette, useSpace, usePalette } from '../utils';
import * as styles from './Input.styles';

export type LocalInputProps = {
  accessibilityLabelledBy?: string;
  /** Icon to place before the input. */
  iconAfter?: string;
  iconAfterProps?: Partial<IconProps>;
  /** Icon to place after the input. */
  iconBefore?: string;
  iconBeforeProps?: Partial<IconProps>;
  inputProps?: Partial<InputProps>;
  inputRef?: React.Ref<any>;
  /** Label of the input. */
  label?: string;
  /** Label color of the input. Can be any color in your palette. */
  labelTextColor?: Palette;
  labelProps?: any;
  palette?: Palette;
  /** Placeholder color of the input. Can be any color in your palette. */
  placeholderTextColor?: Palette;
  /** State of the input. Can be any color in your palette. */
  state?: Palette;
  /** Alters the size of the input. Can be "small", "medium" or "large" */
  size?: Size;
};
export type InputProps = BoxProps & RNTextInputProps & LocalInputProps;

const defaultProps = { placeholderTextColor: 'gray300', size: 'default', variant: 'bordered', _focus: true };

const useProps = createHook<InputProps>(
  (props) => {
    const ref = React.useRef();
    const boxProps = Box.useProps({ ...props, elementRef: mergeRefs(ref, props.elementRef) });

    const { theme } = useTheme();

    return {
      ...boxProps,
      accessibilityLabelledBy: props.accessibilityLabelledBy,
      placeholderTextColor: props.placeholderTextColor ? palette(props.placeholderTextColor)({ theme }) : undefined,
    };
  },
  { defaultProps, themeKey: 'native.Input' }
);

export const Input = createComponent<InputProps>(
  (_props) => {
    const props = { ..._props, ..._props.inputProps };
    const {
      colorMode,
      disabled,
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      label,
      labelProps,
      size,
    } = props;
    const defaultFontSize = props.fontSize || styles.SIZES[size];

    /////////////////////////////////////////////////////////////////////

    const [value, setValue] = React.useState(props.defaultValue);
    const inputRef = React.useRef({ value: null, _lastNativeText: null });
    const [isFocused, setIsFocused] = React.useState(false);

    /////////////////////////////////////////////////////////////////////

    const handleBlur = React.useCallback(
      (e) => {
        setIsFocused(false);
        props.onBlur && props.onBlur(e);
      },
      [props]
    );

    const handleChange = React.useCallback(
      (e) => {
        setValue(e);
        props.onChangeText && props.onChangeText(e);
      },
      [props]
    );

    const handleFocus = React.useCallback(
      (e) => {
        setIsFocused(true);
        props.onFocus && props.onFocus(e);
      },
      [props]
    );

    const handlePress = React.useCallback(() => {
      setIsFocused(true);
      // @ts-ignore
      inputRef.current && inputRef.current.focus();
    }, []);

    /////////////////////////////////////////////////////////////////////

    const htmlProps = useProps({
      ...omitCSSProps({
        ...props,
        ref: mergeRefs(inputRef, props.inputRef),
        onBlur: handleBlur,
        onFocus: handleFocus,
        onChangeText: handleChange,
        placeholder: !label || props.disabled ? props.placeholder || props.label : '',
      }),
      borderLeftRadius: props.borderLeftRadius,
      borderRightRadius: props.borderRightRadius,
    });
    const element = createElement({
      children: props.children,
      component: styles.StyledInput,
      htmlProps: { ...htmlProps, iconAfter, iconBefore, styledFontSize: defaultFontSize },
    });

    /////////////////////////////////////////////////////////////////////

    const labelStartColor = usePalette(props.state || props.placeholderTextColor || props.palette || 'gray300');
    const labelEndColor = usePalette(props.state || props.labelTextColor || props.palette || 'gray300');
    const topStart = useSpace(props.defaultValue ? -0.5 : 0.8, defaultFontSize);
    const topEnd = useSpace(-0.5, defaultFontSize);
    const fontSizeStart = useSpace(props.defaultValue ? 0.75 : 1, defaultFontSize);
    const fontSizeEnd = useSpace(0.75, defaultFontSize);

    const colorAnimation = React.useRef(new Animated.Value(0)).current;
    const topAnimation = React.useRef(new Animated.Value(topStart)).current;
    const fontSizeAnimation = React.useRef(new Animated.Value(0)).current;

    React.useEffect(() => {
      if (isFocused || value) {
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
        Animated.timing(topAnimation, {
          toValue: topEnd,
          duration: 100,
          useNativeDriver: false,
        }).start();
        Animated.timing(fontSizeAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: false,
        }).start();
      } else {
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
        Animated.timing(topAnimation, {
          toValue: topStart,
          duration: 100,
          useNativeDriver: false,
        }).start();
        Animated.timing(fontSizeAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: false,
        }).start();
      }
    }, [
      colorAnimation,
      fontSizeAnimation,
      fontSizeEnd,
      fontSizeStart,
      isFocused,
      topAnimation,
      topEnd,
      topStart,
      value,
    ]);

    const color = colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [hexToRgb(labelStartColor), hexToRgb(labelEndColor)],
    });
    const fontSize = fontSizeAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [fontSizeStart, fontSizeEnd],
    });

    /////////////////////////////////////////////////////////////////////

    return (
      <Box colorMode={colorMode} position="relative" {...pickCSSProps(props)}>
        {element}
        {iconBefore && (
          <styles.StyledIconWrapper
            colorMode={colorMode}
            // @ts-ignore
            isBefore
            defaultFontSize={defaultFontSize}
            variant={props.variant}
          >
            <Icon color="gray200" icon={iconBefore} size={defaultFontSize} {...iconBeforeProps} />
          </styles.StyledIconWrapper>
        )}
        {iconAfter && (
          <styles.StyledIconWrapper
            colorMode={colorMode}
            // @ts-ignore
            isAfter
            defaultFontSize={defaultFontSize}
            variant={props.variant}
          >
            <Icon color="gray200" icon={iconAfter} size={defaultFontSize} {...iconAfterProps} />
          </styles.StyledIconWrapper>
        )}
        {label && !props.disabled && (
          <styles.StyledAnimatedLabelWrapper
            colorMode={colorMode}
            iconAfter={iconAfter}
            iconBefore={iconBefore}
            defaultFontSize={defaultFontSize}
            variant={props.variant}
            style={{ position: 'absolute', top: topAnimation }}
          >
            <Pressable onPress={handlePress}>
              <styles.StyledAnimatedLabel
                colorMode={colorMode}
                // @ts-ignore
                color={color}
                // @ts-ignore
                fontSize={fontSize}
                variant={props.variant}
                _web={{ cursor: 'text' }}
                {...labelProps}
              >
                {label}
              </styles.StyledAnimatedLabel>
            </Pressable>
          </styles.StyledAnimatedLabelWrapper>
        )}
      </Box>
    );
  },
  {
    attach: {
      useProps,
      displayName: 'native.Input',
    },
    defaultProps,
    themeKey: 'native.Input',
  }
);

////////////////////////////////////////////////////////////////

export type LocalInputFieldProps = {
  /** Additional props for the Input component */
  inputProps?: InputProps;
  /** If addonBefore or addonAfter exists, then the addons will render vertically. */
  orientation?: 'vertical' | 'horizontal';
  useInlineLabel?: boolean;
};
export type InputFieldProps = BoxProps & FieldWrapperProps & InputProps & LocalInputFieldProps;

const useInputFieldProps = createHook<InputFieldProps>(
  (props) => {
    const {
      accessibilityLabelledBy,
      children,
      autoFocus,
      defaultValue,
      description,
      disabled,
      hint,
      iconAfter,
      iconAfterProps,
      iconBefore,
      iconBeforeProps,
      inputRef,
      inputProps,
      isOptional,
      isRequired,
      labelProps,
      labelTextColor,
      orientation,
      label,
      size,
      palette,
      placeholder,
      placeholderTextColor,
      state,
      value,
      onBlur,
      onChangeText,
      onFocus,
      overrides,
      validationText,
      variant,
      useInlineLabel,
      ...restProps
    } = props;

    const boxProps = Box.useProps(restProps);

    return {
      ...boxProps,
      children: (
        <FieldWrapper
          description={description}
          hint={hint}
          isOptional={isOptional}
          isRequired={isRequired}
          label={!useInlineLabel ? label : undefined}
          overrides={overrides}
          state={state}
          variant={variant}
          validationText={validationText}
        >
          <Input
            accessibilityLabelledBy={accessibilityLabelledBy}
            iconAfter={iconAfter}
            iconAfterProps={iconAfterProps}
            iconBefore={iconBefore}
            iconBeforeProps={iconBeforeProps}
            inputProps={inputProps}
            inputRef={inputRef}
            label={useInlineLabel ? label : undefined}
            labelTextColor={labelTextColor}
            labelProps={labelProps}
            palette={palette}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            state={state}
            size={size}
            value={value}
            variant={variant}
            onBlur={onBlur}
            onChangeText={onChangeText}
            onFocus={onFocus}
            overrides={overrides}
          />
        </FieldWrapper>
      ),
    };
  },
  { defaultProps: { orientation: 'horizontal' }, themeKey: 'InputField' }
);

export const InputField = createComponent<InputFieldProps>(
  (props) => {
    const inputFieldProps = useInputFieldProps(props);
    return createElement({
      children: props.children,
      component: styles.InputField,
      htmlProps: inputFieldProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'InputField',
    },
    themeKey: 'InputField',
  }
);
