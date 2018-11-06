import React from 'react';
import render from '../../_utils/tests/render';
import RadioGroupField from '../RadioGroupField';
import 'jest-styled-components';

it('renders correctly for a basic RadioGroupField', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="weather"
      label="Weather"
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

it('renders correctly for a disabled RadioGroupField', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="weather"
      label="Weather"
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

it('renders correctly for a disabled RadioGroupField option', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="weather"
      label="Weather"
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
    it(`renders correctly for an RadioGroupField with state ${state}`, () => {
      const { container } = render(
        <RadioGroupField
          a11yId="weather"
          label="Weather"
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

it('renders correctly for an input field with a description', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="username"
      label="Username"
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      description="Required for your fannypack"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an input field with a hint', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="username"
      label="Username"
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      hint="Must be awesome"
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for an optional input field', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="username"
      label="Username"
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      isOptional
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for a required field', () => {
  const { container } = render(
    <RadioGroupField
      a11yId="username"
      label="Username"
      name="weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      isRequired
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
