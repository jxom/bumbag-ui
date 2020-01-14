import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { FieldWrapper } from '../FieldWrapper';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<FieldWrapper>Hello world</FieldWrapper>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<FieldWrapper color="primary">Hello world</FieldWrapper>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<FieldWrapper use="p">Hello world</FieldWrapper>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with FieldWrapper props', () => {
      const { result } = renderHook(() => FieldWrapper.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldWrapper>{FieldWrapperProps => <div {...FieldWrapperProps}>Hello world</div>}</FieldWrapper>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('FieldWrapper.base should render correctly', () => {
    const { container } = render(<FieldWrapper>hello world</FieldWrapper>, {
      // @ts-ignore
      theme: { FieldWrapper: { base: { backgroundColor: 'red' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<FieldWrapper>hello world</FieldWrapper>, {
      // @ts-ignore
      theme: { FieldWrapper: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
