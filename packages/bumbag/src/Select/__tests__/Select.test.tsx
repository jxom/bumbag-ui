import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Select } from '../Select';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <Select
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
      <Select
        ref={ref}
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />
    );
    expect(ref.current).toMatchSnapshot();
  });

  it('should assign a ref via selectRef', () => {
    const ref = React.createRef();
    render(
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select
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
      <Select
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
        <Select
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
      <Select
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
        <Select
          state={state}
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
    it('should return with Select props', () => {
      const { result } = renderHook(() =>
        Select.useProps({
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
  it('Select.base should render correctly', () => {
    const { container } = render(
      <Select
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
        overrides={{ Select: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Select.base should render correctly', () => {
    const { container } = render(
      <Select
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { Select: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <Select
        placeholder="Please select..."
        options={[
          { label: 'Sunny', value: 'sunny' },
          { label: 'Windy', value: 'windy' },
          { label: 'Overcast', value: 'overcast' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { Select: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
