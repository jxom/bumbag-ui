import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Hide, TopNav, Image } from 'fannypack';

export default function Header(props) {
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          <Image src="/logo.png" height="44px" />
        </TopNav.Item>
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        <TopNav.Item href="/getting-started/" fontWeight="semibold">
          Documentation
        </TopNav.Item>
        <Hide below="desktop">
          <TopNav.Item href="https://opencollective.com/fannypack" fontWeight="semibold">
            Sponsor
          </TopNav.Item>
          <TopNav.Item href="https://github.com/jxom/fannypack" fontWeight="semibold">
            GitHub
          </TopNav.Item>
        </Hide>
      </TopNav.Section>
    </TopNav>
  );
}
