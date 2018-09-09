import { darken, lighten } from 'polished';

export const colors = {
  text: lighten(0.2, 'black'),
  white: 'white',

  default: darken(0.01, 'white'),
  primary: '#1173bc',
  secondary: '#1a9cfc',
  success: '#417505',
  danger: '#af0120',
  warning: '#f39c12'
};
export const colorsInverted = {
  default: colors.text,
  primary: colors.white,
  secondary: colors.white,
  success: colors.white,
  danger: colors.white,
  warning: colors.text
}
