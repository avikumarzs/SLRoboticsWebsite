import React, { useState } from 'react';

// Educational SVG illustrations and visual definitions for Key Engineering Concepts
// Tailored for students in Grades 5 and 6 (and fallbacks for higher grades)
const CONCEPT_DATA = {
  // ================= GRADE 5: SENSE-THINK-ACT & SIMPLE MACHINES =================
  'sense-think-act loop': {
    title: 'Sense-Think-Act Loop',
    tag: 'Core Robotics Cycle',
    color: 'from-amber-500/20 to-blue-500/20 border-amber-500/40 text-amber-300',
    caption: 'Sensors detect surroundings → Microchip brain computes → Motors & actuators take action!',
    details: 'Every autonomous robot repeats this 3-step loop continuously thousands of times every second to navigate and react to the world.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        {/* Outer Loop Track */}
        <circle cx="120" cy="70" r="50" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
        
        {/* Sense Node (Top Left) */}
        <g transform="translate(65, 35)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
          <path d="M-8 -2 Q0 -10 8 -2 Q0 6 -8 -2 Z" fill="#06b6d4" />
          <circle cx="0" cy="-2" r="3" fill="#ffffff" />
          {/* Sonar waves */}
          <path d="M12 -8 A12 12 0 0 1 12 4" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="0" y="32" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">1. SENSE</text>
        </g>

        {/* Think Node (Top Right) */}
        <g transform="translate(175, 35)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
          {/* Microchip icon */}
          <rect x="-9" y="-9" width="18" height="18" rx="3" fill="#f59e0b" />
          <rect x="-6" y="-6" width="12" height="12" fill="#0f172a" />
          <line x1="-9" y1="-4" x2="-13" y2="-4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="-9" y1="4" x2="-13" y2="4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="9" y1="-4" x2="13" y2="-4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="9" y1="4" x2="13" y2="4" stroke="#f59e0b" strokeWidth="2" />
          <text x="0" y="32" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">2. THINK</text>
        </g>

        {/* Act Node (Bottom Center) */}
        <g transform="translate(120, 105)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
          {/* Gear icon */}
          <circle cx="0" cy="0" r="9" fill="#10b981" />
          <circle cx="0" cy="0" r="4" fill="#0f172a" />
          <rect x="-2" y="-12" width="4" height="24" rx="1" fill="#10b981" />
          <rect x="-12" y="-2" width="24" height="4" rx="1" fill="#10b981" />
          <text x="0" y="30" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">3. ACT</text>
        </g>

        {/* Directional Curved Arrows */}
        <path d="M90 28 Q120 18 150 28" fill="none" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M182 58 Q170 95 145 106" fill="none" stroke="#10b981" strokeWidth="2.5" />
        <path d="M95 106 Q70 95 58 58" fill="none" stroke="#06b6d4" strokeWidth="2.5" />
      </svg>
    )
  },

  'automation vs remote control': {
    title: 'Automation vs Remote Control',
    tag: 'Autonomy Spectrum',
    color: 'from-blue-500/20 to-purple-500/20 border-blue-500/40 text-blue-300',
    caption: 'Remote control needs a human joystick; autonomous robots use sensors to decide alone.',
    details: 'While an RC toy car halts when you drop the controller, an automated robot senses a wall and steers away without human intervention.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        {/* Left: Remote Control */}
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="95" height="110" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          <text x="47" y="16" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">MANUAL (RC)</text>
          {/* Joystick gamepad */}
          <rect x="18" y="26" width="60" height="34" rx="10" fill="#334155" />
          <circle cx="34" cy="43" r="6" fill="#64748b" />
          <circle cx="62" cy="43" r="3" fill="#ef4444" />
          <circle cx="68" cy="37" r="3" fill="#3b82f6" />
          {/* Radio waves */}
          <path d="M47 24 L47 18" stroke="#f59e0b" strokeWidth="2" />
          <path d="M42 66 Q47 70 52 66" stroke="#f59e0b" strokeWidth="2" fill="none" />
          {/* Mini RC Car */}
          <rect x="25" y="80" width="46" height="18" rx="4" fill="#3b82f6" />
          <circle cx="35" cy="100" r="5" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="61" cy="100" r="5" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <text x="47" y="74" fill="#cbd5e1" fontSize="7" textAnchor="middle">Human Guided</text>
        </g>

        {/* VS divider */}
        <text x="120" y="75" fill="#f59e0b" fontSize="12" fontWeight="black" textAnchor="middle">VS</text>

        {/* Right: Autonomous Robot */}
        <g transform="translate(130, 15)">
          <rect x="0" y="0" width="95" height="110" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="47" y="16" fill="#22d3ee" fontSize="8" fontWeight="bold" textAnchor="middle">AUTONOMOUS</text>
          {/* Robot with Sensor Eyes */}
          <rect x="25" y="45" width="46" height="28" rx="6" fill="#0284c7" />
          <circle cx="36" cy="54" r="5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="60" cy="54" r="5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="36" cy="54" r="2" fill="#0ea5e9" />
          <circle cx="60" cy="54" r="2" fill="#0ea5e9" />
          {/* Sonar Beam */}
          <path d="M72 48 L86 42 M72 59 L86 65" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
          {/* Wheels */}
          <circle cx="33" cy="75" r="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <circle cx="63" cy="75" r="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="47" y="96" fill="#38bdf8" fontSize="7" fontWeight="bold" textAnchor="middle">Self-Deciding ⚡</text>
        </g>
      </svg>
    )
  },

  'everyday robots': {
    title: 'Everyday Robots',
    tag: 'Real-World Robotics',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Robots clean homes, build automobiles in factories, and explore distant planets.',
    details: 'Robotics isn’t just science fiction—robotic vacuum cleaners, factory assembly arms, and Mars rovers are hard at work today.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        {/* Floor Cleaner Vacuum */}
        <g transform="translate(15, 30)">
          <circle cx="30" cy="40" r="26" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <circle cx="30" cy="40" r="14" fill="#0f172a" />
          <circle cx="30" cy="30" r="4" fill="#10b981" />
          <path d="M26 48 L34 48" stroke="#34d399" strokeWidth="2" strokeLinecap="round" />
          <text x="30" y="80" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">Vacuum Bot</text>
        </g>

        {/* Industrial Robotic Arm */}
        <g transform="translate(85, 20)">
          <rect x="25" y="85" width="30" height="8" rx="2" fill="#475569" />
          <line x1="40" y1="85" x2="35" y2="55" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <circle cx="35" cy="55" r="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <line x1="35" y1="55" x2="52" y2="35" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <circle cx="52" cy="35" r="3.5" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <path d="M52 35 L60 27 M52 35 L60 43" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <text x="40" y="102" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">Factory Arm</text>
        </g>

        {/* Planetary Rover */}
        <g transform="translate(160, 25)">
          <rect x="15" y="45" width="45" height="22" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <line x1="28" y1="45" x2="28" y2="28" stroke="#cbd5e1" strokeWidth="2.5" />
          <rect x="23" y="24" width="10" height="7" rx="2" fill="#e2e8f0" />
          <circle cx="28" cy="27.5" r="2" fill="#0284c7" />
          <circle cx="22" cy="74" r="6" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="38" cy="74" r="6" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="54" cy="74" r="6" fill="#1e293b" stroke="#cbd5e1" strokeWidth="2" />
          <text x="38" y="95" fill="#bae6fd" fontSize="8" fontWeight="bold" textAnchor="middle">Mars Rover</text>
        </g>
      </svg>
    )
  },

  'levers & fulcrums': {
    title: 'Levers & Fulcrums',
    tag: 'Simple Machines',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'A rigid beam pivoting on a fulcrum allows a small effort to lift a heavy load.',
    details: 'Just like a playground seesaw, placing the pivot fulcrum closer to the load allows robot gripper arms to apply immense gripping pressure.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="20" y1="110" x2="220" y2="110" stroke="#334155" strokeWidth="3" />
        <polygon points="100,108 85,85 115,85" fill="#f59e0b" stroke="#b45309" strokeWidth="2" />
        <text x="100" y="125" fill="#f59e0b" fontSize="8" fontWeight="bold" textAnchor="middle">FULCRUM</text>
        <line x1="30" y1="70" x2="200" y2="98" stroke="#38bdf8" strokeWidth="7" strokeLinecap="round" />
        <rect x="35" y="44" width="28" height="24" rx="3" fill="#ea580c" stroke="#fed7aa" strokeWidth="1.5" />
        <text x="49" y="60" fill="#ffffff" fontSize="9" fontWeight="black" textAnchor="middle">LOAD</text>
        <path d="M49 32 L49 42" stroke="#ea580c" strokeWidth="2.5" />
        <path d="M190 65 L190 92" stroke="#10b981" strokeWidth="3" strokeLinecap="round" />
        <polygon points="186,88 190,96 194,88" fill="#10b981" />
        <text x="190" y="58" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">EFFORT ↓</text>
      </svg>
    )
  },

  'wheels & axles': {
    title: 'Wheels & Axles',
    tag: 'Motion Dynamics',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Rolling reduces friction dramatically compared to dragging a flat surface across the floor.',
    details: 'A wheel rotates around a central axle shaft. Converting sliding friction into smooth rolling friction enables mobile rovers to move efficiently.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="20" y1="115" x2="220" y2="115" stroke="#334155" strokeWidth="3" />
        <g transform="translate(100, 65)">
          <circle cx="0" cy="0" r="44" fill="#1e293b" stroke="#0ea5e9" strokeWidth="4" />
          <circle cx="0" cy="0" r="38" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="6 4" />
          <line x1="-36" y1="0" x2="36" y2="0" stroke="#0ea5e9" strokeWidth="3" />
          <line x1="0" y1="-36" x2="0" y2="36" stroke="#0ea5e9" strokeWidth="3" />
          <line x1="-25" y1="-25" x2="25" y2="25" stroke="#0ea5e9" strokeWidth="3" />
          <line x1="-25" y1="25" x2="25" y2="-25" stroke="#0ea5e9" strokeWidth="3" />
          <circle cx="0" cy="0" r="14" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="5" fill="#0f172a" />
          <path d="M28 -28 A40 40 0 0 1 36 15" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="34,18 41,17 38,10" fill="#22d3ee" />
        </g>
        <g transform="translate(160, 65)">
          <rect x="0" y="-8" width="55" height="16" rx="4" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <text x="27" y="4" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">AXLE</text>
          <text x="27" y="24" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Rolling Friction</text>
        </g>
      </svg>
    )
  },

  'pulleys & inclines': {
    title: 'Pulleys & Inclines',
    tag: 'Force Redirection',
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-300',
    caption: 'Pulleys redirect lifting cables; ramps allow rovers to climb heights with less peak motor force.',
    details: 'Robotic elevators and arm winches use pulleys to redirect cable tension, while inclined ramps let rovers conquer height over distance.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(20, 15)">
          <line x1="20" y1="10" x2="65" y2="10" stroke="#475569" strokeWidth="3" />
          <line x1="42" y1="10" x2="42" y2="28" stroke="#94a3b8" strokeWidth="2" />
          <circle cx="42" cy="38" r="14" fill="#1e293b" stroke="#818cf8" strokeWidth="2.5" />
          <circle cx="42" cy="38" r="4" fill="#f59e0b" />
          <path d="M28 38 L28 85 M56 38 L56 75" stroke="#fcd34d" strokeWidth="2" />
          <rect x="18" y="85" width="20" height="20" rx="3" fill="#6366f1" />
          <text x="28" y="98" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">LOAD</text>
          <path d="M56 75 L56 95" stroke="#34d399" strokeWidth="2.5" />
          <polygon points="53,92 56,98 59,92" fill="#34d399" />
          <text x="42" y="118" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">Pulley Hoist</text>
        </g>
        <line x1="105" y1="20" x2="105" y2="120" stroke="#334155" strokeWidth="1" strokeDasharray="3 3" />
        <g transform="translate(125, 20)">
          <polygon points="10,95 90,95 90,35" fill="#1e293b" stroke="#818cf8" strokeWidth="2" />
          <text x="50" y="85" fill="#94a3b8" fontSize="8" textAnchor="middle">Ramp</text>
          <g transform="translate(50, 60) rotate(-37)">
            <rect x="-14" y="-8" width="28" height="12" rx="3" fill="#0284c7" />
            <circle cx="-8" cy="8" r="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <circle cx="8" cy="8" r="4" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
            <path d="M-12 -14 L12 -14" stroke="#10b981" strokeWidth="2.5" />
            <polygon points="9,-17 16,-14 9,-11" fill="#10b981" />
          </g>
          <text x="50" y="112" fill="#a5b4fc" fontSize="8" fontWeight="bold" textAnchor="middle">Inclined Climb</text>
        </g>
      </svg>
    )
  },

  'mechanical advantage': {
    title: 'Mechanical Advantage',
    tag: 'Force Multiplier',
    color: 'from-amber-500/20 to-emerald-500/20 border-amber-500/40 text-amber-300',
    caption: 'Using simple machines to multiply input force so small motors can lift heavy loads.',
    details: 'Mechanical Advantage = Output Force ÷ Input Force. A ratio greater than 1 means you need far less effort to complete tough physical tasks.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <polygon points="120,110 108,80 132,80" fill="#475569" stroke="#64748b" strokeWidth="1.5" />
        <line x1="40" y1="80" x2="200" y2="80" stroke="#38bdf8" strokeWidth="5" strokeLinecap="round" />
        <circle cx="120" cy="80" r="4" fill="#f59e0b" />
        <g transform="translate(60, 48)">
          <rect x="-16" y="0" width="32" height="24" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="0" y="15" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">1x Force</text>
          <path d="M0 -15 L0 -2" stroke="#38bdf8" strokeWidth="2" />
          <text x="0" y="-18" fill="#38bdf8" fontSize="8" textAnchor="middle">Input Effort</text>
        </g>
        <g transform="translate(170, 36)">
          <rect x="-22" y="0" width="44" height="36" rx="5" fill="#10b981" stroke="#34d399" strokeWidth="1.5" />
          <text x="0" y="21" fill="#ffffff" fontSize="11" fontWeight="black" textAnchor="middle">3x Load</text>
          <text x="0" y="-10" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Lifts 3x More!</text>
        </g>
        <rect x="80" y="10" width="80" height="20" rx="10" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="120" y="24" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">MA = 3.0 Ratio</text>
      </svg>
    )
  },

  'chassis': {
    title: 'Robot Chassis',
    tag: 'Structural Skeleton',
    color: 'from-slate-600/20 to-blue-600/20 border-slate-500/40 text-blue-300',
    caption: 'The sturdy structural body that securely mounts motors, wheels, sensors, and the battery.',
    details: 'Just as bones support muscles and organs in the human body, the chassis anchors all robotic hardware firmly in place.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 68)">
          <polygon points="-70,-10 0,-35 70,-10 0,22" fill="#1e293b" stroke="#38bdf8" strokeWidth="2.5" />
          <line x1="-55" y1="-8" x2="-55" y2="-28" stroke="#64748b" strokeWidth="3" />
          <line x1="55" y1="-8" x2="55" y2="-28" stroke="#64748b" strokeWidth="3" />
          <line x1="0" y1="18" x2="0" y2="-4" stroke="#64748b" strokeWidth="3" />
          <polygon points="-65,-30 0,-52 65,-30 0,-6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" strokeDasharray="4 2" />
          <rect x="-85" y="-5" width="16" height="28" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="69" y="-5" width="16" height="28" rx="4" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <circle cx="0" cy="-45" r="5" fill="#f59e0b" />
          <text x="0" y="44" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Main Structural Frame</text>
        </g>
      </svg>
    )
  },

  'dc motors': {
    title: 'DC Motors',
    tag: 'Rotational Muscle',
    color: 'from-amber-500/20 to-red-500/20 border-amber-500/40 text-amber-300',
    caption: 'Direct Current motors convert electrical battery power into continuous spinning wheel motion.',
    details: 'Applying positive and negative voltage spins the motor shaft. Reversing the wiring polarity causes the motor to spin backward!',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(100, 65)">
          <rect x="-45" y="-24" width="75" height="48" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
          <rect x="30" y="-6" width="35" height="12" rx="2" fill="#cbd5e1" stroke="#94a3b8" strokeWidth="1.5" />
          <rect x="-55" y="-16" width="10" height="8" rx="2" fill="#ef4444" />
          <text x="-50" y="-10" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">+</text>
          <rect x="-55" y="8" width="10" height="8" rx="2" fill="#0284c7" />
          <text x="-50" y="14" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">-</text>
          <line x1="-30" y1="-15" x2="15" y2="-15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          <line x1="-30" y1="15" x2="15" y2="15" stroke="#f59e0b" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M48 -22 A18 18 0 1 1 48 22" stroke="#22d3ee" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="50,22 44,27 45,18" fill="#22d3ee" />
          <text x="0" y="44" fill="#fcd34d" fontSize="9" fontWeight="bold" textAnchor="middle">Continuous 360° Spin</text>
        </g>
      </svg>
    )
  },

  'microcontroller': {
    title: 'Microcontroller (MCU)',
    tag: 'Robot Brain',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    caption: 'The computer chip that reads sensor data, executes software logic, and commands motors.',
    details: 'Equipped with CPU, memory, and General Purpose Input/Output (GPIO) pins to interface with the physical world in real time.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-42" y="-35" width="84" height="70" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2.5" />
          <rect x="-24" y="-20" width="48" height="40" rx="4" fill="#1e293b" stroke="#38bdf8" strokeWidth="1" />
          <text x="0" y="4" fill="#38bdf8" fontSize="10" fontWeight="black" textAnchor="middle">CPU BRAIN</text>
          <circle cx="28" cy="-20" r="3" fill="#10b981" />
          {[-25, -12, 0, 12, 25].map((y, i) => (
            <React.Fragment key={i}>
              <line x1="-42" y1={y} x2="-52" y2={y} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
              <line x1="42" y1={y} x2="52" y2={y} stroke="#94a3b8" strokeWidth="3" strokeLinecap="round" />
            </React.Fragment>
          ))}
          <text x="0" y="52" fill="#7dd3fc" fontSize="9" fontWeight="bold" textAnchor="middle">GPIO & Logic Controller</text>
        </g>
      </svg>
    )
  },

  'ultrasonic sensor': {
    title: 'Ultrasonic Distance Sensor',
    tag: 'Robot Eyes & Ears',
    color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Emits 40 kHz high-frequency sound pings and times the return echo to measure obstacle distance.',
    details: 'Operates exactly like bat echolocation. Distance = (Echo Duration × Speed of Sound) ÷ 2.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(60, 65)">
          <rect x="-25" y="-35" width="50" height="70" rx="6" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="0" cy="-18" r="14" fill="#334155" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="0" cy="-18" r="7" fill="#0f172a" />
          <text x="-1" y="-15" fill="#5eead4" fontSize="7" fontWeight="bold" textAnchor="middle">T</text>
          <circle cx="0" cy="18" r="14" fill="#334155" stroke="#cbd5e1" strokeWidth="2.5" />
          <circle cx="0" cy="18" r="7" fill="#0f172a" />
          <text x="-1" y="21" fill="#5eead4" fontSize="7" fontWeight="bold" textAnchor="middle">R</text>
        </g>
        <g transform="translate(90, 47)">
          <path d="M10 -15 A20 20 0 0 1 10 15" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M25 -22 A35 35 0 0 1 25 22" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
          <path d="M40 -30 A50 50 0 0 1 40 30" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" strokeDasharray="3 3" />
        </g>
        <g transform="translate(175, 25)">
          <rect x="0" y="5" width="16" height="80" rx="3" fill="#ea580c" stroke="#fed7aa" strokeWidth="1.5" />
          <text x="8" y="48" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle" transform="rotate(90 8 48)">OBSTACLE</text>
        </g>
        <text x="120" y="125" fill="#5eead4" fontSize="9" fontWeight="bold" textAnchor="middle">Sound Wave Echo Bounce</text>
      </svg>
    )
  },

  'rechargeable battery': {
    title: 'Rechargeable Battery',
    tag: 'Robot Heart & Energy',
    color: 'from-emerald-500/20 to-lime-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Stores chemical potential energy and supplies clean direct current voltage to drive components.',
    details: 'Powers both sensitive 5V microchips and high-current 6V–12V DC drive motors without brownouts.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(110, 65)">
          <rect x="-55" y="-24" width="100" height="48" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" />
          <rect x="45" y="-10" width="10" height="20" rx="3" fill="#cbd5e1" />
          <rect x="-42" y="-14" width="18" height="28" rx="3" fill="#10b981" />
          <rect x="-20" y="-14" width="18" height="28" rx="3" fill="#10b981" />
          <rect x="2" y="-14" width="18" height="28" rx="3" fill="#10b981" />
          <rect x="24" y="-14" width="14" height="28" rx="3" fill="#334155" />
          <polygon points="-8,-4 0,-14 6,-14 -1,-2 7,-2 -4,12 0,0 -8,-4" fill="#fbbf24" stroke="#0f172a" strokeWidth="1" />
          <text x="-5" y="45" fill="#86efac" fontSize="9" fontWeight="bold" textAnchor="middle">7.4V Li-Ion Power Pack</text>
        </g>
      </svg>
    )
  },

  // ================= GRADE 6: GEARS, MOTORS & DIFFERENTIAL STEERING =================
  'driver & driven gears': {
    title: 'Driver & Driven Gears',
    tag: 'Mechanical Meshing',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'Intermeshed external gears always rotate in OPPOSITE directions! Driver powers Driven.',
    details: 'When Gear A rotates clockwise, its interlocking teeth push Gear B counter-clockwise.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(75, 65)">
          <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#f59e0b" strokeWidth="3" />
          <circle cx="0" cy="0" r="12" fill="#f59e0b" />
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
            <rect key={i} x="-3" y="-38" width="6" height="10" rx="1.5" fill="#f59e0b" transform={`rotate(${angle})`} />
          ))}
          <path d="M-18 -18 A24 24 0 0 1 18 -18" stroke="#38bdf8" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="16,-22 22,-16 16,-12" fill="#38bdf8" />
          <text x="0" y="4" fill="#0f172a" fontSize="8" fontWeight="black" textAnchor="middle">M</text>
          <text x="0" y="50" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">DRIVER (CW ↻)</text>
        </g>
        <g transform="translate(145, 65)">
          <circle cx="0" cy="0" r="32" fill="#1e293b" stroke="#0ea5e9" strokeWidth="3" />
          <circle cx="0" cy="0" r="12" fill="#0ea5e9" />
          {[22.5, 67.5, 112.5, 157.5, 202.5, 247.5, 292.5, 337.5].map((angle, i) => (
            <rect key={i} x="-3" y="-38" width="6" height="10" rx="1.5" fill="#0ea5e9" transform={`rotate(${angle})`} />
          ))}
          <path d="M18 -18 A24 24 0 0 0 -18 -18" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="-16,-22 -22,-16 -16,-12" fill="#f59e0b" />
          <text x="0" y="4" fill="#0f172a" fontSize="8" fontWeight="black" textAnchor="middle">W</text>
          <text x="0" y="50" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">DRIVEN (CCW ↺)</text>
        </g>
      </svg>
    )
  },

  'gear ratios': {
    title: 'Gear Ratios & Torque',
    tag: 'Force vs Speed Multiplier',
    color: 'from-orange-500/20 to-amber-500/20 border-orange-500/40 text-orange-300',
    caption: 'Small motor gear driving a large wheel gear increases output torque while lowering speed.',
    details: 'Gear Ratio = Teeth on Driven ÷ Teeth on Driver. A 3:1 ratio multiplies pulling torque by 3x!',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(60, 68)">
          <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="6" fill="#f59e0b" />
          <text x="0" y="-26" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">10 Teeth</text>
          <text x="0" y="32" fill="#94a3b8" fontSize="7" textAnchor="middle">Fast (3x Speed)</text>
        </g>
        <g transform="translate(135, 68)">
          <circle cx="0" cy="0" r="44" fill="#1e293b" stroke="#10b981" strokeWidth="3" />
          <circle cx="0" cy="0" r="14" fill="#10b981" />
          <text x="0" y="4" fill="#0f172a" fontSize="8" fontWeight="bold" textAnchor="middle">WHEEL</text>
          <text x="0" y="-52" fill="#86efac" fontSize="8" fontWeight="bold" textAnchor="middle">30 Teeth</text>
          <text x="0" y="58" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">3x More Torque!</text>
        </g>
        <rect x="180" y="30" width="55" height="42" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="207" y="46" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Ratio 3:1</text>
        <text x="207" y="62" fill="#38bdf8" fontSize="7" textAnchor="middle">30 ÷ 10</text>
      </svg>
    )
  },

  'torque vs speed': {
    title: 'Torque vs Speed Trade-off',
    tag: 'Mechanical Physics',
    color: 'from-red-500/20 to-orange-500/20 border-red-500/40 text-red-300',
    caption: 'You cannot get free energy: high torque gives immense climbing power at lower top speed.',
    details: 'Heavy robotic rovers use gear reduction boxes to gain torque to climb ramps and traverse thick carpets.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(20, 20)">
          <rect x="0" y="0" width="90" height="98" rx="6" fill="#0f172a" stroke="#ea580c" strokeWidth="1.5" />
          <text x="45" y="16" fill="#fb923c" fontSize="8" fontWeight="bold" textAnchor="middle">HIGH TORQUE 🏔️</text>
          <polygon points="15,75 75,75 75,35" fill="#1e293b" stroke="#f97316" strokeWidth="1" />
          <circle cx="50" cy="50" r="8" fill="#ea580c" />
          <text x="45" y="88" fill="#fed7aa" fontSize="7" textAnchor="middle">Heavy Climbing Force</text>
        </g>
        <g transform="translate(130, 20)">
          <rect x="0" y="0" width="90" height="98" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="45" y="16" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">HIGH SPEED 🏎️</text>
          <path d="M25 65 A25 25 0 0 1 65 65" stroke="#38bdf8" strokeWidth="4" fill="none" />
          <line x1="45" y1="65" x2="60" y2="45" stroke="#ef4444" strokeWidth="2.5" strokeLinecap="round" />
          <text x="45" y="88" fill="#bae6fd" fontSize="7" textAnchor="middle">Fast Sprint (Stalls easily)</text>
        </g>
      </svg>
    )
  },

  'idler gears': {
    title: 'Idler Gears',
    tag: 'Direction Preservation',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    caption: 'Placing an idler gear between two gears makes the input and output spin in the same direction!',
    details: 'Gear 1 (Clockwise) → Idler (Counter-Clockwise) → Gear 2 (Clockwise). The idler bridges distance without altering speed ratio.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(45, 65)">
          <circle cx="0" cy="0" r="24" fill="#1e293b" stroke="#f59e0b" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="8" fill="#f59e0b" />
          <text x="0" y="3" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">G1</text>
          <text x="0" y="40" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">CW ↻</text>
        </g>
        <g transform="translate(100, 65)">
          <circle cx="0" cy="0" r="20" fill="#1e293b" stroke="#a855f7" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="7" fill="#a855f7" />
          <text x="0" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">IDLE</text>
          <text x="0" y="40" fill="#e9d5ff" fontSize="7" fontWeight="bold" textAnchor="middle">CCW ↺</text>
        </g>
        <g transform="translate(160, 65)">
          <circle cx="0" cy="0" r="28" fill="#1e293b" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="9" fill="#10b981" />
          <text x="0" y="3" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">G2</text>
          <text x="0" y="44" fill="#86efac" fontSize="7" fontWeight="bold" textAnchor="middle">CW ↻ (Matched!)</text>
        </g>
      </svg>
    )
  },

  'dc motor': {
    title: 'DC Motor',
    tag: 'Continuous Rotation',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Spins continuously in full 360° revolutions when voltage is applied; ideal for rover wheels.',
    details: 'Has two wire terminals. Reversing polarity reverses the spin direction.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(100, 65)">
          <rect x="-40" y="-22" width="70" height="44" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <rect x="30" y="-6" width="30" height="12" rx="2" fill="#cbd5e1" />
          <path d="M45 -22 A18 18 0 1 1 45 22" stroke="#38bdf8" strokeWidth="3" fill="none" />
          <polygon points="46,22 40,26 42,17" fill="#38bdf8" />
          <text x="0" y="44" fill="#fde68a" fontSize="9" fontWeight="bold" textAnchor="middle">Continuous 360° Drive</text>
        </g>
      </svg>
    )
  },

  'servo motor': {
    title: 'Servo Motor',
    tag: 'Precision Angular Arm',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300',
    caption: 'Rotates to an exact programmed angle (typically 0° to 180°); ideal for steering and robotic grippers.',
    details: 'Contains an internal DC motor, gear reduction train, potentiometer feedback, and micro control circuit.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(85, 75)">
          <rect x="-35" y="-28" width="70" height="56" rx="6" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <rect x="-42" y="-20" width="84" height="8" rx="2" fill="#475569" />
          <circle cx="15" cy="-28" r="10" fill="#0f172a" stroke="#60a5fa" strokeWidth="2" />
          <line x1="15" y1="-28" x2="45" y2="-55" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <circle cx="15" cy="-28" r="4" fill="#f59e0b" />
        </g>
        <g transform="translate(100, 47)">
          <path d="M-35 0 A35 35 0 0 1 35 0" stroke="#38bdf8" strokeWidth="2" fill="none" strokeDasharray="3 3" />
          <text x="-40" y="5" fill="#94a3b8" fontSize="7">0°</text>
          <text x="0" y="-38" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">90°</text>
          <text x="38" y="5" fill="#94a3b8" fontSize="7">180°</text>
          <text x="35" y="-18" fill="#f59e0b" fontSize="8" fontWeight="bold">Angle (45°)</text>
        </g>
        <text x="120" y="125" fill="#93c5fd" fontSize="9" fontWeight="bold" textAnchor="middle">0° – 180° Precision Control</text>
      </svg>
    )
  },

  'electromagnetism': {
    title: 'Electromagnetism',
    tag: 'Physics of Motors',
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-300',
    caption: 'Electric current flowing through a copper coil creates an invisible magnetic field with North & South poles.',
    details: 'Opposite magnetic poles attract and like poles repel. Rapidly toggling magnetic poles causes motor rotors to spin continuously.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-50" y="-14" width="100" height="28" rx="4" fill="#475569" stroke="#94a3b8" strokeWidth="1.5" />
          {[-35, -20, -5, 10, 25].map((x, i) => (
            <ellipse key={i} cx={x} cy="0" rx="6" ry="20" fill="none" stroke="#f59e0b" strokeWidth="3" />
          ))}
          <path d="M-45 -22 C-20 -45 20 -45 45 -22" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M-45 22 C-20 45 20 45 45 22" fill="none" stroke="#818cf8" strokeWidth="2" strokeDasharray="3 3" />
          <text x="-40" y="5" fill="#ef4444" fontSize="12" fontWeight="black" textAnchor="middle">N</text>
          <text x="40" y="5" fill="#3b82f6" fontSize="12" fontWeight="black" textAnchor="middle">S</text>
          <text x="0" y="48" fill="#c7d2fe" fontSize="9" fontWeight="bold" textAnchor="middle">Current Creates Magnetic Field</text>
        </g>
      </svg>
    )
  },

  'rotational degrees': {
    title: 'Rotational Degrees (0°–180°)',
    tag: 'Joint Angles',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Angles measured in degrees dictate exact positions for robotic arms, steering knuckles, and grippers.',
    details: 'A full circle contains 360°. Educational servos move between 0° (flat), 90° (upright), and 180° (opposite flat).',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 85)">
          <path d="M-60 0 A60 60 0 0 1 60 0 Z" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="0" cy="0" r="6" fill="#f59e0b" />
          <line x1="0" y1="0" x2="0" y2="-60" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="0" y="-65" fill="#fcd34d" fontSize="8" fontWeight="bold" textAnchor="middle">90°</text>
          <line x1="0" y1="0" x2="-42" y2="-42" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="-45" y="-48" fill="#7dd3fc" fontSize="7" textAnchor="middle">45°</text>
          <line x1="0" y1="0" x2="42" y2="-42" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
          <text x="48" y="-48" fill="#7dd3fc" fontSize="7" textAnchor="middle">135°</text>
          <text x="-70" y="4" fill="#94a3b8" fontSize="8">0°</text>
          <text x="65" y="4" fill="#94a3b8" fontSize="8">180°</text>
          <text x="0" y="24" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Precision Joint Geometry</text>
        </g>
      </svg>
    )
  },

  'two-wheel drive': {
    title: 'Differential Two-Wheel Drive',
    tag: 'Chassis Kinematics',
    color: 'from-blue-500/20 to-teal-500/20 border-blue-500/40 text-blue-300',
    caption: 'Two independently motorized side wheels combined with a passive caster wheel for agility.',
    details: 'Because each side motor has its own speed and direction control, the robot can drive straight, carve curves, or spin in place.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-40" y="-30" width="80" height="60" rx="10" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <rect x="-56" y="-22" width="14" height="44" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="-49" y="4" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">M1</text>
          <rect x="42" y="-22" width="14" height="44" rx="4" fill="#0284c7" stroke="#38bdf8" strokeWidth="1.5" />
          <text x="49" y="4" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">M2</text>
          <circle cx="0" cy="22" r="7" fill="#f59e0b" stroke="#b45309" strokeWidth="1.5" />
          <text x="0" y="-12" fill="#7dd3fc" fontSize="8" textAnchor="middle">Front Ultrasonic Eyes 👁️</text>
          <text x="0" y="48" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">2 Motors + 1 Balance Caster</text>
        </g>
      </svg>
    )
  },

  'pivot turns': {
    title: 'Pivot Turns',
    tag: 'Steering Maneuver',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'Stop one wheel while driving the opposite wheel forward to swing around the stationary wheel.',
    details: 'Left Motor: ON (Forward) + Right Motor: OFF (Stopped/Braked) = Tight right pivot turn!',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="8" fill="#1e293b" stroke="#475569" strokeWidth="1.5" />
          <rect x="-50" y="-18" width="12" height="36" rx="3" fill="#10b981" />
          <path d="M-44 -24 L-44 -36" stroke="#10b981" strokeWidth="2.5" />
          <polygon points="-47,-34 -44,-40 -41,-34" fill="#10b981" />
          <text x="-44" y="2" fill="#0f172a" fontSize="7" fontWeight="bold" textAnchor="middle">RUN</text>
          <rect x="38" y="-18" width="12" height="36" rx="3" fill="#ef4444" />
          <text x="44" y="2" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">STOP</text>
          <circle cx="44" cy="0" r="16" fill="none" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
          <path d="M-30 -35 Q10 -60 40 -35" stroke="#f59e0b" strokeWidth="3" fill="none" strokeLinecap="round" />
          <polygon points="38,-38 45,-33 39,-28" fill="#f59e0b" />
          <text x="0" y="44" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Swings Around Stopped Wheel</text>
        </g>
      </svg>
    )
  },

  'spin on the spot': {
    title: 'Spin on the Spot (Zero-Radius Turn)',
    tag: 'Advanced Agility',
    color: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Left wheel drives FORWARD while right wheel drives REVERSE at equal speed!',
    details: 'Because the forces are equal and opposite, the rover spins 360° around its central axis without traveling forward.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="8" fill="#1e293b" stroke="#06b6d4" strokeWidth="2" />
          <rect x="-50" y="-18" width="12" height="36" rx="3" fill="#10b981" />
          <path d="M-44 -22 L-44 -36" stroke="#10b981" strokeWidth="3" />
          <polygon points="-48,-34 -44,-42 -40,-34" fill="#10b981" />
          <rect x="38" y="-18" width="12" height="36" rx="3" fill="#ea580c" />
          <path d="M44 22 L44 36" stroke="#ea580c" strokeWidth="3" />
          <polygon points="40,34 44,42 48,34" fill="#ea580c" />
          <path d="M-15 -15 A22 22 0 1 1 15 15" stroke="#38bdf8" strokeWidth="3" fill="none" />
          <polygon points="12,18 20,15 18,9" fill="#38bdf8" />
          <circle cx="0" cy="0" r="3" fill="#f59e0b" />
          <text x="0" y="44" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Zero Turn Radius (360° Spin)</text>
        </g>
      </svg>
    )
  },

  'caster wheel': {
    title: 'Passive Caster Wheel',
    tag: 'Balance & Low Friction',
    color: 'from-slate-500/20 to-teal-500/20 border-slate-500/40 text-slate-300',
    caption: 'A freely swiveling spherical wheel that supports robot weight without resisting turns.',
    details: 'Just like the wheels beneath shopping carts or office chairs, the caster trails behind drive wheels smoothly in any direction.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <path d="M-14 -25 L14 -25 L8 8 L-8 8 Z" fill="#334155" stroke="#94a3b8" strokeWidth="1.5" />
          <line x1="0" y1="-25" x2="0" y2="-38" stroke="#cbd5e1" strokeWidth="4" />
          <circle cx="0" cy="14" r="18" fill="#f59e0b" stroke="#b45309" strokeWidth="2.5" />
          <circle cx="0" cy="14" r="6" fill="#0f172a" />
          <path d="M-28 14 A28 28 0 0 1 28 14" stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeDasharray="3 3" />
          <text x="0" y="46" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">360° Free Swivel Rotation</text>
        </g>
      </svg>
    )
  }
};

