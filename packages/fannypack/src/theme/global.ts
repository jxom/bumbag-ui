// @ts-ignore
import _get from 'lodash/get';

export default (overrides: any) => ({
  fontFamily:
    "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
  fontSize: '16px',
  ..._get(overrides, 'global', {})
});
