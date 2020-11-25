import * as styles from './Disclosure.styles';
import { Disclosure as _Disclosure } from './Disclosure';
import { DisclosureContent } from './DisclosureContent';
import { useDisclosureState, DisclosureState } from './DisclosureState';

export * from './Disclosure';
export * from './DisclosureContent';
export * from './DisclosureState';
export const Disclosure = Object.assign(_Disclosure, {
  Content: DisclosureContent,
  useState: useDisclosureState,
  State: DisclosureState,
});
export { styles as disclosureStyles };
