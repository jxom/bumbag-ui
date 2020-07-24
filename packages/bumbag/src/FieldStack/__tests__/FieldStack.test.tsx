import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { FieldStack } from '../FieldStack';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <FieldStack>
        <Box />
        <Box />
      </FieldStack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <FieldStack color="primary">
        <Box />
        <Box />
      </FieldStack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with spacing prop', () => {
    const { container } = render(
      <FieldStack spacing="major-4">
        <Box />
        <Box />
      </FieldStack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with orientation prop', () => {
    const { container } = render(
      <FieldStack orientation="horizontal">
        <Box />
        <Box />
      </FieldStack>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldStack use="div">
          <Box />
          <Box />
        </FieldStack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with FieldStack props', () => {
      const { result } = renderHook(() => FieldStack.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldStack>
          {(FieldStackProps) => (
            <div {...FieldStackProps}>
              <Box />
              <Box />
            </div>
          )}
        </FieldStack>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('FieldStack.base should render correctly', () => {
    const { container } = render(
      <FieldStack>
        <Box />
        <Box />
      </FieldStack>,
      {
        // @ts-ignore
        theme: { FieldStack: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <FieldStack>
        <Box />
        <Box />
      </FieldStack>,
      {
        // @ts-ignore
        theme: { FieldStack: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
