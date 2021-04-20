import * as React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import {
  Box,
  Button,
  Card,
  Columns,
  Code,
  Group,
  Heading,
  Hide,
  Icon,
  Image,
  PageContent,
  Link,
  Paragraph,
  Set,
  Stack,
  Show,
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
  const { colorMode, setColorMode } = useColorMode();
  return (
    <LandingLayout>
      <PageContent
        breakpoint="desktop"
        paddingY={{ default: 'major-15', 'max-tablet': 'major-8' }}
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
      >
        <Stack display="flex" flexDirection="column" spacing="major-5" alignItems="center">
          <Heading letterSpacing="200" fontSize="900" fontWeight="800" textAlign="center">
            Themeable components for
            <br />
            <Text gradientFrom="primary" gradientTo="secondary">
              React & React Native
            </Text>
          </Heading>
          <Paragraph
            fontSize={{ default: '400', mobile: '300' }}
            fontWeight="400"
            color="text100"
            maxWidth="768px"
            textAlign="center"
          >
            Bumbag is a themeable, accessible & composable component library for React & React Native allowing you to
            create cross-platform applications with ease.
          </Paragraph>
          <Stack textAlign="center" spacing="major-3">
            <Text.Block fontSize={{ default: '400', mobile: '300' }} fontWeight="500" color="text100">
              Get started:
            </Text.Block>
            <Set verticalBelow="mobile" isFilled spacing="major-2" width={{ mobile: '100%' }}>
              <Button use={GatsbyLink} to="/getting-started/" variant="cta" palette="primary" width="140px">
                Web
              </Button>
              <Button use={GatsbyLink} to="/native/getting-started/" variant="cta" palette="primary" width="140px">
                Native
              </Button>
            </Set>
          </Stack>
        </Stack>
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
            <Link href="https://coinjar.com">
              <UsedByImage colorMode={colorMode} src="/coinjar.png" height="60px" />
            </Link>
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
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-10"
      >
        <Stack>
          <Box>
            <Heading fontSize="800" fontWeight="800" marginBottom="major-2">
              Style your components using props
            </Heading>
            <Heading use="h2" color="primary" fontWeight="600" fontSize="500">
              to help you build with speed
            </Heading>
          </Box>
          <Text.Block fontSize="400" color="text200" lineHeight="default" maxWidth="768px">
            All components in Bumbag are built on top of the primitive <Code color="primary">Box</Code> component that
            allows you to use {'"'}style props{'"'} in your components allowing you to rapidly build web & native
            applications.
          </Text.Block>
          <Link.Block use={GatsbyLink} to="/the-box-primitive/style-props/" fontWeight="500" fontSize="400">
            Learn more
            <Icon marginLeft="major-1" verticalAlign="0" icon="solid-arrow-right" fontSize="200" />
          </Link.Block>
          <Box marginTop="major-6">
            <LiveCode
              code={`<Card borderRadius="5" paddingY="major-4" width="300px">
  <Stack spacing="major-2" alignX="center">
    <Avatar
      borderRadius="100%"
      src="https://bit.ly/3tve2fu"
      size="large"
    />
    <Stack alignX="center" spacing="major-1">
      <Heading fontSize="500">Jake Moxey</Heading>
      <Text
        use="h2"
        color="text100"
        fontSize="150"
        fontWeight="500"
        textTransform="uppercase"
      >
        Bumbag Entrepreneur
      </Text>
    </Stack>
    <Button
      use="a"
      href="https://twitter.com/jxom_"
      iconBefore="solid-twitter"
      palette="twitter"
      variant="outlined"
    >
      Twitter
    </Button>
  </Stack>
</Card>`}
            >
              <Group backgroundColor="primary" borderRadius="16px" width="100%">
                <Hide below="tablet">
                  <Box width="60%" overflow="hidden">
                    <LiveCode.Editor />
                  </Box>
                </Hide>
                <Box display="flex" alignX="center" alignY="center" flex="1" paddingY="major-3">
                  <LiveCode.Preview />
                </Box>
              </Group>
            </LiveCode>
          </Box>
        </Stack>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-10"
      >
        <Stack>
          <Box>
            <Heading fontSize="800" fontWeight="800" marginBottom="major-2">
              Dark mode
            </Heading>
            <Heading use="h2" color="primary" fontWeight="600" fontSize="500">
              provided out-of-the-box
            </Heading>
          </Box>
          <Text.Block fontSize="400" color="text200" lineHeight="default" maxWidth="768px">
            Bumbag provides you with dark mode out-of-the-box — all you have to do is trigger the{' '}
            <Code palette="primary">setColorMode</Code> function! You can also create other custom modes as well (such
            as:{' '}
            <Text backgroundColor="success" color="danger200">
              Christmas mode
            </Text>{' '}
            or{' '}
            <Text backgroundColor="hotpink" fontFamily="Comic Sans MS">
              Dank mode
            </Text>
            ).
          </Text.Block>
          <Link.Block use={GatsbyLink} to="/color-modes/" fontWeight="500" fontSize="400">
            Learn more
            <Icon marginLeft="major-1" verticalAlign="0" icon="solid-arrow-right" fontSize="200" />
          </Link.Block>
          <Box marginTop="major-6">
            <Group backgroundColor="primary" borderRadius="16px" width="100%">
              <Hide below="tablet">
                <Box width="60%" overflow="hidden">
                  <HighlightedCode
                    overflow="hidden"
                    colorMode="dark"
                    isBlock
                    language="jsx"
                    width="100%"
                    code={`function Example() {
  const { colorMode, setColorMode } = useColorMode();

  return (
    <Stack alignX="center">
      <Text
        color="text100"
        fontSize="100"
        fontWeight="500"
        textTransform="uppercase"
      >
        Current mode
      </Text>
      <Text fontWeight="500">{colorMode}</Text>
      <Set>
        <Button onClick={() => setColorMode('default')}>
          Light
        </Button>
        <Button onClick={() => setColorMode('dark')}>
          Dark
        </Button>
      </Set>
    </Stack>
  )
}`}
                  />
                </Box>
              </Hide>
              <Box display="flex" alignX="center" alignY="center" flex="1" paddingY="major-3">
                <Card minWidth="240px">
                  <Stack alignX="center">
                    <Stack alignX="center" spacing="major-1">
                      <Text.Block color="text100" fontSize="100" fontWeight="500" textTransform="uppercase">
                        Current mode
                      </Text.Block>
                      <Text.Block fontWeight="500">{colorMode}</Text.Block>
                    </Stack>
                    <Set>
                      <Button marginRight="major-1" onClick={() => setColorMode('default')}>
                        Light
                      </Button>
                      <Button onClick={() => setColorMode('dark')}>Dark</Button>
                    </Set>
                  </Stack>
                </Card>
              </Box>
            </Group>
          </Box>
        </Stack>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-10"
      >
        <Stack>
          <Box>
            <Heading fontSize="800" fontWeight="800" marginBottom="major-3">
              Accessible out-of-the-box
            </Heading>
            <Heading use="h2" color="primary" fontWeight="600" fontSize="500">
              to assist your diverse audience
            </Heading>
          </Box>
          <Text.Block fontSize="400" color="text200" lineHeight="default" maxWidth="768px">
            Powered by{' '}
            <Link href="https://reakit.io" target="_blank" rel="noreferrer noopener">
              Reakit
            </Link>{' '}
            under the hood, all components come with{' '}
            <Text fontWeight="semibold">accessible HTML attributes & keyboard interactions</Text> out of the box and
            follow the WAI-ARIA standards.
          </Text.Block>
          <Box
            marginTop="major-6"
            altitude="400"
            backgroundColor="primary"
            borderRadius="16px"
            padding={{ default: 'major-6', 'max-tablet': 'major-3' }}
          >
            <Set spacing="major-3" alignX="center" alignY="center">
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width={{ default: '500px', 'max-tablet': '100%' }}
                code={`<Alert title="An error occurred" type="danger">
  We were unable to save your changes.
</Alert>`}
              />
              <Hide below="tablet">
                <Icon icon="solid-long-arrow-right" color="white" fontSize="500" />
              </Hide>
              <Show below="tablet">
                <Icon icon="solid-long-arrow-down" color="white" fontSize="500" />
              </Show>
              <HighlightedCode
                preProps={{ borderRadius: '10px' }}
                colorMode="dark"
                isBlock
                language="jsx"
                width={{ default: '450px', 'max-tablet': '100%' }}
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
            </Set>
          </Box>
        </Stack>
      </PageContent>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{ borderBottom: '1px solid', borderColor: colorMode === 'dark' ? 'black100' : 'white700' }}
        paddingY="major-10"
      >
        <Stack>
          <Box>
            <Heading fontSize="800" fontWeight="800" marginBottom="major-2">
              Theme your way
            </Heading>
            <Heading use="h2" color="primary" fontWeight="600" fontSize="500">
              to suit your brand
            </Heading>
          </Box>
          <Text.Block fontSize="400" color="text200" lineHeight="default" maxWidth="768px">
            <Text fontWeight="semibold">Put yourself in control</Text> and have the ability to customize any component
            by altering the theme at a global or component level.
          </Text.Block>
          <Link.Block use={GatsbyLink} to="/theming/" fontWeight="500" fontSize="400">
            Learn more
            <Icon marginLeft="major-1" verticalAlign="0" icon="solid-arrow-right" fontSize="200" />
          </Link.Block>
          <Box marginTop="major-6">
            <Group altitude="400" backgroundColor="primary" borderRadius="16px">
              <Box padding={{ default: 'major-6', 'max-tablet': 'major-2' }}>
                <Box
                  backgroundColor="background"
                  borderRadius="16px"
                  padding="major-3"
                  width={{ default: '400px', 'max-tablet': '100%' }}
                >
                  <Heading fontSize="400" fontFamily="Helvetica">
                    Heading
                  </Heading>
                  <Text fontFamily="Comic Sans MS" fontSize="250">
                    This is some text
                  </Text>
                  <Stack orientation="horizontal" marginTop="major-2" spacing="major-1">
                    <Box alignX="center">
                      <Box backgroundColor="#574feb" width="84px" height="84px" />
                      <Text fontFamily="Comic Sans MS" fontSize="150">
                        Primary
                      </Text>
                    </Box>
                    <Box alignX="center">
                      <Box backgroundColor="#0a7d33" width="84px" height="84px" />
                      <Text fontFamily="Comic Sans MS" fontSize="150">
                        Success
                      </Text>
                    </Box>
                    <Box alignX="center">
                      <Box backgroundColor="#da1717" width="84px" height="84px" />
                      <Text fontFamily="Comic Sans MS" fontSize="150">
                        Danger
                      </Text>
                    </Box>
                    <Box alignX="center">
                      <Box backgroundColor="#ed9c22" width="84px" height="84px" />
                      <Text fontFamily="Comic Sans MS" fontSize="150">
                        Warning
                      </Text>
                    </Box>
                  </Stack>
                  <Button fontFamily="Comic Sans MS" marginTop="major-3" palette="primary">
                    Get started
                  </Button>
                </Box>
              </Box>
              <Hide below="tablet">
                <HighlightedCode
                  overflow="hidden"
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
              </Hide>
            </Group>
          </Box>
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
            <Heading color="white" fontWeight="800" fontSize="800" textAlign="center" marginBottom="major-2">
              Code with an intuitive API
            </Heading>
            <Heading color="primary100" fontSize="800" textAlign="center" marginBottom="minor-1">
              understandable by designers
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
      <Heading fontSize="400">
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
          >
            <Group altitude="400" borderRadius="10px" width="100%" verticalBelow="widescreen">
              <LiveCode.Editor />
              <Box backgroundColor="white" flex="2" border="default" borderLeft="none" padding="major-3">
                <LiveCode.Preview />
              </Box>
            </Group>
          </LiveCode>
        </PageContent>
      </Hide>
      <PageContent
        breakpoint="widescreen"
        wrapperProps={{
          borderBottom: '1px solid',
          borderColor: colorMode === 'dark' ? 'black100' : 'white700',
        }}
        paddingY="major-10"
      >
        <Columns spacing="major-6">
          <Columns.Column spread={8}>
            <Stack spacing="major-6">
              <Heading fontSize="800" fontWeight="800">
                Join our growing community
              </Heading>
              <Text.Block fontSize="400" color="text200" lineHeight="default" maxWidth="768px">
                Join our discord server to get the latest updates, chat with other Bumbag enthusiasts, and see what's
                happening in the community!
              </Text.Block>
              <Button use="a" href="https://discord.gg/BPnwqvJ" color="white" palette="discord" variant="cta">
                Join our discord
                <Icon marginLeft="major-1" color="white" icon="solid-long-arrow-right" />
              </Button>
            </Stack>
          </Columns.Column>
          <Columns.Column spread={4}>
            <Box altitude="300" marginTop="major-2">
              <Box
                use="iframe"
                src={`https://discordapp.com/widget?id=735469626619854869&theme=${
                  colorMode === 'dark' ? 'dark' : 'light'
                }`}
                width="100%"
                height="400px"
                allowTransparency="true"
                frameBorder="0"
                sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
              />
            </Box>
          </Columns.Column>
        </Columns>
      </PageContent>
    </LandingLayout>
  );
}
