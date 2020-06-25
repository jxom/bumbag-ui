/* eslint-disable react/prop-types */

import * as React from 'react';

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

  return <div ref={childNodeRef}>{children}</div>;
}

OutsideClickHandler.defaultProps = {
  children: <span />,
  onOutsideClick: () => {},
};
