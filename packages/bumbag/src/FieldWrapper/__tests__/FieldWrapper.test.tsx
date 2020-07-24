import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { FieldWrapper } from '../FieldWrapper';
import { Input } from '../../Input';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(
      <FieldWrapper>
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(
      <FieldWrapper color="primary">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a description', () => {
    const { container } = render(
      <FieldWrapper description="This is a description">
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

  it('should render correctly with a tooltip', () => {
    const { container } = render(
      <FieldWrapper tooltip="This is a tooltip">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with a tooltip trigger component', () => {
    const { container } = render(
      <FieldWrapper tooltip="This is a tooltip" tooltipTriggerComponent={<div>tooltip</div>}>
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with validation text', () => {
    const { container } = render(
      <FieldWrapper validationText="This is a validation text">
        <Input />
      </FieldWrapper>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(
        <FieldWrapper use="div">
          <Input />
        </FieldWrapper>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with FieldWrapper props', () => {
      const { result } = renderHook(() => FieldWrapper.useProps({ children: <Input /> }));
      expect(result.current).toMatchSnapshot();
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
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
        // @ts-ignore
        theme: { FieldWrapper: { ValidationText: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.TooltipTrigger.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper tooltip="This is a tooltip">
        <Input />
      </FieldWrapper>,
      {
        // @ts-ignore
        theme: { FieldWrapper: { TooltipTrigger: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('FieldWrapper.TooltipPopover.base should render correctly', () => {
    const { container } = render(
      <FieldWrapper tooltip="This is a tooltip">
        <Input />
      </FieldWrapper>,
      {
        // @ts-ignore
        theme: { FieldWrapper: { TooltipPopover: { styles: { base: { backgroundColor: 'red' } } } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly for className', () => {
    const { container } = render(
      <FieldWrapper>
        <Input />
      </FieldWrapper>,
      {
        // @ts-ignore
        theme: { FieldWrapper: { defaultProps: { className: 'test', color: 'primary' } } },
      }
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
