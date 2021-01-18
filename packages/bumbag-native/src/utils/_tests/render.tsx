import * as React from 'react';
import { ThemeConfig } from '../../types/theme';
import { render } from '@testing-library/react';
// @ts-ignore
import { Provider } from '../../Provider';

export default (
  Component: any,
  { colorMode = 'default', theme = {} }: { colorMode?: string; theme?: ThemeConfig } = {}
) =>
  render(
    <Provider platform="native" theme={theme} colorMode={colorMode}>
      {Component}
    </Provider>
  );
