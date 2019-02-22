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
import selector from './selector';
import space from './space';

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
  selector,
  switchProp,
  withProp,
  space
};

export default styled;
