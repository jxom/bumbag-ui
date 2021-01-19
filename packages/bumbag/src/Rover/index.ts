import * as styles from './Rover.styles';
import { Rover as _Rover } from './Rover';
import { useRoverState, RoverState, useRoverContext } from './RoverState';

export * from './Rover';
export * from './RoverState';
export const Rover = Object.assign(_Rover, { useContext: useRoverContext, useState: useRoverState, State: RoverState });
export { styles as roverStyles };
