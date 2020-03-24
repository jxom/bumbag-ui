/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';

import { Provider, ToastManager } from 'fannypack';
import theme from './src/theme';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const html = renderStylesToString(renderToString(bodyComponent));
  replaceBodyHTMLString(html);
};

export const wrapRootElement = ({ element, ...props }) => (
  <Provider theme={theme}>
    {element}
    <ToastManager isStacked={false} />
  </Provider>
);
