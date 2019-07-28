import global from './global';
import palette from './palette';

export default (overrides = {}) => ({
  global: global(overrides),
  palette: palette(overrides)
});
