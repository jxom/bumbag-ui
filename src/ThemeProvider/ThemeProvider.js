// @flow
import React, { Fragment } from 'react';
import ThemeProvider from 'reakit/Provider';

import type { ThemeConfig } from '../types';
import Global from '../_utils/Global';
import reakitTheme from '../_utils/reakitTheme';

import { defaultTheme } from '../themes';

type Props = {
  children: Node,
  isStandalone?: boolean,
  theme?: ThemeConfig
};

const Provider = ({ children, isStandalone, theme: _theme }: Props) => {
  let theme = defaultTheme(_theme);
  if (isStandalone) {
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
      <Fragment>
        <Global />
        {children}
      </Fragment>
    </ThemeProvider>
  );
};

Provider.defaultProps = {
  isStandalone: false,
  theme: {}
};

export default Provider;
