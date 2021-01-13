import { Dimensions } from 'react-native';
import { theme } from './theme';

export function breakpoint(direction, values) {
  return (props) => {
    const breakpoints = theme('breakpoints')(props);
    const directionBreakpoints = breakpoints[direction];
    const size = Dimensions.get('window')[direction];

    const directionBreakpointsArray = Object.entries(directionBreakpoints).reverse();

    let hasMatched;
    let value = values.default;
    directionBreakpointsArray.forEach(([breakpoint, upperLimit], index) => {
      if (hasMatched) return;

      const lowerLimit = directionBreakpointsArray?.[index + 1]?.[1] || 0;

      // 'md', 'lg', etc takes first precedence
      if (size <= upperLimit && size > lowerLimit) {
        const matchedValue = values[breakpoint];
        value = matchedValue || value;
        hasMatched = Boolean(matchedValue);
      }

      // 'min-md', 'min-lg', etc takes second precedence
      if (size > lowerLimit) {
        const matcher = `min-${breakpoint}`;
        const matchedValue = values[matcher];
        value = matchedValue || value;
        hasMatched = Boolean(matchedValue);
      }

      // 'max-md', 'max-lg', etc takes third precedence
      if (size <= upperLimit) {
        const matcher = `max-${breakpoint}`;
        value = values[matcher] || value;
      }
    });

    return value;
  };
}
