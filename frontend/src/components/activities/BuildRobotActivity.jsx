import React, { useState } from 'react';
import { markActivityComplete } from '../../utils/progressManager';

const ROBOT_COMPONENTS = [
  {
    id: 'chassis',
    name: 'Chassis Frame',
    category: 'Structure',
    icon: '🛡️',
    description: 'The structural skeleton made of lightweight acrylic and aluminum plates.',
    functionInfo: 'Holds all electronic modules, motors, and battery safely in place without flexing under load.',
    slot: 'chassis-slot',
    color: 'border-blue-500 bg-blue-50 text-blue-900 dark:bg-blue-950 dark:text-blue-100',
    details: 'Specs: 2mm laser-cut acrylic, 150g weight limit, pre-drilled M3 mounting standoffs.'
  },
  {
    id: 'motors',
    name: 'Dual DC Gear Motors & Wheels',
    category: 'Actuator',
    icon: '⚙️',
    description: 'Two 6V TT gear motors with high-traction rubberized wheels and rear caster.',
    functionInfo: 'Converts battery electrical energy into rotation. Differential wheel speeds produce forward motion and zero-radius turns.',
    slot: 'motors-slot',
    color: 'border-emerald-500 bg-emerald-50 text-emerald-900 dark:bg-emerald-950 dark:text-emerald-100',
    details: 'Specs: 1:48 gear reduction, 200 RPM at 6V, 0.8 kg-cm stall torque.'
  },
  {
    id: 'battery',
    name: '7.4V Rechargeable Battery',
    category: 'Power Supply',
    icon: '🔋',
    description: 'Dual 18650 Li-ion rechargeable cell pack with power switch and protection circuit.',
    functionInfo: 'Supplies electrical voltage and current. High-capacity current is essential to prevent motor stall resets.',
    slot: 'battery-slot',
    color: 'border-amber-500 bg-amber-50 text-amber-900 dark:bg-amber-950 dark:text-amber-100',
    details: 'Specs: 7.4V nominal (8.4V max), 2200 mAh capacity, 3A continuous discharge.'
  },
  {
    id: 'sensor',
    name: 'Ultrasonic Sonar Sensor (Eyes)',
    category: 'Sensory Input',
    icon: '👁️',
    description: 'HC-SR04 ultrasonic rangefinder with 40kHz sound transmitter and receiver barrels.',
    functionInfo: 'Measures obstacle distance by emitting sound pulses and timing the echo bounce. Calculates distance: d = (t × 0.034) / 2.',
    slot: 'sensor-slot',
    color: 'border-purple-500 bg-purple-50 text-purple-900 dark:bg-purple-950 dark:text-purple-100',
    details: 'Specs: Range 2cm - 400cm, 15° measuring angle, 5V trigger pulse.'
  },
  {
    id: 'controller',
    name: 'Microcontroller Board (Brain)',
    category: 'Processor',
    icon: '🧠',
    description: 'Programmable MCU development board with GPIO pins, timer interrupts, and flash memory.',
    functionInfo: 'Executes the robot code, reads ultrasonic echo durations, and generates PWM motor drive signals.',
    slot: 'controller-slot',
    color: 'border-cyan-500 bg-cyan-50 text-cyan-900 dark:bg-cyan-950 dark:text-cyan-100',
    details: 'Specs: 16MHz clock, 32KB Flash, 14 Digital I/O pins, 6 PWM channels, built-in USB bootloader.'
  }
];

