import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Stack } from '../Stack';
import { Box } from '../../Box';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Stack color="primary">
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Stack.styles.base should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        theme: { Stack: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.base should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        theme: {
          Stack: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack
        overrides={{
          Stack: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Stack, {
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
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Stack variant="test">
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        theme: {
          Stack: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Stack
        overrides={{
          Stack: {
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
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Stack, {
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
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(
      <Stack>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        colorMode: 'test',
        theme: {
          Stack: {
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
      <Stack colorMode="test">
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        theme: {
          Stack: {
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
      <Stack
        overrides={{
          Stack: {
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
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Stack, {
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
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(
      <Stack>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
        <Box backgroundColor="primaryTint" padding="major-2">
          <Text>First</Text>
        </Box>
      </Stack>,
      {
        theme: { Stack: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
