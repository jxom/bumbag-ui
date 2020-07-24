import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { InputField } from '../Input';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<InputField />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via inputRef', () => {
    const ref = React.createRef();
    render(<InputField inputRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<InputField backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container } = render(<InputField disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when loading', () => {
    const { container } = render(<InputField isLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('types', () => {
    ['number', 'tel', 'date', 'email', 'password', 'search', 'time', 'url'].forEach((type) => {
      it(`should render ${type} correctly`, () => {
        const { container } = render(<InputField type={type} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('sizes', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(`should render ${size} correctly`, () => {
        const { container } = render(<InputField size={size as Size} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('states', () => {
    ['danger', 'success', 'warning', 'primary'].forEach((state) => {
      it(`should render ${state} correctly`, () => {
        const { container } = render(<InputField state={state as any} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('overrides', () => {
  it('InputField.base should render correctly', () => {
    const { container } = render(
      <InputField overrides={{ InputField: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('InputField.base should render correctly', () => {
    const { container } = render(<InputField />, {
      // @ts-ignore
      theme: { InputField: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<InputField />, {
      // @ts-ignore
      theme: {
        InputField: { defaultProps: { className: 'test', color: 'primary' } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
