import * as React from 'react';
// @ts-ignore
import PropTypes from 'prop-types';
// @ts-ignore
import ThemeProvider from 'reakit/Provider';

import { ThemeConfig } from '../types';
import Global from '../_utils/Global';
import reakitTheme from '../_utils/reakitTheme';

import defaultTheme from '../themes/default';

export type LocalThemeProviderProps = {
  children: React.ReactNode;
  isStandalone?: boolean;
  theme?: ThemeConfig;
};

const Provider: React.FunctionComponent<LocalThemeProviderProps> = ({ children, isStandalone, theme: _theme }) => {
  let theme = defaultTheme(_theme);
  if (isStandalone && _theme) {
    theme = _theme;
  }
  theme = {
    fannypack: theme, // Split into own 'fannypack' context to avoid conflicts
    ...reakitTheme,
    ...(theme && theme.reakit ? theme.reakit : {}),
    palette: theme && theme.palette ? theme.palette : {}
  };
  return (
    <ThemeProvider theme={theme}>
      <React.Fragment>
        {/*
          // @ts-ignore */}
        <Global />
        {children}
      </React.Fragment>
    </ThemeProvider>
  );
};

Provider.propTypes = {
  children: PropTypes.node.isRequired,
  isStandalone: PropTypes.bool,
  theme: PropTypes.object
};
Provider.defaultProps = {
  isStandalone: false,
  theme: {}
};

export default Provider;
