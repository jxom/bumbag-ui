import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Button } from '../../Button';
import { Blockquote } from '../../Blockquote';
import { Overlay } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <div>
          <Overlay.Disclosure {...overlay}>Toggle</Overlay.Disclosure>
          <Overlay {...overlay} aria-label="test">
            Hello world
          </Overlay>
        </div>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((expand) => {
    it(`should render correctly for expand ${expand}`, () => {
      function Component() {
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          // @ts-ignore
          <Overlay {...overlay} expand={expand} aria-label="test">
            Hello world
          </Overlay>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((slide) => {
    it(`should render correctly for slide ${slide}`, () => {
      function Component() {
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          // @ts-ignore
          <Overlay {...overlay} slide={slide} aria-label="test">
            Hello world
          </Overlay>
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
            const overlay = Overlay.useState({ baseId: 'test' });
            return (
              // @ts-ignore
              <Overlay {...overlay} placement={placement} aria-label="test">
                Hello world
              </Overlay>
            );
          }
          const { baseElement } = render(<Component />);
          expect(baseElement).toMatchSnapshot();
        });

        [true, 'center', 'top', 'left', 'right', 'bottom'].forEach((slide) => {
          it(`should render correctly for placement ${placement} and slide ${slide}`, () => {
            function Component() {
              const overlay = Overlay.useState({ baseId: 'test' });
              return (
                // @ts-ignore
                <Overlay {...overlay} slide={slide} aria-label="test">
                  Hello world
                </Overlay>
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
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          <div>
            <Overlay.Disclosure use={Button} {...overlay}>
              Toggle
            </Overlay.Disclosure>
            <Overlay use={Blockquote} {...overlay} aria-label="test">
              Hello world
            </Overlay>
          </div>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Overlay props', () => {
      const { result } = renderHook(() => {
        const overlay = Overlay.useState({ baseId: 'test' });
        return Overlay.useProps(overlay);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const overlay = Overlay.useState({ baseId: 'test' });
        return (
          <Overlay {...overlay}>
            {(overlayProps) => (
              <Box {...overlayProps} aria-label="test">
                Hello world
              </Box>
            )}
          </Overlay>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Overlay.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" overrides={{ Overlay: { css: { root: { backgroundColor: 'red' } } } }}>
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.center.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          overrides={{ Overlay: { css: { placements: { center: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.top.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="top"
          overrides={{ Overlay: { css: { placements: { top: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.left.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="left"
          overrides={{ Overlay: { css: { placements: { left: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.right.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="right"
          overrides={{ Overlay: { css: { placements: { right: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottom.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="bottom"
          overrides={{ Overlay: { css: { placements: { bottom: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.topStart.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="top-start"
          overrides={{ Overlay: { css: { placements: { topStart: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.topEnd.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="top-end"
          overrides={{ Overlay: { css: { placements: { topEnd: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottomStart.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="bottom-start"
          overrides={{ Overlay: { css: { placements: { bottomStart: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottomEnd.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay
          {...overlay}
          aria-label="test"
          placement="bottom-end"
          overrides={{ Overlay: { css: { placements: { bottomEnd: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Overlay.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.center.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { center: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.top.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="top">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { top: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.left.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="left">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { left: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.right.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="right">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { right: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottom.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="bottom">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { bottom: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.topStart.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="top-start">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { topStart: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.topEnd.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="top-end">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { topEnd: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottomStart.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="bottom-start">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { bottomStart: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Overlay.bottomEnd.root should render correctly', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test" placement="bottom-end">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { css: { placements: { bottomEnd: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const overlay = Overlay.useState({ baseId: 'test' });
      return (
        <Overlay {...overlay} aria-label="test">
          Hello world
        </Overlay>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Overlay: { defaultProps: { className: 'test' } } },
    });
    expect(baseElement).toMatchSnapshot();
  });
});
