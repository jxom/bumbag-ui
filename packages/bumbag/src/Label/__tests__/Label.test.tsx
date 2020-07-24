import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Label } from '../Label';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Label>Hello world</Label>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Label color="primary">Hello world</Label>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a htmlFor attribute', () => {
    const { container } = render(<Label htmlFor="test">Hello world</Label>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Label use="p">Hello world</Label>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Label props', () => {
      const { result } = renderHook(() => Label.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Label>{(LabelProps) => <div {...LabelProps}>Hello world</div>}</Label>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Label.base should render correctly', () => {
    const { container } = render(<Label>hello world</Label>, {
      // @ts-ignore
      theme: { Label: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Label>hello world</Label>, {
      // @ts-ignore
      theme: { Label: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
