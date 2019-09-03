import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
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

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach(expand => {
    it(`should render correctly for expand ${expand}`, () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          // @ts-ignore
          <Modal {...modal} expand={expand} aria-label="test">
            Hello world
          </Modal>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach(slide => {
    it(`should render correctly for slide ${slide}`, () => {
      function Component() {
        const modal = Modal.useState({ unstable_hiddenId: 'test' });
        return (
          // @ts-ignore
          <Modal {...modal} slide={slide} aria-label="test">
            Hello world
          </Modal>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('placement', () => {
    ['center', 'top-start', 'top', 'top-end', 'left', 'right', 'bottom-start', 'bottom', 'bottom-end'].forEach(
      placement => {
        it(`should render correctly for ${placement} placement`, () => {
          function Component() {
            const modal = Modal.useState({ unstable_hiddenId: 'test' });
            return (
              // @ts-ignore
              <Modal {...modal} placement={placement} aria-label="test">
                Hello world
              </Modal>
            );
          }
          const { baseElement } = render(<Component />);
          expect(baseElement).toMatchSnapshot();
        });

        [true, 'center', 'top', 'left', 'right', 'bottom'].forEach(slide => {
          it(`should render correctly for placement ${placement} and slide ${slide}`, () => {
            function Component() {
              const modal = Modal.useState({ unstable_hiddenId: 'test' });
              return (
                // @ts-ignore
                <Modal {...modal} slide={slide} aria-label="test">
                  Hello world
                </Modal>
              );
            }
            const { baseElement } = render(<Component />);
            expect(baseElement).toMatchSnapshot();
          });
        });
      }
    );
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
              <Box {...modalProps} aria-label="test">
                Hello world
              </Box>
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

  it('Modal.center.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          overrides={{ Modal: { placements: { center: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.top.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top"
          overrides={{ Modal: { placements: { top: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.left.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="left"
          overrides={{ Modal: { placements: { left: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.right.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="right"
          overrides={{ Modal: { placements: { right: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottom.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom"
          overrides={{ Modal: { placements: { bottom: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top-start"
          overrides={{ Modal: { placements: { topStart: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top-end"
          overrides={{ Modal: { placements: { topEnd: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom-start"
          overrides={{ Modal: { placements: { bottomStart: { backgroundColor: 'red' } } } }}
        >
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom-end"
          overrides={{ Modal: { placements: { bottomEnd: { backgroundColor: 'red' } } } }}
        >
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

  it('Modal.center.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { center: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.top.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { top: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.left.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="left">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { left: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.right.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="right">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { right: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottom.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { bottom: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top-start">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { topStart: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top-end">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { topEnd: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom-start">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { bottomStart: { backgroundColor: 'red' } } } }
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ unstable_hiddenId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom-end">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { placements: { bottomEnd: { backgroundColor: 'red' } } } }
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
