import { css, space } from '../../styled';

import global from './global';
import webFontLoader from './webFontLoader';
import fontWeights from './fontWeights';
import _palette from './palette';

import Button from './Button';
import Checkbox from './Checkbox';
import Container from './Container';
import Input from './Input';
import Label from './Label';

export default {
  // Foundation
  global,
  webFontLoader,
  fontWeights,
  palette: _palette,

  // Components
  Button,
  Checkbox,
  Container,
  Input,
  Label
};
