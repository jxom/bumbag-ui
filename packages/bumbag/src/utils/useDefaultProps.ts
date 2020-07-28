import { useColorMode } from '../ColorMode';
import { omitBy } from './omitBy';
import { get } from './get';
import { useTheme } from './useTheme';

const isUndefined = (val) => typeof val === 'undefined';

export function useDefaultProps(props: any = {}, config: any = {}) {
  const { themeKey } = config;
  const { theme } = useTheme();
  const { colorMode: globalColorMode } = useColorMode();
  const colorMode = props.colorMode || globalColorMode;
  const configDefaultProps = omitBy(config?.defaultProps ?? {}, isUndefined);
  const themeDefaultProps = omitBy(get(theme, `${themeKey}.defaultProps`, {}), isUndefined);
  const themeVariantDefaultProps = omitBy(
    get(theme, `${themeKey}.variants.${props.variant}.defaultProps`, {}),
    isUndefined
  );
  const themeColorModeDefaultProps = omitBy(get(theme, `${themeKey}.modes.${colorMode}.defaultProps`, {}), isUndefined);
  const overridesDefaultProps = omitBy(get(props, `overrides.${themeKey}.defaultProps`, {}), isUndefined);
  const overridesVariantDefaultProps = omitBy(
    get(props, `overrides.${themeKey}.variants.${props.variant}.defaultProps`, {}),
    isUndefined
  );
  const overridesColorModeDefaultProps = omitBy(
    get(props, `overrides.${themeKey}.modes.${colorMode}.defaultProps`, {}),
    isUndefined
  );
  const newProps = {
    ...configDefaultProps,
    ...themeDefaultProps,
    ...themeVariantDefaultProps,
    ...themeColorModeDefaultProps,
    ...overridesDefaultProps,
    ...overridesVariantDefaultProps,
    ...overridesColorModeDefaultProps,
    colorMode,
    ...omitBy(props, isUndefined),
  };
  return { props: newProps, themeKey };
}
