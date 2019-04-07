import * as React from 'react';
import * as PropTypes from 'prop-types';
import ReakitHidden from 'reakit/Hidden';

export type HiddenContainerProps = {
  children: ({ isVisible }: { isVisible: boolean }) => React.ReactNode;
  defaultVisible?: boolean;
  initialState?: Object;
};

export const HiddenContainer: React.FunctionComponent<HiddenContainerProps> = ({
  children,
  defaultVisible,
  initialState,
  ...props
}) => (
  <ReakitHidden.Container initialState={{ visible: defaultVisible, ...initialState }} {...props}>
    {({ visible, ...rest }: { visible: boolean }) => children({ isVisible: visible, ...rest })}
  </ReakitHidden.Container>
);

export const hiddenContainerPropTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
HiddenContainer.propTypes = hiddenContainerPropTypes;

export const hiddenContainerDefaultProps = {
  defaultVisible: false,
  initialState: {}
};
HiddenContainer.defaultProps = hiddenContainerDefaultProps;

export default HiddenContainer;
