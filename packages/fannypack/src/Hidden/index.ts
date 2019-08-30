import * as styles from './styles';
import { Hidden as _Hidden } from './Hidden';
import { HiddenDisclosure } from './HiddenDisclosure';
import { useHiddenState } from './HiddenState';

export * from './Hidden';
export * from './HiddenDisclosure';
export const Hidden = Object.assign(_Hidden, { Disclosure: HiddenDisclosure, useState: useHiddenState });
export { styles as hiddenStyles };
