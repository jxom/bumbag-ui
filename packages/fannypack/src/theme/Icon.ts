// @ts-ignore
import _get from 'lodash/get';
import * as faInfoCircle from '@fortawesome/free-solid-svg-icons/faInfoCircle';
import * as faExclamationTriangle from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import * as faCheckCircle from '@fortawesome/free-solid-svg-icons/faCheckCircle';
import * as faExclamationCircle from '@fortawesome/free-solid-svg-icons/faExclamationCircle';
import * as faQuestionCircle from '@fortawesome/free-solid-svg-icons/faQuestionCircle';
import * as faTimes from '@fortawesome/free-solid-svg-icons/faTimes';
import * as faSearch from '@fortawesome/free-solid-svg-icons/faSearch';

import { parseIcons, Opts as ParseIconsOpts, Icons } from '../utils/parseIcons';

const parseOverrideIcons = (
  icons: Array<{ icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }>
) =>
  icons.reduce(
    (currentIcons: {}, iconSet: { icons: Icons; type: ParseIconsOpts['type']; prefix: ParseIconsOpts['prefix'] }) => ({
      ...currentIcons,
      ...parseIcons(iconSet.icons, { type: iconSet.type, prefix: iconSet.prefix })
    }),
    {}
  );

export default (overrides: any) => ({
  ...overrides,
  icons: {
    ...parseIcons(
      [faInfoCircle, faExclamationTriangle, faCheckCircle, faExclamationCircle, faQuestionCircle, faTimes, faSearch],
      {
        type: 'font-awesome-standalone'
      }
    ),
    ...parseOverrideIcons(_get(overrides, 'iconSets', [])),
    ..._get(overrides, 'icons', {})
  },
  iconNames: {
    info: 'info-circle',
    warning: 'exclamation-triangle',
    success: 'check-circle',
    danger: 'exclamation-circle',
    ..._get(overrides, 'iconNames', {})
  }
});
