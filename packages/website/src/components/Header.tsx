import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Button, TopNav, Image } from 'fannypack';

export default function Header(props) {
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          <Image src="/logo.png" height="44px" />
        </TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
}
