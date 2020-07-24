import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { RadioGroupField } from '../RadioGroup';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for default value', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        defaultValue="world"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for disabled fields', () => {
    const { container } = render(
      <RadioGroupField
        disabled
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for disabled field', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world', disabled: true },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for horizontal fields', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        orientation="horizontal"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for state ${state}`, () => {
      const { container } = render(
        <RadioGroupField
          label="Test label"
          state={state as any}
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <RadioGroupField
          use="div"
          label="Test label"
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with RadioGroupField props', () => {
      const { result } = renderHook(() =>
        RadioGroupField.useProps({
          name: 'weather',
          label: 'Test label',
          options: [
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ],
        })
      );
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <RadioGroupField
          label="Test label"
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        >
          {(RadioGroupFieldProps) => <div {...RadioGroupFieldProps}>Hello world</div>}
        </RadioGroupField>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('RadioGroupField.base should render correctly', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
        overrides={{ RadioGroupField: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('RadioGroupField.base should render correctly', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { RadioGroupField: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <RadioGroupField
        label="Test label"
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { RadioGroupField: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
