import React from 'react';
import render from '../../_utils/tests/render';
import SelectField from '../SelectField';
it('renders correctly for a basic select', () => {
  const { container } = render(
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
        <SelectField
          a11yId="weather"
          label="Weather"
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
        <SelectField
          a11yId="weather"
          label="Weather"
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

it('renders correctly for an input field with a description', () => {
  const { container } = render(
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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
    <SelectField
      a11yId="weather"
      label="Weather"
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

it('renders correctly for addon component (before)', () => {
  const { container } = render(
    <SelectField
      a11yId="weather"
      label="Weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      addonBefore={<div>test</div>}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for addon component (after)', () => {
  const { container } = render(
    <SelectField
      a11yId="weather"
      label="Weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      addonAfter={<div>test</div>}
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});

it('renders correctly for addon component (vertical)', () => {
  const { container } = render(
    <SelectField
      a11yId="weather"
      label="Weather"
      options={[
        { label: 'Sunny', value: 'sunny' },
        { label: 'Windy', value: 'windy' },
        { label: 'Overcast', value: 'overcast' }
      ]}
      addonBefore={<div>test</div>}
      isVertical
    />
  );
  expect(container.firstChild).toMatchSnapshot();
});
