import * as React from 'react';
import * as PropTypes from 'prop-types';
import ThemeProvider from 'reakit/Provider';
// @ts-ignore
import { LoadsContext } from 'react-loads-next';
// @ts-ignore
import _get from 'lodash/get';

import { ThemeConfig } from '../types';
import Global from '../_utils/Global';
import reakitTheme from '../_utils/reakitTheme';
import ToastManager from '../Toast/ToastManager';

import defaultTheme from '../themes/default';

type DerivedTheme = {
  fannypack: ThemeConfig;
  palette: ThemeConfig['palette'];
};

export type LocalThemeProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  theme?: ThemeConfig;
};
export type State = {
  theme: DerivedTheme | void;
};

const loadTheme = ({
  theme: _theme,
  isStandalone
}: {
  theme: LocalThemeProviderProps['theme'];
  isStandalone: LocalThemeProviderProps['isStandalone'];
}): DerivedTheme => {
  let theme = defaultTheme(_theme);
  if (isStandalone && _theme) {
    theme = _theme;
  }
  if (typeof window !== 'undefined') {
    const webFontLoaderConfig = theme.webFontLoader;
    if (webFontLoaderConfig) {
      // @ts-ignore
      import('webfontloader').then(webFontLoader => webFontLoader.load(webFontLoaderConfig));
    }
  }
  const derivedTheme: DerivedTheme = {
    fannypack: theme, // Split into own 'fannypack' context to avoid conflicts
    ...reakitTheme,
    ...(theme && theme.reakit ? theme.reakit : {}),
    palette: theme && theme.palette ? theme.palette : {}
  };
  return derivedTheme;
};

class Provider extends React.Component<LocalThemeProviderProps, State> {
  static propTypes = {
    children: PropTypes.node.isRequired,
    isStandalone: PropTypes.bool,
    theme: PropTypes.object
  };
  static defaultProps = {
    isStandalone: false,
    theme: {}
  };

  state = {
    theme: undefined
  };

  static getDerivedStateFromProps(props: LocalThemeProviderProps, state: State) {
    if (props.theme !== state.theme) {
      return {
        theme: loadTheme({ theme: props.theme, isStandalone: props.isStandalone })
      };
    }
    return {};
  }

  render = () => {
    const { children, ...props } = this.props;
    const { theme } = this.state;
    return (
      <ThemeProvider {...props} theme={theme}>
        <LoadsContext.Provider>
          <React.Fragment>
            {/*
            // @ts-ignore */}
            {process.env.NODE_ENV !== 'test' && <Global />}
            {process.env.NODE_ENV !== 'test' && !_get(theme, 'fannypack.Toast.disabled') && <ToastManager />}
            {children}
          </React.Fragment>
        </LoadsContext.Provider>
      </ThemeProvider>
    );
  };
}

export default Provider;
