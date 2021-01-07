import createEmotion from 'create-emotion';

export { default as classNames } from 'classnames';
export { css, keyframes, Global, ThemeContext, CacheProvider } from '@emotion/core';
export { withTheme, ThemeProvider } from 'emotion-theming';
export { default as styled } from '@emotion/styled';

const noop = () => {};
const { flush, hydrate, cx, getRegisteredStyles, injectGlobal, sheet, cache, css } =
  window && window.document
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
export { flush, hydrate, cx, getRegisteredStyles, injectGlobal, sheet, cache, css as cssClass };
