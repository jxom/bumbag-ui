import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Pagination } from '../Pagination';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Pagination numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Pagination backgroundColor="red" numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with currentPage', () => {
    const { container } = render(<Pagination currentPage={4} numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with nextText', () => {
    const { container } = render(<Pagination nextText="Next page" numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with previousText', () => {
    const { container } = render(<Pagination previousText="Prev page" numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with prepositionText', () => {
    const { container } = render(<Pagination prepositionText="out of" numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with nextButtonProps', () => {
    const { container } = render(<Pagination nextButtonProps={{ variant: 'outlined' }} numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with previousButtonProps', () => {
    const { container } = render(<Pagination previousButtonProps={{ variant: 'outlined' }} numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with selectProps', () => {
    const { container } = render(<Pagination selectProps={{ backgroundColor: 'red' }} numberOfPages={10} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('Pagination.root should render correctly', () => {
    const { container } = render(
      <Pagination numberOfPages={10} overrides={{ Pagination: { css: { root: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.Button.css.root should render correctly', () => {
    const { container } = render(
      <Pagination
        numberOfPages={10}
        overrides={{ Pagination: { Button: { css: { root: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.Select.css.root should render correctly', () => {
    const { container } = render(
      <Pagination
        numberOfPages={10}
        overrides={{ Pagination: { Select: { css: { root: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.PrepositionText.css.root should render correctly', () => {
    const { container } = render(
      <Pagination
        numberOfPages={10}
        overrides={{ Pagination: { PrepositionText: { css: { root: { backgroundColor: 'red' } } } } }}
      />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Pagination.root should render correctly', () => {
    const { container } = render(<Pagination numberOfPages={10} />, {
      theme: { Pagination: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.Button.css.root should render correctly', () => {
    const { container } = render(<Pagination numberOfPages={10} />, {
      theme: { Pagination: { Button: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.Select.css.root should render correctly', () => {
    const { container } = render(<Pagination numberOfPages={10} />, {
      theme: { Pagination: { Select: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Pagination.PrepositionText.css.root should render correctly', () => {
    const { container } = render(<Pagination numberOfPages={10} />, {
      theme: { Pagination: { PrepositionText: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Pagination numberOfPages={10} />, {
      theme: { Pagination: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
