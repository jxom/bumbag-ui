import createEmotion, { Emotion } from 'create-emotion';

export { default as classNames } from 'classnames';
export { css, keyframes, Global, ThemeContext, CacheProvider } from '@emotion/core';
export { withTheme, ThemeProvider } from 'emotion-theming';
export { default as styled } from '@emotion/styled';

const noop = () => {};

// @ts-ignore
export const { flush, hydrate, cx, getRegisteredStyles, injectGlobal, css: cssClass, sheet, cache }: Emotion =
  window && window.document && window.document.querySelectorAll
    ? createEmotion()
    : {
        flush: noop,
        hydrate: noop,
        cx: noop,
        getRegisteredStyles: noop,
        injectGlobal: noop,
        sheet: {},
        cache: {},
        css: noop,
      };
