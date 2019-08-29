import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Button } from '../../Button';
import { Blockquote } from '../../Blockquote';
import { Hidden } from '../index';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    function Component() {
      const hidden = Hidden.useState({ unstable_hiddenId: 'test' });
      return (
        <div>
          <Hidden.Disclosure {...hidden}>Toggle</Hidden.Disclosure>
          <Hidden {...hidden}>Hello world</Hidden>
        </div>
      );
    }
    const { container } = render(<Component />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Hidden.useState({ unstable_hiddenId: 'test' });
        return (
          <div>
            <Hidden.Disclosure use={Button} {...hidden}>
              Toggle
            </Hidden.Disclosure>
            <Hidden use={Blockquote} {...hidden}>
              Hello world
            </Hidden>
          </div>
        );
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Hidden props', () => {
      const { result } = renderHook(() => {
        const hidden = Hidden.useState({ unstable_hiddenId: 'test' });
        return Hidden.useProps(hidden);
      });
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      function Component() {
        const hidden = Hidden.useState({ unstable_hiddenId: 'test' });
        return <Hidden {...hidden}>{HiddenProps => <div {...HiddenProps}>Hello world</div>}</Hidden>;
      }
      const { container } = render(<Component />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});
