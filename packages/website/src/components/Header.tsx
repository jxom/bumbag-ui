import * as React from 'react';
import { Button, Hide, Show, TopNav, Icon, Image, PageWithSidebar, usePage, useTheme } from 'fannypack';

import ColorModePicker from './ColorModePicker';
import ThemePicker from './ThemePicker';

export default function Header(props) {
  const { theme } = useTheme();
  const { collapseBelow, sidebar } = usePage();
  const Logo = theme._docs?.Logo || <Image src="/logo.png" height="44px" />;
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          {Logo}
        </TopNav.Item>
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        {/* <Hide below="tablet">
          <TopNav.Item>
            <ThemePicker />
          </TopNav.Item>
        </Hide> */}
        {/*
        <Hide below="tablet">
          <TopNav.Item>
            <ColorModePicker />
          </TopNav.Item>
        </Hide>
         */}
        <Hide below={collapseBelow}>
          <TopNav.Item href="https://opencollective.com/fannypack" fontWeight="semibold">
            Sponsor
          </TopNav.Item>
          <TopNav.Item href="https://github.com/jxom/fannypack" fontWeight="semibold">
            GitHub
          </TopNav.Item>
        </Hide>
        <Hide above={collapseBelow}>
          <TopNav.Item>
            <Button onClick={sidebar.open} variant="ghost">
              <Icon icon="solid-bars" />
            </Button>
          </TopNav.Item>
        </Hide>
      </TopNav.Section>
    </TopNav>
  );
}
