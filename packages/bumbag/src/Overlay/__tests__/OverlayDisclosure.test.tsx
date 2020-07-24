import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Overlay } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return <Overlay.Disclosure {...overlay}>Toggle</Overlay.Disclosure>;
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay.Disclosure ref={ref} {...overlay}>
          Toggle
        </Overlay.Disclosure>
      );
    }
    render(<Component />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly when disabled is set', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay.Disclosure disabled {...overlay}>
          Toggle
        </Overlay.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when focusable is set', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay.Disclosure disabled focusable {...overlay}>
          Toggle
        </Overlay.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      function Component() {
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          <Overlay.Disclosure use={Box} {...overlay}>
            Toggle
          </Overlay.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Overlay.Disclosure props', () => {
      const { result } = renderHook(() => {
        const overlay = Overlay.useState({ baseId: 'test' });
        return Overlay.Disclosure.useProps(overlay);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          <Overlay.Disclosure {...overlay}>
            {(OverlayDisclosureProps) => <div {...OverlayDisclosureProps}>Hello world</div>}
          </Overlay.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Overlay.Disclosure.base should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay.Disclosure
          overrides={{ Overlay: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } }}
          {...overlay}
        >
          Toggle
        </Overlay.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Overlay.Disclosure.base should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return <Overlay.Disclosure {...overlay}>Toggle</Overlay.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Overlay: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return <Overlay.Disclosure {...overlay}>Toggle</Overlay.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Overlay: { Disclosure: { defaultProps: { className: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
