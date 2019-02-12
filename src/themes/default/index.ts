// @ts-ignore
import _get from 'lodash/get';

import { ThemeConfig } from '../../types';

import global from './global';
import palette from './palette';
import layout from './layout';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import Container from './Container';
import FieldSet from './FieldSet';
import Icon from './Icon';
import LayoutSet from './LayoutSet';
import Pane from './Pane';
import Table from './Table';

function theme(overrides: ThemeConfig = {}): ThemeConfig {
  return {
    ...overrides,

    global: global(overrides),
    palette: palette(overrides),
    layout: layout(overrides),
    fontSizes: fontSizes(overrides),
    fontWeights: fontWeights(overrides),

    Container: Container(overrides),
    FieldSet: FieldSet(overrides),
    Icon: Icon(overrides),
    LayoutSet: LayoutSet(overrides),
    Pane: Pane(overrides),
    Table: Table(overrides)
  };
}

export default theme;
