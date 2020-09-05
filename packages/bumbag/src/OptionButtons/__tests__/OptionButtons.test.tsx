import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { OptionButtons } from '../OptionButtons';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <OptionButtons
        color="primary"
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for disabled', () => {
    const { container } = render(
      <OptionButtons
        disabled
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for disabled option', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { disabled: true, label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['primary', 'secondary', 'warning', 'danger', 'success', 'info'].forEach((color) => {
    it(`should render correctly for palette (${color})`, () => {
      const { container } = render(
        <OptionButtons
          palette={color}
          type="radio"
          options={[
            { label: 'Desktop', value: 'desktop' },
            { disabled: true, label: 'Tablet', value: 'tablet' },
            { label: 'Mobile', value: 'mobile' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['warning', 'danger', 'success', 'info'].forEach((color) => {
    it(`should render correctly for state (${color})`, () => {
      const { container } = render(
        <OptionButtons
          state={color}
          type="radio"
          options={[
            { label: 'Desktop', value: 'desktop' },
            { disabled: true, label: 'Tablet', value: 'tablet' },
            { label: 'Mobile', value: 'mobile' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  ['small', 'medium', 'large'].forEach((size) => {
    it(`should render correctly for size (${size})`, () => {
      const { container } = render(
        <OptionButtons
          size={size}
          type="radio"
          options={[
            { label: 'Desktop', value: 'desktop' },
            { disabled: true, label: 'Tablet', value: 'tablet' },
            { label: 'Mobile', value: 'mobile' },
          ]}
        />
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        variant="test"
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        variant="test"
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { Button: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        overrides={{ OptionButtons: { styles: { base: { backgroundColor: 'red' } } } }}
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        overrides={{ OptionButtons: { Button: { styles: { base: { backgroundColor: 'red' } } } } }}
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Wrapper.styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        overrides={{ OptionButtons: { Wrapper: { styles: { base: { backgroundColor: 'red' } } } } }}
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Button.styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { Button: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Wrapper.styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { Button: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <OptionButtons
        type="radio"
        options={[
          { label: 'Desktop', value: 'desktop' },
          { label: 'Tablet', value: 'tablet' },
          { label: 'Mobile', value: 'mobile' },
        ]}
      />,
      {
        theme: { OptionButtons: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
