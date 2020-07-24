import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Radio } from '../Radio';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Radio />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via radioRef', () => {
    const ref = React.createRef();
    render(<Radio radioRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Radio backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with checked', () => {
    const { container } = render(<Radio checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with defaultChecked', () => {
    const { container } = render(<Radio defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(<Radio disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(<Radio isRequired />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const { container } = render(<Radio label="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(<Radio name="checkboxRocks" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(<Radio state={state} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with value', () => {
    const { container } = render(<Radio value="checkboxValue" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Radio use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Radio props', () => {
      const { result } = renderHook(() => Radio.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Radio>{(RadioProps) => <div {...RadioProps}>Hello world</div>}</Radio>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Radio.base should render correctly', () => {
    const { container } = render(<Radio overrides={{ Radio: { styles: { base: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.Icon.base should render correctly', () => {
    const { container } = render(
      <Radio overrides={{ Radio: { Icon: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.Label.base should render correctly', () => {
    const { container } = render(
      <Radio overrides={{ Radio: { Label: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.HiddenInput.base should render correctly', () => {
    const { container } = render(
      <Radio overrides={{ Radio: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Radio.base should render correctly', () => {
    const { container } = render(<Radio />, {
      // @ts-ignore
      theme: { Radio: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.Icon.base should render correctly', () => {
    const { container } = render(<Radio />, {
      // @ts-ignore
      theme: { Radio: { Icon: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.Label.base should render correctly', () => {
    const { container } = render(<Radio />, {
      // @ts-ignore
      theme: { Radio: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Radio.HiddenInput.base should render correctly', () => {
    const { container } = render(<Radio />, {
      // @ts-ignore
      theme: { Radio: { HiddenInput: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Radio />, {
      // @ts-ignore
      theme: { Radio: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
