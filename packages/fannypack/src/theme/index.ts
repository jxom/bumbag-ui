import palette from './palette';

export default (overrides = {}) => ({
  colors: palette(overrides),
  palette: palette(overrides)
});
