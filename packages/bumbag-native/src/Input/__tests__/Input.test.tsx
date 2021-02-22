import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Input } from '../Input';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Input color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Input.styles.base should render correctly', () => {
    const { container } = render(<Input />, {
      // @ts-ignore REMOVE THIS
      theme: { Input: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.styles.base should render correctly', () => {
    const { container } = render(<Input />, {
      theme: {
        // @ts-ignore REMOVE THIS
        Input: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Input
        overrides={{
          // @ts-ignore REMOVE ME
          Input: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Input, {
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
    const { container } = render(<Input variant="test" />, {
      theme: {
        // @ts-ignore REMOVE THIS
        Input: {
          variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Input
        overrides={{
          // @ts-ignore REMOVE ME
          Input: {
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
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Input, {
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
    const { container } = render(<Input />, {
      colorMode: 'test',
      theme: {
        // @ts-ignore DELETE ME
        Input: {
          modes: {
            test: {
              styles: { base: { backgroundColor: 'red' } },
              defaultProps: { color: 'primaryTint' },
            },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(<Input colorMode="test" />, {
      theme: {
        // @ts-ignore DELETE ME
        Input: {
          modes: {
            test: {
              styles: { base: { backgroundColor: 'red' } },
              defaultProps: { color: 'primaryTint' },
            },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Input
        overrides={{
          // @ts-ignore REMOVE ME
          Input: {
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
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Input, {
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
    const { container } = render(<Input />, {
      // @ts-ignore REMOVE THIS
      theme: { Input: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
