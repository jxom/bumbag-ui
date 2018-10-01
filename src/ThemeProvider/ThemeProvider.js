// @flow
import React from 'react';
import ThemeProvider from 'reakit/Provider';

import type { ThemeConfig } from '../types';
import { defaultTheme } from '../theme';
import Global from '../_utils/Global';

type Props = {
  children: Node,
  isStandalone?: boolean,
  theme?: ThemeConfig
};

const Provider = ({ children, isStandalone, theme }: Props) => (
  <ThemeProvider theme={isStandalone ? theme : defaultTheme({ overrides: theme })}>
    <Global>{children}</Global>
  </ThemeProvider>
);

Provider.defaultProps = {
  isStandalone: false,
  theme: {}
};

export default Provider;
