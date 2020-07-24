import * as React from 'react';
import { renderHook } from '@testing-library/react-hooks';
import { ActionButtons } from '../ActionButtons';
import { Button } from '../../Button';
import render from '../../utils/_tests/render';

describe('props', () => {
  it('should render correctly', () => {
    const { container } = render(<ActionButtons />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with CSS props', () => {
    const { container } = render(<ActionButtons position="absolute" top="0" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with addon buttons', () => {
    const { container } = render(<ActionButtons addonButtons={<Button>Addon</Button>} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with cancel props', () => {
    const { container } = render(<ActionButtons cancelProps={{ disabled: true, isLoading: true }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with cancel text', () => {
    const { container } = render(<ActionButtons cancelText="Close" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with isLoading', () => {
    const { container } = render(<ActionButtons isLoading />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with onClickSubmit', () => {
    const { container } = render(<ActionButtons onClickSubmit={jest.fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with onClickCancel', () => {
    const { container } = render(<ActionButtons onClickCancel={jest.fn} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with palette', () => {
    const { container } = render(<ActionButtons palette="secondary" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with submitProps', () => {
    const { container } = render(<ActionButtons submitProps={{ disabled: true, isLoading: true }} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with submitText', () => {
    const { container } = render(<ActionButtons submitText="Save" />);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with type', () => {
    const { container } = render(<ActionButtons type="button" />);
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('composition', () => {
  describe('as', () => {
    it('should render correctly', () => {
      const { container } = render(<ActionButtons use="div" />);
      expect(container.firstChild).toMatchSnapshot();
    });
  });

  describe('hook', () => {
    it('should return with ActionButtons props', () => {
      const { result } = renderHook(() => ActionButtons.useProps());
      expect(result.current).toMatchSnapshot();
    });
  });

  describe('render props', () => {
    it('should render correctly', () => {
      const { container } = render(
        <ActionButtons>{(actionButtonsProps) => <div {...actionButtonsProps} />}</ActionButtons>
      );
      expect(container.firstChild).toMatchSnapshot();
    });
  });
});

describe('overrides', () => {
  it('ActionButtons.base should render correctly', () => {
    const { container } = render(
      <ActionButtons overrides={{ ActionButtons: { styles: { base: { backgroundColor: 'red' } } } }} />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('theming', () => {
  it('ActionButtons.base should render correctly', () => {
    const { container } = render(<ActionButtons />, {
      theme: { ActionButtons: { styles: { base: { backgroundColor: 'red' } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});

describe('defaultProps', () => {
  it('should render correctly', () => {
    const { container } = render(<ActionButtons />, {
      theme: { ActionButtons: { defaultProps: { className: 'test' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with addon buttons', () => {
    const { container } = render(<ActionButtons />, {
      theme: { ActionButtons: { defaultProps: { addonButtons: <Button>Addon</Button> } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with cancel props', () => {
    const { container } = render(<ActionButtons />, {
      theme: { ActionButtons: { defaultProps: { cancelProps: { disabled: true, isLoading: true } } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render correctly with cancel text', () => {
    const { container } = render(<ActionButtons />, {
      theme: { ActionButtons: { defaultProps: { cancelText: 'Close' } } },
    });
    expect(container.firstChild).toMatchSnapshot();
  });
});
