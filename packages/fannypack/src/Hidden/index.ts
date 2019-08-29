import * as styles from './styles';
import { useHiddenState } from 'reakit';
import { Hidden as _Hidden } from './Hidden';
import { HiddenDisclosure } from './HiddenDisclosure';

export * from './Hidden';
export * from './HiddenDisclosure';
export const Hidden = Object.assign(_Hidden, { Disclosure: HiddenDisclosure, useState: useHiddenState });
export { styles as hiddenStyles };
