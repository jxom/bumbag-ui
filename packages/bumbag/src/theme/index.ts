import { ThemeConfig } from '../types';

import altitudes from './altitudes';
import borders from './borders';
import borderRadii from './borderRadii';
import breakpoints from './breakpoints';
import global from './global';
import modes from './modes';
import palette from './palette';
import spacing from './spacing';
import fonts from './fonts';
import fontMetrics from './fontMetrics';
import fontWeights from './fontWeights';
import fontSizes from './fontSizes';
import icons from './icons';
import lineHeights from './lineHeights';
import letterSpacings from './letterSpacings';

import Container from './Container';
import Heading from './Heading';
import Toast from './Toast';

export default (overrides: ThemeConfig = {}) => ({
  name: 'default',
  useCSSVariables: true,
  cssVariablesSelector: 'html,body',
  ...overrides,
  altitudes: altitudes(overrides.altitudes || {}),
  borders: borders(overrides.borders || {}),
  borderRadii: borderRadii(overrides.borderRadii || {}),
  breakpoints: breakpoints(overrides.breakpoints || {}),
  fonts: fonts(overrides.fonts || {}),
  fontMetrics: fontMetrics(overrides.fontMetrics || {}),
  fontSizes: fontSizes(overrides.fontSizes || {}),
  fontWeights: fontWeights(overrides.fontWeights || {}),
  global: global(overrides.global || {}),
  icons: icons(overrides.icons || {}),
  lineHeights: lineHeights(overrides.lineHeights || {}),
  letterSpacings: letterSpacings(overrides.letterSpacings || {}),
  modes: modes(overrides.modes || {}),
  spacing: spacing(overrides.spacing || {}),
  palette: palette(overrides.palette || {}),

  Container: Container(overrides.Container || {}),
  Heading: Heading(overrides.Heading || {}),
  Toast: Toast(overrides.Toast || {}),
});
