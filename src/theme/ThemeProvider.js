// @flow
import React from 'react';
import styled from 'reakit/styled';
import Box from 'reakit/Box';
import ThemeProvider from 'reakit/Provider';
import { palette, theme } from 'styled-tools';

import type { ThemeConfig } from '../types';
import getTheme from './index';

const Wrapper = styled(Box)`
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans',
    'Droid Sans', 'Helvetica Neue', sans-serif;
  font-size: 16px;
  margin: 0;
  padding: 0;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;

  *:focus {
    outline: 2px solid ${palette('primary')};
    outline-offset: 2px;
  }

  & {
    ${theme('global')};
  }
`;

type Props = {
  children: Node,
  theme?: ThemeConfig
};

const Provider = ({ children, theme }: Props) => (
  <ThemeProvider theme={getTheme(theme)}>
    <Wrapper>{children}</Wrapper>
  </ThemeProvider>
);

Provider.defaultProps = {
  theme: {}
};

export default Provider;
