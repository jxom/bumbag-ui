import { ThemeConfig } from '../types';

import altitudes from './altitudes';
import breakpoints from './breakpoints';
import fontWeights from './fontWeights';

import Heading from './Heading';
import Spinner from './Spinner';

export default (overrides: ThemeConfig) => ({
  ...overrides,
  altitudes: altitudes(overrides || {}),
  breakpoints: breakpoints(overrides || {}),
  fontWeights: fontWeights(overrides || {}),

  Heading: Heading(overrides || {}),
  Spinner: Spinner(overrides || {}),
});
