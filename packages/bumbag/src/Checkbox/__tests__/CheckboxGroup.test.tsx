import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { CheckboxGroup } from '../CheckboxGroup';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <CheckboxGroup
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
      <CheckboxGroup
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
      <CheckboxGroup
        defaultValue={['world']}
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for default value (array)', () => {
    const { container } = render(
      <CheckboxGroup
        defaultValue={['world', 'me']}
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
      <CheckboxGroup
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
      <CheckboxGroup
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
      <CheckboxGroup
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
        <CheckboxGroup
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
        <CheckboxGroup
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
    it('should return with CheckboxGroup props', () => {
      const { result } = renderHook(() =>
        CheckboxGroup.useProps({
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
        <CheckboxGroup
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        >
          {(CheckboxGroupProps) => <div {...CheckboxGroupProps}>Hello world</div>}
        </CheckboxGroup>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('CheckboxGroup.base should render correctly', () => {
    const { container } = render(
      <CheckboxGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
        overrides={{ CheckboxGroup: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('CheckboxGroup.base should render correctly', () => {
    const { container } = render(
      <CheckboxGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { CheckboxGroup: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <CheckboxGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { CheckboxGroup: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
