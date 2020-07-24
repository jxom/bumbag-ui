import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Stack } from '../Stack';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Stack color="primary">
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a horizontal set', () => {
    const { container } = render(
      <Stack orientation="horizontal">
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a horizontal set with breakpoint', () => {
    const { container } = render(
      <Stack orientation="horizontal" verticalBelow="widescreen">
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['left', 'right', 'center'].forEach((alignX) => {
    it(`should render correctly for an alignX of ${alignX}`, () => {
      const { container } = render(
        // @ts-ignore
        <Stack alignX={alignX}>
          <Box>hello</Box>
          <Box>world</Box>
        </Stack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['top', 'bottom', 'center'].forEach((alignY) => {
    it(`should render correctly for an alignY of ${alignY}`, () => {
      const { container } = render(
        // @ts-ignore
        <Stack alignY={alignY}>
          <Box>hello</Box>
          <Box>world</Box>
        </Stack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Stack use="div">
          <Box>hello</Box>
          <Box>world</Box>
        </Stack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Stack props', () => {
      const { result } = renderHook(() => Stack.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Stack>
          {(StackProps) => (
            <div {...StackProps}>
              <Box>hello</Box>
              <Box>world</Box>
            </div>
          )}
        </Stack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Stack.base should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.child.base should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { styles: { child: { base: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.vertical should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { styles: { vertical: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.horizontal should render correctly', () => {
    const { container } = render(
      <Stack orientation="horizontal" overrides={{ Stack: { styles: { horizontal: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.child.vertical should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { styles: { child: { vertical: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.child.horizontal should render correctly', () => {
    const { container } = render(
      <Stack
        orientation="horizontal"
        overrides={{ Stack: { styles: { child: { horizontal: { backgroundColor: 'red' } } } } }}
      >
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Stack.styles.base should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.child.base should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { child: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.vertical should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { vertical: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.horizontal should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { horizontal: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.child.vertical should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { child: { vertical: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.styles.child.horizontal should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { styles: { child: { horizontal: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { defaultProps: { className: 'test' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for orientation', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { defaultProps: { orientation: 'horizontal' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
