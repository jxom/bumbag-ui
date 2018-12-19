import { darken, lighten, shade, tint, readableColor } from 'polished';
import { palette as p, theme as t } from 'styled-tools';
// @ts-ignore
import _get from 'lodash/get';
import * as faInfoCircle from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import * as faExclamationTriangle from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import * as faCheckCircle from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import * as faExclamationCircle from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import * as faTimes from '@fortawesome/free-solid-svg-icons/faTimes';

import { ThemeConfig } from '../types';
import parseIcons, { Opts as ParseIconsOpts, Icons } from '../parseIcons';

const defaultPalette: { [key: string]: string } = {
  text: '#435a6f',
  primary: '#444bc9',
  info: '#35709e',
  success: '#2c8453',
  danger: '#c9444d',
  warning: '#f2a100'
};

function theme(overrides: ThemeConfig = {}): ThemeConfig {
  const generateTextVariants = (textColor: string) => ({
    text: textColor,
    textLight: lighten(0.05, textColor),
    textLighter: lighten(0.1, textColor),
    textLightest: lighten(0.2, textColor),
    textTint: tint(0.8, textColor),
    textInverted: readableColor(textColor),
    textTintInverted: shade(0.3, textColor)
  });

  const generateColorVariants = ({
    paletteKey,
    paletteOverrides
  }: {
    paletteKey: string;
    paletteOverrides?: ({ color }: { color: string }) => {};
  }) => {
    const color = _get(overrides, `palette.${paletteKey}`) || defaultPalette[paletteKey];
    return {
      [paletteKey]: color,
      [`${paletteKey}Light`]: tint(0.1, color),
      [`${paletteKey}Lighter`]: tint(0.3, color),
      [`${paletteKey}Lightest`]: tint(0.5, color),
      [`${paletteKey}Dark`]: shade(0.1, color),
      [`${paletteKey}Darker`]: shade(0.3, color),
      [`${paletteKey}Darkest`]: shade(0.5, color),
      [`${paletteKey}Tint`]: tint(0.8, color),
      [`${paletteKey}Inverted`]: readableColor(color),
      [`${paletteKey}TintInverted`]: shade(0.5, color),
      ...(paletteOverrides ? paletteOverrides({ color }) : {})
    };
  };

  const parseOverrideIcons = (
    icons: Array<{ icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }>
  ) =>
    icons.reduce(
      (
        currentIcons: {},
        iconSet: { icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }
      ) => ({
        ...currentIcons,
        ...parseIcons(iconSet.icons, { type: iconSet.type, prefix: iconSet.prefix })
      }),
      {}
    );

  return {
    ...overrides,
    palette: {
      ...generateTextVariants(_get(overrides, 'palette.text') || defaultPalette.text),

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

      ...generateColorVariants({
        paletteKey: 'primary'
      }),
      ...generateColorVariants({
        paletteKey: 'info'
      }),
      ...generateColorVariants({
        paletteKey: 'success'
      }),
      ...generateColorVariants({
        paletteKey: 'danger'
      }),
      ...generateColorVariants({
        paletteKey: 'warning',
        paletteOverrides: ({ color }) => ({
          warningTintInverted: shade(0.7, color)
        })
      }),

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
      ..._get(overrides, 'Icon', {}),
      icons: {
        ...parseIcons([faInfoCircle, faExclamationTriangle, faCheckCircle, faExclamationCircle, faTimes], {
          type: 'font-awesome-standalone'
        }),
        ...parseOverrideIcons(_get(overrides, 'Icon.iconSets', [])),
        ..._get(overrides, 'Icon.icons', {})
      },
      iconNames: {
        info: 'info-circle',
        warning: 'exclamation-triangle',
        success: 'check-circle',
        danger: 'exclamation-circle',
        ..._get(overrides, 'Icon.iconNames', {})
      }
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
