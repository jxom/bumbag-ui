import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { Spinner } from '../Spinner';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with color', () => {
    const { container } = render(<Spinner color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'default', 'medium', 'large', '50px'].forEach((size) => {
    it(`should render correctly for size ${size}`, () => {
      const { container } = render(<Spinner size={size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Spinner.styles.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.styles.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: {
        Spinner: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Spinner
        overrides={{
          Spinner: {
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
    const Card = applyTheme(Spinner, {
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
    const { container } = render(<Spinner variant="test" />, {
      theme: {
        Spinner: {
          variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Spinner
        overrides={{
          Spinner: {
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
    const Card = applyTheme(Spinner, {
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
    const { container } = render(<Spinner />, {
      colorMode: 'test',
      theme: {
        Spinner: {
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
    const { container } = render(<Spinner colorMode="test" />, {
      theme: {
        Spinner: {
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
      <Spinner
        overrides={{
          Spinner: {
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
    const Card = applyTheme(Spinner, {
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
    const { container } = render(<Spinner />, {
      theme: { Spinner: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
