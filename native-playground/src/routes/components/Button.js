import React from 'react';
import { Box, Button, Heading } from 'bumbag-native';
import { Preview } from '../../components/Preview';
import { PreviewSection } from '../../components/PreviewSection';

export default function App() {
  return (
    <Box>
      <Heading.H5 marginBottom="16px">Button</Heading.H5>
      <PreviewSection title="Basic">
        <Preview>
          <Box>
            <Button>Default</Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Colors">
        <Preview>
          <Box>
            <Button>Default</Button>
            <Button palette="primary">Primary</Button>
            <Button palette="secondary">Secondary</Button>
            <Button palette="success">Success</Button>
            <Button palette="danger">Danger</Button>
            <Button palette="warning">Warning</Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Variants">
        <Preview>
          <Box>
            <Button palette="primary">Default</Button>
            <Button variant="outlined" palette="primary">
              Outlined
            </Button>
            <Button variant="ghost" palette="primary">
              Ghost
            </Button>
            <Button variant="link" palette="primary">
              Link
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Icons">
        <Preview>
          <Box>
            <Button iconBefore="solid-clipboard">Copy</Button>
            <Button iconBefore="solid-pen" palette="primary">
              Edit
            </Button>
            <Button iconAfter="solid-long-arrow-alt-right">Continue</Button>
            <Button iconBefore="info-circle" iconBeforeProps={{ fontSize: '300' }}>
              Info
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Loading">
        <Preview>
          <Box>
            <Button isLoading>Hello world</Button>
            <Button isLoading palette="primary">
              Hello world
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Outlines">
        <Preview>
          <Box>
            <Button palette="primary" variant="outlined">
              Primary
            </Button>
            <Button palette="secondary" variant="outlined">
              Secondary
            </Button>
            <Button palette="success" variant="outlined">
              Success
            </Button>
            <Button palette="danger" variant="outlined">
              Danger
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Ghost">
        <Preview>
          <Box>
            <Button variant="ghost">Default</Button>
            <Button palette="primary" variant="ghost">
              Primary
            </Button>
            <Button palette="success" variant="ghost">
              Success
            </Button>
            <Button palette="danger" variant="ghost">
              Danger
            </Button>
            <Button palette="warning" variant="ghost">
              Warning
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Sizes">
        <Preview>
          <Box>
            <Button size="small">Small</Button>
            <Button>Default</Button>
            <Button size="medium">Medium</Button>
            <Button size="large">Large</Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Links">
        <Preview>
          <Box>
            <Button palette="primary" variant="link">
              Default
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Static">
        <Preview>
          <Box>
            <Button isStatic>Static</Button>
          </Box>
        </Preview>
      </PreviewSection>
      <PreviewSection title="Disabled">
        <Preview>
          <Box>
            <Button disabled>Default</Button>
            <Button palette="primary" disabled>
              Primary
            </Button>
            <Button palette="success" disabled>
              Success
            </Button>
            <Button palette="danger" disabled>
              Danger
            </Button>
            <Button palette="warning" disabled>
              Warning
            </Button>
          </Box>
        </Preview>
      </PreviewSection>
    </Box>
  );
}
