import * as React from 'react';
import * as PropTypes from 'prop-types';

import { LocalCardCardProps, CardCardProps, cardCardPropTypes, cardCardDefaultProps } from '../Card/CardCard';
import { Box, Flex } from '../primitives';
// @ts-ignore
import { useUniqueId } from '../uniqueId';
import _Callout, { CalloutContent, CalloutFooter, CalloutHeader, CalloutIcon, CalloutTitle } from './styled';
import CalloutClose, { CalloutCloseProps, calloutClosePropTypes } from './CalloutClose';

export type LocalCalloutProps = LocalCardCardProps & {
  a11yDescriptionId?: string;
  a11yTitleId?: string;
  children: React.ReactNode;
  className?: string;
  closeButtonProps?: CalloutCloseProps;
  footer?: string | React.ReactElement<any>;
  hasTint?: boolean;
  icon?: string;
  onClickClose?: CalloutCloseProps['onClickClose'];
  showCloseButton?: boolean;
  title?: string | React.ReactElement<any>;
  type?: string;
};
export type CalloutProps = CardCardProps & LocalCalloutProps;

export const Callout: React.FunctionComponent<LocalCalloutProps> = ({
  a11yDescriptionId: _a11yDescriptionId,
  a11yTitleId: _a11yTitleId,
  children,
  closeButtonProps,
  footer,
  hasTint,
  icon,
  onClickClose,
  showCloseButton,
  title,
  type,
  ...props
}) => {
  const titleId = useUniqueId('Callout');
  const descriptionId = useUniqueId('Callout');
  const a11yDescriptionId = _a11yDescriptionId || descriptionId;
  const a11yTitleId = _a11yTitleId || titleId;
  return (
    <_Callout a11yDescriptionId={a11yDescriptionId} a11yTitleId={a11yTitleId} hasTint={hasTint} type={type} {...props}>
      <Flex>
        {(type || icon) && (
          <CalloutTitle>
            {/*
              // @ts-ignore */}
            <CalloutIcon icon={(type || icon) as string} color={type} />
          </CalloutTitle>
        )}
        <Box>
          {title && (
            <CalloutHeader>
              {typeof title === 'string' ? <CalloutTitle id={a11yTitleId}>{title}</CalloutTitle> : title}
            </CalloutHeader>
          )}
          <CalloutContent id={a11yDescriptionId}>{children}</CalloutContent>
          {footer && <CalloutFooter>{footer}</CalloutFooter>}
        </Box>
      </Flex>
      {showCloseButton && <CalloutClose onClickClose={onClickClose} {...closeButtonProps} />}
    </_Callout>
  );
};

export const calloutPropTypes = {
  a11yDescriptionId: PropTypes.string,
  a11yTitleId: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  closeButtonProps: PropTypes.shape(calloutClosePropTypes),
  footer: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  hasTint: PropTypes.bool,
  icon: PropTypes.string,
  onClickClose: PropTypes.func,
  showCloseButton: PropTypes.bool,
  title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  type: PropTypes.string,
  ...cardCardPropTypes
};
Callout.propTypes = calloutPropTypes;

export const calloutDefaultProps = {
  ...cardCardDefaultProps,
  a11yDescriptionId: undefined,
  a11yTitleId: undefined,
  children: undefined,
  className: undefined,
  closeButtonProps: {},
  footer: undefined,
  hasTint: false,
  icon: undefined,
  onClickClose: undefined,
  showCloseButton: false,
  title: undefined,
  type: undefined
};
Callout.defaultProps = calloutDefaultProps;

// @ts-ignore
const C: React.FunctionComponent<CalloutProps> = Callout;
export default C;
