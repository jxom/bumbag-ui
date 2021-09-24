import { HapticImpactProps, HapticNotificationProps } from './Haptic';
import { HapticFeedbackTypes, HapticOptions } from './types';

export type { HapticFeedbackTypes, HapticOptions };

export function trigger(_type: HapticFeedbackTypes, _options: HapticOptions) {}
export function triggerImpact(_type: HapticImpactProps['type'], _options: HapticOptions) {}
export function triggerNotification(_type: HapticNotificationProps['type'], _options: HapticOptions) {}
export function triggerSelection(_options: HapticOptions) {}

export function getImpactType(_type: HapticImpactProps['type']) {}

export function getNotificationType(_type: HapticNotificationProps['type']) {}
