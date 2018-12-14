import { darken, lighten, shade, tint, readableColor } from 'polished';
import { palette as p, theme as t } from 'styled-tools';
// @ts-ignore
import _get from 'lodash/get';
import { ThemeConfig } from '../types';

function theme(overrides: ThemeConfig = {}): ThemeConfig {
  return {
    ...overrides,
    palette: {
      text: '#435a6f',
      textLight: lighten(0.05, '#435a6f'),
      textLighter: lighten(0.1, '#435a6f'),
      textLightest: lighten(0.2, '#435a6f'),
      textTint: tint(0.8, '#435a6f'),
      textInverted: readableColor('#435a6f'),
      textTintInverted: shade(0.3, '#435a6f'),

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

      primary: '#444bc9',
      primaryLight: tint(0.1, '#444bc9'),
      primaryLighter: tint(0.3, '#444bc9'),
      primaryLightest: tint(0.5, '#444bc9'),
      primaryDark: shade(0.1, '#444bc9'),
      primaryDarker: shade(0.3, '#444bc9'),
      primaryDarkest: shade(0.5, '#444bc9'),
      primaryTint: tint(0.8, '#444bc9'),
      primaryInverted: readableColor('#444bc9'),
      primaryTintInverted: shade(0.5, '#444bc9'),

      info: '#35709e',
      infoLight: tint(0.1, '#35709e'),
      infoLighter: tint(0.3, '#35709e'),
      infoLightest: tint(0.5, '#35709e'),
      infoDark: shade(0.1, '#35709e'),
      infoDarker: shade(0.3, '#35709e'),
      infoDarkest: shade(0.5, '#35709e'),
      infoTint: tint(0.8, '#35709e'),
      infoInverted: readableColor('#35709e'),
      infoTintInverted: shade(0.5, '#35709e'),

      success: '#2c8453',
      successLight: tint(0.1, '#2c8453'),
      successLighter: tint(0.3, '#2c8453'),
      successLightest: tint(0.5, '#2c8453'),
      successDark: shade(0.1, '#2c8453'),
      successDarker: shade(0.3, '#2c8453'),
      successDarkest: shade(0.5, '#2c8453'),
      successTint: tint(0.8, '#2c8453'),
      successInverted: readableColor('#2c8453'),
      successTintInverted: shade(0.5, '#2c8453'),

      danger: '#c9444d',
      dangerLight: tint(0.1, '#c9444d'),
      dangerLighter: tint(0.3, '#c9444d'),
      dangerLightest: tint(0.5, '#c9444d'),
      dangerDark: shade(0.1, '#c9444d'),
      dangerDarker: shade(0.3, '#c9444d'),
      dangerDarkest: shade(0.5, '#c9444d'),
      dangerTint: tint(0.8, '#c9444d'),
      dangerInverted: readableColor('#c9444d'),
      dangerTintInverted: shade(0.5, '#c9444d'),

      warning: '#f2a100',
      warningLight: tint(0.1, '#f2a100'),
      warningLighter: tint(0.3, '#f2a100'),
      warningLightest: tint(0.5, '#f2a100'),
      warningDark: shade(0.1, '#f2a100'),
      warningDarker: shade(0.3, '#f2a100'),
      warningDarkest: shade(0.5, '#f2a100'),
      warningTint: tint(0.8, '#f2a100'),
      warningInverted: readableColor('#f2a100'),
      warningTintInverted: shade(0.7, '#f2a100'),

      ..._get(overrides, 'palette', {})
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
        small: 1.25,
        medium: 1.5,
        large: 2,
        xlarge: 2.5,
        xxlarge: 3,
        xxxlarge: 3.5,
        ..._get(overrides, 'layout.spacing', {})
      },
      ..._get(overrides, 'layout', {})
    },
    fontSizes: {
      small: 0.8,
      medium: 1.5,
      large: 2,
      xlarge: 2.5,
      xxlarge: 3,
      xxxlarge: 4,
      ..._get(overrides, 'fontSizes', {})
    },
    fontWeights: {
      normal: 400,
      semibold: 600,
      bold: 700,
      ..._get(overrides, 'fontWeights', {})
    },
    Container: {
      fluidMargin: '0 2rem',
      tabletMargin: '0 1rem',
      ..._get(overrides, 'Container', {})
    },
    Icon: {
      iconNames: {
        info: 'info-circle',
        warning: 'exclamation-triangle',
        success: 'check-circle',
        danger: 'exclamation-circle',
        ..._get(overrides, 'Icon.iconNames', {})
      },
      ..._get(overrides, 'Icon', {})
    },
    Table: {
      borderColor: p('grayLightest'),
      spacing: t('fannypack.layout.spacing.xxsmall'),
      hover: {
        backgroundColor: p('whiteDarker'),
        ..._get(overrides, 'Table.hover', {})
      },
      striped: {
        backgroundColor: p('whiteDark'),
        ..._get(overrides, 'Table.striped', {})
      },
      ..._get(overrides, 'Table', {})
    }
  };
}

export default theme;
