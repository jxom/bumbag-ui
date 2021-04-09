import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Checkbox } from '../Checkbox';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Checkbox>
        <Text>Hello world</Text>
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Checkbox color="primary">
        <Text>Hello world</Text>
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with Checkbox props', () => {
      const { result } = renderHook(() => Checkbox.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Checkbox>
          {(CheckboxProps) => (
            <Checkbox {...CheckboxProps}>
              <Text>Hello world</Text>
            </Checkbox>
          )}
        </Checkbox>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Checkbox.styles.base should render correctly', () => {
    const { container } = render(
      <Checkbox>
        <Text>hello world</Text>
      </Checkbox>,
      {
        // @ts-ignore REMOVE THIS
        theme: { Checkbox: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.styles.base should render correctly', () => {
    const { container } = render(
      <Checkbox>
        <Text>Hello world</Text>
      </Checkbox>,
      {
        theme: {
          // @ts-ignore REMOVE THIS
          Checkbox: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Checkbox
        overrides={{
          // @ts-ignore REMOVE ME
          Checkbox: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        <Text>Hello world</Text>
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Checkbox, {
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
      <Checkbox variant="test">
        <Text>Hello world</Text>
      </Checkbox>,
      {
        theme: {
          // @ts-ignore REMOVE THIS
          Checkbox: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Checkbox
        overrides={{
          // @ts-ignore REMOVE ME
          Checkbox: {
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
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Checkbox, {
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
      <Checkbox>
        <Text>Hello world</Text>
      </Checkbox>,
      {
        colorMode: 'test',
        theme: {
          // @ts-ignore DELETE ME
          Checkbox: {
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
      <Checkbox colorMode="test">
        <Text>Hello world</Text>
      </Checkbox>,
      {
        theme: {
          // @ts-ignore DELETE ME
          Checkbox: {
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
      <Checkbox
        overrides={{
          // @ts-ignore REMOVE ME
          Checkbox: {
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
      </Checkbox>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Checkbox, {
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
      <Checkbox>
        <Text>hello world</Text>
      </Checkbox>,
      {
        // @ts-ignore REMOVE THIS
        theme: { Checkbox: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
