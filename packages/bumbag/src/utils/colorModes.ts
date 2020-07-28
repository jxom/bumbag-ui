import { omit } from './omit';

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
      [`&.bb-mode-${modeKey}`]: mapCSSVariables(value),
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
    document.body.classList.remove(`bb-mode-${prevMode}`);
  }
  document.body.classList.add(`bb-mode-${nextMode}`);
}
