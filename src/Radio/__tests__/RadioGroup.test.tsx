import * as React from 'react';
import render from '../../_utils/tests/render';
import RadioGroup from '../RadioGroup';

it('renders correctly for a basic RadioGroup', () => {
  const { container } = render(
    <RadioGroup
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled RadioGroup', () => {
  const { container } = render(
    <RadioGroup
      disabled
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a disabled RadioGroup option', () => {
  const { container } = render(
    <RadioGroup
      name="weather"
      options={[
        { disabled: true, label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

describe('states', () => {
  ['danger', 'success', 'warning', 'primary'].forEach(state => {
    it(`renders correctly for an RadioGroup with state ${state}`, () => {
      const { container } = render(
        <RadioGroup
          state={state}
          name="weather"
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
