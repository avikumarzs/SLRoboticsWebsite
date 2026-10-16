import React, { useState, useEffect, useRef, useCallback } from 'react';
import { markActivityComplete } from '../../utils/progressManager';

const ARENA_WIDTH = 480;
const ARENA_HEIGHT = 380;
const ROBOT_SIZE = 32;
const getSpeedMultiplier = (setting) => (setting === 'slow' ? 1.5 : setting === 'turbo' ? 4 : 2.5);

const INITIAL_OBSTACLES = [
  { x: 120, y: 80, width: 60, height: 40, label: 'Block A' },
  { x: 280, y: 140, width: 50, height: 70, label: 'Block B' },
  { x: 160, y: 240, width: 70, height: 45, label: 'Block C' },
  { x: 340, y: 260, width: 45, height: 45, label: 'Block D' }
];
const LEVEL_LAYOUTS = [
  INITIAL_OBSTACLES,
  [
    { x: 145, y: 135, width: 55, height: 55, label: 'Block A' },
    { x: 260, y: 75, width: 52, height: 68, label: 'Block B' },
    { x: 300, y: 210, width: 85, height: 45, label: 'Block C' },
    { x: 100, y: 285, width: 60, height: 40, label: 'Block D' }
  ],
  [
    { x: 110, y: 155, width: 60, height: 60, label: 'Block A' },
    { x: 215, y: 65, width: 50, height: 65, label: 'Block B' },
    { x: 300, y: 145, width: 60, height: 55, label: 'Block C' },
    { x: 230, y: 275, width: 55, height: 40, label: 'Block D' }
  ]
];

const INITIAL_TARGET = { x: 410, y: 310, radius: 24 };