export default function BuildRobotActivity({ grade = 5, onCompleted }) {
  const [installedParts, setInstalledParts] = useState([]);
  const [selectedPart, setSelectedPart] = useState(ROBOT_COMPONENTS[0]);
  const [isPoweredOn, setIsPoweredOn] = useState(false);
  const [showDiagnostic, setShowDiagnostic] = useState(false);

  const toggleInstall = (comp) => {
    if (installedParts.includes(comp.id)) {
      setInstalledParts(prev => prev.filter(id => id !== comp.id));
      setIsPoweredOn(false);
    } else {
      setInstalledParts(prev => [...prev, comp.id]);
    }
    setSelectedPart(comp);
  };

  const isComplete = installedParts.length === ROBOT_COMPONENTS.length;

  const handlePowerOn = () => {
    if (!isComplete) return;
    setIsPoweredOn(true);
    setShowDiagnostic(true);
    if (grade !== null) {
      markActivityComplete(grade, 'build-a-robot');
    }
    if (onCompleted) onCompleted('build-a-robot');
  };

  const handleReset = () => {
    setInstalledParts([]);
    setIsPoweredOn(false);
    setShowDiagnostic(false);
    setSelectedPart(ROBOT_COMPONENTS[0]);
  };

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6 border-b border-slate-100 dark:border-slate-800 pb-4">
        <div>
          <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300 mb-1">
            Hands-On Workshop
          </span>
          <h2 className="text-2xl font-bold text-slate-800 dark:text-white">
            Build a Robot: Component Assembly Lab
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            Assemble the five core subsystems to construct a working differential rover.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="text-xs font-medium text-slate-500 dark:text-slate-400">Assembly Status</div>
            <div className="text-lg font-bold text-blue-600 dark:text-blue-400">
              {installedParts.length} / {ROBOT_COMPONENTS.length} Installed ({Math.round((installedParts.length / ROBOT_COMPONENTS.length) * 100)}%)
            </div>
          </div>
          <button
            onClick={handleReset}
            className="px-3 py-1.5 text-xs font-semibold text-slate-600 dark:text-slate-300 bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 rounded-lg transition-colors"
          >
            Reset
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column: Component Tray */}
        <div className="lg:col-span-4 space-y-3">
          <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-2">
            <span>Parts Inventory</span>
            <span className="text-xs font-normal text-slate-400">(Click to mount / unmount)</span>
          </h3>
          
          <div className="space-y-2.5">
            {ROBOT_COMPONENTS.map((comp) => {
              const installed = installedParts.includes(comp.id);
              const isSelected = selectedPart?.id === comp.id;
              return (
                <div
                  key={comp.id}
                  onClick={() => setSelectedPart(comp)}
                  className={`p-3.5 rounded-xl border transition-all cursor-pointer ${
                    isSelected
                      ? 'ring-2 ring-blue-500 border-blue-400 dark:border-blue-500 shadow-md'
                      : 'border-slate-200 dark:border-slate-700/80 hover:border-slate-300 dark:hover:border-slate-600'
                  } ${installed ? 'bg-emerald-50/50 dark:bg-emerald-950/20' : 'bg-slate-50 dark:bg-slate-800/50'}`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl p-1.5 rounded-lg bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700">
                        {comp.icon}
                      </span>
                      <div>
                        <div className="text-sm font-bold text-slate-800 dark:text-slate-100">
                          {comp.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400">
                          {comp.category}
                        </div>
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleInstall(comp);
                      }}
                      className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                        installed
                          ? 'bg-emerald-600 text-white shadow-sm hover:bg-emerald-700'
                          : 'bg-blue-600 text-white hover:bg-blue-700 shadow-sm'
                      }`}
                    >
                      {installed ? '✓ Mounted' : '+ Mount'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Selected Component Details Box */}
          {selectedPart && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-slate-800/80 border border-slate-200 dark:border-slate-700">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{selectedPart.icon}</span>
                <h4 className="font-bold text-slate-800 dark:text-slate-200 text-sm">
                  {selectedPart.name}
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 mb-2 leading-relaxed">
                {selectedPart.description}
              </p>
              <div className="text-xs bg-white dark:bg-slate-900 p-2.5 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 mb-2">
                <strong className="text-blue-600 dark:text-blue-400">Robotics Function:</strong> {selectedPart.functionInfo}
              </div>
              <div className="text-[11px] font-mono text-slate-500 dark:text-slate-400">
                {selectedPart.details}
              </div>
            </div>
          )}
        </div>

        {/* Right Column: Visual Rover Blueprint & Interactive Dock */}
        <div className="lg:col-span-8 flex flex-col items-center justify-between bg-gradient-to-b from-slate-900 to-slate-950 p-6 rounded-2xl border border-slate-800 text-white relative overflow-hidden min-h-[480px]">
          {/* Blueprint Grid Lines Background */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#dc790012_1px,transparent_1px),linear-gradient(to_bottom,#dc790012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

          {/* Top HUD Telemetry */}
          <div className="w-full flex items-center justify-between z-10 text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className={`w-2.5 h-2.5 rounded-full ${isPoweredOn ? 'bg-emerald-400 animate-ping' : isComplete ? 'bg-amber-400' : 'bg-rose-500'}`} />
              <span className="text-slate-300">
                SYSTEM STATUS: {isPoweredOn ? 'ONLINE & TELEMETRY READY' : isComplete ? 'READY FOR INITIALIZATION' : 'ASSEMBLY REQUIRED'}
              </span>
            </div>
            <div className="text-slate-400">
              VOLTAGE: {installedParts.includes('battery') ? (isPoweredOn ? '7.42 V [STABLE]' : '7.40 V [STANDBY]') : '0.00 V [OFFLINE]'}
            </div>
          </div>

          {/* Blueprint Interactive Chassis Visualization */}
          <div className="my-auto relative w-full max-w-md py-6 flex flex-col items-center z-10">
            {/* Ultrasonic Sensor Dock (Front) */}
            <div
              onClick={() => toggleInstall(ROBOT_COMPONENTS.find(c => c.id === 'sensor'))}
              className={`w-44 py-2.5 px-3 rounded-xl border-2 border-dashed cursor-pointer flex items-center justify-center gap-2 transition-all ${
                installedParts.includes('sensor')
                  ? 'border-purple-400 bg-purple-900/40 text-purple-200 shadow-lg shadow-purple-500/20'
                  : 'border-slate-700 bg-slate-800/40 text-slate-500 hover:border-purple-500 hover:text-purple-300'
              }`}
            >
              <span className="text-xl">👁️</span>
              <span className="text-xs font-semibold">
                {installedParts.includes('sensor') ? 'Ultrasonic Eyes [READY]' : '+ Install Ultrasonic Eyes'}
              </span>
            </div>

            {/* Ultrasonic Sound Waves Animation when powered */}
            {isPoweredOn && installedParts.includes('sensor') && (
              <div className="flex justify-center -mt-1 mb-1">
                <span className="text-xs text-purple-400 animate-pulse font-mono tracking-widest">
                  ))) 40kHz PING (((
                </span>
              </div>
            )}

            {/* Main Central Chassis Platform */}
            <div
              className={`w-64 my-2 p-5 rounded-2xl border-2 transition-all flex flex-col items-center justify-center gap-3 relative ${
                installedParts.includes('chassis')
                  ? 'border-blue-400 bg-blue-950/60 shadow-xl shadow-blue-500/10'
                  : 'border-dashed border-slate-700 bg-slate-800/30 text-slate-500'
              }`}
            >
              {/* Microcontroller Brain Dock */}
              <div
                onClick={() => toggleInstall(ROBOT_COMPONENTS.find(c => c.id === 'controller'))}
                className={`w-full py-2.5 px-3 rounded-lg border-2 border-dashed cursor-pointer flex items-center justify-center gap-2 transition-all ${
                  installedParts.includes('controller')
                    ? 'border-cyan-400 bg-cyan-900/50 text-cyan-200 shadow-md'
                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-cyan-400 hover:text-cyan-200'
                }`}
              >
                <span className="text-lg">🧠</span>
                <span className="text-xs font-semibold">
                  {installedParts.includes('controller') ? 'MCU Controller [BOOTED]' : '+ Slot MCU Brain Board'}
                </span>
              </div>

              {/* Battery Pack Dock */}
              <div
                onClick={() => toggleInstall(ROBOT_COMPONENTS.find(c => c.id === 'battery'))}
                className={`w-full py-2 px-3 rounded-lg border-2 border-dashed cursor-pointer flex items-center justify-center gap-2 transition-all ${
                  installedParts.includes('battery')
                    ? 'border-amber-400 bg-amber-900/50 text-amber-200 shadow-md'
                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-amber-400 hover:text-amber-200'
                }`}
              >
                <span className="text-lg">🔋</span>
                <span className="text-xs font-semibold">
                  {installedParts.includes('battery') ? '7.4V Li-ion Pack [CHARGED]' : '+ Mount Battery Pack'}
                </span>
              </div>

              {/* Drive Motors & Wheels Left and Right */}
              <div
                onClick={() => toggleInstall(ROBOT_COMPONENTS.find(c => c.id === 'motors'))}
                className={`w-full py-2 px-3 rounded-lg border-2 border-dashed cursor-pointer flex items-center justify-center gap-2 transition-all ${
                  installedParts.includes('motors')
                    ? 'border-emerald-400 bg-emerald-900/50 text-emerald-200 shadow-md'
                    : 'border-slate-700 bg-slate-800/50 text-slate-400 hover:border-emerald-400 hover:text-emerald-200'
                }`}
              >
                <span className="text-lg">⚙️</span>
                <span className="text-xs font-semibold">
                  {installedParts.includes('motors') ? 'Dual DC Motors & Wheels [LINKED]' : '+ Attach Dual DC Motors'}
                </span>
              </div>
            </div>

            {/* Rear Caster Swivel Wheel */}
            <div className="w-16 h-6 rounded-full border border-slate-700 bg-slate-800/60 flex items-center justify-center text-[10px] text-slate-400">
              Caster
            </div>
          </div>

          {/* Action Footer & Power Controls */}
          <div className="w-full flex flex-wrap items-center justify-between gap-4 z-10 pt-4 border-t border-slate-800">
            <div>
              {isPoweredOn ? (
                <div className="text-emerald-400 font-bold text-sm flex items-center gap-2">
                  <span>🎉 Robot Fully Assembled and Operational!</span>
                </div>
              ) : isComplete ? (
                <div className="text-amber-400 font-semibold text-sm">
                  ⚡ All 5 components installed. Ready to fire up the system!
                </div>
              ) : (
                <div className="text-slate-400 text-xs">
                  Tip: Mount all {ROBOT_COMPONENTS.length} subsystems to enable the system power test.
                </div>
              )}
            </div>

            <button
              onClick={handlePowerOn}
              disabled={!isComplete}
              className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2 shadow-lg ${
                isComplete
                  ? isPoweredOn
                    ? 'bg-emerald-500 hover:bg-emerald-600 text-slate-950 shadow-emerald-500/20'
                    : 'bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 text-white shadow-blue-500/25'
                  : 'bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700'
              }`}
            >
              <span>{isPoweredOn ? '✓ System Online' : '⚡ Power On & Diagnostic Run'}</span>
            </button>
          </div>
        </div>
      </div>

      {/* Diagnostics / Completed Report Modal */}
      {showDiagnostic && (
        <div className="mt-6 p-5 rounded-xl bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-slate-800 dark:to-slate-850 border border-blue-200 dark:border-blue-900/50">
          <div className="flex items-start justify-between">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xl">🏆</span>
                <h4 className="font-bold text-slate-900 dark:text-white text-base">
                  Hardware Diagnostic Passed: All Subsystems Integrated!
                </h4>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed mb-3">
                Your rover has passed pre-flight electrical diagnostics. The <strong>Battery</strong> provides regulated 7.4V, the <strong>Microcontroller</strong> boots the bootloader, the <strong>Ultrasonic Sensor</strong> is echoing range sweeps, and the <strong>H-Bridge</strong> is ready to drive the <strong>Dual DC Motors</strong>.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-[10px]">CURRENT DRAW</div>
                  <div className="font-mono font-bold text-emerald-600 dark:text-emerald-400">120 mA (IDLE)</div>
                </div>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-[10px]">SONAR ECHO</div>
                  <div className="font-mono font-bold text-purple-600 dark:text-purple-400">CLEAR 180cm</div>
                </div>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-[10px]">H-BRIDGE PWM</div>
                  <div className="font-mono font-bold text-cyan-600 dark:text-cyan-400">ARMED (0%)</div>
                </div>
                <div className="p-2 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
                  <div className="text-slate-500 text-[10px]">ACTIVITY BADGE</div>
                  <div className="font-mono font-bold text-blue-600 dark:text-blue-400">UNLOCKED ✓</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
