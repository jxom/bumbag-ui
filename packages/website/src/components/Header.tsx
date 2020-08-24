import * as React from 'react';
import { Button, Hide, TopNav, Icon, Image, useColorMode, usePage, useTheme } from 'bumbag';
import { FeedbackForm } from 'feedback-fish';
import { Link, useLocation } from '@reach/router';

import ColorModePicker from './ColorModePicker';

function FeedbackButton(props) {
  return (
    <TopNav.Item fontWeight="semibold" {...props}>
      <Icon icon="solid-comment" fontSize="150" marginRight="major-1" />
      Feedback
    </TopNav.Item>
  );
}

export default function Header(props) {
  const { type } = props;

  const { pathname } = useLocation();
  const { theme } = useTheme();
  const { collapseBelow, sidebar } = usePage();
  const { colorMode } = useColorMode();
  const Logo = theme._docs?.Logo || (
    <Image src={colorMode === 'dark' ? '/logo-dark.png' : '/logo-light.png'} height="44px" />
  );

  let selectedId;
  if (pathname !== '/') {
    selectedId = 'docs';
  }
  if (pathname.includes('blocks')) {
    selectedId = 'blocks';
  }

  return (
    <TopNav selectedId={selectedId}>
      <TopNav.Section>
        <TopNav.Item href="/" fontWeight="semibold">
          {Logo}
        </TopNav.Item>
        <TopNav.Item use={Link} navId="docs" to="/getting-started" fontWeight="semibold">
          Docs
        </TopNav.Item>
        {/*
          <TopNav.Item use={Link} navId="blocks" to="/blocks" fontWeight="semibold">
            Blocks
          </TopNav.Item>
         */}
      </TopNav.Section>
      <TopNav.Section marginRight="major-2">
        <Hide below={collapseBelow}>
          {type !== 'landing' && <FeedbackForm projectId="5f9819d7f47369" triggerComponent={FeedbackButton} />}
          <TopNav.Item href="https://opencollective.com/bumbag" fontWeight="semibold">
            <Icon color="red" icon="solid-heart" fontSize="150" marginRight="major-1" />
            Sponsor
          </TopNav.Item>
          <TopNav.Item href="https://discord.gg/BPnwqvJ" fontWeight="semibold">
            <Icon icon="solid-discord" marginRight="major-1" />
            Discord
          </TopNav.Item>
          <TopNav.Item href="https://github.com/jxom/bumbag" fontWeight="semibold">
            <Icon icon="solid-github" marginRight="major-1" />
            GitHub
          </TopNav.Item>
          <TopNav.Item>
            <ColorModePicker />
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
