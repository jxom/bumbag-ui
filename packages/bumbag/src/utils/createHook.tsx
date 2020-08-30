import { useDefaultProps } from './useDefaultProps';

export function createHook<P>(
  useHook: (props: Partial<P>, options: { disableCSSProps?: Array<string>; themeKey: string }) => Partial<P>,
  config?: { defaultProps?: Partial<P>; themeKey?: string }
) {
  return (props: Partial<P>, { disableCSSProps = [], themeKey: themeKeyOverride = undefined } = {}) => {
    // @ts-ignore
    const themeKey = themeKeyOverride || props?.themeKey || config?.themeKey;
    const { props: newProps } = useDefaultProps(props, { ...config, themeKey });
    return useHook(newProps, {
      disableCSSProps,
      themeKey: config?.themeKey,
    });
  };
}
