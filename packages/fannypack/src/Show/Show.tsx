import { useBreakpoint } from '../utils';

export type LocalShowProps = {
  above?: string;
  below?: string;
};
export type ShowProps = LocalShowProps;

const belowBreakpoints = {
  tablet: 'mobile',
  desktop: 'tablet',
  widescreen: 'desktop',
  fullHD: 'widescreen',
};

export function Show(props) {
  const { above, below, children } = props;

  let breakpoint;
  if (above) {
    breakpoint = `min-${above}`;
  } else if (below) {
    breakpoint = `max-${belowBreakpoints[below]}`;
  }

  const doesMatch = useBreakpoint(breakpoint);

  return doesMatch ? children : null;
}
