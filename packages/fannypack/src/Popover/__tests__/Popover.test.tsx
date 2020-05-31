import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { Blockquote } from '../../Blockquote';
import { Popover } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  describe('placement', () => {
    ['top-start', 'top', 'top-end', 'left', 'center', 'right', 'bottom-start', 'bottom', 'bottom-end'].forEach(
      (placement: any) => {
        it(`should render placement correcty for ${placement}`, () => {
          function Component() {
            const popover = Popover.useState({ baseId: 'test', placement });
            return (
              // @ts-ignore
              <Popover {...popover} visible>
                Hello world
              </Popover>
            );
          }
          const { baseElement } = render(<Component />);
          expect(baseElement).toMatchSnapshot();
        });
      }
    );
  });

  it('should render correctly with a title', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} title="This is a title" visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render correctly with a footer', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} footer="This is a footer" visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('should render correctly with action buttons', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} showActionButtons visible>
          Hello world
        </Popover>
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
        const popover = Popover.useState({ baseId: 'test' });
        return (
          <Popover use={Blockquote} {...popover} aria-label="test">
            Hello world
          </Popover>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Modal props', () => {
      const { result } = renderHook(() => {
        const popover = Popover.useState({ baseId: 'test' });
        return Popover.useProps(popover);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const popover = Popover.useState({ baseId: 'test' });
        return (
          <Popover {...popover}>
            {(popoverProps) => (
              <Box {...popoverProps} aria-label="test">
                Hello world
              </Box>
            )}
          </Popover>
        );
      }
      const { baseElement } = render(<Component />);
      expect(baseElement).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Popover.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Arrow.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} hasArrow visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Arrow: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Content.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Content: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Close.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} title="This is a title" showCloseButton visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Close: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Header.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} title="This is a title" visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Header: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Title.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} title="This is a title" visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Title: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Footer.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} footer="This is a footer" visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, {
      theme: { Popover: { Footer: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(baseElement).toMatchSnapshot();
  });

  ['top-start', 'top', 'top-end', 'left', 'center', 'right', 'bottom-start', 'bottom', 'bottom-end'].forEach(
    (placement: any) => {
      it(`Popover.placements.${placement} should render correctly`, () => {
        function Component() {
          const popover = Popover.useState({ baseId: 'test', placement });
          return (
            // @ts-ignore
            <Popover {...popover} visible>
              Hello world
            </Popover>
          );
        }
        const { baseElement } = render(<Component />, {
          theme: { Popover: { css: { placements: { [placement]: { backgroundColor: 'red' } } } } },
        });
        expect(baseElement).toMatchSnapshot();
      });
    }
  );
});

describe('overrides', () => {
  it('Popover.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible overrides={{ Popover: { css: { root: { backgroundColor: 'red' } } } }}>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Arrow.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          hasArrow
          visible
          overrides={{ Popover: { Arrow: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Content.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          visible
          overrides={{ Popover: { Content: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Close.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          title="This is a title"
          showCloseButton
          visible
          overrides={{ Popover: { Close: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Header.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          title="This is a title"
          visible
          overrides={{ Popover: { Header: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Title.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          title="This is a title"
          visible
          overrides={{ Popover: { Title: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  it('Popover.Footer.root should render correctly', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover
          {...popover}
          footer="This is a footer"
          visible
          overrides={{ Popover: { Footer: { css: { root: { backgroundColor: 'red' } } } } }}
        >
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />);
    expect(baseElement).toMatchSnapshot();
  });

  ['top-start', 'top', 'top-end', 'left', 'center', 'right', 'bottom-start', 'bottom', 'bottom-end'].forEach(
    (placement: any) => {
      it(`Popover.placements.${placement} should render correctly`, () => {
        function Component() {
          const popover = Popover.useState({ baseId: 'test', placement });
          return (
            // @ts-ignore
            <Popover
              {...popover}
              visible
              overrides={{ Popover: { css: { placements: { [placement]: { backgroundColor: 'red' } } } } }}
            >
              Hello world
            </Popover>
          );
        }
        const { baseElement } = render(<Component />);
        expect(baseElement).toMatchSnapshot();
      });
    }
  );
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, { theme: { Popover: { defaultProps: { className: 'test' } } } });
    expect(baseElement).toMatchSnapshot();
  });

  it('should render correctly for hasArrow', () => {
    function Component() {
      const popover = Popover.useState({ baseId: 'test' });
      return (
        <Popover {...popover} visible>
          Hello world
        </Popover>
      );
    }
    const { baseElement } = render(<Component />, { theme: { Popover: { defaultProps: { hasArrow: true } } } });
    expect(baseElement).toMatchSnapshot();
  });
});
