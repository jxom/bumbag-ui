import * as React from 'react';
import * as PropTypes from 'prop-types';
import { Box } from '../primitives';
import styled from '../styled';
import { ButtonProps as ReakitButtonProps } from 'reakit/ts/Button/Button';

import { Omit, ButtonType, buttonTypePropType, Size, sizePropType } from '../types';
import { LocalIconProps, iconPropTypes } from '../Icon/Icon';
import Spinner from '../Spinner';
import _Button, { ButtonIcon } from './styled';

const Text = styled.span`
  align-items: center;
  display: inline-flex;
`;
export const SpinnerWrapper = styled(Box)`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;

  & + ${Text} {
    opacity: 0;
  }
`;

export type LocalButtonProps = {
  /** Specifies that the button should have focus when the page loads. */
  autoFocus?: boolean;
  children: React.ReactNode;
  className?: string;
  /** Makes the button disabled. The user is unable to interact with the button. */
  disabled?: boolean;
  id?: string;
  /** Icon that appears on the right side of the button. */
  iconAfter?: LocalIconProps['icon'];
  /** Icon that appears on the left side of the button. */
  iconBefore?: LocalIconProps['icon'];
  /** Adds a loading indicator to the button. */
  isLoading?: boolean;
  /** Makes the button not interactable. */
  isStatic?: boolean;
  kind?: ButtonType;
  palette?: string;
  size?: Size;
  type?: string;
};
export type ButtonProps = LocalButtonProps & Omit<ReakitButtonProps, 'size'>;

export const Button: React.FunctionComponent<LocalButtonProps> = ({
  children,
  className,
  disabled,
  iconAfter,
  iconBefore,
  isLoading,
  isStatic,
  kind,
  palette,
  size,
  ...props
}) => {
  const child = (
    <React.Fragment>
      {/*
        // @ts-ignore */}
      {iconBefore && <ButtonIcon a11yHidden icon={iconBefore} isBefore />}
      {children}
      {/*
        // @ts-ignore */}
      {iconAfter && <ButtonIcon a11yHidden icon={iconAfter} isAfter />}
    </React.Fragment>
  );
  return (
    <_Button
      className={className}
      disabled={disabled}
      isLoading={isLoading}
      isStatic={isStatic}
      kind={kind}
      palette={palette}
      styledSize={size}
      {...props}
    >
      {isLoading ? (
        <React.Fragment>
          <SpinnerWrapper>
            <Spinner color={kind === 'default' ? `${palette || ''}Inverted` : palette} />
          </SpinnerWrapper>
          <Text>{child}</Text>
        </React.Fragment>
      ) : (
        child
      )}
    </_Button>
  );
};

export const buttonPropTypes = {
  autoFocus: PropTypes.bool,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  iconAfter: iconPropTypes['icon'],
  iconBefore: iconPropTypes['icon'],
  isLoading: PropTypes.bool,
  isStatic: PropTypes.bool,
  kind: buttonTypePropType,
  palette: PropTypes.string,
  size: sizePropType,
  type: PropTypes.string
};
Button.propTypes = buttonPropTypes;

export const buttonDefaultProps: Partial<LocalButtonProps> = {
  autoFocus: false,
  className: undefined,
  disabled: false,
  id: undefined,
  iconAfter: undefined,
  iconBefore: undefined,
  isLoading: false,
  isStatic: false,
  kind: 'default',
  palette: 'default',
  size: 'default',
  type: 'button'
};
Button.defaultProps = buttonDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<ButtonProps> = Button;
export default C;
