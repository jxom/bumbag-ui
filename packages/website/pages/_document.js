import 'babel-polyfill';
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'fannypack';

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <React.Fragment>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </React.Fragment>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <html>
        <Head>
          <link rel="icon" href="/static/icon.png" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="generator" content="mdx-docs" />
          <meta name="twitter:title" content="Fannypack" />
          <meta name="twitter:creator" content="@jxom_" />
          <meta name="twitter:description" content="A friendly, themeable, accessible React UI Kit" />
          <meta name="twitter:url" content="https://fannypack.style" />
          <meta name="twitter:image" content="/static/fannypack.png" />
          <meta name="twitter:card" content="summary" />
          <meta name="og:type" content="website" />
          <meta name="og:title" content="Fannypack" />
          <meta name="og:description" content="A friendly, themeable, accessible React UI Kit" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
