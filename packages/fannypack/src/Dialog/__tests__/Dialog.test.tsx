import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Dialog } from '../Dialog';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Dialog>Hello world</Dialog>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Dialog color="primary">Hello world</Dialog>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Dialog use="div">Hello world</Dialog>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Dialog props', () => {
      const { result } = renderHook(() => Dialog.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Dialog>{DialogProps => <div {...DialogProps}>Hello world</div>}</Dialog>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Dialog.base should render correctly', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
