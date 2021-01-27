import { ViewProps as RNViewProps } from 'react-native';
import { createComponent, createElement, createHook } from 'bumbag/utils';

import { Box, BoxProps } from '../Box';
import * as styles from './Flex.styles';

export type LocalFlexProps = {};
export type FlexProps = BoxProps & RNViewProps & LocalFlexProps;

const useProps = createHook<FlexProps>(
  (props) => {
    const boxProps = Box.useProps(props);
    return { ...boxProps };
  },
  { defaultProps: { display: 'flex', flexDirection: 'row' }, themeKey: 'native.Flex' }
);

export const Flex = createComponent<FlexProps>(
  (props) => {
    const flexProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.StyledFlex,
      htmlProps: flexProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Flex',
    },
    themeKey: 'native.Flex',
  }
);
