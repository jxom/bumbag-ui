import styled from 'reakit/styled';
import Box from 'reakit/Box';
import { theme } from 'styled-tools';

export default styled(Box)`
  abbr& {
    border-bottom: 1px dotted;
    cursor: help;
    text-decoration: none;
  }

  i& {
    font-style: italic;
  }

  kbd& {
    background: #454d5d;
    border-radius: 0.1rem;
    color: #fff;
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

  ${theme('fannypack.Text.base')};
`;
