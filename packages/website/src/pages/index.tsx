import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Button,
  Columns,
  Heading,
  Hide,
  Icon,
  Image,
  PageContent,
  Link,
  Paragraph,
  Set,
  Stack,
  Text,
  css,
  styled,
  useColorMode,
} from 'bumbag';
import { HighlightedCode } from 'bumbag-addon-highlighted-code';

import LandingLayout from '../layout/LandingLayout';
import LiveCode from '../components/Landing/LiveCode';

const UsedByImage = styled(Image)`
  &:not(:hover) {
    ${(props) =>
      props.colorMode === 'dark'
        ? css`
            filter: brightness(0) invert(1);
          `
        : css`
            filter: grayscale(1);
          `}
    opacity: 0.6;
  }
`;

export default function Index() {
  const { colorMode } = useColorMode();
  return (
    <LandingLayout>
      <PageContent
        breakpoint="tablet"
        paddingY={{ default: 'major-15', 'max-tablet': 'major-8' }}
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
      >
        <Stack display="flex" flexDirection="column" spacing="major-3" alignItems="center">
          <Heading fontSize={{ default: '600', mobile: '500' }} textAlign="center">
            Build <Text color="primary">accessible</Text> & <Text color="primary">themeable</Text> React applications
            with your Bumbag
          </Heading>
          <Paragraph fontSize={{ default: '400', mobile: '300' }} color="text100" textAlign="center">
            Bumbag is a friendly React UI Kit suitable for MVPs or large-scale applications.
          </Paragraph>
          <Set verticalBelow="tablet" isFilled spacing="major-2" width={{ mobile: '100%' }}>
            <Button use={GatsbyLink} to="/getting-started/" variant="cta" palette="primary">
              Get started
            </Button>
            <Button use={GatsbyLink} to="/components/button/" variant="cta">
              Components
            </Button>
          </Set>
        </Stack>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          backgroundColor: colorMode === 'dark' ? 'black200' : 'white600',
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-6"
      >
        <Columns spacing="major-6">
          <Columns.Column spread={6} display="flex" alignItems="center">
            <Stack spacing="major-2">
              <Icon icon="solid-universal-access" fontSize="800" color="primary" />
              <Heading fontSize="600">
                Accessible <Text color="primary">by default</Text>
              </Heading>
              <Box>
                <Text fontSize="300" color="text200" lineHeight="1.5">
                  Powered by{' '}
                  <Link href="https://reakit.io" target="_blank" rel="noreferrer noopener">
                    Reakit
                  </Link>{' '}
                  under the hood, all components come with{' '}
                  <Text fontWeight="semibold">accessible HTML attributes & keyboard interactions</Text> out of the box
                  and follow the WAI-ARIA standards.
                </Text>
              </Box>
            </Stack>
          </Columns.Column>
          <Columns.Column spread={6}>
            <Stack display="flex" flexDirection="column" alignItems="center">
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width="100%"
                code={`<Alert title="An error occurred" type="danger">
  We were unable to save your changes.
</Alert>`}
              />
              <Icon icon="solid-arrow-down" color="primary" fontSize="500" />
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width="100%"
                code={`<div
  role="alert"
  aria-labelledby="alertTitle"
  aria-describedby="alertDescription"
>
  <div id="alertTitle">
    An error occurred
  </div>
  <div id="alertDescription">
    We were unable to save your changes.
  </div>
</div>`}
              />
            </Stack>
          </Columns.Column>
        </Columns>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
        paddingY="major-6"
      >
        <Columns spacing="major-6">
          <Columns.Column spread={6}>
            <HighlightedCode
              preProps={{ borderRadius: '10px' }}
              colorMode="dark"
              isBlock
              language="jsx"
              width="100%"
              code={`const theme = {
  fonts: {
    default: '"Comic Sans MS", sans-serif',
    heading: '"Helvetica", sans'
  },
  palette: {
    primary: '#574feb',
    success: '#0a7d33',
    danger: '#da1717',
    warning: '#ed9c22'
  },
  Button: {
    defaultProps: {
      palette: 'primary'
    }
  }
}

<BumbagProvider theme={theme}>
  ...
</BumbagProvider>`}
            />
          </Columns.Column>
          <Columns.Column spread={6} display="flex" alignItems="center">
            <Stack spacing="major-2">
              <Icon icon="solid-fill-drip" fontSize="800" color="primary" />
              <Heading fontSize="600">
                Theme <Text color="primary">your way</Text>
              </Heading>
              <Box>
                <Text fontSize="300" color="text200" lineHeight="1.5">
                  <Text fontWeight="semibold">Put yourself in control</Text> and have the ability to customize any
                  component by altering the theme at a global or component level.
                  <br />
                </Text>
              </Box>
              <Link fontSize="250" use={GatsbyLink} to="/theming">
                Learn more about theming
              </Link>
            </Stack>
          </Columns.Column>
        </Columns>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          backgroundColor: colorMode === 'dark' ? 'black200' : 'white600',
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-10"
      >
        <Columns spacing="major-6">
          <Columns.Column spread={6} display="flex" alignItems="center">
            <Stack spacing="major-2">
              <Icon icon="solid-cubes" fontSize="800" color="primary" />
              <Heading fontSize="600">
                Compose <Text color="primary">for flexibility</Text>
              </Heading>
              <Box>
                <Text fontSize="300" color="text200" lineHeight="1.5">
                  <Text fontWeight="semibold">Flexibly build your own components</Text> such as a pricing section, a
                  contact form, or even a call-to-action.
                </Text>
              </Box>
              <Link fontSize="250" use={GatsbyLink} to="/composition">
                Learn more about composition
              </Link>
            </Stack>
          </Columns.Column>
          <Columns.Column spread={6}>
            <Stack>
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width="100%"
                code={`// Compose with \`use\`
<Button use={Link} href="/get-started">
  Get started
</Button>`}
              />
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width="100%"
                code={`// Compose with hooks
const linkProps = Link.useProps({
  href: '/get-started'
});

<Button {...linkProps}>
  Get started
</Button>`}
              />
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width="100%"
                code={`// Compose with render props
<Link href="/get-started">
  {linkProps => (
    <Button {...linkProps}>
      Get started
    </Button>
  )}
</Link>`}
              />
            </Stack>
          </Columns.Column>
        </Columns>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
        paddingY="major-6"
      >
        <Stack spacing="major-6" display="flex" flexDirection="column" alignItems="center">
          <Heading color="gray400" fontSize="200" textTransform="uppercase" fontWeight="semibold" textAlign="center">
            Worn in production by
          </Heading>
          <Set spacing="major-6" verticalBelow="tablet" alignItems="center" justifyContent="center">
            <Link href="https://medipass.com.au">
              <UsedByImage
                colorMode={colorMode}
                src={colorMode === 'dark' ? '/medipass-white.png' : '/medipass-black.png'}
                height="50px"
              />
            </Link>
            <Link href="https://localz.com">
              <UsedByImage colorMode={colorMode} src="/localz.png" height="40px" />
            </Link>
            <Link href="https://mryum.com.au">
              <UsedByImage colorMode={colorMode} src="/mryum.png" height="80px" />
            </Link>
            <Link href="https://pory.io">
              <UsedByImage
                colorMode={colorMode}
                src={colorMode === 'dark' ? '/pory-white.png' : '/pory-black.png'}
                height="50px"
              />
            </Link>
          </Set>
        </Stack>
      </PageContent>
      <Hide below="tablet">
        <PageContent
          breakpoint="fullHD"
          paddingY="major-6"
          wrapperProps={{
            backgroundColor: 'primary800',
            borderBottom: '1px solid',
            borderColor: colorMode === 'dark' ? 'black100' : 'white700',
          }}
        >
          <Box display="flex" flexDirection="column" alignItems="center" marginBottom="major-6">
            <Heading color="white" fontSize="600" textAlign="center" marginBottom="minor-1">
              Code with an intuitive API
              <br />
              <Text color="primary100">understandable by designers</Text>
            </Heading>
          </Box>
          <LiveCode
            code={`<Group
  backgroundColor="background"
  altitude="300"
  borderRadius="4"
>
  <Image
    fit="cover"
    width="200px"
    src="https://bit.ly/3fCkvhp"
  />
  <Level orientation="vertical" padding="major-2">
    <Stack spacing="major-1">
      <Heading fontSize="400" marginBottom="minor-1">
        The Local Hostel
      </Heading>
      <Tag palette="info" variant="tint">Great for solo travellers</Tag>
      <Paragraph color="text100" fontSize="100">
        <Icon icon="solid-map-marker-alt" marginRight="minor-1" />
        6km from city center
      </Paragraph>
    </Stack>
    <Paragraph fontSize="300">
      from <Text fontWeight="bold">$35</Text> a night
    </Paragraph>
  </Level>
</Group>`}
          />
        </PageContent>
      </Hide>
      <PageContent
        breakpoint="tablet"
        paddingY="major-6"
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
      >
        <Stack alignX="center" spacing="major-2">
          <Heading fontSize="600" textAlign="center">
            Join our growing <Text color="primary">community</Text>
          </Heading>
          <Paragraph color="text100" fontSize="300" textAlign="center">
            Join our discord server to get the latest updates, chat with other Bumbag enthusiasts, and see what's
            happening in the community!
          </Paragraph>
          <Box altitude="300" marginTop="major-2">
            <Box
              use="iframe"
              src={`https://discordapp.com/widget?id=735469626619854869&theme=${
                colorMode === 'dark' ? 'dark' : 'light'
              }`}
              width="350px"
              height="500px"
              allowTransparency="true"
              frameBorder="0"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            />
          </Box>
        </Stack>
      </PageContent>
    </LandingLayout>
  );
}
