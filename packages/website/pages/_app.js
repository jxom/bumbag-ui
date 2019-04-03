import 'babel-polyfill';
import 'parse-prop-types';
import React from 'react';
import Head from 'next/head';
import App, { Container } from 'next/app';
import * as fannypack from 'fannypack';

import Layout from '../components/Layout';
import DocsContext, { useDocsContext } from '../components/DocsContext';
import routes from '../utils/routes';

function Wrapper({ children }) {
  const { layout } = useDocsContext();
  return (
    <fannypack.ThemeProvider theme={layout.theme}>
      <Layout>{children}</Layout>
    </fannypack.ThemeProvider>
  );
}

export default class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let page = {};

    if (Component.getInitialProps) {
      page = await Component.getInitialProps(ctx);
    }

    return { page };
  }

  render() {
    const { Component, page, headManager, ...props } = this.props;
    return (
      <Container>
        <Head>
          <title>Fannypack</title>
        </Head>
        <DocsContext.Provider {...props} routes={routes}>
          <Wrapper>
            <Component {...page} />
          </Wrapper>
        </DocsContext.Provider>
      </Container>
    );
  }
}
