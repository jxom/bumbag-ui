import * as React from 'react';
import render from '../../_utils/tests/render';
import Select from '../Select';

it('renders correctly for a basic select', () => {
  const { container } = render(
    <Select
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a select with a placeholder', () => {
  const { container } = render(
    <Select
      placeholder="Select weather..."
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled select', () => {
  const { container } = render(
    <Select
      disabled
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a select with a default value', () => {
  const { container } = render(
    <Select
      defaultValue="windy"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a full width select', () => {
  const { container } = render(
    <Select
      isFullWidth
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('sizes', () => {
  ['small', 'medium', 'large'].forEach(size => {
    it(`renders correctly for a select with size ${size}`, () => {
      const { container } = render(
        <Select
          size={size}
          options={[
            { label: 'Sunny', value: 'sunny' },
            { label: 'Windy', value: 'windy' },
            { label: 'Overcast', value: 'overcast' }
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for a select with state ${state}`, () => {
      const { container } = render(
        <Select
          state={state}
          options={[
            { label: 'Sunny', value: 'sunny' },
            { label: 'Windy', value: 'windy' },
            { label: 'Overcast', value: 'overcast' }
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
