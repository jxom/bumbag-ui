import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Button, Columns, Heading, PageContent, Link, Paragraph, Set, Stack, Text } from 'fannypack';

import LandingLayout from '../layout/LandingLayout';
import LiveCode from '../components/Landing/LiveCode';

export default function Index() {
  return (
    <LandingLayout>
      <PageContent breakpoint="tablet" paddingY="major-15">
        <Stack display="flex" flexDirection="column" alignItems="center" spacing="major-3">
          <Heading fontSize="600" fontWeight="semibold" textAlign="center">
            Rapidly build <Text color="primary">accessible</Text> & <Text color="primary">themeable</Text> <br /> React
            applications with ease
          </Heading>
          <Paragraph fontSize="400" color="text100" textAlign="center">
            Fannypack is a friendly React UI Kit suitable for MVPs or large-scale applications.
          </Paragraph>
          <Set spacing="major-2">
            <Button use={GatsbyLink} to="/getting-started/" fontWeight="500" palette="primary" size="large">
              Get started
            </Button>
            <Button use={GatsbyLink} to="/components/button/" fontWeight="500" size="large">
              Components
            </Button>
          </Set>
        </Stack>
      </PageContent>
      <PageContent breakpoint="widescreen" wrapperProps={{ backgroundColor: 'white600' }} paddingY="major-6">
        <Columns spacing="major-4">
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Accessible
            </Heading>
            <Text fontSize="250" color="text200" lineHeight="1.5">
              Powered by{' '}
              <Link href="https://reakit.io" target="_blank" rel="noreferrer noopener">
                Reakit
              </Link>{' '}
              under the hood, all components come with{' '}
              <Text fontWeight="semibold">accessible HTML attributes & keyboard interactions</Text> out of the box and
              follow the WAI-ARIA standards.
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Themeable
            </Heading>
            <Text fontSize="250" color="text200" lineHeight="1.5">
              <Text fontWeight="semibold">Put yourself in control</Text> and have the ability to customize any component
              by altering the default theme, or creating your own.
              <br />
              <Link use={GatsbyLink} to="/theming">
                Learn more about theming.
              </Link>
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Composable
            </Heading>
            <Text fontSize="250" color="text200" lineHeight="1.5">
              <Text fontWeight="semibold">Flexibly build your own components</Text> such as a pricing section, a contact
              form, or even a call-to-action.
              <br />
              <Link use={GatsbyLink} to="/composition">
                Learn more about composition.
              </Link>
            </Text>
          </Columns.Column>
        </Columns>
      </PageContent>
      <PageContent breakpoint="fullHD" paddingY="major-6">
        <LiveCode
          code={`// An example inspired by skyscanner.com
<Group
  altitude="300"
  borderRadius="4"
  verticalBelow="desktop"
>
  <Image
    fit="cover"
    width={{ default: '200px', 'max-tablet': '100%' }}
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
