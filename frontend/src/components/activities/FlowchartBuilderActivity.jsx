import React, { useState } from 'react';
import { markActivityComplete } from '../../utils/progressManager';

const BLOCK_TYPES = [
  {
    id: 'start',
    type: 'terminal',
    label: 'START / BOOT MCU',
    shape: 'rounded-full border-blue-500 bg-blue-50 dark:bg-blue-950/60 text-blue-900 dark:text-blue-200',
    icon: '🏁',
    desc: 'System boot and hardware pin initialization.'
  },
  {
    id: 'read_sensor',
    type: 'input',
    label: 'READ ULTRASONIC SENSOR',
    shape: 'rounded-lg border-purple-500 bg-purple-50 dark:bg-purple-950/60 text-purple-900 dark:text-purple-200 transform skew-x-[-6deg]',
    icon: '📡',
    desc: 'Transmits 40kHz sound ping and captures echo flight time.'
  },
  {
    id: 'check_obstacle',
    type: 'decision',
    label: 'IS DISTANCE < 20 CM?',
    shape: 'rounded-xl border-amber-500 bg-amber-50 dark:bg-amber-950/60 text-amber-900 dark:text-amber-200 border-2',
    icon: '❓',
    desc: 'Evaluates if an obstacle is within braking distance.'
  },
  {
    id: 'turn_right',
    type: 'process',
    label: 'ACTION: TURN RIGHT 90°',
    shape: 'rounded-lg border-rose-500 bg-rose-50 dark:bg-rose-950/60 text-rose-900 dark:text-rose-200',
    icon: '↪️',
    desc: 'Dispatches differential motor command to execute pivot turn.'
  },
  {
    id: 'move_forward',
    type: 'process',
    label: 'ACTION: MOVE FORWARD 10 CM',
    shape: 'rounded-lg border-emerald-500 bg-emerald-50 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200',
    icon: '⬆️',
    desc: 'Powers both drive motors at 70% PWM to advance.'
  },
  {
    id: 'loop',
    type: 'terminal',
    label: 'LOOP BACK TO START',
    shape: 'rounded-full border-cyan-500 bg-cyan-50 dark:bg-cyan-950/60 text-cyan-900 dark:text-cyan-200',
    icon: '🔄',
    desc: 'Returns control to top of execution loop.'
  }
];

const PRESETS = [
  {
    title: 'Obstacle Avoidance Loop (Recommended)',
    blocks: ['start', 'read_sensor', 'check_obstacle', 'turn_right', 'move_forward', 'loop']
  },
  {
    title: 'Forward Patrol',
    blocks: ['start', 'move_forward', 'move_forward', 'turn_right', 'loop']
  }
];

