import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Button, Columns, Heading, PageContent, Link, Set, Stack, Text } from 'fannypack';
import LandingLayout from '../layout/LandingLayout';
import LiveCode from '../components/Landing/LandingLiveCode';

export default function Index() {
  return (
    <LandingLayout>
      <PageContent
        breakpoint="desktop"
        paddingY="major-15"
        wrapperProps={{ borderBottom: '1px solid', borderColor: 'white800' }}
      >
        <Stack display="flex" flexDirection="column" alignItems="center" spacing="major-5">
          <Heading fontSize="600" fontWeight="semibold" textAlign="center">
            Rapidly build <Text color="primary">accessible</Text> & <Text color="primary">themeable</Text> <br /> React
            applications with ease.
          </Heading>
          <Set spacing="major-2">
            <Button use={GatsbyLink} to="/getting-started/" palette="primary" size="large">
              Get started
            </Button>
            <Button use={GatsbyLink} to="/components/button/" size="large">
              Components
            </Button>
          </Set>
        </Stack>
      </PageContent>
      <PageContent
        breakpoint="desktop"
        wrapperProps={{ borderBottom: '1px solid', borderColor: 'white800' }}
        paddingY="major-6"
      >
        <Columns>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Accessible
            </Heading>
            <Text>
              Powered by <Link>Reakit</Link> under the hood, all components come with{' '}
              <Text fontWeight="semibold">accessible HTML attributes & keyboard interactions</Text> out of the box and
              follow the WAI-ARIA standards. <Link>Learn more about accessibility.</Link>
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Themeable
            </Heading>
            <Text>
              <Text fontWeight="semibold">Put yourself in control</Text> and have the ability to customize any component
              by altering the default theme, or creating your own.
              <br />
              <Link>Learn more about theming.</Link>
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Composable
            </Heading>
            <Text>
              <Text fontWeight="semibold">Flexibly build your own components</Text> such as a pricing section, a contact
              form, or even a call-to-action.
              <br />
              <Link>Learn more about composition.</Link>
            </Text>
          </Columns.Column>
        </Columns>
      </PageContent>
      <PageContent breakpoint="fullHD">
        <LiveCode
          code={`// An example inspired by skyscanner.com
<Group
  altitude="300"
  borderRadius="4"
>
  <Image
    fit="cover"
    height="200px"
    width="200px"
    src="https://bit.ly/3fCkvhp"
  />
  <Stack padding="major-2" spacing="major-2">
    <Heading fontSize="400" marginBottom="minor-1">
      The Local Hostel
    </Heading>
    <Tag palette="infoTint">Great for solo travellers</Tag>
    <Stack spacing="minor-1">
      <Paragraph color="text100" fontSize="100">
        <Icon icon="solid-map-marker-alt" marginRight="minor-1" />
        6km from city center
      </Paragraph>
      <Paragraph color="primary" fontWeight="semibold" fontSize="100">
        <Icon icon="solid-thumbs-up" marginRight="minor-1" />
        Hotel cleanliness is rated 4.5/5
      </Paragraph>
    </Stack>
    <Paragraph fontSize="300">
      from <Text fontWeight="bold">$35</Text> a night
    </Paragraph>
  </Stack>
</Group>`}
        />
      </PageContent>
    </LandingLayout>
  );
}
