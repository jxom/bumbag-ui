import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { Input } from '../Input';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Input />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via inputRef', () => {
    const ref = React.createRef();
    render(<Input inputRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Input color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container } = render(<Input disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(`should render ${size} correctly`, () => {
        const { container } = render(<Input size={size as any} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('states', () => {
    ['danger', 'success', 'warning', 'primary'].forEach((state) => {
      it(`should render ${state} correctly`, () => {
        const { container } = render(<Input state={state} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('icons', () => {
    ['iconAfter', 'iconBefore'].forEach((iconProp) => {
      it(`should render ${iconProp} correctly`, () => {
        const { container } = render(<Input {...{ [iconProp]: 'my-icon' }} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('theming', () => {
  it('Input.styles.base should render correctly', () => {
    const { container } = render(<Input />, {
      theme: { Input: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.styles.base should render correctly', () => {
    const { container } = render(<Input />, {
      theme: { Input: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.styles.base should render correctly', () => {
    const { container } = render(<Input />, {
      theme: {
        Input: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.IconWrapper.styles.base should render correctly', () => {
    const { container } = render(<Input label="Username" iconBefore="my-icon" />, {
      theme: { Input: { IconWrapper: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.LabelWrapper.styles.base should render correctly', () => {
    const { container } = render(<Input label="Username" />, {
      theme: { Input: { LabelWrapper: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Input.Label.styles.base should render correctly', () => {
    const { container } = render(<Input label="Username" />, {
      theme: { Input: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Input
        overrides={{
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
      theme: { Input: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
