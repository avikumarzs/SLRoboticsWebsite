import React, { useState, useEffect, useRef } from 'react';
import { markActivityComplete } from '../../utils/progressManager';

export default function SensorLogicActivity({ grade = 7, onCompleted }) {
  const [thresholdDistance, setThresholdDistance] = useState(25); // cm
  const [selectedAction, setSelectedAction] = useState('turn-right'); // turn-right, reverse-brake, sound-stop, spin-evade
  const [elseAction, setElseAction] = useState('forward-normal'); // forward-normal, forward-fast
  const [isRunning, setIsRunning] = useState(false);
  const [roverDistance, setRoverDistance] = useState(65); // cm away from obstacle (65 to 5)
  const [roverHeadingOffset, setRoverHeadingOffset] = useState(0); // degrees
  const [evasionSucceeded, setEvasionSucceeded] = useState(false);
  const [buzzerActive, setBuzzerActive] = useState(false);
  const [statusMessage, setStatusMessage] = useState('System ready. Set threshold rules and run the test track.');

  const intervalRef = useRef(null);

  const ACTIONS = [
    { id: 'turn-right', label: 'Brake & Turn Right 90°', desc: 'Brakes drive motors, pivots right wheel in reverse, evades obstacle cleanly.' },
    { id: 'reverse-brake', label: 'Reverse 15cm & Full Stop', desc: 'Reverses H-Bridge polarity, backs away, then cuts motor power.' },
    { id: 'sound-stop', label: 'Sound Alarm Buzzer & Halt', desc: 'Pulses 2.4kHz piezobuzzer warning and activates mechanical brakes.' },
    { id: 'spin-evade', label: 'Zero-Radius 180° Spin', desc: 'Differential drive spin on the spot, facing opposite direction.' }
  ];

  const handleStart = () => {
    setIsRunning(true);
    setEvasionSucceeded(false);
    setBuzzerActive(false);
    setStatusMessage('Rover driving forward... Polling ultrasonic sensor at 40kHz.');
  };

  const handlePause = () => {
    setIsRunning(false);
    setStatusMessage('Simulation paused.');
  };

  const handleReset = () => {
    setIsRunning(false);
    setRoverDistance(65);
    setRoverHeadingOffset(0);
    setEvasionSucceeded(false);
    setBuzzerActive(false);
    setStatusMessage('Reset rover to starting mark (65 cm).');
  };

  // Main Simulation Loop
  useEffect(() => {
    if (!isRunning) {
      if (intervalRef.current) clearInterval(intervalRef.current);
      return;
    }

    intervalRef.current = setInterval(() => {
      setRoverDistance(prevDist => {
        // If distance is above threshold: moving forward
        if (prevDist > thresholdDistance) {
          const step = elseAction === 'forward-fast' ? 2.5 : 1.5;
          const nextDist = Math.max(0, prevDist - step);
          return nextDist;
        } else {
          // THRESHOLD TRIGGERED! Condition branch evaluates to TRUE
          if (intervalRef.current) clearInterval(intervalRef.current);
          setIsRunning(false);

          if (selectedAction === 'turn-right') {
            setRoverHeadingOffset(45);
            setEvasionSucceeded(true);
            setStatusMessage(`🎯 RULE TRIGGERED (Distance: ${Math.round(prevDist)}cm < ${thresholdDistance}cm): Rover turned right to evade obstacle!`);
          } else if (selectedAction === 'reverse-brake') {
            setRoverHeadingOffset(0);
            setEvasionSucceeded(true);
            setStatusMessage(`🎯 RULE TRIGGERED (Distance: ${Math.round(prevDist)}cm < ${thresholdDistance}cm): Reverse brakes engaged safely.`);
          } else if (selectedAction === 'sound-stop') {
            setBuzzerActive(true);
            setEvasionSucceeded(true);
            setStatusMessage(`🔔 RULE TRIGGERED (Distance: ${Math.round(prevDist)}cm < ${thresholdDistance}cm): Buzzer sounded! Rover halted.`);
          } else if (selectedAction === 'spin-evade') {
            setRoverHeadingOffset(180);
            setEvasionSucceeded(true);
            setStatusMessage(`🎯 RULE TRIGGERED (Distance: ${Math.round(prevDist)}cm < ${thresholdDistance}cm): 180° Spin maneuver completed.`);
          }

          markActivityComplete(grade, 'sensor-logic');
          if (onCompleted) onCompleted('sensor-logic');
          return prevDist;
        }
      });
    }, 100);

    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isRunning, thresholdDistance, selectedAction, elseAction, grade, onCompleted]);

  // Derived state
  const isTriggerActive = roverDistance <= thresholdDistance;
  const echoTimeUs = Math.round((roverDistance * 2) / 0.034);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300 mb-1">
            Sensor Perception & Logic
          </span>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Sensor Logic Challenge: Reactive Obstacle Avoidance
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Configure conditional threshold logic: program how the microcontroller evaluates ultrasonic distance and dispatches motor commands.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Reset Track
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Visual Runway Track & Telemetry */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Virtual Ultrasonic Test Track */}
          <div className="relative bg-slate-950 rounded-2xl border border-slate-800 p-6 overflow-hidden min-h-[300px] flex flex-col justify-between">
            {/* Top Telemetry Header */}
            <div className="flex items-center justify-between text-xs font-mono text-slate-400 border-b border-slate-800 pb-2">
              <div className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${isRunning ? 'bg-emerald-400 animate-ping' : 'bg-slate-500'}`} />
                <span>SONAR RADAR HC-SR04</span>
              </div>
              <div className="text-purple-400">
                ECHO FLIGHT TIME: {echoTimeUs} µs
              </div>
            </div>

            {/* Visual Runway Simulation */}
            <div className="relative my-8 h-28 bg-slate-900/80 rounded-xl border border-slate-800 flex items-center px-4 overflow-hidden">
              {/* Distance Markings along track */}
              <div className="absolute inset-x-0 bottom-1 flex justify-between px-6 text-[10px] font-mono text-slate-500">
                <span>0 cm (Obstacle)</span>
                <span>20 cm</span>
                <span>40 cm</span>
                <span>65 cm (Spawn)</span>
              </div>

              {/* Red Obstacle Wall at left */}
              <div className="absolute left-4 top-4 bottom-7 w-8 bg-rose-600/90 rounded-lg border-2 border-rose-400 flex flex-col items-center justify-center shadow-lg shadow-rose-500/20 z-10">
                <span className="text-[10px] font-bold text-white transform -rotate-90">WALL</span>
              </div>

              {/* Threshold Indicator Line */}
              <div
                className="absolute top-2 bottom-7 border-l-2 border-dashed border-amber-400 z-10 flex flex-col items-center pointer-events-none"
                style={{
                  left: `${((thresholdDistance) / 65) * 80 + 8}%`
                }}
              >
                <span className="text-[9px] font-mono bg-amber-500 text-slate-950 font-bold px-1 rounded -translate-y-2">
                  TRIGGER: {thresholdDistance}cm
                </span>
              </div>

              {/* Rover Element moving along track */}
              <div
                className="absolute top-4 bottom-7 flex items-center transition-all duration-100 z-20"
                style={{
                  left: `${((roverDistance) / 65) * 80 + 8}%`,
                  transform: `rotate(${roverHeadingOffset}deg)`
                }}
              >
                {/* Sonar Beam extending left toward wall */}
                <div
                  className="absolute right-full top-1/2 -translate-y-1/2 h-16 pointer-events-none bg-gradient-to-l from-purple-500/40 via-purple-500/15 to-transparent rounded-l-full"
                  style={{
                    width: `${Math.min(220, (roverDistance / 65) * 200)}px`
                  }}
                />

                {/* Rover Body Icon */}
                <div className={`p-3 rounded-xl border-2 shadow-xl flex items-center gap-2 ${
                  isTriggerActive
                    ? 'bg-amber-600 border-amber-300 text-white animate-pulse'
                    : 'bg-blue-600 border-blue-400 text-white'
                }`}>
                  <span className="text-xl">🤖</span>
                  <div className="text-[10px] font-mono font-bold leading-tight">
                    <div>ROVER</div>
                    <div>{Math.round(roverDistance)}cm</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Ultrasonic Live Radar Gauge */}
            <div className="grid grid-cols-3 gap-2 text-center text-xs font-mono">
              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">CURRENT DISTANCE</div>
                <div className={`text-base font-bold ${
                  roverDistance <= thresholdDistance ? 'text-amber-400' : 'text-emerald-400'
                }`}>
                  {Math.round(roverDistance)} cm
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">ACTIVE RULE BRANCH</div>
                <div className={`text-xs font-bold mt-1 ${
                  isTriggerActive ? 'text-amber-400' : 'text-blue-400'
                }`}>
                  {isTriggerActive ? 'IF (TRUE) [EVADE]' : 'ELSE (FALSE) [FORWARD]'}
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
                <div className="text-[10px] text-slate-400">BUZZER STATE</div>
                <div className={`text-xs font-bold mt-1 ${buzzerActive ? 'text-rose-400 animate-pulse' : 'text-slate-500'}`}>
                  {buzzerActive ? '🔊 BEEPING' : 'MUTED'}
                </div>
              </div>
            </div>
          </div>

          {/* Status Message Log */}
          <div className="p-3.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700 text-xs text-slate-700 dark:text-slate-300 flex items-center gap-2">
            <span className="text-base">ℹ️</span>
            <span>{statusMessage}</span>
          </div>

          {/* Simulation Controls */}
          <div className="flex gap-3">
            <button
              onClick={isRunning ? handlePause : handleStart}
              className={`flex-1 py-3 px-4 rounded-xl font-bold text-sm text-white shadow-md transition-all flex items-center justify-center gap-2 ${
                isRunning
                  ? 'bg-amber-600 hover:bg-amber-700'
                  : 'bg-emerald-600 hover:bg-emerald-700'
              }`}
            >
              <span>{isRunning ? '⏸ Pause Test' : '▶ Start Test Run'}</span>
            </button>

            <button
              onClick={handleReset}
              className="py-3 px-5 rounded-xl font-bold text-sm bg-slate-200 dark:bg-slate-800 hover:bg-slate-300 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all"
            >
              Reset
            </button>
          </div>
        </div>

        {/* Right Column: Interactive Logic Rule Builder */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 dark:text-slate-200 mb-4 flex items-center gap-2">
              <span>🧠 Microcontroller Logic Rules</span>
            </h3>

            {/* IF CONDITION BLOCK */}
            <div className={`p-4 rounded-xl border-2 transition-all mb-4 ${
              isTriggerActive
                ? 'border-amber-400 bg-amber-50/50 dark:bg-amber-950/20'
                : 'border-blue-200 dark:border-slate-700 bg-white dark:bg-slate-900'
            }`}>
              <div className="text-xs font-bold text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-2">
                1. CONDITIONAL TRIGGER (IF)
              </div>

              <div className="mb-3">
                <div className="flex justify-between text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                  <span>Threshold Distance:</span>
                  <span className="font-mono font-bold text-purple-600 dark:text-purple-400">
                    &lt; {thresholdDistance} cm
                  </span>
                </div>
                <input
                  type="range"
                  min="10"
                  max="50"
                  value={thresholdDistance}
                  onChange={(e) => setThresholdDistance(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 dark:bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-600"
                />
                <div className="flex justify-between text-[10px] text-slate-400 mt-1">
                  <span>10 cm (Risky)</span>
                  <span>30 cm (Balanced)</span>
                  <span>50 cm (Cautious)</span>
                </div>
              </div>

              <div className="text-xs font-semibold text-slate-700 dark:text-slate-300 mb-2">
                THEN Execute Reactive Behavior:
              </div>

              <div className="space-y-1.5">
                {ACTIONS.map((action) => (
                  <label
                    key={action.id}
                    className={`flex items-start gap-2.5 p-2 rounded-lg border cursor-pointer transition-all ${
                      selectedAction === action.id
                        ? 'border-purple-500 bg-purple-50 dark:bg-purple-950/40 text-purple-900 dark:text-purple-200'
                        : 'border-slate-200 dark:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800'
                    }`}
                  >
                    <input
                      type="radio"
                      name="reactiveAction"
                      value={action.id}
                      checked={selectedAction === action.id}
                      onChange={() => setSelectedAction(action.id)}
                      className="mt-0.5 text-purple-600 focus:ring-purple-500"
                    />
                    <div>
                      <div className="text-xs font-bold">{action.label}</div>
                      <div className="text-[11px] text-slate-500 dark:text-slate-400 leading-tight">
                        {action.desc}
                      </div>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* ELSE BRANCH */}
            <div className={`p-4 rounded-xl border-2 transition-all ${
              !isTriggerActive
                ? 'border-blue-400 bg-blue-50/50 dark:bg-blue-950/20'
                : 'border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900'
            }`}>
              <div className="text-xs font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-2">
                2. DEFAULT BEHAVIOR (ELSE - PATH CLEAR)
              </div>

              <div className="space-y-1.5">
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer text-xs">
                  <input
                    type="radio"
                    name="elseAction"
                    value="forward-normal"
                    checked={elseAction === 'forward-normal'}
                    onChange={() => setElseAction('forward-normal')}
                  />
                  <span>Move Forward Normal Speed (60% PWM)</span>
                </label>
                <label className="flex items-center gap-2 p-2 rounded-lg border border-slate-200 dark:border-slate-700 cursor-pointer text-xs">
                  <input
                    type="radio"
                    name="elseAction"
                    value="forward-fast"
                    checked={elseAction === 'forward-fast'}
                    onChange={() => setElseAction('forward-fast')}
                  />
                  <span>Move Forward High Speed (90% PWM)</span>
                </label>
              </div>
            </div>
          </div>

          {/* Educational Formula Card */}
          <div className="p-4 rounded-xl bg-slate-900 text-white text-xs border border-slate-800">
            <div className="font-bold text-cyan-400 mb-1 flex items-center gap-1.5">
              <span>📐 Ultrasonic Range Formula:</span>
            </div>
            <p className="text-slate-300 text-[11px] font-mono leading-relaxed">
              Distance (cm) = (Echo Time in µs × 0.034) ÷ 2
            </p>
            <p className="text-slate-400 text-[11px] mt-1">
              Sound travels at 340 m/s (0.034 cm/µs). At {Math.round(roverDistance)}cm away, the sonar pulse takes ~{echoTimeUs} microseconds for the round trip.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
