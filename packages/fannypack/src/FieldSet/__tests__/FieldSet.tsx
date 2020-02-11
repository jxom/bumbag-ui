import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Box } from '../../Box';
import { FieldSet } from '../FieldSet';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <FieldSet>
        <Box />
        <Box />
      </FieldSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <FieldSet color="primary">
        <Box />
        <Box />
      </FieldSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with spacing prop', () => {
    const { container } = render(
      <FieldSet spacing="major-4">
        <Box />
        <Box />
      </FieldSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isHorizontal prop', () => {
    const { container } = render(
      <FieldSet isHorizontal>
        <Box />
        <Box />
      </FieldSet>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldSet use="div">
          <Box />
          <Box />
        </FieldSet>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with FieldSet props', () => {
      const { result } = renderHook(() => FieldSet.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldSet>
          {FieldSetProps => (
            <div {...FieldSetProps}>
              <Box />
              <Box />
            </div>
          )}
        </FieldSet>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('FieldSet.root should render correctly', () => {
    const { container } = render(
      <FieldSet>
        <Box />
        <Box />
      </FieldSet>,
      {
        // @ts-ignore
        theme: { FieldSet: { css: { root: { backgroundColor: 'red' } } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <FieldSet>
        <Box />
        <Box />
      </FieldSet>,
      {
        // @ts-ignore
        theme: { FieldSet: { defaultProps: { className: 'test', color: 'primary' } } }
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