// Generic Fallback Generator for any other grade concept
const getFallbackConcept = (name) => {
  return {
    title: name,
    tag: 'Engineering Principle',
    color: 'from-blue-600/20 to-cyan-600/20 border-cyan-500/30 text-cyan-300',
    caption: `Fundamental concept in robotics and automation engineering: ${name}.`,
    details: `${name} is an essential building block in creating intelligent, reliable robotic systems.`,
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-45" y="-30" width="90" height="60" rx="8" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="0" cy="-6" r="16" fill="#1e293b" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M-6 -6 L6 -6 M0 -12 L0 0" stroke="#f59e0b" strokeWidth="2.5" />
          <text x="0" y="42" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">
            {name.length > 20 ? name.slice(0, 18) + '...' : name}
          </text>
        </g>
      </svg>
    )
  };
};

export default function KeyConceptVisuals({ concepts = [], grade = 5 }) {
  const [activeConcept, setActiveConcept] = useState(null);
  const [viewMode, setViewMode] = useState('cards'); // 'cards' or 'compact'

  if (!concepts || concepts.length === 0) return null;

  return (
    <div className="mb-8 rounded-2xl bg-gradient-to-b from-slate-950/80 to-slate-900/80 border border-slate-800 p-5 shadow-xl">
      {/* Header with View Toggle */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-4 pb-3 border-b border-slate-800/80">
        <div>
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <h3 className="text-sm font-bold uppercase tracking-wider text-cyan-300">
              Key Engineering Concepts (Grade {grade})
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-0.5">
            Visual diagrams to help you imagine and understand core mechanisms:
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 rounded-lg p-1 border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'cards'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🖼️ Visual Cards
          </button>
          <button
            onClick={() => setViewMode('compact')}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all ${
              viewMode === 'compact'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🏷️ Compact Tags
          </button>
        </div>
      </div>

      {/* COMPACT TAGS VIEW */}
      {viewMode === 'compact' && (
        <div className="flex flex-wrap gap-2">
          {concepts.map((kc, i) => {
            const normalized = kc.toLowerCase().trim();
            const data = CONCEPT_DATA[normalized] || getFallbackConcept(kc);
            return (
              <button
                key={i}
                onClick={() => setActiveConcept(data)}
                className="px-3 py-1.5 rounded-lg text-xs font-medium bg-slate-900 hover:bg-slate-800 text-cyan-300 border border-slate-700 hover:border-cyan-500 transition-all flex items-center gap-1.5 group cursor-pointer"
              >
                <span>•</span>
                <span>{kc}</span>
                <span className="text-[10px] text-slate-400 group-hover:text-cyan-400">🔍</span>
              </button>
            );
          })}
        </div>
      )}

      {/* VISUAL CARDS GRID */}
      {viewMode === 'cards' && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {concepts.map((kc, i) => {
            const normalized = kc.toLowerCase().trim();
            const data = CONCEPT_DATA[normalized] || getFallbackConcept(kc);

            return (
              <div
                key={i}
                onClick={() => setActiveConcept(data)}
                className="group relative flex flex-col justify-between bg-slate-900/90 hover:bg-slate-900 rounded-xl border border-slate-800 hover:border-cyan-500/60 p-3.5 transition-all duration-200 hover:shadow-lg hover:shadow-cyan-950/40 hover:-translate-y-0.5 cursor-pointer"
              >
                {/* Top Badge & Title */}
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                      {data.tag}
                    </span>
                    <span className="text-[11px] text-slate-500 group-hover:text-cyan-400 transition-colors">
                      🔍 Tap to expand
                    </span>
                  </div>

                  <h4 className="text-sm font-bold text-white group-hover:text-cyan-200 transition-colors">
                    {data.title}
                  </h4>
                </div>

                {/* SVG Visual Illustration */}
                <div className="my-2.5 bg-slate-950/70 rounded-lg p-2 border border-slate-800/80 flex items-center justify-center overflow-hidden">
                  {data.renderSvg()}
                </div>

                {/* Caption */}
                <p className="text-xs text-slate-300 leading-snug line-clamp-2">
                  {data.caption}
                </p>
              </div>
            );
          })}
        </div>
      )}

      {/* DETAIL MODAL / LIGHTBOX */}
      {activeConcept && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn"
          onClick={() => setActiveConcept(null)}
        >
          <div 
            className="relative w-full max-w-lg bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 shadow-2xl text-left overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveConcept(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm transition-colors"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Tag & Title */}
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
              {activeConcept.tag}
            </span>

            <h3 className="text-xl font-black text-white mt-2 mb-1">
              {activeConcept.title}
            </h3>

            {/* Large Visual Diagram */}
            <div className="my-4 bg-slate-950 rounded-xl p-4 border border-slate-800 flex items-center justify-center">
              <div className="w-full max-w-xs">
                {activeConcept.renderSvg()}
              </div>
            </div>

            {/* Explanation & Details */}
            <div className="space-y-2 text-slate-200 text-sm leading-relaxed">
              <p className="font-semibold text-cyan-300">
                💡 How it works:
              </p>
              <p className="text-slate-300">
                {activeConcept.caption}
              </p>
              {activeConcept.details && (
                <p className="text-xs text-slate-400 pt-2 border-t border-slate-800">
                  {activeConcept.details}
                </p>
              )}
            </div>

            {/* Got It Button */}
            <div className="mt-6 flex justify-end">
              <button
                onClick={() => setActiveConcept(null)}
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md"
              >
                Got It! ✓
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
