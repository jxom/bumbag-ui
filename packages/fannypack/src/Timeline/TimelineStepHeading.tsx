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
  <_TimelineStepHeading color={color} {...props}>
    {children}
  </_TimelineStepHeading>
);

export const timelineStepHeadingPropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};
TimelineStepHeading.propTypes = timelineStepHeadingPropTypes;

export const timelineStepHeadingDefaultProps = {
  color: undefined
}
TimelineStepHeading.defaultProps = timelineStepHeadingDefaultPRops;

const C: React.FunctionComponent<TimelineStepHeadingProps> = TimelineStepHeading;
export default C;
