import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { SelectField } from '../Select';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(
      <SelectField
        selectRef={ref}
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        backgroundColor="primary"
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a default value', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        defaultValue="sunny"
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with disabled', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        disabled
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isLoading', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        isLoading
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isRequired', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        isRequired
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with name', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        name="test"
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'medium', 'large'].forEach((size) => {
    it(`should render correctly for ${size} size`, () => {
      const { container } = render(
        <SelectField
          label="This is a label"
          size={size as Size}
          options={[
            { label: 'Sunny', value: 'sunny' },
            { label: 'Windy', value: 'windy' },
            { label: 'Overcast', value: 'overcast' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render placeholder correctly', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['danger', 'warning', 'success'].forEach((state) => {
    it(`should render correctly for ${state} state`, () => {
      const { container } = render(
        <SelectField
          label="This is a label"
          state={state as any}
          options={[
            { label: 'Sunny', value: 'sunny' },
            { label: 'Windy', value: 'windy' },
            { label: 'Overcast', value: 'overcast' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with SelectField props', () => {
      const { result } = renderHook(() =>
        SelectField.useProps({
          label: 'This is a label',
          options: [
            { label: 'Sunny', value: 'sunny' },
            { label: 'Windy', value: 'windy' },
            { label: 'Overcast', value: 'overcast' },
          ],
        })
      );
      expect(result.current).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('SelectField.base should render correctly', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
        overrides={{ SelectField: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('SelectField.base should render correctly', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { SelectField: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <SelectField
        label="This is a label"
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { SelectField: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
