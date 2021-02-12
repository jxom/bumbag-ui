import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Set } from '../Set';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Set>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Set color="primary">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with spacing', () => {
    const { container } = render(
      <Set spacing="major-4">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isFilled', () => {
    const { container } = render(
      <Set isFilled>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Set.styles.base should render correctly', () => {
    const { container } = render(
      <Set>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
      </Set>,
      {
        theme: { Set: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Set.styles.base should render correctly', () => {
    const { container } = render(
      <Set>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>,
      {
        theme: {
          Set: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Set
        overrides={{
          Set: {
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
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Set, {
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
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <Set variant="test">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>,
      {
        theme: {
          Set: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Set
        overrides={{
          Set: {
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
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Set, {
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
        <Text>Hello world</Text>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(
      <Set>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>,
      {
        colorMode: 'test',
        theme: {
          Set: {
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
      <Set colorMode="test">
        <Text>Hello world</Text>
        <Text>Hello world</Text>
        <Text>Hello world</Text>
      </Set>,
      {
        theme: {
          Set: {
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
      <Set
        overrides={{
          Set: {
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
        <Text>Hello world</Text>
      </Set>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Set, {
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
        <Text>Hello world</Text>
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(
      <Set>
        <Text>hello world</Text>
        <Text>hello world</Text>
        <Text>hello world</Text>
      </Set>,
      {
        theme: { Set: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
