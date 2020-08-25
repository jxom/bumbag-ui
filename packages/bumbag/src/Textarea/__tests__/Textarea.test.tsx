import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Textarea } from '../Textarea';
import render from '../../utils/_tests/render';
import { Size } from '../../types';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Textarea />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should assign a ref', () => {
    const ref = React.createRef();
    render(<Textarea ref={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should assign a ref via textareaRef', () => {
    const ref = React.createRef();
    render(<Textarea textareaRef={ref} />);
    expect(ref.current).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Textarea backgroundColor="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when disabled', () => {
    const { container } = render(<Textarea disabled />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    ['small', 'medium', 'large'].forEach((size) => {
      it(`should render ${size} correctly`, () => {
        const { container } = render(<Textarea size={size as Size} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('states', () => {
    ['danger', 'success', 'warning', 'primary'].forEach((state) => {
      it(`should render ${state} correctly`, () => {
        const { container } = render(<Textarea state={state} />);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('overrides', () => {
  it('Textarea.base should render correctly', () => {
    const { container } = render(
      <Textarea overrides={{ Textarea: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Textarea.Wrapper.base should render correctly', () => {
    const { container } = render(
      <Textarea overrides={{ Textarea: { Wrapper: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Textarea.placeholder.base should render correctly', () => {
    const { container } = render(
      <Textarea overrides={{ Textarea: { styles: { placeholder: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Textarea.base should render correctly', () => {
    const { container } = render(<Textarea />, {
      // @ts-ignore
      theme: { Textarea: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Textarea.Wrapper.base should render correctly', () => {
    const { container } = render(<Textarea />, {
      // @ts-ignore
      theme: { Textarea: { Wrapper: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Textarea.placeholder.base should render correctly', () => {
    const { container } = render(<Textarea />, {
      // @ts-ignore
      theme: { Textarea: { styles: { placeholder: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Textarea />, {
      // @ts-ignore
      theme: {
        Textarea: { defaultProps: { className: 'test', color: 'primary' } },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
