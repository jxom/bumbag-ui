import * as React from 'react';
import { Box, BoxThemeConfig, applyTheme } from 'bumbag';
import _throttle from 'lodash/throttle';

export default function Iframe(props) {
  const iframeRef = React.useRef();
  const wrapperRef = React.useRef();
  const [loaded, setLoaded] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [iframeWidth, setIframeWidth] = React.useState('100%');
  const [wrapperHeight, setWrapperHeight] = React.useState('');

  ////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    const iframe = iframeRef.current?.contentDocument || {};

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setWrapperHeight(`${iframe.body.clientHeight}px`);
        setIframeWidth(`${e.clientX}px`);
      });
    };
    const handleMouseMoveInWrapper = (e) => {
      requestAnimationFrame(() => {
        const wrapper = wrapperRef.current || {};
        const width = e.clientX - wrapper.offsetLeft;
        setWrapperHeight(`${iframe.body.clientHeight}px`);
        setIframeWidth(`${width}px`);
      });
    };
    const handleMouseUp = (e) => {
      setIsDragging(false);
    };

    if (isDragging) {
      iframe?.addEventListener('mousemove', handleMouseMove);
      iframe?.addEventListener('mouseup', handleMouseUp);

      document.addEventListener('mousemove', handleMouseMoveInWrapper);
      document.addEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'ew-resize';
      iframe.body.style.cursor = 'ew-resize';
    } else {
      iframe?.removeEventListener('mousemove', handleMouseMove);
      iframe?.removeEventListener('mouseup', handleMouseUp);

      document.removeEventListener('mousemove', handleMouseMoveInWrapper);
      document.removeEventListener('mouseup', handleMouseUp);
      document.body.style.cursor = 'inherit';
      iframe.body.style.cursor = 'inherit';
    }
    return () => {
      iframe?.removeEventListener('mousemove', handleMouseMove);
      iframe?.removeEventListener('mouseup', handleMouseUp);

      document.removeEventListener('mousemove', handleMouseMoveInWrapper);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging]);

  ////////////////////////////////////////////////////////////////////////////////////

  return (
    <Box
      ref={wrapperRef}
      backgroundColor="gray100"
      display="flex"
      minHeight="200px"
      height={wrapperHeight}
      width="100%"
      transition="height 100ms ease-in-out"
      {...props}
    >
      {/* TODO: Hook into playroom frame hehe  */}
      <Box ref={iframeRef} use="iframe" src="/frame" onLoad={() => setLoaded(true)} width={iframeWidth} />
      <Box
        backgroundColor="white600"
        borderLeft="1px solid"
        borderRight="1px solid"
        borderLeftColor="white800"
        borderRightColor="white800"
        cursor="ew-resize"
        display="flex"
        alignX="center"
        width="16px"
        padding="24px 4px"
        onMouseDown={(e) => setIsDragging(true)}
      >
        <Box backgroundColor="white900" height="100%" width="1px" />
        <Box backgroundColor="white900" height="100%" width="1px" marginLeft="1px" />
        <Box backgroundColor="white900" height="100%" width="1px" marginLeft="1px" />
      </Box>
    </Box>
  );
}
