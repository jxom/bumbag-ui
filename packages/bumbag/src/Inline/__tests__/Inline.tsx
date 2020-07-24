import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Inline } from '../Inline';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Inline>Hello world</Inline>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Inline position="absolute" top="0">
        Hello world
      </Inline>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Inline use="p">Hello world</Inline>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Inline props', () => {
      const { result } = renderHook(() => Inline.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Inline>{(InlineProps) => <div {...InlineProps}>Hello world</div>}</Inline>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Inline.base should render correctly', () => {
    const { container } = render(<Inline>hello world</Inline>, {
      theme: { Inline: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Inline>hello world</Inline>, {
      theme: { Inline: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
