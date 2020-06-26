import { useBreakpoint } from '../utils';

export type LocalHideProps = {
  above?: string;
  below?: string;
};
export type HideProps = LocalHideProps;

const belowBreakpoints = {
  tablet: 'mobile',
  desktop: 'tablet',
  widescreen: 'desktop',
  fullHD: 'widescreen',
};

export function Hide(props) {
  const { above, below, children } = props;

  let breakpoint;
  if (above) {
    breakpoint = `min-${above}`;
  } else if (below) {
    breakpoint = `max-${belowBreakpoints[below]}`;
  }

  const doesMatch = useBreakpoint(breakpoint);

  return doesMatch ? null : children;
}
