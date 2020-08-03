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

  ['info', 'success', 'danger', 'warning'].forEach((type) => {
    it(`should render correctly for ${type} type`, () => {
      const { container } = render(<Alert type={type as any}>Hello world</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });

    it(`should render correctly for an icon (${type})`, () => {
      const { container } = render(
        <Alert hasIcon type={type as any}>
          Hello world
        </Alert>
      );
      expect(container.firstChild).toMatchSnapshot();
    });

    it(`should render correctly for isInline (${type})`, () => {
      const { container } = render(
        <Alert isInline type={type as any}>
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
      const { container } = render(<Alert>{(AlertProps) => <div {...AlertProps}>Hello world</div>}</Alert>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Alert.base should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { styles: { base: { backgroundColor: 'red' } } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Content.base should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { Content: { styles: { base: { backgroundColor: 'red' } } } } }}>hello world</Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Title.base should render correctly', () => {
    const { container } = render(
      <Alert title="This is a title" overrides={{ Alert: { Title: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Description.base should render correctly', () => {
    const { container } = render(
      <Alert overrides={{ Alert: { Description: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.IconWrapper.base should render correctly', () => {
    const { container } = render(
      <Alert hasIcon overrides={{ Alert: { IconWrapper: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.CloseButton.base should render correctly', () => {
    const { container } = render(
      <Alert showCloseButton overrides={{ Alert: { CloseButton: { styles: { base: { backgroundColor: 'red' } } } } }}>
        hello world
      </Alert>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Alert.base should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Content.base should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { Content: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Title.base should render correctly', () => {
    const { container } = render(<Alert title="This is a title">hello world</Alert>, {
      theme: { Alert: { Title: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.Description.base should render correctly', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { Description: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.IconWrapper.base should render correctly', () => {
    const { container } = render(<Alert hasIcon>hello world</Alert>, {
      theme: { Alert: { IconWrapper: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Alert.CloseButton.base should render correctly', () => {
    const { container } = render(<Alert showCloseButton>hello world</Alert>, {
      theme: { Alert: { CloseButton: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hasIcon', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { hasIcon: true } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for isInline', () => {
    const { container } = render(<Alert>hello world</Alert>, {
      theme: { Alert: { defaultProps: { isInline: true } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
