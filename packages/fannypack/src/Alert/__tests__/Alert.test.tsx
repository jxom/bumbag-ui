import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Alert } from '../Alert';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Alert color="primary">Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Alert use="p">Hello world</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Alert props', () => {
      const { result } = renderHook(() => Alert.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Alert>{AlertProps => <div {...AlertProps}>Hello world</div>}</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Alert.base should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { base: { backgroundColor: 'red' } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Alert.base should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
