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

const defaultProps = { placeholderTextColor: 'gray300', size: 'default', variant: 'bordered' };

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
  (props) => {
    const { iconAfter, iconAfterProps, iconBefore, iconBeforeProps, label, labelProps, size } = props;
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
      <Box position="relative" {...pickCSSProps(props)}>
        {element}
        {iconBefore && (
          // @ts-ignore
          <styles.StyledIconWrapper isBefore defaultFontSize={defaultFontSize} variant={props.variant}>
            <Icon color="gray200" icon={iconBefore} size={defaultFontSize} {...iconBeforeProps} />
          </styles.StyledIconWrapper>
        )}
        {iconAfter && (
          // @ts-ignore
          <styles.StyledIconWrapper isAfter defaultFontSize={defaultFontSize} variant={props.variant}>
            <Icon color="gray200" icon={iconAfter} size={defaultFontSize} {...iconAfterProps} />
          </styles.StyledIconWrapper>
        )}
        {label && !props.disabled && (
          <styles.StyledAnimatedLabelWrapper
            iconAfter={iconAfter}
            iconBefore={iconBefore}
            defaultFontSize={defaultFontSize}
            variant={props.variant}
            style={{ position: 'absolute', top: topAnimation }}
          >
            <Pressable onPress={handlePress}>
              <styles.StyledAnimatedLabel
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
