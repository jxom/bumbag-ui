import * as React from 'react';
import { bindFns, createComponent, createHook } from 'bumbag/utils';

import { trigger, getNotificationType, getImpactType, HapticFeedbackTypes, HapticOptions } from './utils';

export type LocalHapticRootProps = {
  children: React.ReactNode;
  /**  iOS only. if haptic feedback is not available (iOS < 10 OR Device < iPhone6s), vibrate with default method (heavy 1s) (default: false) */
  enableVibrateFallback?: HapticOptions['enableVibrateFallback'];
  /**  Android only. if Haptic is disabled in the Android system settings this will allow ignoring the setting and trigger haptic feeback. (default: false) */
  ignoreAndroidSystemSettings?: HapticOptions['ignoreAndroidSystemSettings'];
  onPress?: () => void;
  /** Possible values are "selection", "impactLight", "impactMedium", "impactHeavy", "rigid", "soft", "notificationSuccess", "notificationWarning", "notificationError", "clockTick"(Android only), "contextClick"(Android only), "keyboardPress"(Android only), "keyboardRelease"(Android only), "keyboardTap"(Android only), "longPress"(Android only), "textHandleMove"(Android only), "virtualKey"(Android only), "virtualKeyRelease"(Android only), (default: "selection") */
  type?: HapticFeedbackTypes;
};
export type HapticRootProps = LocalHapticRootProps;

const useProps = createHook<HapticRootProps>(
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
  { defaultProps: { type: 'selection' }, themeKey: 'native.Haptic.Root' }
);

export const HapticRoot = createComponent<HapticRootProps>(
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
      displayName: 'native.Haptic.Root',
    },
    themeKey: 'native.Haptic.Root',
  }
);

////////////////////////////////////////////////////////////////////////////////////////////////////

export type LocalHapticProps = {
  children: HapticRootProps['children'];
};
export type HapticProps = LocalHapticProps;

const useHapticProps = createHook<HapticProps, HapticRootProps>(
  (props) => {
    const hapticProps = useProps({ ...props, type: 'selection' });
    return hapticProps;
  },
  { themeKey: 'native.Haptic' }
);

export const Haptic = createComponent<HapticProps>(
  (props) => {
    const hapticProps = useHapticProps(props);
    return <HapticRoot {...hapticProps}>{props.children}</HapticRoot>;
  },
  {
    attach: {
      useProps: useHapticProps,
      displayName: 'native.Haptic',
    },
    themeKey: 'native.Haptic',
  }
);

////////////////////////////////////////////////////////////////////////////////////////////////////

export type LocalHapticImpactProps = {
  children: HapticRootProps['children'];
  type?: 'light' | 'medium' | 'heavy' | 'rigid' | 'soft';
};
export type HapticImpactProps = LocalHapticImpactProps;

const useHapticImpactProps = createHook<HapticImpactProps, HapticRootProps>(
  (props) => {
    const { type } = props;
    const hapticProps = useProps({ ...props, type: getImpactType(type) });
    return hapticProps;
  },
  { defaultProps: { type: 'light' }, themeKey: 'native.Haptic.Impact' }
);

export const HapticImpact = createComponent<HapticImpactProps>(
  (props) => {
    const hapticImpactProps = useHapticImpactProps(props);
    return <HapticRoot {...hapticImpactProps}>{props.children}</HapticRoot>;
  },
  {
    attach: {
      useProps: useHapticImpactProps,
      displayName: 'native.Haptic.Impact',
    },
    themeKey: 'native.Haptic.Impact',
  }
);

////////////////////////////////////////////////////////////////////////////////////////////////////

export type LocalHapticNotificationProps = {
  children: HapticRootProps['children'];
  type: 'success' | 'warning' | 'error';
};
export type HapticNotificationProps = LocalHapticNotificationProps;

const useHapticNotificationProps = createHook<HapticNotificationProps, HapticRootProps>(
  (props) => {
    const { type } = props;
    const hapticProps = useProps({ ...props, type: getNotificationType(type) });
    return hapticProps;
  },
  { themeKey: 'native.Haptic.Notification' }
);

export const HapticNotification = createComponent<HapticNotificationProps>(
  (props) => {
    const hapticProps = useHapticNotificationProps(props);
    return <HapticRoot {...hapticProps}>{props.children}</HapticRoot>;
  },
  {
    attach: {
      useProps: useHapticNotificationProps,
      displayName: 'native.Haptic.Notification',
    },
    themeKey: 'native.Haptic.Notification',
  }
);
