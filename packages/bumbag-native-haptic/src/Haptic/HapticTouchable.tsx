import * as React from 'react';
import { createComponent } from 'bumbag/utils';
import { BoxTouchable, BoxTouchableProps } from 'bumbag-native/Box';

import { HapticRoot, HapticRootProps } from './Haptic';

export type LocalHapticTouchableProps = {
  hapticOptions?: {
    enableVibrateFallback?: HapticRootProps['enableVibrateFallback'];
    ignoreAndroidSystemSettings?: HapticRootProps['ignoreAndroidSystemSettings'];
    type?: HapticRootProps['type'];
  };
};
export type HapticTouchableProps = BoxTouchableProps & LocalHapticTouchableProps;

export const HapticTouchable = createComponent<HapticTouchableProps>(
  (props) => {
    const { hapticOptions, ...restProps } = props;
    return (
      <HapticRoot {...hapticOptions}>
        <BoxTouchable {...restProps}>{props.children}</BoxTouchable>
      </HapticRoot>
    );
  },
  {
    attach: {
      useProps: () => undefined,
      displayName: 'native.Haptic.Touchable',
    },
    themeKey: 'native.Haptic.Touchable',
  }
);
