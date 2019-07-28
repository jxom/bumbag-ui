import { theme as _theme } from 'styled-tools';

export {
  default,
  default as styled,
  css,
  withTheme,
  ThemeProvider,
  ThemeContext,
  ThemeConsumer,
  keyframes,
  createGlobalStyle,
  isStyledComponent,
  ServerStyleSheet,
  StyleSheetManager
} from 'styled-components';
export { palette } from 'styled-tools';

export function theme(selector: string) {
  return (props: any) => {
    const localSelector = selector.replace(/^.*\./, '');
    return props.overrides ? props.overrides[localSelector] : _theme(selector)(props);
  };
}
