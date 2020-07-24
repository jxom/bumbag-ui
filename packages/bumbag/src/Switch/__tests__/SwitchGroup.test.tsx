import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { SwitchGroup } from '../SwitchGroup';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <SwitchGroup
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
      <SwitchGroup
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
      <SwitchGroup
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
      <SwitchGroup
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
      <SwitchGroup
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
      <SwitchGroup
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
      <SwitchGroup
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
        <SwitchGroup
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
        <SwitchGroup
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
    it('should return with SwitchGroup props', () => {
      const { result } = renderHook(() =>
        SwitchGroup.useProps({
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
        <SwitchGroup
          name="weather"
          options={[
            { label: 'Hello', value: 'world' },
            { label: 'This is', value: 'me' },
          ]}
        >
          {(SwitchGroupProps) => <div {...SwitchGroupProps}>Hello world</div>}
        </SwitchGroup>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('SwitchGroup.base should render correctly', () => {
    const { container } = render(
      <SwitchGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
        overrides={{ SwitchGroup: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('SwitchGroup.base should render correctly', () => {
    const { container } = render(
      <SwitchGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { SwitchGroup: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <SwitchGroup
        name="weather"
        options={[
          { label: 'Hello', value: 'world' },
          { label: 'This is', value: 'me' },
        ]}
      />,
      {
        // @ts-ignore
        theme: { SwitchGroup: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
