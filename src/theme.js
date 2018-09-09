import { darken, lighten } from 'polished';

export const reakit = {
  Button: `
    box-shadow: 1px 4px 7px -5px rgb(117, 117, 117) !important;
    font-weight: 600;

    &:hover {
      box-shadow: 1px 5px 7px -5px rgb(117, 117, 117) !important;
      transform: translateY(-1px);
    }
    &:hover:active {
      box-shadow: 1px 2px 7px -5px rgb(117, 117, 117) !important;
      transform: translateY(1px);
    }
  `
};

const colors = {
  text: lighten(0.2, 'black'),
  white: 'white',

  default: darken(0.01, 'white'),
  primary: '#1173bc',
  secondary: '#1a9cfc',
  success: '#417505',
  danger: '#af0120',
  warning: '#f39c12'
};
const colorsInverted = {
  default: colors.text,
  primary: colors.white,
  secondary: colors.white,
  success: colors.white,
  danger: colors.white,
  warning: colors.text
};

export const styled = {
  colors,
  colorsInverted
};
