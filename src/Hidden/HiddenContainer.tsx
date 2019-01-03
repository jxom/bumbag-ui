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

HiddenContainer.propTypes = {
  children: PropTypes.func.isRequired,
  defaultVisible: PropTypes.bool,
  initialState: PropTypes.object
};
HiddenContainer.defaultProps = {
  defaultVisible: false,
  initialState: {}
};

export default HiddenContainer;
