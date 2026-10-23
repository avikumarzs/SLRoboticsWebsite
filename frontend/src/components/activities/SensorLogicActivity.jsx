import { useEffect, useRef, useState } from 'react';
import { markActivityComplete } from '../../utils/progressManager';

const START_DISTANCE = 100;
const MIN_THRESHOLD = 10;
const MAX_THRESHOLD = 60;
const DISTANCE_STEP = 2;

const RESPONSES = [
  {
    id: 'stop',
    icon: '🛑',
    title: 'Stop',
    description: 'Brake and wait before the obstacle.',
    outcome: 'The rover brakes and waits at a safe distance.'
  },
  {
    id: 'turn',
    icon: '↪️',
    title: 'Turn away',
    description: 'Stop, then steer around the obstacle.',
    outcome: 'The rover stops and turns to steer around the obstacle.'
  },
  {
    id: 'reverse',
    icon: '↩️',
    title: 'Back up',
    description: 'Reverse briefly, then stop.',
    outcome: 'The rover reverses briefly, then stops.'
  }
];

export default function SensorLogicActivity({ grade = 7, onCompleted }) {
  const [threshold, setThreshold] = useState(30);
  const [responseId, setResponseId] = useState('stop');
  const [distance, setDistance] = useState(START_DISTANCE);
  const [isRunning, setIsRunning] = useState(false);
  const [result, setResult] = useState(null);
  const [runCount, setRunCount] = useState(0);
  const [roverTurn, setRoverTurn] = useState(0);
  const intervalRef = useRef(null);
  const settingsRef = useRef({ threshold, responseId });
  const distanceRef = useRef(distance);

  const resetRun = () => {
    setIsRunning(false);
    distanceRef.current = START_DISTANCE;
    setDistance(START_DISTANCE);
    setResult(null);
    setRoverTurn(0);
    if (intervalRef.current) {
      window.clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  const startRun = () => {
    if (result) {
      distanceRef.current = START_DISTANCE;
      setDistance(START_DISTANCE);
      setResult(null);
      setRoverTurn(0);
    } else {
      distanceRef.current = distance;
    }
    setIsRunning(true);
  };

  useEffect(() => {
    settingsRef.current = { threshold, responseId };
  }, [threshold, responseId]);

  useEffect(() => {
    distanceRef.current = distance;
  }, [distance]);

  useEffect(() => {
    if (!isRunning) return undefined;

    intervalRef.current = window.setInterval(() => {
      const nextDistance = Math.max(0, distanceRef.current - DISTANCE_STEP);
      distanceRef.current = nextDistance;
      setDistance(nextDistance);

      if (nextDistance <= settingsRef.current.threshold) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
        setIsRunning(false);

        const response = RESPONSES.find((item) => item.id === settingsRef.current.responseId) || RESPONSES[0];
        const responseDistance = response.id === 'reverse'
          ? Math.min(START_DISTANCE, nextDistance + 12)
          : nextDistance;
        distanceRef.current = responseDistance;
        setDistance(responseDistance);
        setRoverTurn(response.id === 'turn' ? -90 : 0);
        setResult({
          distance: nextDistance,
          threshold: settingsRef.current.threshold,
          response
        });
        setRunCount((count) => count + 1);
        if (grade !== null) {
          markActivityComplete(grade, 'sensor-logic');
        }
        onCompleted?.('sensor-logic');
      }
    }, 180);

    return () => {
      if (intervalRef.current) {
        window.clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    };
  }, [isRunning, grade, onCompleted]);

  useEffect(() => () => {
    if (intervalRef.current) window.clearInterval(intervalRef.current);
  }, []);

  const activeResponse = RESPONSES.find((item) => item.id === responseId) || RESPONSES[0];
  const isTriggerActive = distance <= threshold;
  const roverPosition = 8 + ((START_DISTANCE - distance) / START_DISTANCE) * 72;
  const thresholdPosition = 8 + ((START_DISTANCE - threshold) / START_DISTANCE) * 72;

  return (
    <section className="sensor-lab" aria-labelledby="sensor-lab-title">
      <header className="sensor-lab-header">
        <div>
          <span className="sensor-lab-eyebrow">SENSE · DECIDE · ACT</span>
          <h2 id="sensor-lab-title">Teach a rover when to react</h2>
          <p>Set a safe stopping distance and choose what the rover should do when it detects an obstacle.</p>
        </div>
        <div className={`sensor-lab-status${isRunning ? ' is-live' : ''}`} aria-live="polite">
          <span />
          {isRunning ? 'RUNNING TEST' : result ? 'TEST COMPLETE' : 'READY TO TEST'}
        </div>
      </header>

      <div className="sensor-lab-rule" aria-live="polite">
        <span className="sensor-rule-label">YOUR ROBOT RULE</span>
        <code>
          IF distance ≤ <strong>{threshold} cm</strong>
          <span className="sensor-rule-arrow">→</span>
          <strong>{activeResponse.title.toLowerCase()}</strong>
        </code>
      </div>

      <div className="sensor-lab-main">
        <div className="sensor-track-panel">
          <div className="sensor-panel-heading">
            <div>
              <span className="sensor-panel-kicker">LIVE SIMULATION</span>
              <h3>Obstacle approach</h3>
            </div>
            <span className="sensor-units">DISTANCE · CM</span>
          </div>

          <div
            className={`sensor-track${isRunning ? ' is-running' : ''}${isTriggerActive ? ' is-triggered' : ''}`}
            role="img"
            aria-label={`Rover is ${distance} centimeters from the obstacle. Trigger is set to ${threshold} centimeters.`}
          >
            <div className="sensor-track-grid" />
            <div className="sensor-track-label sensor-track-label-far">100 cm</div>
            <div className="sensor-track-label sensor-track-label-near">0 cm</div>
            <div className="sensor-threshold-marker" style={{ left: `${thresholdPosition}%` }}>
              <span>TRIGGER · {threshold} cm</span>
            </div>
            <div className="sensor-obstacle" aria-hidden="true">
              <span>OBSTACLE</span>
              <span className="sensor-obstacle-face">▥</span>
            </div>
            <div
              className="sensor-beam"
              style={{ left: `${roverPosition}%`, width: `${Math.max(0, 88 - roverPosition)}%` }}
            />
            <div className="sensor-rover"             style={{ left: `${roverPosition}%`, transform: `translate(-50%, -50%) rotate(${roverTurn}deg)` }}>
              <span className="sensor-rover-icon" aria-hidden="true">🤖</span>
              <span className="sensor-rover-label">ROVER</span>
            </div>
            <div className="sensor-track-baseline" />
          </div>

          <div className="sensor-readings">
            <div className="sensor-reading-primary">
              <span>LIVE SENSOR READING</span>
              <strong className={isTriggerActive ? 'is-near' : ''}>{distance}<small> cm</small></strong>
            </div>
            <div className={`sensor-branch-reading${isTriggerActive ? ' is-true' : ''}`}>
              <span>CONDITION</span>
              <strong>{distance} ≤ {threshold} cm</strong>
              <em>{isTriggerActive ? 'TRUE · response triggered' : 'FALSE · keep moving'}</em>
            </div>
          </div>

          <div className="sensor-run-controls">
            <button type="button" className="sensor-run-button" onClick={isRunning ? () => setIsRunning(false) : startRun}>
              {isRunning ? 'Ⅱ  Pause run' : result ? '↻  Run again' : distance < START_DISTANCE ? '▶  Continue simulation' : '▶  Start simulation'}
            </button>
            <button type="button" className="sensor-reset-button" onClick={resetRun} disabled={!isRunning && distance === START_DISTANCE && !result}>
              Reset
            </button>
            <span className="sensor-run-count">{runCount} {runCount === 1 ? 'test' : 'tests'} completed</span>
          </div>

          {result && (
            <div className="sensor-result" role="status">
              <span className="sensor-result-icon">{result.response.icon}</span>
              <div>
                <strong>Rule triggered at {result.distance} cm</strong>
                <p>{result.response.outcome} Your {result.threshold} cm threshold defines how early it reacts.</p>
              </div>
            </div>
          )}
        </div>

        <aside className="sensor-controls-panel">
          <div className="sensor-step-heading">
            <span>01</span>
            <div><h3>Set the safety distance</h3><p>When should the rover react?</p></div>
          </div>
          <label className="sensor-threshold-control" htmlFor="sensor-safety-threshold">
            <span>React when obstacle is within</span>
            <strong>{threshold} cm</strong>
          </label>
          <input
            id="sensor-safety-threshold"
            className="sensor-threshold-slider"
            type="range"
            min={MIN_THRESHOLD}
            max={MAX_THRESHOLD}
            step="5"
            value={threshold}
            disabled={isRunning}
            onChange={(event) => setThreshold(Number(event.target.value))}
          />
          <div className="sensor-slider-labels"><span>Closer · 10 cm</span><span>Earlier · 60 cm</span></div>
          <p className="sensor-control-hint">A larger distance gives the rover more room to respond.</p>

          <div className="sensor-response-divider" />
          <div className="sensor-step-heading">
            <span>02</span>
            <div><h3>Choose its response</h3><p>What should happen at the trigger?</p></div>
          </div>
          <div className="sensor-response-options" role="radiogroup" aria-label="Rover response">
            {RESPONSES.map((response) => (
              <label key={response.id} className={`sensor-response-option${responseId === response.id ? ' is-selected' : ''}`}>
                <input
                  type="radio"
                  name="sensor-response"
                  value={response.id}
                  checked={responseId === response.id}
                  disabled={isRunning}
                  onChange={() => setResponseId(response.id)}
                />
                <span className="sensor-response-icon" aria-hidden="true">{response.icon}</span>
                <span className="sensor-response-copy"><strong>{response.title}</strong><small>{response.description}</small></span>
                <span className="sensor-response-check" aria-hidden="true">{responseId === response.id ? '✓' : ''}</span>
              </label>
            ))}
          </div>

          <div className="sensor-learning-note">
            <span aria-hidden="true">💡</span>
            <p>The sensor measures distance. The controller checks your rule and tells the motors how to respond.</p>
          </div>
        </aside>
      </div>
    </section>
  );
}
