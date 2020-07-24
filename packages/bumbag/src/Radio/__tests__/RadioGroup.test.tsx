import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { RadioGroup } from '../RadioGroup';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <RadioGroup
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
      <RadioGroup
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
      <RadioGroup
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
      <RadioGroup
        disabled
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
      <RadioGroup
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
      <RadioGroup
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
        <RadioGroup
          state={state}
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
        <RadioGroup
          use="div"
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
    it('should return with RadioGroup props', () => {
      const { result } = renderHook(() =>
        RadioGroup.useProps({
          name: 'weather',
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
        <RadioGroup
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        >
          {(RadioGroupProps) => <div {...RadioGroupProps}>Hello world</div>}
        </RadioGroup>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('RadioGroup.base should render correctly', () => {
    const { container } = render(
      <RadioGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
        overrides={{ RadioGroup: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('RadioGroup.base should render correctly', () => {
    const { container } = render(
      <RadioGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { RadioGroup: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <RadioGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { RadioGroup: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
