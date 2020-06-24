/* eslint-disable react/prop-types */

import * as React from 'react';
import { Box } from '../Box';

export function OutsideClickHandler(props) {
  const { children, onOutsideClick } = props;

  const childNodeRef = React.useRef();

  const handleOutsideClick = React.useCallback(
    (e) => {
      // @ts-ignore
      const isDescendantOfRoot = childNodeRef.current && childNodeRef.current.contains(e.target);
      if (!isDescendantOfRoot) {
        onOutsideClick(e);
      }
    },
    [onOutsideClick]
  );

  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('click', handleOutsideClick);
    }
    return () => {
      window.removeEventListener('click', handleOutsideClick);
    };
  });

  return <Box ref={childNodeRef}>{children}</Box>;
}

OutsideClickHandler.defaultProps = {
  children: <span />,
  onOutsideClick: () => {},
};
