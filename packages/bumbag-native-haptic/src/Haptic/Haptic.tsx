import * as React from 'react';
import { bindFns, createComponent, createHook } from 'bumbag/utils';

import { trigger, HapticFeedbackTypes, HapticOptions } from './utils';

export type LocalHapticProps = {
  children: React.ReactNode;
  enableVibrateFallback?: HapticOptions['enableVibrateFallback'];
  ignoreAndroidSystemSettings?: HapticOptions['ignoreAndroidSystemSettings'];
  onPress?: () => void;
  type?: HapticFeedbackTypes;
};
export type HapticProps = LocalHapticProps;

const useProps = createHook<HapticProps>(
  (props) => {
    const { enableVibrateFallback, ignoreAndroidSystemSettings, onPress, type } = props;

    const handlePress = React.useCallback(() => {
      trigger(type, { enableVibrateFallback, ignoreAndroidSystemSettings });

      if (onPress) {
        onPress();
      }
    }, [enableVibrateFallback, ignoreAndroidSystemSettings, onPress, type]);

    return { onPress: handlePress };
  },
  { defaultProps: { type: 'impactLight' }, themeKey: 'native.Haptic' }
);

export const Haptic = createComponent<HapticProps>(
  (props) => {
    const hapticProps = useProps(props);

    let children = props.children;
    if (!Array.isArray(children)) {
      children = [children];
    }

    return (children as any).map((child) =>
      React.cloneElement(child, {
        onPress: bindFns(child?.props?.onPress, hapticProps.onPress),
      })
    );
  },
  {
    attach: {
      useProps,
      displayName: 'native.Haptic',
    },
    themeKey: 'native.Haptic',
  }
);
