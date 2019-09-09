import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Icon } from '../Icon';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Icon>Hello world</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Icon color="primary">Hello world</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Icon use="div">Hello world</Icon>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Icon props', () => {
      const { result } = renderHook(() => Icon.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Icon>{iconProps => <div {...iconProps}>Hello world</div>}</Icon>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Icon.base should render correctly', () => {
    const { container } = render(<Icon>hello world</Icon>, {
      theme: { Icon: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Icon>hello world</Icon>, {
      theme: { Icon: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
