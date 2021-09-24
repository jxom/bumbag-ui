import ReactNativeHapticFeedback, { HapticFeedbackTypes, HapticOptions } from 'react-native-haptic-feedback';

export type { HapticFeedbackTypes, HapticOptions };

export function trigger(type: HapticFeedbackTypes, options: HapticOptions) {
  ReactNativeHapticFeedback.trigger(type, options);
}
