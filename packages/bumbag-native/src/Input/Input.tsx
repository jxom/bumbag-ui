import * as React from 'react';
import { Platform, TextInputProps as RNTextInputProps } from 'react-native';
import { useFocus } from 'react-native-web-hooks';
import { Input as WebInput } from 'bumbag/Input';
import {
  createComponent,
  createElement,
  createHook,
  mergeRefs,
  omitCSSProps,
  pickCSSProps,
  useTheme,
} from 'bumbag/utils';

import { Animated } from '../Animated';
import { Box, BoxProps } from '../Box';
import { palette, usePalette } from '../utils';
import * as styles from './Input.styles';

export type LocalInputProps = {
  label?: string;
  labelProps?: any;
};
export type InputProps = BoxProps & RNTextInputProps & LocalInputProps;

const defaultProps = { labelTextColor: 'gray300', placeholderTextColor: 'gray300', variant: 'bordered' };

const useProps = createHook<InputProps>(
  (props) => {
    const ref = React.useRef();
    const boxProps = Box.useProps({ ...props, elementRef: mergeRefs(ref, props.elementRef) });

    const { theme } = useTheme();

    return { ...boxProps, placeholderTextColor: palette(props.placeholderTextColor)({ theme }) };
  },
  { defaultProps, themeKey: 'native.Input' }
);

export const Input =
  false && Platform.OS === 'web'
    ? WebInput
    : createComponent<InputProps>(
        (props) => {
          const { label, labelProps } = props;

          /////////////////////////////////////////////////////////////////////

          const inputRef = React.useRef();
          const [isFocused, setIsFocused] = React.useState(false);

          /////////////////////////////////////////////////////////////////////

          const handleBlur = React.useCallback(
            (e) => {
              setIsFocused(false);
              props.onBlur && props.onBlur(e);
            },
            [props]
          );

          const handleFocus = React.useCallback(
            (e) => {
              setIsFocused(true);
              // @ts-ignore
              inputRef.current && inputRef.current.focus();
              props.onFocus && props.onFocus(e);
            },
            [props]
          );

          /////////////////////////////////////////////////////////////////////

          const htmlProps = useProps(
            omitCSSProps({
              ...props,
              ref: inputRef,
              onBlur: handleBlur,
              onFocus: handleFocus,
              placeholder: !label ? props.placeholder : '',
            })
          );
          const element = createElement({
            children: props.children,
            component: styles.StyledInput,
            htmlProps: htmlProps,
          });

          /////////////////////////////////////////////////////////////////////

          const labelStartColor = usePalette(props.placeholderTextColor);
          const labelEndColor = usePalette(props.labelTextColor);

          const colorAnimation = React.useRef(new Animated.Value(0)).current;
          const topAnimation = React.useRef(new Animated.Value(12)).current;
          const fontSizeAnimation = React.useRef(new Animated.Value(16)).current;

          React.useEffect(() => {
            if (isFocused || inputRef.current?.value) {
              Animated.timing(colorAnimation, {
                toValue: 0,
                duration: 100,
                useNativeDriver: true,
              }).start();
              Animated.timing(topAnimation, {
                toValue: -8,
                duration: 100,
                useNativeDriver: true,
              }).start();
              Animated.timing(fontSizeAnimation, {
                toValue: 12,
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
                toValue: 12,
                duration: 100,
                useNativeDriver: true,
              }).start();
              Animated.timing(fontSizeAnimation, {
                toValue: 16,
                duration: 100,
                useNativeDriver: true,
              }).start();
            }
          }, [colorAnimation, fontSizeAnimation, isFocused, topAnimation]);

          /////////////////////////////////////////////////////////////////////

          const color = colorAnimation.interpolate({
            inputRange: [0, 150],
            outputRange: [labelStartColor, labelEndColor],
          });

          return (
            <Box onClick={handleFocus} position="relative" {...pickCSSProps(props)}>
              {label && (
                <styles.StyledAnimatedLabel
                  color={color}
                  top={topAnimation}
                  fontSize={fontSizeAnimation}
                  variant={props.variant}
                  {...labelProps}
                >
                  {label}
                </styles.StyledAnimatedLabel>
              )}
              {element}
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
