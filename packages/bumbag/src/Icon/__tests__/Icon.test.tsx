import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { faArrowLeft, faIgloo } from '@fortawesome/free-solid-svg-icons';
import { Icon } from '../Icon';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<Icon icon="info-circle">Hello world</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <Icon color="primary" icon="info-circle">
        Hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a label', () => {
    const { container } = render(
      <Icon label="Information" icon="info-circle">
        Hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with aria-hidden', () => {
    const { container } = render(
      <Icon aria-hidden icon="info-circle">
        Hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a size', () => {
    const { container } = render(
      <Icon fontSize="400" icon="info-circle">
        Hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for direct import', () => {
    const { container } = render(
      <Icon icon={faIgloo} type="font-awesome">
        Hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for custom icon', () => {
    const calendar = {
      viewBoxWidth: 16,
      viewBoxHeight: 16,
      paths: [
        'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z',
      ],
    };

    const { container } = render(<Icon icon={calendar}>Hello world</Icon>);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Icon use="svg" icon="info-circle">
          Hello world
        </Icon>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with Icon props', () => {
      const { result } = renderHook(() => Icon.useProps({ icon: 'info-circle' }));
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <Icon icon="info-circle">{(iconProps) => <div {...iconProps}>Hello world</div>}</Icon>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('Icon.base should render correctly', () => {
    const { container } = render(
      <Icon icon="info-circle" overrides={{ Icon: { styles: { base: { backgroundColor: 'red' } } } }}>
        hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.iconSets should render correctly', () => {
    const { container } = render(
      <Icon
        icon="solid-arrow-left"
        overrides={{
          Icon: {
            iconSets: [
              {
                icons: [faArrowLeft],
                prefix: 'solid-',
                type: 'font-awesome',
              },
            ],
          },
        }}
      >
        hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.icons should render correctly', () => {
    const { container } = render(
      <Icon
        icon="calendar"
        overrides={{
          Icon: {
            icons: {
              calendar: {
                viewBoxWidth: 16,
                viewBoxHeight: 16,
                paths: [
                  'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z',
                ],
              },
            },
          },
        }}
      >
        hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.iconNames should render correctly', () => {
    const { container } = render(
      <Icon
        icon="foo"
        overrides={{
          Icon: {
            iconSets: [
              {
                icons: [faArrowLeft],
                prefix: 'solid-',
                type: 'font-awesome',
              },
            ],
            iconNames: {
              foo: 'solid-arrow-left',
            },
          },
        }}
      >
        hello world
      </Icon>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('Icon.base should render correctly', () => {
    const { container } = render(<Icon icon="info-circle">hello world</Icon>, {
      theme: { Icon: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.iconSets should render correctly', () => {
    const { container } = render(<Icon icon="solid-arrow-left">hello world</Icon>, {
      theme: {
        Icon: {
          iconSets: [
            {
              icons: [faArrowLeft],
              prefix: 'solid-',
              type: 'font-awesome',
            },
          ],
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.icons should render correctly', () => {
    const { container } = render(<Icon icon="calendar">hello world</Icon>, {
      theme: {
        Icon: {
          icons: {
            calendar: {
              viewBoxWidth: 16,
              viewBoxHeight: 16,
              paths: [
                'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z',
              ],
            },
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('Icon.iconNames should render correctly', () => {
    const { container } = render(<Icon icon="foo">hello world</Icon>, {
      theme: {
        Icon: {
          iconSets: [
            {
              icons: [faArrowLeft],
              prefix: 'solid-',
              type: 'font-awesome',
            },
          ],
          iconNames: {
            foo: 'solid-arrow-left',
          },
        },
      },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(<Icon icon="info-circle">hello world</Icon>, {
      theme: { Icon: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for color', () => {
    const { container } = render(<Icon icon="info-circle">hello world</Icon>, {
      theme: { Icon: { defaultProps: { color: 'primary' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for label', () => {
    const { container } = render(<Icon icon="info-circle">hello world</Icon>, {
      theme: { Icon: { defaultProps: { label: 'Circle' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly for fontSize', () => {
    const { container } = render(<Icon icon="info-circle">hello world</Icon>, {
      theme: { Icon: { defaultProps: { fontSize: '300' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
