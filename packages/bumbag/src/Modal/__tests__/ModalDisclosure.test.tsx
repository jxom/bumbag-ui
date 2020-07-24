import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Modal } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return <Modal.Disclosure {...modal}>Toggle</Modal.Disclosure>;
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal.Disclosure ref={ref} {...modal}>
          Toggle
        </Modal.Disclosure>
      );
    }
    render(<Component />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly when disabled is set', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal.Disclosure disabled {...modal}>
          Toggle
        </Modal.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when focusable is set', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal.Disclosure disabled focusable {...modal}>
          Toggle
        </Modal.Disclosure>
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
        const modal = Modal.useState({ baseId: 'test' });
        return (
          <Modal.Disclosure use={Box} {...modal}>
            Toggle
          </Modal.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Modal.Disclosure props', () => {
      const { result } = renderHook(() => {
        const modal = Modal.useState({ baseId: 'test' });
        return Modal.Disclosure.useProps(modal);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ baseId: 'test' });
        return (
          <Modal.Disclosure {...modal}>
            {(ModalDisclosureProps) => <div {...ModalDisclosureProps}>Hello world</div>}
          </Modal.Disclosure>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Modal.Disclosure.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal.Disclosure
          overrides={{ Modal: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } }}
          {...modal}
        >
          Toggle
        </Modal.Disclosure>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Modal.Disclosure.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return <Modal.Disclosure {...modal}>Toggle</Modal.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Modal: { Disclosure: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return <Modal.Disclosure {...modal}>Toggle</Modal.Disclosure>;
    }
    const { container } = render(<Component />, {
      theme: { Modal: { Disclosure: { defaultProps: { className: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
