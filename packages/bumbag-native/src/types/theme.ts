import { InterpolationWithTheme } from '@emotion/core';
import { ThemeConfig as CoreThemeConfig } from 'bumbag/types';

import { ImageProps } from '../Image';

export type Stylesheet = InterpolationWithTheme<any>;
export type ThemeAttribute<R> = R | ((props: { theme: ThemeConfig }) => R);
export type Variant<ThemeConfig> = { [key: string]: ThemeConfig };

export type ImageThemeConfig = {
  styles?: {
    base?: ThemeAttribute<Stylesheet>;
  };
  defaultProps?: Partial<ImageProps>;
  variants?: Variant<ImageThemeConfig>;
  modes?: Variant<ImageThemeConfig>;
};

export type ThemeConfig = CoreThemeConfig & {
  Image?: ImageThemeConfig;
};
