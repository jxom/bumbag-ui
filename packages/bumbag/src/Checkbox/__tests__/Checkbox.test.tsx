import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Checkbox } from '../Checkbox';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via ref', () => {
    const ref = React.createRef();
    render(<Checkbox ref={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should assign a ref via checkboxRef', () => {
    const ref = React.createRef();
    render(<Checkbox checkboxRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Checkbox backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with checked', () => {
    const { container } = render(<Checkbox checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with defaultChecked', () => {
    const { container } = render(<Checkbox defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(<Checkbox disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with indeterminate', () => {
    const { container } = render(<Checkbox indeterminate />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(<Checkbox isRequired />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const { container } = render(<Checkbox label="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(<Checkbox name="checkboxRocks" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(<Checkbox state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with value', () => {
    const { container } = render(<Checkbox value="checkboxValue" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Checkbox use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Checkbox props', () => {
      const { result } = renderHook(() => Checkbox.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Checkbox>{(CheckboxProps) => <div {...CheckboxProps}>Hello world</div>}</Checkbox>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Checkbox.base should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Icon.base should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { Icon: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Label.base should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { Label: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.HiddenInput.base should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Checkbox.base should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Icon.base should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { Icon: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Label.base should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.HiddenInput.base should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
