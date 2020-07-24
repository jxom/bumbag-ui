import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { SwitchField } from '../Switch';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<SwitchField />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via switchRef', () => {
    const ref = React.createRef();
    const { container } = render(<SwitchField switchRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<SwitchField backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with checked', () => {
    const { container } = render(<SwitchField checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with defaultChecked', () => {
    const { container } = render(<SwitchField defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(<SwitchField disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(<SwitchField isRequired />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const { container } = render(<SwitchField label="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a switchLabel', () => {
    const { container } = render(<SwitchField switchLabel="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(<SwitchField name="SwitchFieldRocks" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(<SwitchField state={state as any} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with value', () => {
    const { container } = render(<SwitchField value="SwitchFieldValue" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<SwitchField use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with SwitchField props', () => {
      const { result } = renderHook(() => SwitchField.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <SwitchField>{(SwitchFieldProps) => <div {...SwitchFieldProps}>Hello world</div>}</SwitchField>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('SwitchField.base should render correctly', () => {
    const { container } = render(
      <SwitchField overrides={{ SwitchField: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('SwitchField.base should render correctly', () => {
    const { container } = render(<SwitchField />, {
      // @ts-ignore
      theme: { SwitchField: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<SwitchField />, {
      // @ts-ignore
      theme: { SwitchField: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
