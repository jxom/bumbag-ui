// @flow
import { darken, lighten, shade, tint } from 'polished';
import { palette as p, theme } from 'styled-tools';
import type { ThemeConfig } from '../types';

export default (overrides: ThemeConfig = {}): ThemeConfig => ({
  ...overrides,
  palette: {
    text: '#435a6f',
    textLight: lighten(0.05, '#435a6f'),
    textLighter: lighten(0.1, '#435a6f'),
    textLightest: lighten(0.2, '#435a6f'),
    textTint: tint(0.9, '#435a6f'),

    black: 'black',

    white: 'white',
    whiteDark: darken(0.03, 'white'),
    whiteDarker: darken(0.05, 'white'),
    whiteDarkest: darken(0.1, 'white'),

    grayLightest: lighten(0.2, 'gray'),
    grayLighter: lighten(0.1, 'gray'),
    grayLight: lighten(0.05, 'gray'),
    gray: 'gray',
    grayDark: darken(0.05, 'gray'),
    grayDarker: darken(0.1, 'gray'),
    grayDarkest: darken(0.2, 'gray'),

    default: darken(0.01, 'white'),
    defaultInverted: '#435a6f',

    primary: '#3926a5',
    primaryLight: tint(0.1, '#3926a5'),
    primaryLighter: tint(0.3, '#3926a5'),
    primaryLightest: tint(0.5, '#3926a5'),
    primaryDark: shade(0.1, '#3926a5'),
    primaryDarker: shade(0.3, '#3926a5'),
    primaryDarkest: shade(0.5, '#3926a5'),
    primaryTint: tint(0.9, '#3926a5'),
    primaryInverted: 'white',

    secondary: '#112ebb',
    secondaryLight: tint(0.1, '#112ebb'),
    secondaryLighter: tint(0.3, '#112ebb'),
    secondaryLightest: tint(0.5, '#112ebb'),
    secondaryDark: shade(0.1, '#112ebb'),
    secondaryDarker: shade(0.3, '#112ebb'),
    secondaryDarkest: shade(0.5, '#112ebb'),
    secondaryTint: tint(0.9, '#112ebb'),
    secondaryInverted: 'white',

    success: '#007b2e',
    successLight: tint(0.1, '#007b2e'),
    successLighter: tint(0.3, '#007b2e'),
    successLightest: tint(0.5, '#007b2e'),
    successDark: shade(0.1, '#007b2e'),
    successDarker: shade(0.3, '#007b2e'),
    successDarkest: shade(0.5, '#007b2e'),
    successTint: tint(0.9, '#007b2e'),
    successInverted: 'white',

    danger: '#d60027',
    dangerLight: tint(0.1, '#d60027'),
    dangerLighter: tint(0.3, '#d60027'),
    dangerLightest: tint(0.5, '#d60027'),
    dangerDark: shade(0.1, '#d60027'),
    dangerDarker: shade(0.3, '#d60027'),
    dangerDarkest: shade(0.5, '#d60027'),
    dangerTint: tint(0.9, '#d60027'),
    dangerInverted: 'white',

    warning: '#ffb300',
    warningLight: tint(0.1, '#ffb300'),
    warningLighter: tint(0.3, '#ffb300'),
    warningLightest: tint(0.5, '#ffb300'),
    warningDark: shade(0.1, '#ffb300'),
    warningDarker: shade(0.3, '#ffb300'),
    warningDarkest: shade(0.5, '#ffb300'),
    warningTint: tint(0.9, '#ffb300'),
    warningInverted: lighten(0.2, 'black'),

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
      xxxsmall: 0.25,
      xxsmall: 0.5,
      xsmall: 1,
      small: 1.5,
      medium: 2,
      large: 2.5,
      xlarge: 3,
      xxlarge: 3.5,
      xxxlarge: 4
    },
    ...overrides.layout
  },
  fontSizes: {
    small: 0.8,
    medium: 1.5,
    large: 2,
    xlarge: 2.25,
    xxlarge: 2.5,
    xxxlarge: 3
  },
  Container: {
    fluidMargin: '0 2rem',
    tabletMargin: '0 1rem',
    ...overrides.Container
  },
  Table: {
    borderColor: p('grayLightest'),
    hover: {
      backgroundColor: p('whiteDarker')
    },
    striped: {
      backgroundColor: p('whiteDark')
    },
    spacing: theme('fannypack.layout.spacing.xxsmall'),
    ...overrides.Table
  }
});
