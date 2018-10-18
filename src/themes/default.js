// @flow
import { darken, lighten } from 'polished';
import { palette as p } from 'styled-tools';
import type { ThemeConfig } from '../types';

export default (overrides: ThemeConfig = {}): ThemeConfig => ({
  palette: {
    text: lighten(0.2, 'black'),

    white: 'white',

    default: darken(0.01, 'white'),
    defaultInverted: p('text'),

    primary: '#112ebb',
    primaryInverted: p('white'),

    secondary: '#1d67fc',
    secondaryInverted: p('white'),

    success: '#007d04',
    successInverted: p('white'),

    danger: '#d60027',
    dangerInverted: p('white'),

    warning: '#ffb300',
    warningInverted: p('text'),

    ...overrides.palette
  },
  layout: {
    gapFactor: 0.5,
    mobileBreakpoint: 480,
    tabletBreakpoint: 768,
    desktopBreakpoint: 1024,
    widescreenBreakpoint: 1200,
    fullHDBreakpoint: 1440,
    spacing: {
      xxsmall: 0.5,
      xsmall: 1,
      small: 1.5,
      medium: 2,
      large: 2.5,
      xlarge: 3,
      xxlarge: 3.5
    },
    ...overrides.layout
  },
  container: {
    fluidMargin: '0 2rem',
    tabletMargin: '0 1rem',
    ...overrides.container
  },
  ...overrides
});
