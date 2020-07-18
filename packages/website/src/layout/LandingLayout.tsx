import React from 'react';
import { Container, PageContent, PageWithHeader, useColorMode } from 'fannypack';

import SEO from '../components/SEO';
import Header from '../components/Landing/Header';
import Footer from '../components/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Docs(props: Props) {
  const { children } = props;

  const { colorMode } = useColorMode();

  return (
    <React.Fragment>
      <SEO />
      <PageWithHeader
        sticky
        header={
          <Container breakpoint="widescreen">
            <Header />
          </Container>
        }
      >
        {children}
        <PageContent wrapperProps={{ backgroundColor: colorMode === 'dark' ? 'black200' : 'white600' }}>
          <Footer />
        </PageContent>
      </PageWithHeader>
    </React.Fragment>
  );
}
