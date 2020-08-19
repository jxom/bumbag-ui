import * as React from 'react';
import { Box } from 'bumbag';
import { LivePreview } from 'react-live';
import { transform } from '@babel/standalone';

export const transformCode = (code: string) => {
  try {
    return transform(`<Box padding="major-2">${code.trim() || ''}</Box>`, {
      presets: ['react'],
    }).code;
  } catch (err) {
    return '';
  }
};

function Iframe(props: any) {
  const { code, isIframe, ...restProps } = props;

  const iframeRef = React.useRef();
  const wrapperRef = React.useRef();
  const [loaded, setLoaded] = React.useState(false);
  const [isDragging, setIsDragging] = React.useState(false);
  const [iframeWidth, setIframeWidth] = React.useState('100%');
  const [wrapperHeight, setWrapperHeight] = React.useState('200px');

  ////////////////////////////////////////////////////////////////////////////////////

  const renderCode = transformCode(code);
  const frameUrl = React.useMemo(() => {
    if (typeof window !== 'undefined') {
      const baseUrl = window.location.href.includes('localhost') ? 'http://localhost:9000/' : '/';
      if (window.location.href.includes('localhost')) {
        return `${baseUrl}frame.html#?code=${encodeURIComponent(renderCode)}`;
      }
      return `${baseUrl}playroom/frame.html#?code=${encodeURIComponent(renderCode)}`;
    }
  }, [renderCode]);

  ////////////////////////////////////////////////////////////////////////////////////

  React.useEffect(() => {
    const location = iframeRef.current?.contentWindow?.location;
    if (location) {
      location.replace(frameUrl);
    }
  }, [frameUrl]);

  React.useEffect(() => {
    const iframe = iframeRef.current?.contentDocument;

    if (!isIframe || !iframe) return;

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setIframeWidth(`${e.clientX}px`);
      });
    };
    const handleMouseMoveInWrapper = (e) => {
      requestAnimationFrame(() => {
        const wrapper = wrapperRef.current || {};
        const width = e.clientX - wrapper.offsetLeft;
        setIframeWidth(`${width}px`);
      });
    };
    const handleMouseUp = (e) => {
      setIsDragging(false);
    };

    if (isDragging && isIframe) {
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
  }, [isDragging, isIframe]);

  const handleIframeLoad = React.useCallback(() => {
    const iframe = iframeRef.current?.contentDocument || {};
    const resizeObserver = new ResizeObserver(() => {
      setWrapperHeight(`${iframe.body.clientHeight}px`);
    });
    setTimeout(() => {
      setLoaded(true);
      setWrapperHeight(`${iframe.body?.clientHeight}px`);
      if (iframe.body) {
        resizeObserver.observe(iframe.body);
      }
    }, 1000);
  }, []);

  ////////////////////////////////////////////////////////////////////////////////////

  if (!isIframe) {
    return <Box use={LivePreview} {...restProps} />;
  }
  return (
    <Box
      ref={wrapperRef}
      backgroundColor={loaded ? 'gray100' : 'white'}
      display="flex"
      minHeight="200px"
      height={wrapperHeight}
      width="100%"
      transition="height 100ms ease-in-out, background-color 100ms"
      {...restProps}
    >
      <Box
        ref={iframeRef}
        use="iframe"
        opacity={loaded ? '1' : '0'}
        transition="opacity 100ms"
        onLoad={handleIframeLoad}
        width={iframeWidth}
      />
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

export default Iframe;
