/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import React from 'react';

import { Provider } from '../fannypack/src';

export const wrapRootElement = ({ element, ...props }) => <Provider>{element}</Provider>;
