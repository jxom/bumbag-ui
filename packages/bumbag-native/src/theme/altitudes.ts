import { css } from '../styled';

const altitudes = {
  100: css`
    shadow-opacity: 0.15;
    shadow-radius: 4px;
    shadow-color: black;
    shadow-offset: 0px 1px;
    elevation: 8;
  `,
  200: css`
    shadow-opacity: 0.15;
    shadow-radius: 8px;
    shadow-color: black;
    shadow-offset: 0px 2px;
    elevation: 16;
  `,
  300: css`
    shadow-opacity: 0.15;
    shadow-radius: 12px;
    shadow-color: black;
    shadow-offset: 0px 3px;
    elevation: 24;
  `,
  400: css`
    shadow-opacity: 0.15;
    shadow-radius: 24px;
    shadow-color: black;
    shadow-offset: 0px 6px;
    elevation: 48;
  `,
};

export default {
  web: altitudes,
  ios: altitudes,
  android: altitudes,
};
