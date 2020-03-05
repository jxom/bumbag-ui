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
      <Stack orientation="horizontal" verticalAt="desktop">
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
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
          {StackProps => (
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
  it('Stack.root should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { css: { root: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.child.root should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { css: { child: { root: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.vertical should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { css: { vertical: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.horizontal should render correctly', () => {
    const { container } = render(
      <Stack orientation="horizontal" overrides={{ Stack: { css: { horizontal: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.child.vertical should render correctly', () => {
    const { container } = render(
      <Stack overrides={{ Stack: { css: { child: { vertical: { backgroundColor: 'red' } } } } }}>
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
        overrides={{ Stack: { css: { child: { horizontal: { backgroundColor: 'red' } } } } }}
      >
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Stack.css.root should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { root: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.css.child.root should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { child: { root: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.css.vertical should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { vertical: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.css.horizontal should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { horizontal: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.css.child.vertical should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { child: { vertical: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Stack.css.child.horizontal should render correctly', () => {
    const { container } = render(
      <Stack>
        <Box>hello</Box>
        <Box>world</Box>
      </Stack>,
      {
        theme: { Stack: { css: { child: { horizontal: { backgroundColor: 'red' } } } } }
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
        theme: { Stack: { defaultProps: { className: 'test' } } }
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
        theme: { Stack: { defaultProps: { orientation: 'horizontal' } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
