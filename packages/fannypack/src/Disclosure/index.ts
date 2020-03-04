import * as styles from './styles';
import { Disclosure as _Disclosure } from './Disclosure';
import { DisclosureRegion } from './DisclosureRegion';
import { useDisclosureState, DisclosureState } from './DisclosureState';

export * from './Disclosure';
export * from './DisclosureRegion';
export const Disclosure = Object.assign(_Disclosure, {
  Region: DisclosureRegion,
  useState: useDisclosureState,
  State: DisclosureState
});
export { styles as disclosureStyles };
