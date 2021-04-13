import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { Checkbox } from '../Checkbox';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox label="Remember me" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  ['default', 'ghost'].forEach((variant) => {
    it(`should render correctly for ${variant} variant`, () => {
      const { container } = render(<Checkbox label="Remember me" variant={variant} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Checkbox.styles.base should render correctly', () => {
    const { container } = render(<Checkbox label="Remember me" />, {
      theme: { Checkbox: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Icon.styles.base should render correctly', () => {
    const { container } = render(<Checkbox label="Remember me" />, {
      theme: { Checkbox: { Icon: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.CheckIcon.styles.base should render correctly', () => {
    const { container } = render(<Checkbox label="Remember me" />, {
      theme: { Checkbox: { CheckIcon: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Label.styles.base should render correctly', () => {
    const { container } = render(<Checkbox label="Remember me" />, {
      theme: { Checkbox: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Checkbox
        label="Remember me"
        overrides={{
          Checkbox: {
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
    const { container } = render(<Card label="Remember me" variant="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Checkbox variant="test" />, {
      theme: {
        Checkbox: {
          variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <Checkbox
        overrides={{
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
      />
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
    const { container } = render(<Checkbox />, {
      colorMode: 'test',
      theme: {
        Checkbox: {
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
    const { container } = render(<Checkbox colorMode="test" />, {
      theme: {
        Checkbox: {
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
      <Checkbox
        overrides={{
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
      />
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
    const { container } = render(<Checkbox />, {
      theme: { Checkbox: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
