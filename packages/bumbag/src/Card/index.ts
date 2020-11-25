import * as styles from './Card.styles';
import { Card as _Card, CardHeader, CardTitle, CardContent, CardFooter } from './Card';

export * from './Card';
export const Card = Object.assign(_Card, {
  Header: CardHeader,
  Title: CardTitle,
  Content: CardContent,
  Footer: CardFooter,
});
export { styles as CardStyles };
