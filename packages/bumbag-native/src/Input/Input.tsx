import * as React from 'react';
import { TextInputProps as RNTextInputProps } from 'react-native';
import {
  createComponent,
  createElement,
  createHook,
  mergeRefs,
  omitCSSProps,
  pickCSSProps,
  useTheme,
} from 'bumbag/utils';
import { Palette, Size } from 'bumbag/types';

import { Animated } from '../Animated';
import { Box, BoxProps } from '../Box';
import { Pressable } from '../Pressable';
import { palette, useSpace, usePalette } from '../utils';
import * as styles from './Input.styles';

export type LocalInputProps = {
  label?: string;
  labelTextColor?: Palette;
  labelProps?: any;
  palette?: Palette;
  placeholderTextColor?: Palette;
  size?: Size;
};
export type InputProps = BoxProps & RNTextInputProps & LocalInputProps;

const defaultProps = { size: 'default', variant: 'bordered' };

const useProps = createHook<InputProps>(
  (props) => {
    const ref = React.useRef();
    const boxProps = Box.useProps({ ...props, elementRef: mergeRefs(ref, props.elementRef) });

    const { theme } = useTheme();

    return { ...boxProps, placeholderTextColor: palette(props.placeholderTextColor)({ theme }) };
  },
  { defaultProps, themeKey: 'native.Input' }
);

export const Input = createComponent<InputProps>(
  (props) => {
    const { label, labelProps, size } = props;
    const fontSize = props.fontSize || styles.SIZES[size];

    /////////////////////////////////////////////////////////////////////

    const inputRef = React.useRef({ value: null });
    const [isFocused, setIsFocused] = React.useState(false);

    /////////////////////////////////////////////////////////////////////

    const handleBlur = React.useCallback(
      (e) => {
        setIsFocused(false);
        props.onBlur && props.onBlur(e);
      },
      [props]
    );

    const handlePress = React.useCallback(() => {
      setIsFocused(true);
      // @ts-ignore
      inputRef.current && inputRef.current.focus();
    }, []);

    /////////////////////////////////////////////////////////////////////

    const htmlProps = useProps(
      omitCSSProps({
        ...props,
        ref: inputRef,
        onBlur: handleBlur,
        placeholder: !label || props.disabled ? props.placeholder || props.label : '',
      })
    );
    const element = createElement({
      children: props.children,
      component: styles.StyledInput,
      htmlProps: { ...htmlProps, fontSize },
    });

    /////////////////////////////////////////////////////////////////////

    const labelStartColor = usePalette(props.placeholderTextColor || props.palette || 'gray300');
    const labelEndColor = usePalette(props.labelTextColor || props.palette || 'gray300');
    const topStart = useSpace(0.8, fontSize);
    const topEnd = useSpace(-0.5, fontSize);
    const fontSizeStart = useSpace(1, fontSize);
    const fontSizeEnd = useSpace(0.75, fontSize);

    const colorAnimation = React.useRef(new Animated.Value(0)).current;
    const topAnimation = React.useRef(new Animated.Value(topStart)).current;
    const fontSizeAnimation = React.useRef(new Animated.Value(fontSizeStart)).current;

    React.useEffect(() => {
      if (isFocused || (inputRef.current && inputRef.current.value)) {
        Animated.timing(colorAnimation, {
          toValue: 1,
          duration: 100,
          useNativeDriver: true,
        }).start();
        Animated.timing(topAnimation, {
          toValue: topEnd,
          duration: 100,
          useNativeDriver: true,
        }).start();
        Animated.timing(fontSizeAnimation, {
          toValue: fontSizeEnd,
          duration: 100,
          useNativeDriver: true,
        }).start();
      } else {
        Animated.timing(colorAnimation, {
          toValue: 0,
          duration: 100,
          useNativeDriver: true,
        }).start();
        Animated.timing(topAnimation, {
          toValue: topStart,
          duration: 100,
          useNativeDriver: true,
        }).start();
        Animated.timing(fontSizeAnimation, {
          toValue: fontSizeStart,
          duration: 100,
          useNativeDriver: true,
        }).start();
      }
    }, [colorAnimation, fontSizeAnimation, fontSizeEnd, fontSizeStart, isFocused, topAnimation, topEnd, topStart]);

    const color = colorAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [labelStartColor, labelEndColor],
    });

    /////////////////////////////////////////////////////////////////////

    return (
      <Pressable onPress={handlePress} position="relative" {...pickCSSProps(props)}>
        <>
          {label && !props.disabled && (
            <styles.StyledAnimatedLabel
              color={color}
              top={topAnimation}
              fontSize={fontSizeAnimation}
              variant={props.variant}
              _web={{ cursor: 'text' }}
              {...labelProps}
            >
              {label}
            </styles.StyledAnimatedLabel>
          )}
          {element}
        </>
      </Pressable>
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
