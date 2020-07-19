import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import { Icon, Hide, TopNav, Image, useTheme, useColorMode } from 'bumbag';

import ColorModePicker from '../ColorModePicker';

export default function Header(props) {
  const { theme } = useTheme();
  const { colorMode } = useColorMode();
  const Logo = theme._docs?.Logo || (
    <Image src={colorMode === 'dark' ? '/logo-dark.png' : '/logo-light.png'} height="44px" />
  );
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          {Logo}
        </TopNav.Item>
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        <TopNav.Item href="/getting-started/" fontWeight="semibold">
          <Icon icon="solid-book" fontSize="150" marginRight="major-1" />
          Documentation
        </TopNav.Item>
        <Hide below="desktop">
          <TopNav.Item href="https://opencollective.com/bumbag" fontWeight="semibold">
            <Icon color="danger" icon="solid-heart" fontSize="150" marginRight="major-1" />
            Sponsor
          </TopNav.Item>
          <TopNav.Item href="https://github.com/jxom/bumbag" fontWeight="semibold">
            <Icon icon="solid-github" marginRight="major-1" />
            GitHub
          </TopNav.Item>
          <TopNav.Item>
            <ColorModePicker />
          </TopNav.Item>
        </Hide>
      </TopNav.Section>
    </TopNav>
  );
}
