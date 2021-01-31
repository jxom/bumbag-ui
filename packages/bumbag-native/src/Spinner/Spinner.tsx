import { ActivityIndicatorProps as RNActivityIndicatorProps } from 'react-native';
import { createComponent, createElement, createHook, useTheme } from 'bumbag/utils';
import { Size } from 'bumbag/types';

import { palette, theme as getTheme } from '../utils/theme';
import { Box, BoxProps } from '../Box';
import * as styles from './Spinner.styles';

export type LocalSpinnerProps = {
  size?: Size;
};
export type SpinnerProps = BoxProps & Omit<RNActivityIndicatorProps, 'size'> & LocalSpinnerProps;

const useProps = createHook<SpinnerProps>(
  (props, { themeKey }) => {
    const { color, size, ...restProps } = props;
    const { theme } = useTheme();

    const boxProps = Box.useProps(restProps);

    return {
      ...boxProps,
      color: palette(color as string)({ theme }),
      size: getTheme(themeKey, `sizes.${size}`)({ theme })
        ? parseInt(getTheme(themeKey, `sizes.${size}`)({ theme }).replace('px', ''))
        : parseInt((size as string).replace('px', '')),
    };
  },
  { defaultProps: { color: 'primary', size: 'default' }, themeKey: 'native.Spinner' }
);

export const Spinner = createComponent<SpinnerProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledSpinner,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Spinner',
    },
    themeKey: 'native.Spinner',
  }
);
