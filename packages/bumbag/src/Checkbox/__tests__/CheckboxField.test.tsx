import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { CheckboxField } from '../Checkbox';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<CheckboxField />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via checkboxRef', () => {
    const ref = React.createRef();
    render(<CheckboxField checkboxRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<CheckboxField backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with checked', () => {
    const { container } = render(<CheckboxField checked onChange={() => {}} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with defaultChecked', () => {
    const { container } = render(<CheckboxField defaultChecked />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(<CheckboxField disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with indeterminate', () => {
    const { container } = render(<CheckboxField indeterminate />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(<CheckboxField isRequired />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with label', () => {
    const { container } = render(<CheckboxField label="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a checkboxLabel', () => {
    const { container } = render(<CheckboxField checkboxLabel="Hello world" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(<CheckboxField name="CheckboxFieldRocks" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(<CheckboxField state={state as any} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly with value', () => {
    const { container } = render(<CheckboxField value="CheckboxFieldValue" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<CheckboxField use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with CheckboxField props', () => {
      const { result } = renderHook(() => CheckboxField.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <CheckboxField>{(CheckboxFieldProps) => <div {...CheckboxFieldProps}>Hello world</div>}</CheckboxField>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('CheckboxField.base should render correctly', () => {
    const { container } = render(
      <CheckboxField overrides={{ CheckboxField: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('CheckboxField.base should render correctly', () => {
    const { container } = render(<CheckboxField />, {
      // @ts-ignore
      theme: { CheckboxField: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<CheckboxField />, {
      // @ts-ignore
      theme: { CheckboxField: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
