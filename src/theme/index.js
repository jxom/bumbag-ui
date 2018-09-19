import { darken, lighten } from 'polished';
import { palette as p } from 'styled-tools';
import Button from '../Button/theme';

export const palette = {
  text: lighten(0.2, 'black'),

  white: 'white',

  default: darken(0.01, 'white'),
  defaultInverted: p('text'),

  primary: '#1173bc',
  primaryInverted: p('white'),

  secondary: '#1a9cfc',
  secondaryInverted: p('white'),

  success: '#417505',
  successInverted: p('white'),

  danger: '#af0120',
  dangerInverted: p('white'),

  warning: '#f39c12',
  warningInverted: p('text')
};

export default {
  palette,
  Button
};
