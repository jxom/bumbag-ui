import 'bumbag-native/utils/resetWindow';
import * as React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { AppRegistry } from 'react-native';
import { InitializeColorMode } from 'bumbag';
import { extractCritical } from 'bumbag-server';

const normalizeNextElements = `
  #__next {
    display: flex;
    flex-direction: column;
    height: 100%;
  }`;

class Document extends NextDocument {
  static async getInitialProps({ renderPage }) {
    AppRegistry.registerComponent('bumbag-website', () => Main);
    const { getStyleElement } = (AppRegistry as any).getApplication('bumbag-website');
    const page = await renderPage();
    // eslint-disable-next-line
    const styles = [<style dangerouslySetInnerHTML={{ __html: normalizeNextElements }} />, getStyleElement()];
    return { ...page, styles: React.Children.toArray(styles) };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="Bumbag" />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#bb3b65" />

          <link rel="manifest" href="/manifest.json" />
          <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
          <link rel="apple-touch-icon" sizes="180x180" href="/favicon.png" />
        </Head>
        <body>
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default Document;
