import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Alert } from '../Alert';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Alert>Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Alert color="primary">Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a close button', () => {
    const { container } = render(<Alert showCloseButton>Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a title', () => {
    const { container } = render(<Alert title="This is a title">Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom close button props', () => {
    const { container } = render(
      <Alert showCloseButton closeButtonProps={{ palette: 'primary' }}>
        Hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom close button icon props', () => {
    const { container } = render(
      <Alert showCloseButton closeButtonIconProps={{ marginTop: 'major-1' }}>
        Hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with custom icon props', () => {
    const { container } = render(<Alert iconProps={{ marginTop: 'major-1' }}>Hello world</Alert>);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['info', 'success', 'danger', 'warning'].forEach(type => {
    it(`should render correctly for ${type} type`, () => {
      const { container } = render(<Alert type={type}>Hello world</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it(`should render correctly for an icon (${type})`, () => {
      const { container } = render(
        <Alert hasIcon type={type}>
          Hello world
        </Alert>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it(`should render correctly for isFilled (${type})`, () => {
      const { container } = render(
        <Alert isFilled type={type}>
          Hello world
        </Alert>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it(`should render correctly for isInline (${type})`, () => {
      const { container } = render(
        <Alert isInline type={type}>
          Hello world
        </Alert>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Alert use="div">Hello world</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Alert props', () => {
      const { result } = renderHook(() => Alert.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Alert>{AlertProps => <div {...AlertProps}>Hello world</div>}</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Alert.root should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { css: { root: { backgroundColor: 'red' } } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Content.root should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { Content: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Title.root should render correctly', () => {
    const { container } = render(
      <Alert title="This is a title" overrides={{ Alert: { Title: { css: { root: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Description.root should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { Description: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.IconWrapper.root should render correctly', () => {
    const { container } = render(
      <Alert hasIcon overrides={{ Alert: { IconWrapper: { css: { root: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.CloseButton.root should render correctly', () => {
    const { container } = render(
      <Alert showCloseButton overrides={{ Alert: { CloseButton: { css: { root: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Alert.root should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Content.root should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { Content: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Title.root should render correctly', () => {
    const { container } = render(<Alert title="This is a title">hello world</Alert>, {
      theme: { Alert: { Title: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Description.root should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { Description: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.IconWrapper.root should render correctly', () => {
    const { container } = render(<Alert hasIcon>hello world</Alert>, {
      theme: { Alert: { IconWrapper: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.CloseButton.root should render correctly', () => {
    const { container } = render(<Alert showCloseButton>hello world</Alert>, {
      theme: { Alert: { CloseButton: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { className: 'test' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hasIcon', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { hasIcon: true } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isFilled', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { isFilled: true } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isInline', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { isInline: true } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
