import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Blockquote } from '../../Blockquote';
import { Modal } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <div>
          <Modal.Disclosure {...modal}>Toggle</Modal.Disclosure>
          <Modal {...modal} aria-label="test">
            Hello world
          </Modal>
        </div>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render correctly with non-modal modal', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <div>
          <Modal.Disclosure {...modal}>Toggle</Modal.Disclosure>
          <Modal {...modal} modal={false} aria-label="test">
            Hello world
          </Modal>
        </div>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          <div>
            <Modal.Disclosure use={Button} {...modal}>
              Toggle
            </Modal.Disclosure>
            <Modal use={Blockquote} {...modal} aria-label="test">
              Hello world
            </Modal>
          </div>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Modal props', () => {
      const { result } = renderHook(() => {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return Modal.useProps(modal);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          <Modal {...modal}>
            {modalProps => (
              <div {...modalProps.htmlProps} aria-label="test">
                Hello world
              </div>
            )}
          </Modal>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Modal.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" overrides={{ Modal: { base: { backgroundColor: 'red' } } }}>
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Modal.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { base: { backgroundColor: 'red' } } }
    });
    expect(baseElement).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { defaultProps: { className: 'test' } } }
    });
    expect(baseElement).toMatchSnapshot();
  });
});
