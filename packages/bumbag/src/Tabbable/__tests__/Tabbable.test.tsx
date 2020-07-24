import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Tabbable } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <div>
        <Tabbable use="div">Tabbable</Tabbable>
        <Tabbable use="div" disabled>
          Disabled
        </Tabbable>
        <Tabbable use="div" disabled focusable>
          Focusable
        </Tabbable>
      </div>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(
        <div>
          <Tabbable use="div">Tabbable</Tabbable>
          <Tabbable use="div" disabled>
            Disabled
          </Tabbable>
          <Tabbable use="div" disabled focusable>
            Focusable
          </Tabbable>
        </div>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Tabbable props', () => {
      const { result } = renderHook(() => {
        return Tabbable.useProps({});
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        return <Tabbable>{(tabbableProps) => <p {...tabbableProps}>Hello world</p>}</Tabbable>;
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Tabbable.base should render correctly', () => {
    const { container } = render(
      <Tabbable use="div" overrides={{ Tabbable: { styles: { base: { backgroundColor: 'red' } } } }}>
        Tabbable
      </Tabbable>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Tabbable.base should render correctly', () => {
    const { container } = render(<Tabbable use="div">Tabbable</Tabbable>, {
      theme: { Tabbable: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Tabbable use="div">Tabbable</Tabbable>, {
      theme: { Tabbable: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
