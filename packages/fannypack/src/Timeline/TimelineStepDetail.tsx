/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
import { ParagraphProps as ReakitParagraphProps } from 'reakit/ts/Paragraph/Paragraph';

import { TimelineStepDetail as _TimelineStepDetail } from './styled';

export type LocalTimelineStepDetailProps = {
  children: React.ReactNode;
  color?: string;
};
export type TimelineStepDetailProps = ReakitParagraphProps & LocalTimelineStepDetailProps;

const TimelineStepDetail: React.FunctionComponent<LocalTimelineStepDetailProps> = ({ children, color, ...props }) => (
  <_TimelineStepDetail color={color} {...props}>
    {children}
  </_TimelineStepDetail>
);

export const timelineStepDetailPropTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string
};
TimelineStepDetail.propTypes = timelineStepDetailPropTypes;

export const timelineStepDetailDefaultProps = {
  color: undefined
};
TimelineStepDetail.defaultProps = timelineStepDetailDefaultProps;

const C: React.FunctionComponent<TimelineStepDetailProps> = TimelineStepDetail;
export default C;
