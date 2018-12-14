import * as React from 'react';
import { render } from 'react-testing-library';
// @ts-ignore
import ThemeProvider from '../../ThemeProvider';

export default (Component: any) => render(<ThemeProvider>{Component}</ThemeProvider>);
