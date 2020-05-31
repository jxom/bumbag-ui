import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ProgressBar } from '../ProgressBar';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<ProgressBar value={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<ProgressBar color="primary" value={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with maxValue', () => {
    const { container } = render(<ProgressBar maxValue={150} value={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with size', () => {
    const { container } = render(<ProgressBar size="large" value={50} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with ProgressBar props', () => {
      const { result } = renderHook(() => ProgressBar.useProps({ value: 50 }));
      expect(result.current).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('ProgressBar.root should render correctly', () => {
    const { container } = render(
      <ProgressBar value={50} overrides={{ ProgressBar: { css: { root: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('ProgressBar.Indicator.root should render correctly', () => {
    const { container } = render(
      <ProgressBar
        value={50}
        overrides={{ ProgressBar: { Indicator: { css: { root: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('ProgressBar.root should render correctly', () => {
    const { container } = render(<ProgressBar value={50} />, {
      theme: { ProgressBar: { css: { root: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('ProgressBar.Indicator.root should render correctly', () => {
    const { container } = render(<ProgressBar value={50} />, {
      theme: { ProgressBar: { Indicator: { css: { root: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<ProgressBar value={50} />, {
      theme: { ProgressBar: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
