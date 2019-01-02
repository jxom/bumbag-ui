/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ParagraphProps as ReakitParagraphProps } from 'reakit/ts/Paragraph/Paragraph';

import { TimelineStepHeading as _TimelineStepHeading } from './styled';

export type LocalTimelineStepHeadingProps = {
  children: React.ReactNode;
  color?: string;
};
export type TimelineStepHeadingProps = ReakitParagraphProps & LocalTimelineStepHeadingProps;

const TimelineStepHeading: React.FunctionComponent<LocalTimelineStepHeadingProps> = ({ children, color, ...props }) => (
  <_TimelineStepHeading color={color} fontWeight="semibold" {...props}>
    {children}
  </_TimelineStepHeading>
);

TimelineStepHeading.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};

TimelineStepHeading.defaultProps = {
  color: undefined
};

const C: React.FunctionComponent<TimelineStepHeadingProps> = TimelineStepHeading;
export default C;
