import { css, cssClass, keyframes } from '../styled';
import { palette, theme, lineHeight } from '../utils';

export const defaultDashArrayValueMax = 325;
export const defaultDashOffset = 200;

export const progressDashArrayValue = 126;
export const progressDashOffset = 60;

export const SpinnerWrapper = (styleProps) => cssClass`
  line-height: ${lineHeight('none')(styleProps)};
  font-size: 20px;

  ${styleProps.size && getSizeProperties(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const Spinner = (styleProps) => cssClass`
  width: 1em;
  height: 1em;
  transform: rotate(-90deg);

  ${typeof styleProps.value === 'undefined' && getSpinnerAnimation(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const TrackCircle = (styleProps) => cssClass`
  stroke: ${palette(styleProps.trackColor || `${styleProps.color}100`, {
    dark: styleProps.trackColor || `${styleProps.color}900`,
  })(styleProps)};

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const LoaderCircle = (styleProps) => cssClass`
  stroke-dasharray: ${typeof styleProps.value === 'number' ? progressDashArrayValue : getDashArrayValue(styleProps)};
  stroke-dashoffset: ${
    typeof styleProps.value === 'number'
      ? `${progressDashArrayValue - (styleProps.value / 100) * progressDashArrayValue}px`
      : `${defaultDashOffset}px`
  };
  stroke: ${palette(styleProps.color)(styleProps)};
  transition: stroke-dashoffset 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;

export const getDashArrayValue = (styleProps) => {
  const percentageString = styleProps.perimeter.split('%')[0];
  const percentage = parseFloat(percentageString);
  const scalar = percentage / 100;
  return defaultDashOffset + scalar * (defaultDashArrayValueMax - defaultDashOffset);
};

export const getSizeProperties = (styleProps) => {
  const sizeProperties = {
    small: css`
      & svg {
        font-size: 14px;
        border-width: 2px;
      }

      & {
        ${theme(styleProps.themeKey, `styles.sizes.small`)(styleProps)};
      }
    `,
    default: css`
      & {
        ${theme(styleProps.themeKey, `styles.sizes.default`)(styleProps)};
      }
    `,
    medium: css`
      & svg {
        font-size: 28px;
      }
      & {
        ${theme(styleProps.themeKey, `styles.sizes.medium`)(styleProps)};
      }
    `,
    large: css`
      & svg {
        font-size: 36px;
      }
      & {
        ${theme(styleProps.themeKey, `styles.sizes.large`)(styleProps)};
      }
    `,
  };
  return sizeProperties[styleProps.size];
};

export const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const getSpinnerAnimation = (styleProps) => css`
  animation: ${rotate} ${styleProps.duration} infinite linear;
`;
