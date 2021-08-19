import { css, generateColorVariants } from 'bumbag';
import { faAppleAlt } from '@fortawesome/free-solid-svg-icons/faAppleAlt';
import { faUniversalAccess } from '@fortawesome/free-solid-svg-icons/faUniversalAccess';
import { faFillDrip } from '@fortawesome/free-solid-svg-icons/faFillDrip';
import { faCubes } from '@fortawesome/free-solid-svg-icons/faCubes';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons/faArrowDown';
import { faBars } from '@fortawesome/free-solid-svg-icons/faBars';
import { faIgloo } from '@fortawesome/free-solid-svg-icons/faIgloo';
import { faSearch } from '@fortawesome/free-solid-svg-icons/faSearch';
import { faHeart } from '@fortawesome/free-solid-svg-icons/faHeart';
import { faBook } from '@fortawesome/free-solid-svg-icons/faBook';
import { faClipboard } from '@fortawesome/free-solid-svg-icons/faClipboard';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons/faChevronDown';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons/faChevronRight';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons/faChevronUp';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons/faThumbsUp';
import { faCog } from '@fortawesome/free-solid-svg-icons/faCog';
import { faFrown } from '@fortawesome/free-solid-svg-icons/faFrown';
import { faMoon } from '@fortawesome/free-solid-svg-icons/faMoon';
import { faSun } from '@fortawesome/free-solid-svg-icons/faSun';
import { faPen } from '@fortawesome/free-solid-svg-icons/faPen';
import { faLongArrowAltRight } from '@fortawesome/free-solid-svg-icons/faLongArrowAltRight';
import { faFile } from '@fortawesome/free-solid-svg-icons/faFile';
import { faMeh } from '@fortawesome/free-solid-svg-icons/faMeh';
import { faComments } from '@fortawesome/free-solid-svg-icons/faComments';
import { faUser } from '@fortawesome/free-solid-svg-icons/faUser';
import { faHandPaper } from '@fortawesome/free-solid-svg-icons/faHandPaper';
import { faFileSignature } from '@fortawesome/free-solid-svg-icons/faFileSignature';
import { faShare } from '@fortawesome/free-solid-svg-icons/faShare';
import { faSmile } from '@fortawesome/free-solid-svg-icons/faSmile';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons/faExternalLinkAlt';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons/faTrashAlt';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons/faMapMarkerAlt';
import { faComment } from '@fortawesome/free-solid-svg-icons/faComment';
import { faPencilRuler } from '@fortawesome/free-solid-svg-icons/faPencilRuler';
import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord';
import { faCogs } from '@fortawesome/free-solid-svg-icons/faCogs';
import { faUsers } from '@fortawesome/free-solid-svg-icons/faUsers';
import { faLock } from '@fortawesome/free-solid-svg-icons/faLock';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons/faExclamationTriangle';
import { faLongArrowRight } from './faLongArrowRight';

export default {
  global: {
    styles: {
      base: css`
        html,
        body {
          overflow-x: hidden;
        }

        a.anchor {
          opacity: 0;
          position: absolute;
          left: -0.7em;
        }

        .bb-Heading:hover > a.anchor,
        a.anchor:hover {
          opacity: 1;
        }

        & body form {
          min-width: 320px !important;
        }
      `,
    },
  },
  breakpoints: {
    tablet: 800,
  },
  palette: {
    ...generateColorVariants({
      paletteKey: 'discord',
      backgroundColor: 'white',
      color: '#7289da',
    }),
    ...generateColorVariants({
      paletteKey: 'twitter',
      backgroundColor: 'white',
      color: '#1da1f2',
    }),
  },
  Button: {
    variants: {
      cta: {
        defaultProps: {
          fontWeight: '600',
          paddingY: 'minor-5',
          paddingX: 'minor-9',
          size: 'large',
        },
      },
    },
  },
  icons: {
    icons: {
      calendar: {
        viewBoxWidth: 16,
        viewBoxHeight: 16,
        paths: [
          'M11 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1s-1 .4-1 1v1c0 .5.4 1 1 1zm3-2h-1v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H6v1c0 1.1-.9 2-2 2s-2-.9-2-2V1H1c-.6 0-1 .5-1 1v12c0 .6.4 1 1 1h13c.6 0 1-.4 1-1V2c0-.6-.5-1-1-1zM5 13H2v-3h3v3zm0-4H2V6h3v3zm4 4H6v-3h3v3zm0-4H6V6h3v3zm4 4h-3v-3h3v3zm0-4h-3V6h3v3zM4 3c.6 0 1-.5 1-1V1c0-.6-.4-1-1-1S3 .4 3 1v1c0 .5.4 1 1 1z',
        ],
      },
    },
    iconSets: [
      {
        icons: [
          faAppleAlt,
          faUniversalAccess,
          faFillDrip,
          faCubes,
          faArrowLeft,
          faArrowRight,
          faArrowDown,
          faBars,
          faCog,
          faIgloo,
          faBook,
          faHeart,
          faSearch,
          faGithub,
          faTwitter,
          faClipboard,
          faChevronDown,
          faChevronRight,
          faChevronUp,
          faThumbsUp,
          faMoon,
          faSun,
          faPen,
          faLongArrowAltRight,
          faFile,
          faComments,
          faUser,
          faHandPaper,
          faShare,
          faFileSignature,
          faExternalLinkAlt,
          faTrashAlt,
          faSmile,
          faFrown,
          faMeh,
          faMapMarkerAlt,
          faDiscord,
          faComment,
          faPencilRuler,
          faLongArrowRight,
          faCogs,
          faUsers,
          faExclamationTriangle,
          faLock,
        ],
        prefix: 'solid-',
        type: 'font-awesome',
      },
    ],
  },
};
