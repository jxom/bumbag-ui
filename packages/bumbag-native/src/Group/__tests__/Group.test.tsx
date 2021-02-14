import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Group } from '../Group';
import { Box } from '../../Box';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Group>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Group color="primary">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Group.styles.base should render correctly', () => {
    const { container } = render(
      <Group>
        <Box>
          <Text>hello world</Text>
        </Box>
        <Box>
          <Text>hello world</Text>
        </Box>
        <Box>
          <Text>hello world</Text>
        </Box>
      </Group>,
      {
        theme: { Group: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Group.styles.base should render correctly', () => {
    const { container } = render(
      <Group>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>,
      {
        theme: {
          Group: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Group
        overrides={{
          Group: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Group, {
      styles: {
        base: {
          backgroundColor: 'red',
        },
      },
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
    });
    const { container } = render(
      <Card variant="test">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Group variant="test">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>,
      {
        theme: {
          Group: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Group
        overrides={{
          Group: {
            variants: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: {
                  altitude: '100',
                  padding: 'major-2',
                },
              },
            },
          },
        }}
        variant="test"
      >
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Group, {
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
      variants: {
        test: {
          defaultProps: {
            color: 'red',
          },
        },
      },
    });
    const { container } = render(
      <Card variant="test">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(
      <Group>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>,
      {
        colorMode: 'test',
        theme: {
          Group: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(
      <Group colorMode="test">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>,
      {
        theme: {
          Group: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Group
        overrides={{
          Group: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: {
                  altitude: '100',
                  padding: 'major-2',
                },
              },
            },
          },
        }}
        colorMode="test"
      >
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Group>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Group, {
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
      modes: {
        test: {
          styles: { base: { backgroundColor: 'red' } },
          defaultProps: { color: 'primaryTint' },
        },
      },
    });
    const { container } = render(
      <Card colorMode="test">
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
        <Box>
          <Text>Hello world</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(
      <Group>
        <Box>
          <Text>hello world</Text>
        </Box>
        <Box>
          <Text>hello world</Text>
        </Box>
        <Box>
          <Text>hello world</Text>
        </Box>
      </Group>,
      {
        theme: { Group: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
