import ReactNativeHapticFeedback from 'react-native-haptic-feedback';
import { globalEnabled } from './HapticContext';
import { HapticProps, HapticImpactProps, HapticNotificationProps } from './Haptic';
import { HapticFeedbackTypes, HapticOptions } from './types';

export type { HapticFeedbackTypes, HapticOptions };

/////////////////////////////////////////////////////////////////////////////////

export function trigger(type: HapticFeedbackTypes, options?: HapticOptions) {
  const { enableVibrateFallback = false, ignoreAndroidSystemSettings = false } = options || {};
  if (globalEnabled) {
    ReactNativeHapticFeedback.trigger(type, { enableVibrateFallback, ignoreAndroidSystemSettings });
  }
}

export function triggerImpact(type: HapticImpactProps['type'], options?: HapticOptions) {
  trigger(getImpactType(type), options);
}

export function triggerNotification(type: HapticNotificationProps['type'], options?: HapticOptions) {
  trigger(getNotificationType(type), options);
}

export function triggerSelection(options?: HapticOptions) {
  trigger('selection', options);
}

/////////////////////////////////////////////////////////////////////////////////

export function getImpactType(type: HapticImpactProps['type']) {
  if (type === 'light') {
    return 'impactLight';
  } else if (type === 'medium') {
    return 'impactMedium';
  } else if (type === 'heavy') {
    return 'impactHeavy';
  }
  return type as HapticFeedbackTypes;
}

export function getNotificationType(type: HapticNotificationProps['type']) {
  if (type === 'success') {
    return 'notificationSuccess';
  } else if (type === 'warning') {
    return 'notificationWarning';
  } else if (type === 'error') {
    return 'notificationError';
  }
  return type as HapticFeedbackTypes;
}
