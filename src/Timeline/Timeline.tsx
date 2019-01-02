/* eslint react/prop-types: 0 */
import * as React from 'react';
import * as PropTypes from 'prop-types';
// @ts-ignore
import _isArrayLikeObject from 'lodash/isArrayLikeObject';

import TimelineStep, { TimelineStepProps } from './TimelineStep';
import TimelineStepDetail, { TimelineStepDetailProps } from './TimelineStepDetail';
import TimelineStepHeading, { TimelineStepHeadingProps } from './TimelineStepHeading';
import { Timeline as _Timeline } from './styled';

export type LocalTimelineProps = {
  activeStep?: string;
  children: React.ReactNode;
  progressColor?: string;
};
export type TimelineProps = LocalTimelineProps;
export type TimelineComponents = {
  Step: React.FunctionComponent<TimelineStepProps>;
  StepHeading: React.FunctionComponent<TimelineStepHeadingProps>;
  StepDetail: React.FunctionComponent<TimelineStepDetailProps>;
};

export const Timeline: React.FunctionComponent<LocalTimelineProps> & TimelineComponents = ({
  activeStep,
  children,
  progressColor
}) => {
  if (!_isArrayLikeObject(children)) {
    return null;
  }
  const activeIndexStep = React.Children.toArray(children).findIndex(
    (child: any) => child.props.a11yTitleId === activeStep
  );
  return (
    <_Timeline>
      {React.Children.map(children, (child, index) => {
        const _child = child as React.ReactElement<any>;
        const color = progressColor ? progressColor : _child.props.progressColor;
        return index <= activeIndexStep
          ? React.cloneElement(_child, {
              lineColor: index < activeIndexStep ? color : undefined,
              progressColor: color || undefined
            })
          : child;
      })}
    </_Timeline>
  );
};

Timeline.Step = TimelineStep;
Timeline.StepHeading = TimelineStepHeading;
Timeline.StepDetail = TimelineStepDetail;

Timeline.propTypes = {
  activeStep: PropTypes.string,
  children: PropTypes.node.isRequired,
  progressColor: PropTypes.string
};
Timeline.defaultProps = {
  activeStep: undefined,
  progressColor: undefined
};

// @ts-ignore
const C: React.FunctionComponent<TimelineProps> & TimelineComponents = Timeline;
export default C;
