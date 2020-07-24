import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { InlineFlex } from '../InlineFlex';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<InlineFlex>Hello world</InlineFlex>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <InlineFlex position="absolute" top="0">
        Hello world
      </InlineFlex>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<InlineFlex use="p">Hello world</InlineFlex>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with InlineFlex props', () => {
      const { result } = renderHook(() => InlineFlex.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <InlineFlex>{(InlineFlexProps) => <div {...InlineFlexProps}>Hello world</div>}</InlineFlex>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('InlineFlex.base should render correctly', () => {
    const { container } = render(<InlineFlex>hello world</InlineFlex>, {
      theme: { InlineFlex: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<InlineFlex>hello world</InlineFlex>, {
      theme: { InlineFlex: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
