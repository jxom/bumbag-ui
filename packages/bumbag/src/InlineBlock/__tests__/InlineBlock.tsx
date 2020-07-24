import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { InlineBlock } from '../InlineBlock';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<InlineBlock>Hello world</InlineBlock>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <InlineBlock position="absolute" top="0">
        Hello world
      </InlineBlock>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<InlineBlock use="p">Hello world</InlineBlock>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with InlineBlock props', () => {
      const { result } = renderHook(() => InlineBlock.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <InlineBlock>{(InlineBlockProps) => <div {...InlineBlockProps}>Hello world</div>}</InlineBlock>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('InlineBlock.base should render correctly', () => {
    const { container } = render(<InlineBlock>hello world</InlineBlock>, {
      theme: { InlineBlock: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<InlineBlock>hello world</InlineBlock>, {
      theme: { InlineBlock: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
