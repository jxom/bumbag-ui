// @flow
import React from 'react';
import ThemeProvider from 'reakit/Provider';

import type { ThemeConfig } from '../types';
import Global from '../_utils/Global';
import buildTheme from '../_utils/buildTheme';

import { defaultTheme } from '../themes';

type Props = {
  children: Node,
  isStandalone?: boolean,
  theme?: ThemeConfig
};

const Provider = ({ children, isStandalone, theme: _theme }: Props) => {
  let theme = defaultTheme({ overrides: _theme });
  if (isStandalone) {
    theme = _theme;
  }
  const bumbagTheme = buildTheme(theme);
  return (
    <ThemeProvider theme={bumbagTheme}>
      <Global>{children}</Global>
    </ThemeProvider>
  );
};

Provider.defaultProps = {
  isStandalone: false,
  theme: {}
};

export default Provider;
