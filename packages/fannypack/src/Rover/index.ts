import * as styles from './styles';
import { Rover as _Rover } from './Rover';
import { useRoverState } from './RoverState';

export * from './Rover';
export * from './RoverState';
export const Rover = Object.assign(_Rover, { useState: useRoverState });
export { styles as roverStyles };
