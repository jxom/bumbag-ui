import { useColorMode } from '../ColorMode';
import { omitBy } from './omitBy';
import { get } from './get';
import { useTheme } from './useTheme';

const isUndefined = (val) => typeof val === 'undefined';

function getDefaultPropsFromTheme(theme: any, { colorMode, variant }) {
  const themeDefaultProps = theme?.defaultProps ? omitBy(theme.defaultProps, isUndefined) : {};
  const themeVariantDefaultProps = theme?.variants
    ? omitBy(theme.variants?.[variant]?.defaultProps || {}, isUndefined)
    : {};
  const themeColorModeDefaultProps = theme?.modes
    ? omitBy(theme.modes?.[colorMode]?.defaultProps || {}, isUndefined)
    : {};
  return {
    themeDefaultProps,
    themeVariantDefaultProps,
    themeColorModeDefaultProps,
  };
}

export function useDefaultProps(props: any = {}, config: any = {}) {
  const { themeKey } = config;
  const { theme } = useTheme();

  const { colorMode: globalColorMode } = useColorMode();
  const colorMode = props.colorMode || globalColorMode;

  const configDefaultProps = config?.defaultProps ? omitBy(config?.defaultProps, isUndefined) : {};

  const { themeDefaultProps, themeVariantDefaultProps, themeColorModeDefaultProps } = getDefaultPropsFromTheme(
    get(theme, themeKey),
    { colorMode, variant: props.variant }
  );

  const {
    themeDefaultProps: overridesDefaultProps,
    themeVariantDefaultProps: overridesVariantDefaultProps,
    themeColorModeDefaultProps: overridesColorModeDefaultProps,
  } = getDefaultPropsFromTheme(get(props, `overrides.${themeKey.replace('native.', '')}`), {
    colorMode,
    variant: props.variant,
  });

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
