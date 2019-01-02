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
import { prop, theme, palette, ifProp, ifNotProp, switchProp, withProp } from 'styled-tools';
<<<<<<< HEAD
=======
import space from './space';
>>>>>>> master

export {
  css,
  keyframes,
  createGlobalStyle,
  isStyledComponent,
  ThemeConsumer,
  ThemeProvider,
  withTheme,
  ServerStyleSheet,
  StyleSheetManager,
  prop,
  theme,
  palette,
  ifProp,
  ifNotProp,
  switchProp,
  withProp,
  space
};
export { prop, theme, palette, ifProp, ifNotProp, switchProp, withProp } from 'styled-tools';
export { default as space } from './space';

export default styled;
