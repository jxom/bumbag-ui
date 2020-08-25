import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Dialog } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Dialog>Hello world</Dialog>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Dialog color="primary">Hello world</Dialog>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a title', () => {
    const { container } = render(<Dialog title="This is a dialog">Hello world</Dialog>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a close button', () => {
    const { container } = render(
      <Dialog title="Hello world" showCloseButton closeButtonProps={{ className: 'test' }}>
        Hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with action buttons', () => {
    const { container } = render(
      <Dialog title="Hello world" showActionButtons actionButtonsProps={{ palette: 'danger' }}>
        Hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a footer', () => {
    const { container } = render(
      <Dialog title="Hello world" footer="This is a footer">
        Hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('type', () => {
    ['info', 'success', 'danger', 'warning'].forEach((type) => {
      it(`should render correctly with type ${type}`, () => {
        const { container } = render(
          <Dialog type={type} title="This is a dialog">
            Hello world
          </Dialog>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  it('should render correctly for standalone', () => {
    const { container } = render(
      <Dialog title="Example dialog" type="info" width="600px" standalone>
        <Dialog.Header>
          <Dialog.Title>
            <Dialog.Icon />
            Example Dialog
          </Dialog.Title>
        </Dialog.Header>
        <Dialog.Content>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse diam ipsum, cursus id placerat congue,
          ultrices eget lectus. Duis posuere, lacus sed tristique commodo, sapien turpis mollis nunc, vestibulum
          consectetur lectus augue sit amet justo.
        </Dialog.Content>
        <Dialog.Footer>This is a footer</Dialog.Footer>
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Dialog use="div">Hello world</Dialog>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Dialog props', () => {
      const { result } = renderHook(() => Dialog.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Dialog>{(DialogProps) => <div {...DialogProps}>Hello world</div>}</Dialog>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Dialog.base should render correctly', () => {
    const { container } = render(
      <Dialog overrides={{ Dialog: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Content.base should render correctly', () => {
    const { container } = render(
      <Dialog overrides={{ Dialog: { Content: { styles: { base: { backgroundColor: 'red' } } } } }}>hello world</Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Header.base should render correctly', () => {
    const { container } = render(
      <Dialog
        title="This is a title"
        overrides={{ Dialog: { Header: { styles: { base: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Title.base should render correctly', () => {
    const { container } = render(
      <Dialog
        title="This is a title"
        overrides={{ Dialog: { Title: { styles: { base: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Footer.base should render correctly', () => {
    const { container } = render(
      <Dialog
        footer="This is a footer"
        overrides={{ Dialog: { Footer: { styles: { base: { backgroundColor: 'red' } } } } }}
      >
        hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.IconWrapper.base should render correctly', () => {
    const { container } = render(
      <Dialog overrides={{ Dialog: { IconWrapper: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Close.base should render correctly', () => {
    const { container } = render(
      <Dialog showCloseButton overrides={{ Dialog: { Close: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Dialog>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Dialog.base should render correctly', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Content.base should render correctly', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { Content: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Header.base should render correctly', () => {
    const { container } = render(<Dialog title="This is a title">hello world</Dialog>, {
      theme: { Dialog: { Header: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Title.base should render correctly', () => {
    const { container } = render(<Dialog title="This is a title">hello world</Dialog>, {
      theme: { Dialog: { Title: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Footer.base should render correctly', () => {
    const { container } = render(<Dialog footer="This is a footer">hello world</Dialog>, {
      theme: { Dialog: { Footer: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.IconWrapper.base should render correctly', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { IconWrapper: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Dialog.Close.base should render correctly', () => {
    const { container } = render(<Dialog showCloseButton>hello world</Dialog>, {
      theme: { Dialog: { Close: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Dialog>hello world</Dialog>, {
      theme: { Dialog: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
