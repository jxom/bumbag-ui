import * as styles from './Callout.styles';
import {
  Callout as _Callout,
  CalloutHeader,
  CalloutTitle,
  CalloutContent,
  CalloutFooter,
  CalloutIcon,
  CalloutOverlay,
} from './Callout';

export * from './Callout';
export const Callout = Object.assign(_Callout, {
  Header: CalloutHeader,
  Title: CalloutTitle,
  Content: CalloutContent,
  Footer: CalloutFooter,
  Icon: CalloutIcon,
  Overlay: CalloutOverlay,
});
export { styles as CalloutStyles };
