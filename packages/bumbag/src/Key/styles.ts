import { cssClass } from '../styled';
import { borderRadius, palette, theme } from '../utils';

export const Key = (styleProps) => cssClass`
  box-sizing: border-box;
  display: inline;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  background-color: ${palette('default')(styleProps)};
  font-size: 0.875em;
  border-radius: ${borderRadius('2')(styleProps)};
  padding: 0.25em 0.5em;
  border-style: solid;
  border-color: ${palette('white900')(styleProps)};
  border-width: 1px 1px 2px;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
