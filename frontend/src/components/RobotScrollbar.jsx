import { useCallback, useEffect, useRef, useState } from 'react';

const MIN_THUMB_HEIGHT = 42;

export default function RobotScrollbar() {
  const trackRef = useRef(null);
  const dragRef = useRef(null);
  const [metrics, setMetrics] = useState({
    visible: false,
    thumbHeight: MIN_THUMB_HEIGHT,
    thumbTop: 0,
    maxThumbTop: 0,
    scrollRange: 0
  });

  const updateMetrics = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const trackHeight = track.clientHeight;
    const viewportHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollRange = Math.max(0, scrollHeight - viewportHeight);
    const thumbHeight = Math.min(
      trackHeight,
      Math.max(MIN_THUMB_HEIGHT, trackHeight * viewportHeight / Math.max(scrollHeight, 1))
    );
    const maxThumbTop = Math.max(0, trackHeight - thumbHeight);

    setMetrics({
      visible: scrollRange > 1,
      thumbHeight,
      thumbTop: scrollRange ? (window.scrollY / scrollRange) * maxThumbTop : 0,
      maxThumbTop,
      scrollRange
    });
  }, []);

  useEffect(() => {
    updateMetrics();
    window.addEventListener('scroll', updateMetrics, { passive: true });
    window.addEventListener('resize', updateMetrics);
    const observer = new ResizeObserver(updateMetrics);
    observer.observe(document.documentElement);
    const scrollContent = document.getElementById('app-scroll-content');
    if (scrollContent) observer.observe(scrollContent);

    return () => {
      window.removeEventListener('scroll', updateMetrics);
      window.removeEventListener('resize', updateMetrics);
      observer.disconnect();
    };
  }, [updateMetrics]);

  const scrollToTrackPosition = (clientY) => {
    const track = trackRef.current;
    if (!track || metrics.scrollRange <= 0) return;

    const rect = track.getBoundingClientRect();
    const thumbTop = Math.min(
      metrics.maxThumbTop,
      Math.max(0, clientY - rect.top - metrics.thumbHeight / 2)
    );
    window.scrollTo({
      top: (thumbTop / Math.max(metrics.maxThumbTop, 1)) * metrics.scrollRange,
      behavior: 'instant'
    });
  };

  const handlePointerDown = (event) => {
    event.preventDefault();
    const thumb = event.target.closest('.robot-scrollbar-thumb');
    if (thumb) {
      dragRef.current = { pointerY: event.clientY, scrollY: window.scrollY };
      thumb.setPointerCapture(event.pointerId);
      return;
    }
    scrollToTrackPosition(event.clientY);
  };

  const handlePointerMove = (event) => {
    if (!dragRef.current || metrics.maxThumbTop <= 0) return;
    const delta = event.clientY - dragRef.current.pointerY;
    window.scrollTo({
      top: dragRef.current.scrollY + (delta / metrics.maxThumbTop) * metrics.scrollRange,
      behavior: 'instant'
    });
  };

  const handleKeyDown = (event) => {
    const page = document.documentElement.clientHeight;
    const scrollBy = (amount) => window.scrollBy({ top: amount, behavior: 'instant' });

    if (event.key === 'ArrowDown') scrollBy(40);
    else if (event.key === 'ArrowUp') scrollBy(-40);
    else if (event.key === 'PageDown') scrollBy(page);
    else if (event.key === 'PageUp') scrollBy(-page);
    else if (event.key === 'Home') window.scrollTo({ top: 0, behavior: 'instant' });
    else if (event.key === 'End') window.scrollTo({ top: metrics.scrollRange, behavior: 'instant' });
    else return;
    event.preventDefault();
  };

  const value = metrics.scrollRange
    ? Math.round((window.scrollY / metrics.scrollRange) * 100)
    : 0;

  return (
    <div
      className="robot-scrollbar"
      aria-hidden={!metrics.visible}
      style={{ visibility: metrics.visible ? 'visible' : 'hidden' }}
    >
      <div
        ref={trackRef}
        className="robot-scrollbar-track"
        role="scrollbar"
        aria-label="Page scroll position"
        aria-controls="app-scroll-content"
        aria-orientation="vertical"
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={value}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={() => { dragRef.current = null; }}
        onPointerCancel={() => { dragRef.current = null; }}
        onKeyDown={handleKeyDown}
      >
        <span
          className="robot-scrollbar-thumb"
          style={{ height: metrics.thumbHeight, transform: `translate(-50%, ${metrics.thumbTop}px)` }}
          aria-hidden="true"
        >
          🤖
        </span>
      </div>
    </div>
  );
}
