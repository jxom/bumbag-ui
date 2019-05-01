// @ts-ignore
import _get from 'lodash/get';

import { ThemeConfig } from '../../types';

import _docs from './_docs';
import global from './global';
import palette from './palette';
import layout from './layout';
import fontSizes from './fontSizes';
import fontWeights from './fontWeights';
import Container from './Container';
import FieldSet from './FieldSet';
import Icon from './Icon';
import LayoutSet from './LayoutSet';
import Page from './Page';
import Pane from './Pane';
import Table from './Table';

function theme(overrides: ThemeConfig = {}): ThemeConfig {
  return {
    ...overrides,

    _docs: _docs(overrides),

    global: global(overrides),
    palette: palette(overrides),
    layout: layout(overrides),
    fontSizes: fontSizes(overrides),
    fontWeights: fontWeights(overrides),

    Container: Container(overrides),
    FieldSet: FieldSet(overrides),
    Icon: Icon(overrides),
    LayoutSet: LayoutSet(overrides),
    Page: Page(overrides),
    Pane: Pane(overrides),
    Table: Table(overrides)
  };
}

export default theme;
