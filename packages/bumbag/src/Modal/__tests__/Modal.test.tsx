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
      const modal = Modal.useState({ baseId: 'test' });
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
      const modal = Modal.useState({ baseId: 'test' });
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

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((expand) => {
    it(`should render correctly for expand ${expand}`, () => {
      function Component() {
        const modal = Modal.useState({ baseId: 'test' });
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

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((slide) => {
    it(`should render correctly for slide ${slide}`, () => {
      function Component() {
        const modal = Modal.useState({ baseId: 'test' });
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
      (placement) => {
        it(`should render correctly for ${placement} placement`, () => {
          function Component() {
            const modal = Modal.useState({ baseId: 'test' });
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

        [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((slide) => {
          it(`should render correctly for placement ${placement} and slide ${slide}`, () => {
            function Component() {
              const modal = Modal.useState({ baseId: 'test' });
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
        const modal = Modal.useState({ baseId: 'test' });
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
        const modal = Modal.useState({ baseId: 'test' });
        return Modal.useProps(modal);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const modal = Modal.useState({ baseId: 'test' });
        return (
          <Modal {...modal}>
            {(modalProps) => (
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" overrides={{ Modal: { styles: { base: { backgroundColor: 'red' } } } }}>
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.center.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          overrides={{ Modal: { styles: { placements: { center: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top"
          overrides={{ Modal: { styles: { placements: { top: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="left"
          overrides={{ Modal: { styles: { placements: { left: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="right"
          overrides={{ Modal: { styles: { placements: { right: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom"
          overrides={{ Modal: { styles: { placements: { bottom: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top-start"
          overrides={{ Modal: { styles: { placements: { topStart: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="top-end"
          overrides={{ Modal: { styles: { placements: { topEnd: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom-start"
          overrides={{ Modal: { styles: { placements: { bottomStart: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal
          {...modal}
          aria-label="test"
          placement="bottom-end"
          overrides={{ Modal: { styles: { placements: { bottomEnd: { backgroundColor: 'red' } } } } }}
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
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.center.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { center: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.top.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { top: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.left.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="left">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { left: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.right.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="right">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { right: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottom.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { bottom: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top-start">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { topStart: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.topEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="top-end">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { topEnd: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomStart.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom-start">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { bottomStart: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Modal.bottomEnd.base should render correctly', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test" placement="bottom-end">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { styles: { placements: { bottomEnd: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const modal = Modal.useState({ baseId: 'test' });
      return (
        <Modal {...modal} aria-label="test">
          Hello world
        </Modal>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Modal: { defaultProps: { className: 'test' } } },
    });
    expect(baseElement).toMatchSnapshot();
  });
});

describe('useContext', () => {
  it('should render correctly', () => {
    let modal;

    function ParentComponent({ children }: any) {
      return (
        <Modal.State>
          <Modal.Disclosure>Toggle</Modal.Disclosure>
          <Modal aria-label="test">{children}</Modal>
        </Modal.State>
      );
    }

    function ChildComponent() {
      const context = Modal.useContext();
      modal = context.modal;
      return <Box>hello world</Box>;
    }

    render(
      <ParentComponent>
        <ChildComponent />
      </ParentComponent>
    );
    expect(modal).toMatchSnapshot();
  });
});
