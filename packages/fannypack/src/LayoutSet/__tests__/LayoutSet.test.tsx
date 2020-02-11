import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { LayoutSet } from '../LayoutSet';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <LayoutSet color="primary">
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for a horizontal set', () => {
    const { container } = render(
      <LayoutSet isHorizontal>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <LayoutSet use="div">
          <Box>hello</Box>
          <Box>world</Box>
        </LayoutSet>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with LayoutSet props', () => {
      const { result } = renderHook(() => LayoutSet.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <LayoutSet>
          {LayoutSetProps => (
            <div {...LayoutSetProps}>
              <Box>hello</Box>
              <Box>world</Box>
            </div>
          )}
        </LayoutSet>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('LayoutSet.root should render correctly', () => {
    const { container } = render(
      <LayoutSet overrides={{ LayoutSet: { css: { root: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.child.root should render correctly', () => {
    const { container } = render(
      <LayoutSet overrides={{ LayoutSet: { css: { child: { root: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.vertical should render correctly', () => {
    const { container } = render(
      <LayoutSet isVertical overrides={{ LayoutSet: { css: { vertical: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.horizontal should render correctly', () => {
    const { container } = render(
      <LayoutSet overrides={{ LayoutSet: { css: { horizontal: { backgroundColor: 'red' } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.child.vertical should render correctly', () => {
    const { container } = render(
      <LayoutSet isVertical overrides={{ LayoutSet: { css: { child: { vertical: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.child.horizontal should render correctly', () => {
    const { container } = render(
      <LayoutSet overrides={{ LayoutSet: { css: { child: { horizontal: { backgroundColor: 'red' } } } } }}>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('LayoutSet.css.root should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { root: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.css.child.root should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { child: { root: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.css.vertical should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { vertical: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.css.horizontal should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { horizontal: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.css.child.vertical should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { child: { vertical: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('LayoutSet.css.child.horizontal should render correctly', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { css: { child: { horizontal: { backgroundColor: 'red' } } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { defaultProps: { className: 'test' } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isHorizontal', () => {
    const { container } = render(
      <LayoutSet>
        <Box>hello</Box>
        <Box>world</Box>
      </LayoutSet>,
      {
        theme: { LayoutSet: { defaultProps: { isHorizontal: true } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
