import { Haptic as _Haptic, HapticNotification, HapticSelection, HapticRoot } from './Haptic';
import { trigger, triggerImpact, triggerSelection, triggerNotification } from './utils';

export * from './Haptic';
export * from './utils';
export * from './types';

export const Haptic = Object.assign(_Haptic, {
  Root: Object.assign(HapticRoot, { trigger }),
  Notification: Object.assign(HapticNotification, { trigger: triggerNotification }),
  Selection: Object.assign(HapticSelection, { trigger: triggerSelection }),
  trigger: triggerImpact,
});
