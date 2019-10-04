import * as styles from './styles';
import {
  Callout as _Callout,
  CalloutHeader,
  CalloutTitle,
  CalloutContent,
  CalloutFooter,
  CalloutIcon
} from './Callout';

export * from './Callout';
export const Callout = Object.assign(_Callout, {
  Header: CalloutHeader,
  Title: CalloutTitle,
  Content: CalloutContent,
  Footer: CalloutFooter,
  Icon: CalloutIcon
});
export { styles as CalloutStyles };
