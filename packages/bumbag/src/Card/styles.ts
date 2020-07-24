import { cssClass } from '../styled';
import { borderRadius, fontSize, fontWeight, palette, space, theme } from '../utils';

export const Card = (styleProps) => cssClass`
  background-color: ${palette('background', { dark: 'gray900' })(styleProps)};
  border-radius: ${borderRadius('default')(styleProps)};
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CardContent = (styleProps) => cssClass`
  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CardHeader = (styleProps) => cssClass`
  margin-bottom: ${space(2, 'major')(styleProps)}rem;
  align-items: center;
  justify-content: space-between;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CardTitle = (styleProps) => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('300')(styleProps)}em;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const CardFooter = (styleProps) => cssClass`
  margin-top: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
