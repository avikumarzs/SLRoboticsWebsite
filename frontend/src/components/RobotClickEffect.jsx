import { useEffect, useRef, useState } from 'react';

export default function RobotClickEffect() {
  const [clicks, setClicks] = useState([]);
  const nextId = useRef(0);

  useEffect(() => {
    const timers = new Set();
    const handleClick = (event) => {
      const target = event.target instanceof Element ? event.target : null;
      const rect = target?.getBoundingClientRect();
      const x = event.detail === 0 && rect ? rect.left + rect.width / 2 : event.clientX;
      const y = event.detail === 0 && rect ? rect.top + rect.height / 2 : event.clientY;
      const id = nextId.current++;

      setClicks((current) => [...current, { id, x, y }]);
      const timer = window.setTimeout(() => {
        setClicks((current) => current.filter((click) => click.id !== id));
        timers.delete(timer);
      }, 800);
      timers.add(timer);
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
      timers.forEach(window.clearTimeout);
      timers.clear();
    };
  }, []);

  return (
    <div className="robot-click-layer" aria-hidden="true">
      {clicks.map(({ id, x, y }) => (
        <span key={id} className="robot-click-pop" style={{ left: x, top: y }}>🤖</span>
      ))}
    </div>
  );
}
