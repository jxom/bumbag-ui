import { darken, lighten, shade, tint, readableColor } from 'polished';
import { palette as p, theme as t } from 'styled-tools';
import { space } from '../styled';
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
    text100: lighten(0.2, textColor),
    text200: lighten(0.15, textColor),
    text300: lighten(0.1, textColor),
    text400: lighten(0.05, textColor),
    text: textColor,
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
      [`${paletteKey}100`]: tint(0.7, color),
      [`${paletteKey}200`]: tint(0.5, color),
      [`${paletteKey}300`]: tint(0.3, color),
      [`${paletteKey}400`]: tint(0.1, color),
      [paletteKey]: color,
      [`${paletteKey}500`]: color,
      [`${paletteKey}600`]: shade(0.1, color),
      [`${paletteKey}700`]: shade(0.3, color),
      [`${paletteKey}800`]: shade(0.5, color),
      [`${paletteKey}900`]: shade(0.7, color),
      [`${paletteKey}Tint`]: tint(0.7, color),
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
    global: {
      fontFamily:
        "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
      fontSize: 16,
      ..._get(overrides, 'global', {})
    },
    palette: {
      ...generateTextVariants(_get(overrides, 'palette.text') || defaultPalette.text),

      black: 'black',
      black500: 'black',

      white: 'white',
      white500: 'white',
      white600: darken(0.03, 'white'),
      white700: darken(0.05, 'white'),
      white800: darken(0.1, 'white'),
      white900: darken(0.15, 'white'),

      gray100: lighten(0.2, 'gray'),
      gray200: lighten(0.15, 'gray'),
      gray300: lighten(0.1, 'gray'),
      gray400: lighten(0.05, 'gray'),
      gray: 'gray',
      gray500: 'gray',
      gray600: darken(0.05, 'gray'),
      gray700: darken(0.1, 'gray'),
      gray800: darken(0.15, 'gray'),
      gray900: darken(0.2, 'gray'),

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
      gapFactor: space(2),
      mobileBreakpoint: 480,
      tabletBreakpoint: 768,
      desktopBreakpoint: 1024,
      widescreenBreakpoint: 1200,
      fullHDBreakpoint: 1440,
      minorUnit: 4,
      majorUnit: 8,
      ..._get(overrides, 'layout', {})
    },
    fontSizes: {
      100: 0.75,
      150: 0.875,
      200: 1,
      300: 1.25,
      400: 1.5,
      500: 2,
      600: 2.5,
      700: 3,
      800: 3.75,
      900: 4.5,
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
      borderColor: p('gray100'),
      spacing: space(2),
      ..._get(overrides, 'Table', {}),
      hover: {
        backgroundColor: p('white700'),
        ..._get(overrides, 'Table.hover', {})
      },
      striped: {
        backgroundColor: p('white600'),
        ..._get(overrides, 'Table.striped', {})
      }
    }
  };
}

export default theme;
