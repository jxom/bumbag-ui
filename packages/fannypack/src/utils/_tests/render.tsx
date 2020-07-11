import * as React from 'react';
import { render } from '@testing-library/react';
// @ts-ignore
import { Provider } from '../../Provider';
import { ThemeConfig } from '../../types';

export default (
  Component: any,
  { colorMode = 'default', theme = {} }: { colorMode?: string; theme?: ThemeConfig } = {}
) =>
  render(
    <Provider theme={theme} colorMode={colorMode}>
      {Component}
    </Provider>
  );
