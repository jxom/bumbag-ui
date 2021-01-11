import { css } from '../styled';

const altitudes = {
  100: css`
    shadow-opacity: 0.15;
    shadow-radius: 4px;
    shadow-color: black;
    shadow-offset: 0px 1px;
  `,
  200: css`
    shadow-opacity: 0.15;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
  `,
  300: css`
    shadow-opacity: 0.15;
    shadow-radius: 12px;
    shadow-color: black;
    shadow-offset: 0px 3px;
  `,
  400: css`
    shadow-opacity: 0.15;
    shadow-radius: 24px;
    shadow-color: black;
    shadow-offset: 0px 6px;
  `,
};

export default {
  web: altitudes,
  ios: altitudes,
  android: altitudes,
};
