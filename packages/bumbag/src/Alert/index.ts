import * as styles from './Alert.styles';
import { Alert as _Alert, AlertIcon, AlertContent, AlertDescription, AlertTitle } from './Alert';

export * from './Alert';
export const Alert = Object.assign(_Alert, {
  Icon: AlertIcon,
  Content: AlertContent,
  Description: AlertDescription,
  Title: AlertTitle,
});
export { styles as alertStyles };
