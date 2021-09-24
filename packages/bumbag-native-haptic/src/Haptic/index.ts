import { Haptic as _Haptic, HapticNotification, HapticImpact, HapticRoot } from './Haptic';
import { trigger, triggerImpact, triggerSelection, triggerNotification } from './utils';

export * from './Haptic';
export * from './utils';
export * from './types';

export const Haptic = Object.assign(_Haptic, {
  Root: Object.assign(HapticRoot, { trigger }),
  Notification: Object.assign(HapticNotification, { trigger: triggerNotification }),
  Impact: Object.assign(HapticImpact, { trigger: triggerImpact }),
  trigger: triggerSelection,
});
