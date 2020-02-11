import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { Tag } from '../Tag';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Tag>Hello world</Tag>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<Tag color="primary">Hello world</Tag>);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('palette', () => {
    ['primary', 'secondary', 'danger', 'warning', 'info', 'success'].forEach((palette: any) => {
      it(`should render a ${palette} tag correctly`, () => {
        const { container } = render(<Tag palette={palette}>Hello world</Tag>);
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  describe('size', () => {
    ['small', 'default', 'medium', 'large'].forEach((size: any) => {
      it(`should render a ${size} tag correctly`, () => {
        const { container } = render(<Tag size={size}>Hello world</Tag>);
        expect(container.firstChild).toMatchSnapshot();
      });

      it('should render correctly with overrides', () => {
        const { container } = render(
          <Tag
            size={size}
            overrides={{
              Tag: { css: { sizes: { [size]: { backgroundColor: 'red' } } } }
            }}
          >
            Hello world
          </Tag>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });

  it('should render a tag with onRemove correctly', () => {
    const { container } = render(<Tag onRemove={() => {}}>Hello world</Tag>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<Tag use="div">Hello world</Tag>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Tag props', () => {
      const { result } = renderHook(() => Tag.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(<Tag>{TagProps => <div {...TagProps}>Hello world</div>}</Tag>);
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('Tag.root should render correctly', () => {
    const { container } = render(<Tag>hello world</Tag>, {
      // @ts-ignore
      theme: { Tag: { css: { root: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.Content.root should render correctly', () => {
    const { container } = render(<Tag>hello world</Tag>, {
      // @ts-ignore
      theme: { Tag: { Content: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.Close.root should render correctly', () => {
    const { container } = render(<Tag onRemove={() => {}}>hello world</Tag>, {
      // @ts-ignore
      theme: { Tag: { Close: { css: { root: { backgroundColor: 'red' } } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.outlined.root should render correctly', () => {
    const { container } = render(<Tag kind="outlined">hello world</Tag>, {
      // @ts-ignore
      theme: { Tag: { css: { outlined: { backgroundColor: 'red' } } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    ['small', 'default', 'medium', 'large'].forEach((size: any) => {
      it(`Tag.sizes.${size}.root should render correctly`, () => {
        const { container } = render(<Tag size={size}>hello world</Tag>, {
          // @ts-ignore
          theme: { Tag: { css: { sizes: { [size]: { backgroundColor: 'red' } } } } }
        });
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('overrides', () => {
  it('Tag.root should render correctly', () => {
    const { container } = render(
      <Tag overrides={{ Tag: { css: { root: { backgroundColor: 'red' } } } }}>hello world</Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.Content.root should render correctly', () => {
    const { container } = render(
      <Tag overrides={{ Tag: { Content: { css: { root: { backgroundColor: 'red' } } } } }}>hello world</Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.Close.root should render correctly', () => {
    const { container } = render(
      <Tag onRemove={() => {}} overrides={{ Tag: { Close: { css: { root: { backgroundColor: 'red' } } } } }}>
        hello world
      </Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Tag.outlined.root should render correctly', () => {
    const { container } = render(
      <Tag kind="outlined" overrides={{ Tag: { css: { outlined: { backgroundColor: 'red' } } } }}>
        hello world
      </Tag>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  describe('sizes', () => {
    ['small', 'default', 'medium', 'large'].forEach((size: any) => {
      it(`Tag.sizes.${size}.root should render correctly`, () => {
        const { container } = render(
          <Tag overrides={{ Tag: { css: { sizes: { [size]: { backgroundColor: 'red' } } } } }} size={size}>
            hello world
          </Tag>
        );
        expect(container.firstChild).toMatchSnapshot();
      });
    });
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Tag>hello world</Tag>, {
      // @ts-ignore
      theme: { Tag: { defaultProps: { className: 'test', color: 'primary' } } }
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
