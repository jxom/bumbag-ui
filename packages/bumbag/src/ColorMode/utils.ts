import { omit } from '../utils/omit';

const rootElementClassPrefix = 'bb-mode';
const cssVariablePrefix = '--bb';
const palettePrefix = `${cssVariablePrefix}-palette`;

export function mapCSSVariables(obj) {
  return Object.entries(obj).reduce((cssVariables, [key, value]) => {
    return {
      ...cssVariables,
      [`${palettePrefix}-${key}`]: value,
    };
  }, {});
}

export function getColorModesCSSVariables(theme) {
  if (!theme.palette) {
    return {
      [theme.cssVariablesSelector]: {},
    };
  }
  let cssVariables = mapCSSVariables(omit(theme.palette, 'modes'));
  cssVariables = Object.entries(theme.palette.modes || {}).reduce((cssVariables, [modeKey, value]) => {
    return {
      ...cssVariables,
      [`&.${rootElementClassPrefix}-${modeKey}`]: mapCSSVariables(value),
    };
  }, cssVariables);
  return {
    [theme.cssVariablesSelector]: {
      ...cssVariables,
    },
  };
}

export function getColorFromCSSVariable(selector, fallback) {
  return `var(${palettePrefix}-${selector}, ${fallback})`;
}

export function addColorModeRootElementClassName(nextMode: string, prevMode?: string) {
  const rootElement = window?.document?.getElementsByTagName?.('html')?.[0] ?? window?.document?.body;
  if (rootElement) {
    if (prevMode) {
      rootElement.classList.remove(`${rootElementClassPrefix}-${prevMode}`);
    }
    rootElement.classList.add(`${rootElementClassPrefix}-${nextMode}`);
  }
}

export function getDefaultColorMode(mode, { localStorage, theme }) {
  const { useSystemColorMode } = theme.modes || {};
  let defaultMode = mode;
  if (typeof window !== 'undefined') {
    if (useSystemColorMode && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      defaultMode = 'dark';
    }
    if (localStorage.get('mode')) {
      defaultMode = localStorage.get('mode');
    }
  }
  return defaultMode;
}
