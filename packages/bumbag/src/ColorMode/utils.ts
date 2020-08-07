import { omit } from '../utils/omit';

const bodyClassPrefix = 'bb-mode';
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
  let cssVariables = mapCSSVariables(omit(theme.palette, 'modes'));
  cssVariables = Object.entries(theme.palette.modes || {}).reduce((cssVariables, [modeKey, value]) => {
    return {
      ...cssVariables,
      [`&.${bodyClassPrefix}-${modeKey}`]: mapCSSVariables(value),
    };
  }, cssVariables);
  return {
    'html,body': {
      ...cssVariables,
    },
  };
}

export function getColorFromCSSVariable(selector, fallback) {
  return `var(${palettePrefix}-${selector}, ${fallback})`;
}

export function addColorModeBodyClassName(nextMode: string, prevMode?: string) {
  if (prevMode) {
    document.body.classList.remove(`${bodyClassPrefix}-${prevMode}`);
  }
  document.body.classList.add(`${bodyClassPrefix}-${nextMode}`);
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
