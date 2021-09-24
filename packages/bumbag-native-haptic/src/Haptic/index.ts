import { Haptic as _Haptic } from './Haptic';
import { trigger } from './utils';

export * from './Haptic';
export * from './utils';

export const Haptic = Object.assign(_Haptic, { trigger });
