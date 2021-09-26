import * as React from 'react';
import { createComponent } from 'bumbag/utils';
import { Button, ButtonProps } from 'bumbag-native/Button';

import { HapticRoot, HapticRootProps } from './Haptic';

export type LocalHapticButtonProps = {
  hapticOptions?: {
    enableVibrateFallback?: HapticRootProps['enableVibrateFallback'];
    ignoreAndroidSystemSettings?: HapticRootProps['ignoreAndroidSystemSettings'];
    type?: HapticRootProps['type'];
  };
};
export type HapticButtonProps = ButtonProps & LocalHapticButtonProps;

export const HapticButton = createComponent<HapticButtonProps>(
  (props) => {
    const { hapticOptions, ...restProps } = props;
    return (
      <HapticRoot {...hapticOptions}>
        <Button {...restProps}>{props.children}</Button>
      </HapticRoot>
    );
  },
  {
    attach: {
      useProps: () => {},
      displayName: 'native.Haptic.Button',
    },
    themeKey: 'native.Haptic.Button',
  }
);
