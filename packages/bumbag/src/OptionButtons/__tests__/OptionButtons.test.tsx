import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { OptionButtons } from '../OptionButtons';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<OptionButtons>Hello world</OptionButtons>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<OptionButtons color="primary">Hello world</OptionButtons>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<OptionButtons variant="test">hello world</OptionButtons>, {
      theme: { OptionButtons: { variants: { test: { styles: { base: { backgroundColor: 'red' } } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <OptionButtons overrides={{ OptionButtons: { styles: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </OptionButtons>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(<OptionButtons>hello world</OptionButtons>, {
      theme: { OptionButtons: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<OptionButtons>hello world</OptionButtons>, {
      // @ts-ignore
      theme: { OptionButtons: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
