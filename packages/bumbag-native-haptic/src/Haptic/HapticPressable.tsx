import * as React from 'react';
import { createComponent } from 'bumbag/utils';
import { Pressable, PressableProps } from 'bumbag-native/Pressable';

import { HapticRoot, HapticRootProps } from './Haptic';

export type LocalHapticPressableProps = {
  hapticOptions?: {
    enableVibrateFallback?: HapticRootProps['enableVibrateFallback'];
    ignoreAndroidSystemSettings?: HapticRootProps['ignoreAndroidSystemSettings'];
    type?: HapticRootProps['type'];
  };
};
export type HapticPressableProps = PressableProps & LocalHapticPressableProps;

export const HapticPressable = createComponent<HapticPressableProps>(
  (props) => {
    const { hapticOptions, ...restProps } = props;
    return (
      <HapticRoot {...hapticOptions}>
        <Pressable {...restProps}>{props.children}</Pressable>
      </HapticRoot>
    );
  },
  {
    attach: {
      useProps: () => undefined,
      displayName: 'native.Haptic.Pressable',
    },
    themeKey: 'native.Haptic.Pressable',
  }
);
