import * as React from 'react';
import { applyTheme } from 'bumbag/utils/applyTheme';
import { renderHook } from '@testing-library/react-hooks';
import { FieldWrapper } from '../FieldWrapper';
import { Input } from '../../Input';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <FieldWrapper label="Username">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <FieldWrapper label="Username" color="primary">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a description', () => {
    const { container } = render(
      <FieldWrapper label="Username" description="This is a description">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a hint', () => {
    const { container } = render(
      <FieldWrapper hint="This is a hint">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isOptional is truthy', () => {
    const { container } = render(
      <FieldWrapper isOptional>
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when isRequired is truthy', () => {
    const { container } = render(
      <FieldWrapper isRequired>
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a label', () => {
    const { container } = render(
      <FieldWrapper label="This is a label">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  ['success', 'danger', 'warning'].forEach((state) => {
    it(`should render correctly for a ${state} state`, () => {
      const { container } = render(
        <FieldWrapper state={state as any}>
          <Input />
        </FieldWrapper>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('theming', () => {
  it('FieldWrapper.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper>
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { styles: { base: { backgroundColor: 'red' } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.Label.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper label="This is a label">
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { Label: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.DescriptionText.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper description="This is a description">
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { DescriptionText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.HintText.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper hint="This is a hint">
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { HintText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.OptionalText.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper isOptional>
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { OptionalText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.RequiredText.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper isRequired>
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { RequiredText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.ValidationText.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper validationText="This is validation text">
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { ValidationText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('overrides', () => {
  it('should render correctly', () => {
    const { container } = render(
      <FieldWrapper overrides={{ FieldWrapper: { styles: { base: { backgroundColor: 'red' } } } }}>
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('applyTheme', () => {
  it('renders correctly', () => {
    const Custom = applyTheme(FieldWrapper, {
      styles: {
        base: {
          backgroundColor: 'red',
        },
      },
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
    });
    const { container } = render(
      <Custom variant="test">
        <Input />
      </Custom>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('variants', () => {
  it('styles.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper variant="test">
        <Input />
      </FieldWrapper>,
      {
        theme: {
          FieldWrapper: {
            variants: { test: { styles: { base: { backgroundColor: 'red' } } } },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <FieldWrapper
        overrides={{
          FieldWrapper: {
            variants: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: {
                  altitude: '100',
                  padding: 'major-2',
                },
              },
            },
          },
        }}
        variant="test"
      >
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(FieldWrapper, {
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
      variants: {
        test: {
          defaultProps: {
            color: 'red',
          },
        },
      },
    });
    const { container } = render(
      <FieldWrapper variant="test">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('modes', () => {
  it('should render correctly when colorMode is set globally', () => {
    const { container } = render(
      <FieldWrapper>
        <Input />
      </FieldWrapper>,
      {
        colorMode: 'test',
        theme: {
          FieldWrapper: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly when colorMode set as prop', () => {
    const { container } = render(
      <FieldWrapper colorMode="test">
        <Input />
      </FieldWrapper>,
      {
        theme: {
          FieldWrapper: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: { color: 'primaryTint' },
              },
            },
          },
        },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for overrides', () => {
    const { container } = render(
      <FieldWrapper
        overrides={{
          FieldWrapper: {
            modes: {
              test: {
                styles: { base: { backgroundColor: 'red' } },
                defaultProps: {
                  altitude: '100',
                  padding: 'major-2',
                },
              },
            },
          },
        }}
        colorMode="test"
      >
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correctly for applyTheme', () => {
    const Card = applyTheme(FieldWrapper, {
      defaultProps: {
        altitude: '100',
        padding: 'major-2',
      },
      modes: {
        test: {
          styles: { base: { backgroundColor: 'red' } },
          defaultProps: { color: 'primaryTint' },
        },
      },
    });
    const { container } = render(
      <Card colorMode="test">
        <Input />
      </Card>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for color', () => {
    const { container } = render(
      <FieldWrapper>
        <Input />
      </FieldWrapper>,
      {
        theme: { FieldWrapper: { defaultProps: { color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
