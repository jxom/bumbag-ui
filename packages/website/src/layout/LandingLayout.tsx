import React from 'react';
import { Container, PageContent, PageWithHeader } from 'fannypack';

import SEO from '../components/SEO';
import Header from '../components/Landing/Header';
import Footer from '../components/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Docs(props: Props) {
  const { children } = props;

  return (
    <PageWithHeader
      sticky
      header={
        <Container breakpoint="desktop">
          <Header />
        </Container>
      }
    >
      <SEO />
      {children}
      <PageContent wrapperProps={{ backgroundColor: 'white600' }}>
        <Footer />
      </PageContent>
    </PageWithHeader>
  );
}
