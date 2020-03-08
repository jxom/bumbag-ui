import { cssClass } from '../styled';
import { borderRadius, fontSize, fontWeight, space, theme } from '../utils';

export const Card = styleProps => cssClass`
  background-color: white;
  border-radius: ${borderRadius('default')(styleProps)};
  padding: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const CardContent = styleProps => cssClass`
  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const CardHeader = styleProps => cssClass`
  display: flex;
  margin-bottom: ${space(1, 'major')(styleProps)}rem;
  align-items: center;
  justify-content: space-between;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const CardTitle = styleProps => cssClass`
  font-weight: ${fontWeight('semibold')(styleProps)};
  font-size: ${fontSize('300')(styleProps)}em;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;

export const CardFooter = styleProps => cssClass`
  margin-top: ${space(3, 'major')(styleProps)}rem;

  & {
    ${theme(styleProps.themeKey, `css.root`)(styleProps)};
  }
`;
