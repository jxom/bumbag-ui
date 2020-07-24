import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Switch } from '../Switch';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Switch />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    const { container } = render(<Switch ref={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should assign a ref via switchRef', () => {
    const ref = React.createRef();
    const { container } = render(<Switch switchRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Switch backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with checked', () => {
    const { container } = render(<Switch checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with defaultChecked', () => {
    const { container } = render(<Switch defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(<Switch disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(<Switch isRequired />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const { container } = render(<Switch label="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(<Switch name="checkboxRocks" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(<Switch state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with value', () => {
    const { container } = render(<Switch value="checkboxValue" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Switch use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Switch props', () => {
      const { result } = renderHook(() => Switch.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Switch>{(SwitchProps) => <div {...SwitchProps}>Hello world</div>}</Switch>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Switch.base should render correctly', () => {
    const { container } = render(<Switch overrides={{ Switch: { styles: { base: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.Icon.base should render correctly', () => {
    const { container } = render(
      <Switch overrides={{ Switch: { Icon: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.Label.base should render correctly', () => {
    const { container } = render(
      <Switch overrides={{ Switch: { Label: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.HiddenInput.base should render correctly', () => {
    const { container } = render(
      <Switch overrides={{ Switch: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Switch.base should render correctly', () => {
    const { container } = render(<Switch />, {
      // @ts-ignore
      theme: { Switch: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.Icon.base should render correctly', () => {
    const { container } = render(<Switch />, {
      // @ts-ignore
      theme: { Switch: { Icon: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.Label.base should render correctly', () => {
    const { container } = render(<Switch />, {
      // @ts-ignore
      theme: { Switch: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Switch.HiddenInput.base should render correctly', () => {
    const { container } = render(<Switch />, {
      // @ts-ignore
      theme: { Switch: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Switch />, {
      // @ts-ignore
      theme: { Switch: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
