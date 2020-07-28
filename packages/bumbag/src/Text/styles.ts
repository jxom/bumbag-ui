import { cssClass } from '../styled';
import { theme } from '../utils';

export const Text = (styleProps) => cssClass`
  line-height: 1.2;

  abbr& {
    border-bottom: 1px dotted;
    cursor: help;
    text-decoration: none;
  }

  code& {
    font-family: monospace;
  }

  i& {
    font-style: italic;
  }

  kbd& {
    background: #454d5d;
    border-radius: 0.1rem;
    color: #fff;
    fill: #fff;
    padding: 0.1rem 0.2rem;
  }

  mark& {
    background: #ffe9b3;
    border-radius: 0.1rem;
    padding: 0.1rem 0.2rem;
  }

  strong& {
    font-weight: bold;
  }

  sub&,
  sup& {
    font-size: 0.8em;
    vertical-align: baseline;
  }

  ins&,
  u& {
    text-decoration-skip: ink edges;
  }

  i&,
  cite&,
  var&,
  em& {
    font-style: italic;
  }

  kbd&,
  pre&,
  samp& {
    font-family: 'SF Mono', 'Segoe UI Mono', 'Roboto Mono', Menlo, Courier, monospace;
  }

  & .bb-Icon {
    vertical-align: -0.125em;
  }

  & {
    ${theme(styleProps.themeKey, `styles.base`)(styleProps)};
  }
`;
