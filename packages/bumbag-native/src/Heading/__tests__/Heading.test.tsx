import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { Heading } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Heading>Hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Heading color="primary">Hello world</Heading>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H1', () => {
    const { container } = render(<Heading.H1>Hello world</Heading.H1>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H2', () => {
    const { container } = render(<Heading.H2>Hello world</Heading.H2>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H3', () => {
    const { container } = render(<Heading.H3>Hello world</Heading.H3>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H4', () => {
    const { container } = render(<Heading.H4>Hello world</Heading.H4>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H5', () => {
    const { container } = render(<Heading.H5>Hello world</Heading.H5>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H6', () => {
    const { container } = render(<Heading.H6>Hello world</Heading.H6>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with Heading props', () => {
      const { result } = renderHook(() => Heading.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Heading>{(HeadingProps) => <Heading {...HeadingProps}>Hello world</Heading>}</Heading>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Heading.styles.base should render correctly', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.styles.base should render correctly', () => {
    const { container } = render(<Heading>Hello world</Heading>, {
      theme: {
        Heading: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.styles.base should render correctly for default font', () => {
    const { container } = render(<Heading font="default">hello world</Heading>, {
      theme: {
        fonts: { default: 'default', heading: 'heading' },
        Heading: { styles: { base: { backgroundColor: 'red' } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.styles.base should render correctly for heading font', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: {
        fonts: { default: 'default', heading: 'heading' },
        Heading: { styles: { base: { backgroundColor: 'red' } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.H1.styles.base should render correctly for H1', () => {
    const { container } = render(<Heading.H1>hello world</Heading.H1>, {
      theme: { Heading: { H1: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Heading.H1.styles.base should render correctly for H1', () => {
    const { container } = render(<Heading.H1>Hello world</Heading.H1>, {
      theme: {
        Heading: { H1: { styles: { base: (props) => ({ backgroundColor: props.color }) } } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Heading
        overrides={{
          Heading: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        Hello world
      </Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for H1', () => {
    const { container } = render(
      <Heading.H1
        overrides={{
          Heading: {
            H1: {
              styles: { base: { backgroundColor: 'red' } },
              defaultProps: {
                altitude: '100',
                padding: 'major-2',
              },
            },
          },
        }}
      >
        Hello world
      </Heading.H1>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Heading, {
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

  it('renders correctly for H1', () => {
    const Card = applyTheme(Heading.H1, {
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
    const { container } = render(<Heading variant="test">Hello world</Heading>, {
      theme: {
        Heading: {
          variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('styles.base should render correctly for H1', () => {
    const { container } = render(<Heading.H1 variant="test">Hello world</Heading.H1>, {
      theme: {
        Heading: {
          H1: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Heading
        overrides={{
          Heading: {
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
        Hello world
      </Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides for H1', () => {
    const { container } = render(
      <Heading.H1
        overrides={{
          Heading: {
            H1: {
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
          },
        }}
        variant="test"
      >
        Hello world
      </Heading.H1>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Heading, {
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

  it('renders correctly for applyTheme for H1', () => {
    const Card = applyTheme(Heading.H1, {
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
    const { container } = render(<Heading>Hello world</Heading>, {
      colorMode: 'test',
      theme: {
        Heading: {
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

  it('should render correctly when colorMode is set globally for H1', () => {
    const { container } = render(<Heading.H1>Hello world</Heading.H1>, {
      colorMode: 'test',
      theme: {
        Heading: {
          H1: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(<Heading colorMode="test">Hello world</Heading>, {
      theme: {
        Heading: {
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

  it('should render correctly when colorMode set as prop for H1', () => {
    const { container } = render(<Heading.H1 colorMode="test">Hello world</Heading.H1>, {
      theme: {
        Heading: {
          H1: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Heading
        overrides={{
          Heading: {
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
        Hello world
      </Heading>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides for H1', () => {
    const { container } = render(
      <Heading.H1
        overrides={{
          Heading: {
            H1: {
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
          },
        }}
        colorMode="test"
      >
        Hello world
      </Heading.H1>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Heading, {
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

  it('renders correctly for applyTheme for H1', () => {
    const Card = applyTheme(Heading.H1, {
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
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for color for H1', () => {
    const { container } = render(<Heading>hello world</Heading>, {
      theme: { Heading: { H1: { defaultProps: { color: 'primary' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
