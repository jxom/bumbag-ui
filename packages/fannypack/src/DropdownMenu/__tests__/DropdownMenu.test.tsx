import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Template } from '../Template';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Template>Hello world</Template>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Template color="primary">Hello world</Template>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Template use="p">Hello world</Template>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Template props', () => {
      const { result } = renderHook(() => Template.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Template>{TemplateProps => <div {...TemplateProps}>Hello world</div>}</Template>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Template.base should render correctly', () => {
    const { container } = render(<Template>hello world</Template>, {
      // @ts-ignore
      theme: { Template: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Template>hello world</Template>, {
      // @ts-ignore
      theme: { Template: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
