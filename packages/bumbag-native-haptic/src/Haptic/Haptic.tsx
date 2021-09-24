import * as React from 'react';
import { createComponent, createElement, createHook } from 'bumbag/utils';
import { BoxTouchable, BoxTouchableProps } from 'bumbag-native/Box';

import { trigger, HapticFeedbackTypes, HapticOptions } from './utils';
import * as styles from './Haptic.styles';

export type LocalHapticProps = {
  options?: HapticOptions;
  type?: HapticFeedbackTypes;
};
export type HapticProps = BoxTouchableProps & LocalHapticProps;

const useProps = createHook<HapticProps>(
  (props) => {
    const { options, onPress, type } = props;
    const boxProps = BoxTouchable.useProps(props);

    const handlePress = React.useCallback(
      (e) => {
        trigger(type, options);

        if (onPress) {
          onPress(e);
        }
      },
      [onPress, options, type]
    );

    return { ...boxProps, onPress: handlePress };
  },
  { defaultProps: { options: {}, type: 'impactLight' }, themeKey: 'native.Haptic' }
);

export const Haptic = createComponent<HapticProps>(
  (props) => {
    const htmlProps = useProps(props);
    return createElement({
      children: props.children,
      component: styles.Haptic,
      htmlProps,
    });
  },
  {
    attach: {
      useProps,
      displayName: 'native.Haptic',
    },
    themeKey: 'native.Haptic',
  }
);
