import React from 'react';
import { css } from 'reakit/styled';
import ThemeProvider from '../theme/ThemeProvider';

const theme = {
  global: css`
    li {
      margin-bottom: 0.5rem;
    }
  `
};

const Wrapper = ({ children }: Object) => <ThemeProvider theme={theme}>{children}</ThemeProvider>;

export default Wrapper;
