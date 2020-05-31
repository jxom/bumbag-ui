import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Checkbox } from '../Checkbox';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Checkbox />);
    expect(container.firstChild).toMatchSnapshot();
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
  it('Checkbox.root should render correctly', () => {
    const { container } = render(<Checkbox overrides={{ Checkbox: { css: { root: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Icon.root should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { Icon: { css: { root: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Label.root should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { Label: { css: { root: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.HiddenInput.root should render correctly', () => {
    const { container } = render(
      <Checkbox overrides={{ Checkbox: { HiddenInput: { css: { root: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Checkbox.root should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Icon.root should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { Icon: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.Label.root should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { Label: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Checkbox.HiddenInput.root should render correctly', () => {
    const { container } = render(<Checkbox />, {
      // @ts-ignore
      theme: { Checkbox: { HiddenInput: { css: { root: { backgroundColor: 'red' } } } } },
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
