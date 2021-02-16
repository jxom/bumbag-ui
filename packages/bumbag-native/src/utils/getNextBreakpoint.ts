import { theme as getTheme } from './theme';

export function getNextBreakpoint(breakpoint, { direction, theme }) {
  let breakpointSets = getTheme('breakpoints')({ theme })[direction];
  if (!Array.isArray(breakpointSets)) {
    breakpointSets = [breakpointSets];
  }

  let aboveBreakpoint;
  breakpointSets.forEach((breakpoints) => {
    const breakpointNames = Object.keys(breakpoints);
    breakpointNames.forEach((bp, i) => {
      if (bp === breakpoint) {
        aboveBreakpoint = breakpointNames[i + 1];
      }
    });
  });

  return aboveBreakpoint;
}
