import * as React from 'react';
import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import { InitializeColorMode } from 'bumbag';

class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta name="apple-mobile-web-app-status-bar-style" content="default" />
          <meta name="apple-mobile-web-app-title" content="CoinJar" />
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
