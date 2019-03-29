import { theme, palette } from 'styled-tools';

import styled, { space } from '../styled';
import { Box } from '../primitives';
import { TimelineStepProps, TimelineRowProps } from './TimelineStep';
import { TimelineStepDetailProps } from './TimelineStepDetail';
import { TimelineStepHeadingProps } from './TimelineStepHeading';
// @ts-ignore
import Paragraph from '../Paragraph';

export const Timeline = styled(Box)`
  & {
    ${theme('fannypack.Timeline.base')};
  }
`;

export const TimelineRow = styled(Box)<TimelineRowProps>`
  display: flex;
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  &::before {
    content: '';
    border: 1px solid ${props => palette(props.lineColor || 'textTint', props.lineColor)};
    position: absolute;
    height: 100%;
    left: ${space(1)}rem;
    margin-top: ${space(5)}rem;
  }

  &:last-child::before {
    border: 0;
  }
`;

export const TimelineStep = styled(Box)<TimelineStepProps>`
  & {
    ${theme('fannypack.Timeline.Step.base')};
  }
`;

export const TimelineBullet = styled(Box)`
  border-radius: 50%;
  display: inline-flex;
  flex-shrink: 0;
  height: 0.625rem;
  width: 0.625rem;
  margin-top: ${space(4)}rem;
  margin-right: ${space(2)}rem;
  z-index: 1;

  & {
    ${theme('fannypack.Timeline.Bullet.base')};
  }
`;

export const TimelineStepHeading = styled(Paragraph)<TimelineStepHeadingProps>`
  margin-top: ${space(2)}rem;
  margin-bottom: ${space(1)}rem;
  line-height: 1.5rem;
  color: ${props => props.color || palette('text')};
  font-weight: ${theme('fannypack.fontWeights.semibold')};

  &:not(:last-child) {
    margin-top: ${space(2)}rem;
    margin-bottom: ${space(1)}rem;
  }

  & {
    ${theme('fannypack.Timeline.StepHeading.base')};
  }
`;

export const TimelineStepDetail = styled(Box)<TimelineStepDetailProps>`
  color: ${props => props.color || palette('text')};

  & {
    ${theme('fannypack.Timeline.StepDetail.base')};
  }
`;
