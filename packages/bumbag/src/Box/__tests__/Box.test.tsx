import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../index';
import { Button } from '../../Button';
import { applyTheme } from '../../utils/applyTheme';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Box />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Box ref={ref}>Hello world</Box>);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with aria* props', () => {
    const { container } = render(<Box aria-label="hello" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="red" color="white" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Box backgroundColor="rgb(255, 0, 0)" color="rgba(0, 255, 0, 0.1)" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(
      <Box
        backgroundColor={{
          default: 'primary',
          mobile: 'secondary',
          desktop: 'red',
        }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(<Box backgroundColor={{ default: 'primary', 'max-tablet': 'secondary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with breakpoints', () => {
    const { container } = render(<Box backgroundColor={{ default: 'primary', 'min-desktop': 'secondary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with hover', () => {
    const { container } = render(<Box _hover={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with hoveractive', () => {
    const { container } = render(<Box _hoveractive={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with focus', () => {
    const { container } = render(<Box _focus={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with visited', () => {
    const { container } = render(<Box _visited={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with active', () => {
    const { container } = render(<Box _active={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with disabled', () => {
    const { container } = render(<Box use="button" disabled _disabled={{ backgroundColor: 'primary' }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props with group hover', () => {
    const { container } = render(
      <Box role="group">
        <Box _groupHover={{ backgroundColor: 'primary' }} />
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly with CSS props with group active', () => {
    const { container } = render(
      <Box role="group">
        <Box _groupActive={{ backgroundColor: 'primary' }} />
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly with CSS props with group focus', () => {
    const { container } = render(
      <Box role="group">
        <Box _groupFocus={{ backgroundColor: 'primary' }} />
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly with CSS props with group visited', () => {
    const { container } = render(
      <Box role="group">
        <Box _groupVisited={{ backgroundColor: 'primary' }} />
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly with CSS props with group disabled', () => {
    const { container } = render(
      <Box role="group" use="button" disabled>
        <Box _groupDisabled={{ backgroundColor: 'primary' }} />
      </Box>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
  it('should render correctly with CSS props with group hover', () => {
    const { container } = render(
      <Box role="group">
        <Box _groupHover={{ backgroundColor: 'primary' }} />
      </Box>
    );
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

  it('should render correctly with a spacing CSS prop', () => {
    const { container } = render(<Box margin="xl" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a font CSS prop', () => {
    const { container } = render(<Box font="default" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a fontFamily CSS prop', () => {
    const { container } = render(<Box fontFamily="default" />);
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

  it('should render correctly for an altitude', () => {
    const { container } = render(<Box altitude="400" />);
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

  it('should render correctly with overrides', () => {
    const { container } = render(<Box overrides={{ Box: { styles: { base: { backgroundColor: 'red' } } } }} />);
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

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(<Box use="p">Hello world</Box>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it('should render correctly for a Button component with props', () => {
      const { container } = render(
        // @ts-ignore
        <Box use={Button} palette="primary" variant="outlined">
          Hello world
        </Box>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with box props', () => {
      const { result } = renderHook(() => Box.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Box>{(boxProps) => <p {...boxProps}>Hello world</p>}</Box>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Box.base should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, {
      theme: { Box: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Box.base should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, {
      theme: { Box: { styles: { base: { backgroundColor: 'rgb(255, 0, 0)', color: 'rgba(0, 255, 0, 0.1)' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Box.base should render correctly', () => {
    const { container } = render(<Box color="green">hello world</Box>, {
      theme: {
        Box: { styles: { base: (props) => ({ backgroundColor: props.color }) } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<Box variant="test">hello world</Box>, {
      theme: {
        Box: {
          variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(<Box>hello world</Box>, {
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
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(<Box colorMode="test">hello world</Box>, {
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
    });
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
    const { container } = render(<Box>hello world</Box>, {
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
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(<Box colorMode="test">hello world</Box>, {
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
    });
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
          defaultProps: {
            color: 'red',
          },
        },
      },
    });
    const { container } = render(<Card colorMode="test" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('correctly assigns a ref for applyTheme', () => {
    const CustomBox = applyTheme(Box, {
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
    });
    const ref = React.createRef();
    const { container } = render(<CustomBox ref={ref} />);
    expect(ref.current).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(<Box>hello world</Box>, {
      theme: { Box: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
