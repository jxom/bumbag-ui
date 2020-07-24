import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Divider } from '../Divider';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Divider />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Divider borderColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for vertical orientation', () => {
    const { container } = render(<Divider orientation="vertical" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Divider use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Divider props', () => {
      const { result } = renderHook(() => Divider.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Divider>{(DividerProps) => <div {...DividerProps} />}</Divider>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Divider.base should render correctly', () => {
    const { container } = render(<Divider />, {
      // @ts-ignore
      theme: { Divider: { styles: { base: { borderColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Divider.vertical.base should render correctly', () => {
    const { container } = render(<Divider />, {
      // @ts-ignore
      theme: { Divider: { styles: { vertical: { borderColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Divider />, {
      // @ts-ignore
      theme: { Divider: { defaultProps: { className: 'test', borderColor: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
