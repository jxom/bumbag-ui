/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderStylesToString } from 'emotion-server';
import { InitializeColorMode } from 'bumbag';
import ElementWrapper from './src/layout/ElementWrapper';

export const replaceRenderer = ({ bodyComponent, replaceBodyHTMLString }) => {
  const html = renderStylesToString(renderToString(bodyComponent));
  replaceBodyHTMLString(html);
};

export const wrapRootElement = (props) => {
  return <ElementWrapper {...props} />;
};

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([<InitializeColorMode key="bumbag-no-flash" />])
}