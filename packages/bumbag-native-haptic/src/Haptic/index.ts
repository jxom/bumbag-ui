import { Haptic as _Haptic, HapticNotification, HapticImpact, HapticRoot } from './Haptic';
import { HapticButton } from './HapticButton';
import { HapticProvider, useHapticContext } from './HapticContext';
import { HapticPressable } from './HapticPressable';
import { HapticTouchable } from './HapticTouchable';
import { trigger, triggerImpact, triggerSelection, triggerNotification } from './utils';

export * from './Haptic';
export * from './HapticButton';
export * from './HapticContext';
export * from './HapticPressable';
export * from './HapticTouchable';
export * from './utils';
export * from './types';

export const Haptic = Object.assign(_Haptic, {
  Root: Object.assign(HapticRoot, { trigger }),
  Notification: Object.assign(HapticNotification, { trigger: triggerNotification }),
  Impact: Object.assign(HapticImpact, { trigger: triggerImpact }),
  Button: HapticButton,
  Touchable: HapticTouchable,
  Pressable: HapticPressable,
  trigger: triggerSelection,
  Provider: HapticProvider,
  useContext: useHapticContext,
});
