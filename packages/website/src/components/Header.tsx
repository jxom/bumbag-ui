import * as React from 'react';
import { TopNav, Image, useTheme } from 'fannypack';

import ThemePicker from './ThemePicker';

export default function Header(props) {
  const { theme } = useTheme();
  const Logo = theme._docs?.Logo || <Image src="/logo.png" height="44px" />;
  return (
    <TopNav>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          {Logo}
        </TopNav.Item>
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        <TopNav.Item>
          <ThemePicker />
        </TopNav.Item>
        <TopNav.Item href="https://opencollective.com/fannypack" fontWeight="semibold">
          Sponsor
        </TopNav.Item>
        <TopNav.Item href="https://github.com/jxom/fannypack" fontWeight="semibold">
          GitHub
        </TopNav.Item>
      </TopNav.Section>
    </TopNav>
  );
}
