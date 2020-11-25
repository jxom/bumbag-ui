import * as styles from './Dialog.styles';
import {
  Dialog as _Dialog,
  DialogHeader,
  DialogTitle,
  DialogContent,
  DialogFooter,
  DialogIcon,
  DialogModal,
} from './Dialog';

export * from './Dialog';
export const Dialog = Object.assign(_Dialog, {
  Header: DialogHeader,
  Title: DialogTitle,
  Content: DialogContent,
  Footer: DialogFooter,
  Icon: DialogIcon,
  Modal: DialogModal,
});
export { styles as DialogStyles };
