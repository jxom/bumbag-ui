import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Level } from '../Level';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Level>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Level color="primary">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for orientation', () => {
    const { container } = render(
      <Level orientation="vertical">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for spacing', () => {
    const { container } = render(
      <Level spacing="major-5">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Level.styles.base should render correctly', () => {
    const { container } = render(
      <Level>
        <Text>hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        theme: { Level: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Level.styles.base should render correctly', () => {
    const { container } = render(
      <Level>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        theme: {
          Level: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Level
        overrides={{
          Level: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Level, {
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
    const { container } = render(<Card variant="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Level variant="test">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        theme: {
          Level: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Level
        overrides={{
          Level: {
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
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Level, {
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
    const { container } = render(<Card variant="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(
      <Level>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        colorMode: 'test',
        theme: {
          Level: {
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
      <Level colorMode="test">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        theme: {
          Level: {
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
      <Level
        overrides={{
          Level: {
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
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Level>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Level, {
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
    const { container } = render(<Card colorMode="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(
      <Level>
        <Text>hello world</Text>
        <Text>Hello world</Text>
      </Level>,
      {
        theme: { Level: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
