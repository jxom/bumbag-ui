import { createGlobalStyle, palette } from '../styled';

export default createGlobalStyle`
  html, body {
    box-sizing: border-box;
    font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    margin: 0;
    padding: 0;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    color: ${palette('text')};
    fill: ${palette('text')};
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  *:focus {
    outline: 2px solid ${palette('primary')};
    outline-offset: 2px;
}
`;
