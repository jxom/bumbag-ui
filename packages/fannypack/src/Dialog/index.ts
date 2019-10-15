import * as styles from './styles';
import { Dialog as _Dialog, DialogHeader, DialogTitle, DialogContent, DialogFooter, DialogIcon } from './Dialog';

export * from './Dialog';
export const Dialog = Object.assign(_Dialog, {
  Header: DialogHeader,
  Title: DialogTitle,
  Content: DialogContent,
  Footer: DialogFooter,
  Icon: DialogIcon
});
export { styles as DialogStyles };
