import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { GridItem } from '../GridItem';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<GridItem>Hello world</GridItem>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<GridItem area="a">Hello world</GridItem>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<GridItem use="p">Hello world</GridItem>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with GridItem props', () => {
      const { result } = renderHook(() => GridItem.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<GridItem>{(GridItemProps) => <div {...GridItemProps}>Hello world</div>}</GridItem>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('GridItem.base should render correctly', () => {
    const { container } = render(<GridItem>hello world</GridItem>, {
      theme: { Grid: { Item: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<GridItem>hello world</GridItem>, {
      theme: { Grid: { Item: { defaultProps: { area: 'test', className: 'test' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