export default function FlowchartBuilderActivity({ grade = 8, onCompleted }) {
  const [sequence, setSequence] = useState([
    'start',
    'read_sensor',
    'check_obstacle',
    'turn_right',
    'move_forward',
    'loop'
  ]);
  const [activeStep, setActiveStep] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [validationResult, setValidationResult] = useState(null);
  const [roverActionMessage, setRoverActionMessage] = useState('Build your sequence and press Validate & Run.');

  const addBlock = (blockId) => {
    if (isRunning) return;
    setSequence(prev => [...prev, blockId]);
    setValidationResult(null);
  };

  const removeBlock = (index) => {
    if (isRunning) return;
    setSequence(prev => prev.filter((_, i) => i !== index));
    setValidationResult(null);
  };

  const moveUp = (index) => {
    if (isRunning || index === 0) return;
    setSequence(prev => {
      const next = [...prev];
      const temp = next[index - 1];
      next[index - 1] = next[index];
      next[index] = temp;
      return next;
    });
    setValidationResult(null);
  };

  const moveDown = (index) => {
    if (isRunning || index === sequence.length - 1) return;
    setSequence(prev => {
      const next = [...prev];
      const temp = next[index + 1];
      next[index + 1] = next[index];
      next[index] = temp;
      return next;
    });
    setValidationResult(null);
  };

  const loadPreset = (preset) => {
    if (isRunning) return;
    setSequence([...preset.blocks]);
    setValidationResult(null);
    setRoverActionMessage(`Loaded "${preset.title}". Click Validate & Run to test.`);
  };

  const validateSequence = () => {
    if (sequence.length < 3) {
      return { valid: false, message: 'Sequence is too short. A complete algorithm needs at least 3 blocks.' };
    }
    if (sequence[0] !== 'start') {
      return { valid: false, message: 'Algorithmic Rule: Every flowchart must begin with a START terminal block.' };
    }
    const hasSensor = sequence.includes('read_sensor');
    const hasDecision = sequence.includes('check_obstacle');

    if (hasDecision && !hasSensor) {
      return { valid: false, message: 'Logical Error: You added a Decision block without first reading sensor data!' };
    }

    if (hasDecision && sequence.indexOf('read_sensor') > sequence.indexOf('check_obstacle')) {
      return { valid: false, message: 'Sequencing Bug: You must READ the sensor before evaluating whether distance < 20cm.' };
    }

    return { valid: true, message: 'Logic verified! Sequence is structurally sound and ready for simulation.' };
  };

  const handleRun = () => {
    const val = validateSequence();
    setValidationResult(val);

    if (!val.valid) return;

    setIsRunning(true);
    setActiveStep(0);

    let step = 0;
    const interval = setInterval(() => {
      if (step < sequence.length) {
        setActiveStep(step);
        const blockId = sequence[step];
        if (blockId === 'start') {
          setRoverActionMessage('⚡ Power On: Registers cleared, GPIO pins configured.');
        } else if (blockId === 'read_sensor') {
          setRoverActionMessage('📡 Ultrasonic Ping: Measuring distance... (Echo received: 18 cm).');
        } else if (blockId === 'check_obstacle') {
          setRoverActionMessage('❓ Evaluating Condition: 18 cm < 20 cm is TRUE! Branching to obstacle reaction.');
        } else if (blockId === 'turn_right') {
          setRoverActionMessage('↪️ Executing Action: Left motor forward, right motor reverse -> Pivoting 90° right.');
        } else if (blockId === 'move_forward') {
          setRoverActionMessage('⬆️ Executing Action: Both motors driving forward at 70% PWM.');
        } else if (blockId === 'loop') {
          setRoverActionMessage('🔄 Loop Complete: Cycle finished cleanly. Restarting next polling iteration.');
        }

        step += 1;
      } else {
        clearInterval(interval);
        setIsRunning(false);
        setActiveStep(null);
        setRoverActionMessage('🎉 Algorithm successfully executed! Rover navigated without deadlock.');
        markActivityComplete(grade, 'flowchart-builder');
        if (onCompleted) onCompleted('flowchart-builder');
      }
    }, 1100);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 transition-colors">
      {/* Header */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 mb-1">
            Logic & Algorithms
          </span>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Flowchart Builder: Visual Algorithm Sequencer
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Arrange standardized logic blocks into a working robotic algorithm and step through animated execution.
          </p>
        </div>
        <div className="flex items-center gap-2">
          {PRESETS.map((p, i) => (
            <button
              key={i}
              onClick={() => loadPreset(p)}
              disabled={isRunning}
              className="px-3 py-1.5 text-xs font-semibold rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 transition-colors"
            >
              Preset: {p.title.split(' ')[0]}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Logic Block Palette */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Standard Flowchart Palette (Click to add)
          </h3>

          <div className="space-y-2">
            {BLOCK_TYPES.map((block) => (
              <div
                key={block.id}
                onClick={() => addBlock(block.id)}
                className={`p-3 rounded-xl border-2 cursor-pointer transition-all hover:scale-[1.02] shadow-sm ${block.shape}`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-lg">{block.icon}</span>
                    <div>
                      <div className="text-xs font-bold font-mono">{block.label}</div>
                      <div className="text-[10px] opacity-80 leading-tight">{block.desc}</div>
                    </div>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded bg-white/60 dark:bg-slate-900/60">
                    + Add
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Flowchart Guide Card */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 text-[11px] text-slate-600 dark:text-slate-400 space-y-1.5">
            <div className="font-bold text-slate-800 dark:text-slate-200">ISO Flowchart Conventions:</div>
            <div>• <strong>Rounded Oval:</strong> Start / Terminal</div>
            <div>• <strong>Parallelogram:</strong> Sensor Input / Output</div>
            <div>• <strong>Diamond:</strong> Conditional Decision (True / False)</div>
            <div>• <strong>Rectangle:</strong> Motor Process Action</div>
          </div>
        </div>

        {/* Right Column: Execution Sequence Canvas */}
        <div className="lg:col-span-8 flex flex-col justify-between bg-slate-950 rounded-2xl border border-slate-800 p-6 text-white min-h-[460px]">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-3 mb-4">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Program Sequence ({sequence.length} Blocks)
              </div>
              <div className="text-xs font-mono text-cyan-400">
                {isRunning ? `EXECUTING STEP ${activeStep + 1} OF ${sequence.length}...` : 'STATUS: IDLE'}
              </div>
            </div>

            {/* Sequence Blocks Display with Connecting Arrows */}
            <div className="space-y-2 max-h-[320px] overflow-y-auto pr-2">
              {sequence.map((blockId, index) => {
                const block = BLOCK_TYPES.find(b => b.id === blockId);
                const isActive = activeStep === index;
                return (
                  <div key={index} className="flex flex-col items-center">
                    <div
                      className={`w-full p-3 rounded-xl border-2 transition-all flex items-center justify-between ${
                        isActive
                          ? 'border-yellow-400 bg-yellow-400/20 text-yellow-100 ring-4 ring-yellow-400/30 scale-105 shadow-xl'
                          : 'border-slate-700 bg-slate-900/90 text-slate-200'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono font-bold text-slate-500 w-5">
                          {index + 1}.
                        </span>
                        <span className="text-lg">{block?.icon}</span>
                        <div>
                          <div className="text-xs font-bold font-mono">{block?.label}</div>
                          <div className="text-[10px] text-slate-400">{block?.desc}</div>
                        </div>
                      </div>

                      {/* Reorder & Delete Actions */}
                      <div className="flex items-center gap-1.5">
                        <button
                          onClick={() => moveUp(index)}
                          disabled={isRunning || index === 0}
                          className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded text-slate-300"
                          title="Move Up"
                        >
                          ▲
                        </button>
                        <button
                          onClick={() => moveDown(index)}
                          disabled={isRunning || index === sequence.length - 1}
                          className="px-2 py-1 text-xs bg-slate-800 hover:bg-slate-700 disabled:opacity-30 rounded text-slate-300"
                          title="Move Down"
                        >
                          ▼
                        </button>
                        <button
                          onClick={() => removeBlock(index)}
                          disabled={isRunning}
                          className="px-2 py-1 text-xs bg-rose-900/60 hover:bg-rose-800 text-rose-300 disabled:opacity-30 rounded"
                          title="Remove Block"
                        >
                          ✕
                        </button>
                      </div>
                    </div>

                    {/* Flow arrow down */}
                    {index < sequence.length - 1 && (
                      <div className="text-slate-600 text-xs py-0.5">↓</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Validation Banner if present */}
          {validationResult && (
            <div className={`mt-4 p-3 rounded-xl text-xs font-medium border ${
              validationResult.valid
                ? 'bg-emerald-950/60 border-emerald-500 text-emerald-200'
                : 'bg-rose-950/60 border-rose-500 text-rose-200'
            }`}>
              {validationResult.valid ? '✓ ' : '⚠️ '} {validationResult.message}
            </div>
          )}

          {/* Bottom Execution Console & Run Button */}
          <div className="mt-4 pt-4 border-t border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex-1 min-w-[240px]">
              <div className="text-[10px] text-slate-500 uppercase tracking-wider font-mono">
                Rover Execution Monitor:
              </div>
              <div className="text-xs font-mono text-cyan-300 font-semibold truncate">
                &gt; {roverActionMessage}
              </div>
            </div>

            <button
              onClick={handleRun}
              disabled={isRunning || sequence.length === 0}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg ${
                isRunning
                  ? 'bg-amber-600 text-white cursor-wait'
                  : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white'
              }`}
            >
              <span>{isRunning ? '⏳ Running Algorithm...' : '⚡ Validate & Run Sequence'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
