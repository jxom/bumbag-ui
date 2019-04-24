// @ts-ignore
import _camelCase from 'lodash/camelCase';
// @ts-ignore
import _get from 'lodash/get';

import { css, space, theme } from '../styled';
import { ThemeConfig } from '../types';

const buildColorFromPalette = (property: string, { theme, ...props }: { theme: ThemeConfig }) => {
  // @ts-ignore
  let color = theme.palette[props[_camelCase(property)]];
  if (typeof color === 'function') {
    color = color(props);
  }
  if (!color) return;
  return `${property}: ${color} !important;`;
};

const buildSpacingFromTheme = (property: string, props: { theme: { fannypack: ThemeConfig } }) => {
  // @ts-ignore
  let spacing = space(props[_camelCase(property)])(props);
  if (!spacing) return;
  return `${property}: ${spacing}rem !important;`;
};

const buildFontSizeFromTheme = (property: string, { theme, ...props }: { theme: { fannypack: ThemeConfig } }) => {
  // @ts-ignore
  let size = theme.fannypack.fontSizes[props[_camelCase(property)]];
  if (!size) return;
  return `${property}: ${size}rem !important;`;
};

const buildFontWeightFromTheme = (property: string, { theme, ...props }: { theme: { fannypack: ThemeConfig } }) => {
  // @ts-ignore
  let weight = theme.fannypack.fontWeights[props[_camelCase(property)]];
  if (!weight) return;
  return `${property}: ${weight} !important;`;
};

const buildVisibleAttributesFromProps = (props: { hiddenBreakpoint?: string; showBreakpoint?: string }) => {
  let breakpoint = props.hiddenBreakpoint || props.showBreakpoint;
  if (!breakpoint) return;

  let key: string | undefined;
  if (props.hiddenBreakpoint && breakpoint.includes('max')) {
    key = 'max-width';
  } else if (props.hiddenBreakpoint && breakpoint.includes('min')) {
    key = 'min-width';
  } else if (props.showBreakpoint && breakpoint.includes('max')) {
    key = 'min-width';
  } else if (props.showBreakpoint && breakpoint.includes('min')) {
    key = 'max-width';
  }

  let strippedBreakpoint = breakpoint;
  strippedBreakpoint = strippedBreakpoint.replace('max-', '');
  strippedBreakpoint = strippedBreakpoint.replace('min-', '');

  const minBreakpointValues: { [key: string]: number } = {
    mobile: 0,
    tablet: _get(props, 'theme.fannypack.layout.mobileBreakpoint'),
    desktop: _get(props, 'theme.fannypack.layout.tabletBreakpoint'),
    widescreen: _get(props, 'theme.fannypack.layout.desktopBreakpoint'),
    fullHD: _get(props, 'theme.fannypack.layout.widescreenBreakpoint')
  };
  let breakpointValue = _get(props, `theme.fannypack.layout['${strippedBreakpoint}Breakpoint']`);
  if (props.hiddenBreakpoint && breakpoint.includes('min')) {
    breakpointValue = minBreakpointValues[strippedBreakpoint] + 1;
  }
  if (props.showBreakpoint && breakpoint.includes('min')) {
    breakpointValue = minBreakpointValues[strippedBreakpoint];
  }
  if (props.showBreakpoint && breakpoint.includes('max')) {
    breakpointValue = breakpointValue + 1;
  }

  if (!breakpoint.includes('min-') && !breakpoint.includes('max-')) {
    if (props.showBreakpoint) {
      return css`
        @media screen and (max-width: ${minBreakpointValues[breakpoint]}px) {
          display: none;
        }

        @media screen and (min-width: ${breakpointValue + 1}px) {
          display: none;
        }
      `;
    }
    return css`
      @media screen and (min-width: ${minBreakpointValues[breakpoint] + 1}px) and (max-width: ${breakpointValue}px) {
        display: none;
      }
    `;
  }
  return css`
    @media screen and (${key}: ${breakpointValue}px) {
      display: none;
    }
  `;
};

export default {
  Box: css`
    /* If the color is one from the palette, use it. E.g. background-color="primary" */
    ${props => buildColorFromPalette('color', props)};
    ${props => buildColorFromPalette('background-color', props)};
    ${props => buildColorFromPalette('border-block-end-color', props)};
    ${props => buildColorFromPalette('border-block-start-color', props)};
    ${props => buildColorFromPalette('border-bottom-color', props)};
    ${props => buildColorFromPalette('border-color', props)};
    ${props => buildColorFromPalette('border-inline-end-color', props)};
    ${props => buildColorFromPalette('border-inline-start-color', props)};
    ${props => buildColorFromPalette('border-left-color', props)};
    ${props => buildColorFromPalette('border-right-color', props)};
    ${props => buildColorFromPalette('border-top-color', props)};
    ${props => buildColorFromPalette('border-bottom-color', props)};
    ${props => buildColorFromPalette('caret-color', props)};
    ${props => buildColorFromPalette('column-rule-color', props)};
    ${props => buildColorFromPalette('outline-color', props)};
    ${props => buildColorFromPalette('text-decoration-color', props)};
    ${props => buildColorFromPalette('text-emphasis-color', props)};

    ${props => buildSpacingFromTheme('margin', props)};
    ${props => buildSpacingFromTheme('margin-left', props)};
    ${props => buildSpacingFromTheme('margin-right', props)};
    ${props => buildSpacingFromTheme('margin-top', props)};
    ${props => buildSpacingFromTheme('margin-bottom', props)};
    ${props => buildSpacingFromTheme('padding', props)};
    ${props => buildSpacingFromTheme('padding-left', props)};
    ${props => buildSpacingFromTheme('padding-right', props)};
    ${props => buildSpacingFromTheme('padding-top', props)};
    ${props => buildSpacingFromTheme('padding-bottom', props)};

    ${props => buildFontSizeFromTheme('font-size', props)};

    ${props => buildFontWeightFromTheme('font-weight', props)};

    ${(props: any) => buildVisibleAttributesFromProps(props)};
  `
};
