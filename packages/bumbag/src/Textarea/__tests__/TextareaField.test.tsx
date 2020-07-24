import * as React from 'react';
import { TextareaField } from '../Textarea';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<TextareaField />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref via textareaRef', () => {
    const ref = React.createRef();
    render(<TextareaField textareaRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<TextareaField backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container } = render(<TextareaField disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(`should render ${size} correctly`, () => {
        const { container } = render(<TextareaField size={size as Size} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('states', () => {
    ['danger', 'success', 'warning', 'primary'].forEach((state) => {
      it(`should render ${state} correctly`, () => {
        const { container } = render(<TextareaField state={state as any} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('overrides', () => {
  it('TextareaField.base should render correctly', () => {
    const { container } = render(
      <TextareaField overrides={{ TextareaField: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('TextareaField.base should render correctly', () => {
    const { container } = render(<TextareaField />, {
      // @ts-ignore
      theme: { TextareaField: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<TextareaField />, {
      // @ts-ignore
      theme: {
        TextareaField: { defaultProps: { className: 'test', color: 'primary' } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
