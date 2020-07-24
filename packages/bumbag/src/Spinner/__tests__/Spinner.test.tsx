import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Spinner } from '../Spinner';
import { Size } from '../../types';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Spinner />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for color', () => {
    const { container } = render(<Spinner color="primary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for duration', () => {
    const { container } = render(<Spinner duration="1s" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for hasTrack', () => {
    const { container } = render(<Spinner hasTrack />);
    expect(container.firstChild).toMatchSnapshot();
  });

  ['small', 'default', 'medium', 'large'].forEach((size) => {
    it(`should render correctly for size ${size}`, () => {
      const { container } = render(<Spinner size={size as Size} />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  it('should render correctly for perimeter', () => {
    const { container } = render(<Spinner perimeter="30%" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for value', () => {
    const { container } = render(<Spinner value={25} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('use', () => {
    it('should render correctly', () => {
      const { container } = render(<Spinner use="p" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Spinner props', () => {
      const { result } = renderHook(() => Spinner.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Spinner>{(spinnerProps) => <div {...spinnerProps} />}</Spinner>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Spinner.base should render correctly', () => {
    const { container } = render(<Spinner overrides={{ Spinner: { styles: { base: { backgroundColor: 'red' } } } }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.vector.base should render correctly', () => {
    const { container } = render(
      <Spinner overrides={{ Spinner: { vector: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.trackCircle.base should render correctly', () => {
    const { container } = render(
      <Spinner overrides={{ Spinner: { trackCircle: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.loaderCircle.base should render correctly', () => {
    const { container } = render(
      <Spinner overrides={{ Spinner: { loaderCircle: { styles: { base: { backgroundColor: 'red' } } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Spinner.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.vector.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { vector: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.trackCircle.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { trackCircle: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Spinner.loaderCircle.base should render correctly', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { loaderCircle: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for duration', () => {
    const { container } = render(<Spinner />, {
      theme: { Spinner: { defaultProps: { duration: '2s' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
