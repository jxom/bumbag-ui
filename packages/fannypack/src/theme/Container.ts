import { ContainerThemeConfig } from '../types';
import { space } from '../utils';

export default (overrides: ContainerThemeConfig) => ({
  fluidMargin: space(8),
  tabletMargin: space(4),
  ...overrides,
});
