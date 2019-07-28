import * as React from 'react';
import { render } from '@testing-library/react';
// @ts-ignore
import { Provider } from '../../Provider';

export default (Component: any, { theme = {} } = {}) => render(<Provider theme={theme}>{Component}</Provider>);
