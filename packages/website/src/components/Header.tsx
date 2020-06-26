import * as React from 'react';
import { Button, Hide, TopNav, Icon, Image, PageWithSidebar, usePage, useTheme } from 'fannypack';

import ThemePicker from './ThemePicker';

export default function Header(props) {
  const { theme } = useTheme();
  const { isCollapsed } = usePage();
  const disclosureProps = PageWithSidebar.Disclosure.useProps();
  const Logo = theme._docs?.Logo || <Image src="/logo.png" height="44px" />;
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          {Logo}
        </TopNav.Item>
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        <Hide below="tablet">
          <TopNav.Item>
            <ThemePicker />
          </TopNav.Item>
        </Hide>
        <Hide below="desktop">
          <TopNav.Item href="https://opencollective.com/fannypack" fontWeight="semibold">
            Sponsor
          </TopNav.Item>
          <TopNav.Item href="https://github.com/jxom/fannypack" fontWeight="semibold">
            GitHub
          </TopNav.Item>
        </Hide>
        {isCollapsed && (
          <TopNav.Item>
            <Button {...disclosureProps} variant="ghost">
              <Icon icon="solid-bars" />
            </Button>
          </TopNav.Item>
        )}
      </TopNav.Section>
    </TopNav>
  );
}
