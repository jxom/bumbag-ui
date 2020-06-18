import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import { Button, Columns, Heading, PageContent, Link, Set, Stack, Text } from 'fannypack';
import LandingLayout from '../layout/LandingLayout';

export default function Index() {
  return (
    <LandingLayout>
      <PageContent
        breakpoint="desktop"
        paddingY="major-15"
        wrapperProps={{ borderBottom: '1px solid', borderColor: 'white900' }}
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
      <PageContent breakpoint="desktop">
        <Columns>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Accessible
            </Heading>
            <Text>
              Powered by <Link>Reakit</Link> under the hood, all components come with{' '}
              <Text fontWeight="semibold">accessible HTML attributes & keyboard interactions</Text> out of the box and
              follow the WAI-ARIA standards.
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Themeable
            </Heading>
            <Text>
              <Text fontWeight="semibold">Put yourself in control</Text> and have the ability to customize any component
              by altering the default theme, or creating your own.
            </Text>
          </Columns.Column>
          <Columns.Column>
            <Heading use="h2" fontSize="400">
              Composable
            </Heading>
            <Text>
              <Text fontWeight="semibold">Flexibly build your own components</Text> such as a pricing section, a contact
              form or even a call-to-action.
            </Text>
          </Columns.Column>
        </Columns>
      </PageContent>
    </LandingLayout>
  );
}
