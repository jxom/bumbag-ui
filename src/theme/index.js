import { darken, lighten } from 'polished';
import { palette as p } from 'styled-tools';
import Button from '../Button/theme';

export const palette = {
  text: lighten(0.2, 'black'),

  white: 'white',

  default: darken(0.01, 'white'),
  defaultInverted: p('text'),

  primary: '#112ebb',
  primaryInverted: p('white'),

  secondary: '#1d67fc',
  secondaryInverted: p('white'),

  success: '#007d04',
  successInverted: p('white'),

  danger: '#d60027',
  dangerInverted: p('white'),

  warning: '#ffb300',
  warningInverted: p('text')
};

export default {
  palette,
  Button
};