export default function MovementSimActivity({ grade = 6, onCompleted }) {
  const [robotState, setRobotState] = useState({
    x: 60,
    y: 60,
    heading: 90, // Degrees: 0 = North, 90 = East, 180 = South, 270 = West
    speed: 0,
    turnRate: 0,
    distanceTraveled: 0
  });

  const [obstacles, setObstacles] = useState(INITIAL_OBSTACLES);
  const [levelIndex, setLevelIndex] = useState(0);
  const target = INITIAL_TARGET;
  const [speedSetting, setSpeedSetting] = useState('normal'); // slow, normal, turbo
  const [collisionWarning, setCollisionWarning] = useState(false);
  const [missionAccomplished, setMissionAccomplished] = useState(false);
  const [stepLogs, setStepLogs] = useState(['Simulator initialized at (60, 60). Head to the docking beacon!']);
  const [radarPing, setRadarPing] = useState(120);

  const canvasRef = useRef(null);

  const addLog = (msg) => {
    setStepLogs(prev => [msg, ...prev.slice(0, 4)]);
  };

  // Move commands
  const moveForward = useCallback(() => {
    setRobotState(prev => {
      const step = getSpeedMultiplier(speedSetting);
      const rad = ((prev.heading - 90) * Math.PI) / 180;
      let newX = prev.x + Math.cos(rad) * step;
      let newY = prev.y + Math.sin(rad) * step;

      // Bounds check
      newX = Math.max(ROBOT_SIZE / 2, Math.min(ARENA_WIDTH - ROBOT_SIZE / 2, newX));
      newY = Math.max(ROBOT_SIZE / 2, Math.min(ARENA_HEIGHT - ROBOT_SIZE / 2, newY));

      // Check obstacle collisions
      let collision = false;
      obstacles.forEach(obs => {
        if (
          newX + ROBOT_SIZE / 2 > obs.x &&
          newX - ROBOT_SIZE / 2 < obs.x + obs.width &&
          newY + ROBOT_SIZE / 2 > obs.y &&
          newY - ROBOT_SIZE / 2 < obs.y + obs.height
        ) {
          collision = true;
        }
      });

      if (collision) {
        setCollisionWarning(true);
        addLog('⚠️ Obstacle contact detected! Differential brake engaged.');
        return prev;
      }

      setCollisionWarning(false);
      return {
        ...prev,
        x: newX,
        y: newY,
        distanceTraveled: prev.distanceTraveled + Math.round(step * 0.2)
      };
    });
  }, [speedSetting, obstacles]);

  const moveBackward = useCallback(() => {
    setRobotState(prev => {
      const step = getSpeedMultiplier(speedSetting);
      const rad = ((prev.heading - 90) * Math.PI) / 180;
      let newX = prev.x - Math.cos(rad) * step;
      let newY = prev.y - Math.sin(rad) * step;

      newX = Math.max(ROBOT_SIZE / 2, Math.min(ARENA_WIDTH - ROBOT_SIZE / 2, newX));
      newY = Math.max(ROBOT_SIZE / 2, Math.min(ARENA_HEIGHT - ROBOT_SIZE / 2, newY));

      const collision = obstacles.some(obs => newX + ROBOT_SIZE / 2 > obs.x && newX - ROBOT_SIZE / 2 < obs.x + obs.width && newY + ROBOT_SIZE / 2 > obs.y && newY - ROBOT_SIZE / 2 < obs.y + obs.height);
      if (collision) {
        setCollisionWarning(true);
        addLog('Obstacle contact detected while reversing. Movement stopped.');
        return prev;
      }
      setCollisionWarning(false);

      return {
        ...prev,
        x: newX,
        y: newY,
        distanceTraveled: prev.distanceTraveled + Math.round(step * 0.2)
      };
    });
  }, [speedSetting, obstacles]);

  const turnLeft = useCallback(() => {
    setRobotState(prev => ({
      ...prev,
      heading: (prev.heading - 15 + 360) % 360
    }));
  }, []);

  const turnRight = useCallback(() => {
    setRobotState(prev => ({
      ...prev,
      heading: (prev.heading + 15) % 360
    }));
  }, []);

  const stopRobot = useCallback(() => {
    setRobotState(prev => ({ ...prev, speed: 0, turnRate: 0 }));
    addLog('Brakes locked. Motors stopped.');
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        moveForward();
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        moveBackward();
      } else if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        turnLeft();
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        turnRight();
      } else if (e.code === 'Space') {
        e.preventDefault();
        stopRobot();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [moveForward, moveBackward, turnLeft, turnRight, stopRobot]);

  // Target Check and distance calculation
  useEffect(() => {
    const dx = robotState.x - target.x;
    const dy = robotState.y - target.y;
    const distToTarget = Math.sqrt(dx * dx + dy * dy);

    setRadarPing(Math.round(distToTarget));

    if (distToTarget < target.radius + ROBOT_SIZE / 2 && !missionAccomplished) {
      setMissionAccomplished(true);
      addLog('🎯 Mission Target Reached! Docking locked.');
      markActivityComplete(grade, 'movement-sim');
      if (onCompleted) onCompleted('movement-sim');
    }
  }, [robotState.x, robotState.y, target, missionAccomplished, grade, onCompleted]);

  // Render Arena on Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, ARENA_WIDTH, ARENA_HEIGHT);
    ctx.fillStyle = '#fff8e8';
    ctx.fillRect(0, 0, ARENA_WIDTH, ARENA_HEIGHT);

    // Draw Grid Lines
    ctx.strokeStyle = '#eadbbd';
    ctx.lineWidth = 1;
    for (let x = 0; x < ARENA_WIDTH; x += 30) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, ARENA_HEIGHT);
      ctx.stroke();
    }
    for (let y = 0; y < ARENA_HEIGHT; y += 30) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(ARENA_WIDTH, y);
      ctx.stroke();
    }

    // Draw Obstacles
    obstacles.forEach(obs => {
      ctx.fillStyle = '#e5bd83';
      ctx.strokeStyle = '#9a6737';
      ctx.lineWidth = 2;
      ctx.fillRect(obs.x, obs.y, obs.width, obs.height);
      ctx.strokeRect(obs.x, obs.y, obs.width, obs.height);

      // Warning stripes pattern inside
      ctx.fillStyle = '#704820';
      ctx.font = '10px monospace';
      ctx.fillText(obs.label, obs.x + 6, obs.y + obs.height / 2 + 3);
    });

    // Draw Target Dock
    ctx.save();
    ctx.beginPath();
    ctx.arc(target.x, target.y, target.radius, 0, Math.PI * 2);
    ctx.fillStyle = missionAccomplished ? '#10b981' : '#05966933';
    ctx.fill();
    ctx.strokeStyle = '#10b981';
    ctx.lineWidth = 3;
    ctx.setLineDash([4, 4]);
    ctx.stroke();
    ctx.restore();

    ctx.fillStyle = '#10b981';
    ctx.font = '10px bold sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('TARGET DOCK', target.x, target.y + 4);

    // Draw Robot Sonar Beam
    ctx.save();
    ctx.translate(robotState.x, robotState.y);
    ctx.rotate(((robotState.heading - 90) * Math.PI) / 180);

    // Forward beam cone
    const beamGrad = ctx.createRadialGradient(0, 0, 10, 0, 0, 70);
    beamGrad.addColorStop(0, 'rgba(56, 189, 248, 0.4)');
    beamGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
    ctx.fillStyle = beamGrad;
    ctx.beginPath();
    ctx.moveTo(0, 0);
    ctx.arc(0, 0, 70, -Math.PI / 6, Math.PI / 6);
    ctx.closePath();
    ctx.fill();

    // Robot Body
    ctx.fillStyle = '#dc7900';
    ctx.strokeStyle = '#a64b0e';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.roundRect(-ROBOT_SIZE / 2, -ROBOT_SIZE / 2, ROBOT_SIZE, ROBOT_SIZE, 6);
    ctx.fill();
    ctx.stroke();

    // Wheels (Left and Right)
    ctx.fillStyle = '#704820';
    ctx.fillRect(-ROBOT_SIZE / 2 - 4, -ROBOT_SIZE / 2 + 4, 4, 10);
    ctx.fillRect(-ROBOT_SIZE / 2 - 4, ROBOT_SIZE / 2 - 14, 4, 10);
    ctx.fillRect(ROBOT_SIZE / 2, -ROBOT_SIZE / 2 + 4, 4, 10);
    ctx.fillRect(ROBOT_SIZE / 2, ROBOT_SIZE / 2 - 14, 4, 10);

    // Directional Arrow Head
    ctx.fillStyle = '#fbbf24';
    ctx.beginPath();
    ctx.moveTo(0, -ROBOT_SIZE / 2 - 2);
    ctx.lineTo(6, 0);
    ctx.lineTo(-6, 0);
    ctx.closePath();
    ctx.fill();

    // Ultrasonic Eyes
    ctx.fillStyle = '#f5b700';
    ctx.beginPath();
    ctx.arc(-5, -ROBOT_SIZE / 2 + 6, 3, 0, Math.PI * 2);
    ctx.arc(5, -ROBOT_SIZE / 2 + 6, 3, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }, [robotState, obstacles, target, missionAccomplished]);

  const handleReset = () => {
    setRobotState({
      x: 60,
      y: 60,
      heading: 90,
      speed: 0,
      turnRate: 0,
      distanceTraveled: 0
    });
    setMissionAccomplished(false);
    setCollisionWarning(false);
    addLog('Reset rover position to spawn point.');
  };

  const handleNewLevel = () => {
    let nextIndex = levelIndex;
    while (nextIndex === levelIndex) nextIndex = Math.floor(Math.random() * LEVEL_LAYOUTS.length);
    setLevelIndex(nextIndex);
    setObstacles(LEVEL_LAYOUTS[nextIndex]);
    setRobotState({ x: 60, y: 60, heading: 90, speed: 0, turnRate: 0, distanceTraveled: 0 });
    setMissionAccomplished(false);
    setCollisionWarning(false);
    addLog(`Loaded Level ${nextIndex + 1}. The rover is back at the start.`);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-emerald-100 text-emerald-800 dark:bg-emerald-900/60 dark:text-emerald-300 mb-1">
            Kinematics & Control
          </span>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Robot Movement Simulator: Virtual Rover Arena
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Level {levelIndex + 1} · Drive around the obstacles and dock at the green beacon. Reset replays this layout; New Level shuffles to another course.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl text-xs font-semibold">
            {['slow', 'normal', 'turbo'].map((mode) => (
              <button
                key={mode}
                onClick={() => setSpeedSetting(mode)}
                className={`px-3 py-1 rounded-lg uppercase transition-all ${
                  speedSetting === mode
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                {mode}
              </button>
            ))}
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Reset Arena
          </button>
          <button onClick={handleNewLevel} className="px-3 py-1.5 text-xs font-bold rounded-lg bg-blue-600 text-white hover:bg-blue-500">New Level</button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Arena Canvas View */}
        <div className="lg:col-span-8 flex flex-col items-center">
          <div className="relative border-2 border-slate-800 bg-slate-950 rounded-2xl overflow-hidden shadow-2xl">
            <canvas
              ref={canvasRef}
              width={ARENA_WIDTH}
              height={ARENA_HEIGHT}
              className="max-w-full h-auto block"
            />

            {/* Collision Alert Banner */}
            {collisionWarning && (
              <div className="absolute top-3 left-3 right-3 bg-rose-500/90 text-white text-xs font-bold py-1.5 px-3 rounded-lg text-center backdrop-blur animate-bounce shadow-lg">
                ⚠️ OBSTACLE COLLISION DETECTED - MOTOR DRIVE HALTED
              </div>
            )}

            {/* Mission Accomplished Overlay */}
            {missionAccomplished && (
              <div className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm flex flex-col items-center justify-center p-6 text-center text-white">
                <span className="text-4xl mb-2">🎉</span>
                <h3 className="text-2xl font-bold text-emerald-400 mb-1">Mission Complete!</h3>
                <p className="text-sm text-slate-300 max-w-sm mb-4">
                  Successfully navigated around obstacles and docked at the target beacon. Differential steering mastered!
                </p>
                <div className="flex gap-3">
                  <button
                    onClick={handleReset}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 rounded-xl text-xs font-bold transition-all"
                  >
                    Drive Again
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Canvas Key Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-3 text-xs text-slate-500 dark:text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-amber-600 rounded-sm inline-block" /> Orange Rover (You)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-slate-600 rounded-sm inline-block" /> Obstacle Blocks
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-emerald-500 rounded-full inline-block" /> Target Docking Beacon
            </span>
            <span className="flex items-center gap-1.5">
              <span className="w-3 h-3 bg-cyan-400/40 rounded-sm inline-block" /> Sonar Sweep Arc
            </span>
          </div>
        </div>

        {/* Right Column: Interactive D-Pad & Live Telemetry HUD */}
        <div className="lg:col-span-4 flex flex-col gap-5">
          {/* Telemetry Dashboard */}
          <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-white">
            <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-3 flex items-center justify-between">
              <span>Telemetry HUD</span>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE 50Hz</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5 text-xs font-mono">
              <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">HEADING ANGLE</div>
                <div className="text-amber-400 font-bold text-sm">{Math.round(robotState.heading)}°</div>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">COORDINATES (X, Y)</div>
                <div className="text-cyan-400 font-bold text-sm">
                  {Math.round(robotState.x)}, {Math.round(robotState.y)}
                </div>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">TARGET DISTANCE</div>
                <div className="text-emerald-400 font-bold text-sm">{radarPing} px</div>
              </div>
              <div className="p-2.5 bg-slate-800/80 rounded-lg border border-slate-700">
                <div className="text-slate-400 text-[10px]">ODOMETER</div>
                <div className="text-purple-400 font-bold text-sm">{robotState.distanceTraveled} cm</div>
              </div>
            </div>
          </div>

          {/* D-Pad Directional Controls */}
          <div className="p-5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 flex flex-col items-center">
            <div className="text-xs font-bold text-slate-700 dark:text-slate-300 mb-3 uppercase tracking-wider">
              Differential Drive Controls
            </div>

            {/* D-PAD Cross Layout */}
            <div className="grid grid-cols-3 gap-2 w-48">
              <div />
              <button
                onClick={moveForward}
                className="h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md active:scale-95 transition-all"
                title="Forward (W / Up Arrow)"
              >
                ▲
              </button>
              <div />

              <button
                onClick={turnLeft}
                className="h-12 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md active:scale-95 transition-all"
                title="Turn Left (A / Left Arrow)"
              >
                ◀
              </button>
              <button
                onClick={stopRobot}
                className="h-12 bg-rose-600 hover:bg-rose-700 active:bg-rose-800 text-white rounded-xl flex items-center justify-center font-bold text-xs uppercase shadow-md active:scale-95 transition-all"
                title="Emergency Brake (Space)"
              >
                STOP
              </button>
              <button
                onClick={turnRight}
                className="h-12 bg-slate-700 hover:bg-slate-600 active:bg-slate-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md active:scale-95 transition-all"
                title="Turn Right (D / Right Arrow)"
              >
                ▶
              </button>

              <div />
              <button
                onClick={moveBackward}
                className="h-12 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white rounded-xl flex items-center justify-center font-bold text-lg shadow-md active:scale-95 transition-all"
                title="Reverse (S / Down Arrow)"
              >
                ▼
              </button>
              <div />
            </div>

            <p className="text-[11px] text-slate-500 dark:text-slate-400 mt-3 text-center">
              Keyboard: Use <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-800 dark:text-slate-200 font-mono">Arrow Keys</kbd> or <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-800 dark:text-slate-200 font-mono">WASD</kbd> + <kbd className="px-1 py-0.5 bg-slate-200 dark:bg-slate-700 rounded text-slate-800 dark:text-slate-200 font-mono">Space</kbd>
            </p>
          </div>

          {/* Event Log Window */}
          <div className="p-3 bg-slate-900 rounded-xl border border-slate-800 text-[11px] font-mono text-slate-300">
            <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-1.5">
              Controller Console Log:
            </div>
            <div className="space-y-1">
              {stepLogs.map((log, idx) => (
                <div key={idx} className="truncate text-slate-400">
                  <span className="text-blue-400">&gt;</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
