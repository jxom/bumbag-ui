import React from 'react';
import { render } from 'react-testing-library';
import ThemeProvider from '../../ThemeProvider';

export default Component => render(<ThemeProvider>{Component}</ThemeProvider>);
