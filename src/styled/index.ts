import styled, {
  css,
  keyframes,
  createGlobalStyle,
  isStyledComponent,
  ThemeConsumer,
  ThemeProvider,
  withTheme,
  ServerStyleSheet,
  StyleSheetManager
} from 'reakit/styled';
import { prop, theme, ifProp, ifNotProp, switchProp, withProp } from 'styled-tools';

export {
  css,
  keyframes,
  createGlobalStyle,
  isStyledComponent,
  ThemeConsumer,
  ThemeProvider,
  withTheme,
  ServerStyleSheet,
  StyleSheetManager
};
export * from 'polished';
export * from 'styled-tools';
export { default as space } from './space';

export default styled;
