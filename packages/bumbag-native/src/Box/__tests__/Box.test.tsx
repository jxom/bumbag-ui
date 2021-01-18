import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { Box } from '../index';
import { Text } from '../../Text';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <Box ref={ref}>
        <Text>Hello world</Text>
      </Box>
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for an altitude', () => {
    const { container } = render(<Box altitude="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop (marginX, paddingX)', () => {
    const { container } = render(<Box marginX="major-4" paddingX="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop (marginY, paddingY)', () => {
    const { container } = render(<Box marginY="major-4" paddingY="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font size CSS prop', () => {
    const { container } = render(<Box fontSize="400" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font weight CSS prop', () => {
    const { container } = render(<Box fontWeight="semibold" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a custom border', () => {
    const { container } = render(<Box border="default" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['default', '0', '1', '2', '3', '4', '5', '6'].forEach((borderRadius) => {
    it(`should render correctly for a borderRadius of ${borderRadius}`, () => {
      const { container } = render(<Box borderRadius={borderRadius} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with a color CSS prop', () => {
    const { container } = render(<Box backgroundColor="white900" color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="major-4" paddingLeft="major-2" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['left', 'right', 'center'].forEach((alignX) => {
    it(`should render correctly for an alignX of ${alignX}`, () => {
      // @ts-ignore
      const { container } = render(<Box alignX={alignX} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['top', 'bottom', 'center'].forEach((alignY) => {
    it(`should render correctly for an alignY of ${alignY}`, () => {
      // @ts-ignore
      const { container } = render(<Box alignY={alignY} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Box.base should render correctly', () => {
    const { container } = render(
      <Box>
        <Text>hello world</Text>
      </Box>,
      {
        theme: { Box: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Box.base should render correctly', () => {
    const { container } = render(
      <Box color="primary">
        <Text>hello world</Text>
      </Box>,
      {
        theme: {
          Box: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Box.base should render correctly', () => {
    const { container } = render(
      <Box
        overrides={{
          Box: {
            styles: { base: { backgroundColor: 'red' } },
            defaultProps: {
              altitude: '100',
              padding: 'major-2',
            },
          },
        }}
      >
        <Text>hello world</Text>
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Card = applyTheme(Box, {
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
      <Box variant="test">
        <Text>hello world</Text>
      </Box>,
      {
        theme: {
          Box: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Box, {
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
      <Box>
        <Text>hello world</Text>
      </Box>,
      {
        colorMode: 'test',
        theme: {
          Box: {
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
      <Box colorMode="test">
        <Text>hello world</Text>
      </Box>,
      {
        theme: {
          Box: {
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

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(Box, {
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
