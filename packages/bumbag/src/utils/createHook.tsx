import { useDefaultProps } from './useDefaultProps';
import { omit } from './omit';

export function createHook<P>(
  useHook: (
    props: Partial<P>,
    options: { disableCSSProps?: Array<string>; themeKey: string; themeKeyOverride: string }
  ) => Partial<P>,
  config?: { defaultProps?: Partial<P>; themeKey?: string }
) {
  return (props: Partial<P>, { disableCSSProps = [], themeKey: themeKeyOverride = undefined } = {}) => {
    // @ts-ignore
    const themeKey = themeKeyOverride || props?.themeKey || config?.themeKey;
    const { props: newProps, themeKey: newThemeKey } = useDefaultProps(props, { ...config, themeKey });
    // @ts-ignore
    return useHook(omit(newProps, 'themeKey'), {
      disableCSSProps,
      themeKey: config?.themeKey,
      themeKeyOverride: newThemeKey,
    });
  };
}
