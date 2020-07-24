import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Rating } from '../Rating';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Rating backgroundColor="primary" roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('hook', () => {
    it('should return with Rating props', () => {
      const { result } = renderHook(() =>
        Rating.useProps({ roverProps: { baseId: 'test', stopId: 'test' }, onChange: () => {}, value: 3 })
      );
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3}>
          {(RatingProps) => <div {...RatingProps} />}
        </Rating>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Rating.styles.base should render correctly', () => {
    const { container } = render(
      <Rating
        roverProps={{ stopId: 'test' }}
        onChange={() => {}}
        value={3}
        overrides={{ Rating: { styles: { base: { backgroundColor: 'red' } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Rating.Item.styles.base should render correctly', () => {
    const { container } = render(
      <Rating
        roverProps={{ stopId: 'test' }}
        onChange={() => {}}
        value={3}
        overrides={{ Rating: { Item: { styles: { base: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Rating.styles.base should render correctly', () => {
    const { container } = render(<Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />, {
      theme: { Rating: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Rating.Item.styles.base should render correctly', () => {
    const { container } = render(<Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />, {
      theme: { Rating: { Item: { styles: { base: { backgroundColor: 'red' } } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />, {
      theme: { Rating: { defaultProps: { className: 'test', color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for item', () => {
    const { container } = render(<Rating roverProps={{ stopId: 'test' }} onChange={() => {}} value={3} />, {
      theme: { Rating: { defaultProps: { className: 'test', color: 'primary', item: <span>x</span> } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
