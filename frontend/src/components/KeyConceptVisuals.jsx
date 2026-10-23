import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

// Comprehensive educational SVG illustrations & visual definitions for Key Engineering Concepts
// Covers Grades 5, 6, 7, 8, 9, and 10 aligned with Akshar Bharati Robotics Curriculum
const CONCEPT_DATA = {
  // =========================================================================
  // GRADE 5: SENSE-THINK-ACT & SIMPLE MACHINES
  // =========================================================================
  'sense-think-act loop': {
    title: 'Sense-Think-Act Loop',
    tag: 'Core Robotics Cycle',
    color: 'from-amber-500/20 to-blue-500/20 border-amber-500/40 text-amber-300',
    caption: 'Sensors detect surroundings → Microchip brain computes → Motors & actuators take action!',
    details: 'Every autonomous robot repeats this 3-step loop continuously thousands of times every second to navigate and react to the world.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="120" cy="70" r="50" fill="none" stroke="#334155" strokeWidth="3" strokeDasharray="4 4" />
        <g transform="translate(65, 35)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#06b6d4" strokeWidth="2.5" />
          <path d="M-8 -2 Q0 -10 8 -2 Q0 6 -8 -2 Z" fill="#06b6d4" />
          <circle cx="0" cy="-2" r="3" fill="#ffffff" />
          <path d="M12 -8 A12 12 0 0 1 12 4" stroke="#38bdf8" strokeWidth="2" fill="none" strokeLinecap="round" />
          <text x="0" y="32" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">1. SENSE</text>
        </g>
        <g transform="translate(175, 35)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
          <rect x="-9" y="-9" width="18" height="18" rx="3" fill="#f59e0b" />
          <rect x="-6" y="-6" width="12" height="12" fill="#0f172a" />
          <line x1="-9" y1="-4" x2="-13" y2="-4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="-9" y1="4" x2="-13" y2="4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="9" y1="-4" x2="13" y2="-4" stroke="#f59e0b" strokeWidth="2" />
          <line x1="9" y1="4" x2="13" y2="4" stroke="#f59e0b" strokeWidth="2" />
          <text x="0" y="32" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">2. THINK</text>
        </g>
        <g transform="translate(120, 105)">
          <circle cx="0" cy="0" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2.5" />
          <circle cx="0" cy="0" r="9" fill="#10b981" />
          <circle cx="0" cy="0" r="4" fill="#0f172a" />
          <rect x="-2" y="-12" width="4" height="24" rx="1" fill="#10b981" />
          <rect x="-12" y="-2" width="24" height="4" rx="1" fill="#10b981" />
          <text x="0" y="30" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">3. ACT</text>
        </g>
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
        <g transform="translate(15, 15)">
          <rect x="0" y="0" width="95" height="110" rx="8" fill="#0f172a" stroke="#475569" strokeWidth="1.5" />
          <text x="47" y="16" fill="#94a3b8" fontSize="8" fontWeight="bold" textAnchor="middle">MANUAL (RC)</text>
          <rect x="18" y="26" width="60" height="34" rx="10" fill="#334155" />
          <circle cx="34" cy="43" r="6" fill="#64748b" />
          <circle cx="62" cy="43" r="3" fill="#ef4444" />
          <circle cx="68" cy="37" r="3" fill="#3b82f6" />
          <path d="M47 24 L47 18" stroke="#f59e0b" strokeWidth="2" />
          <rect x="25" y="80" width="46" height="18" rx="4" fill="#3b82f6" />
          <circle cx="35" cy="100" r="5" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <circle cx="61" cy="100" r="5" fill="#1e293b" stroke="#64748b" strokeWidth="1.5" />
          <text x="47" y="74" fill="#cbd5e1" fontSize="7" textAnchor="middle">Human Guided</text>
        </g>
        <text x="120" y="75" fill="#f59e0b" fontSize="12" fontWeight="black" textAnchor="middle">VS</text>
        <g transform="translate(130, 15)">
          <rect x="0" y="0" width="95" height="110" rx="8" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="47" y="16" fill="#22d3ee" fontSize="8" fontWeight="bold" textAnchor="middle">AUTONOMOUS</text>
          <rect x="25" y="45" width="46" height="28" rx="6" fill="#0284c7" />
          <circle cx="36" cy="54" r="5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
          <circle cx="60" cy="54" r="5" fill="#f8fafc" stroke="#0284c7" strokeWidth="1.5" />
          <path d="M72 48 L86 42 M72 59 L86 65" stroke="#38bdf8" strokeWidth="1.5" strokeDasharray="2 2" />
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
        <g transform="translate(15, 30)">
          <circle cx="30" cy="40" r="26" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <circle cx="30" cy="40" r="14" fill="#0f172a" />
          <circle cx="30" cy="30" r="4" fill="#10b981" />
          <text x="30" y="80" fill="#a7f3d0" fontSize="8" fontWeight="bold" textAnchor="middle">Vacuum Bot</text>
        </g>
        <g transform="translate(85, 20)">
          <rect x="25" y="85" width="30" height="8" rx="2" fill="#475569" />
          <line x1="40" y1="85" x2="35" y2="55" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
          <circle cx="35" cy="55" r="4" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <line x1="35" y1="55" x2="52" y2="35" stroke="#f59e0b" strokeWidth="4" strokeLinecap="round" />
          <circle cx="52" cy="35" r="3.5" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
          <path d="M52 35 L60 27 M52 35 L60 43" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <text x="40" y="102" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">Factory Arm</text>
        </g>
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

  // =========================================================================
  // GRADE 6: GEARS, MOTORS & DIFFERENTIAL STEERING
  // =========================================================================
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
  },

  // =========================================================================
  // GRADE 7: IPO FRAMEWORK, SENSORY PHYSICS & MOTOR CIRCUITS
  // =========================================================================
  'input sensors': {
    title: 'Input Sensors',
    tag: 'IPO Framework: Input',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Transducers that convert physical environmental phenomena into electrical voltage signals.',
    details: 'Includes ultrasonic rangefinders, infrared photoreflectors, tactile microswitches, and gyroscopes.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(45, 65)">
          <rect x="-24" y="-22" width="48" height="44" rx="6" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
          <circle cx="-10" cy="-6" r="7" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
          <circle cx="10" cy="-6" r="7" fill="#334155" stroke="#cbd5e1" strokeWidth="1.5" />
          <text x="0" y="14" fill="#a7f3d0" fontSize="7" fontWeight="bold" textAnchor="middle">Ultrasonic</text>
        </g>
        <g transform="translate(120, 65)">
          <rect x="-22" y="-22" width="44" height="44" rx="6" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
          <circle cx="0" cy="-6" r="8" fill="#38bdf8" />
          <path d="M-10 6 L10 6" stroke="#94a3b8" strokeWidth="2" />
          <text x="0" y="14" fill="#7dd3fc" fontSize="7" fontWeight="bold" textAnchor="middle">IR Sensor</text>
        </g>
        <g transform="translate(195, 65)">
          <rect x="-22" y="-22" width="44" height="44" rx="6" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="0" cy="-6" r="7" fill="#ef4444" />
          <text x="0" y="14" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">Switch</text>
        </g>
        <text x="120" y="125" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Physical World ➔ Electrical Voltages</text>
      </svg>
    )
  },

  'processing unit (mcu)': {
    title: 'Processing Unit (MCU)',
    tag: 'IPO Framework: Process',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300',
    caption: 'Executes programmed instructions stored in memory, evaluating sensor inputs to decide actions.',
    details: 'Reads analog and digital inputs, calculates logic (e.g. IF distance < 20cm), and issues motor control signals.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-48" y="-36" width="96" height="72" rx="8" fill="#0f172a" stroke="#3b82f6" strokeWidth="2.5" />
          <rect x="-30" y="-22" width="60" height="44" rx="4" fill="#1e293b" stroke="#60a5fa" strokeWidth="1" />
          <text x="0" y="-6" fill="#38bdf8" fontSize="9" fontWeight="black" textAnchor="middle">CPU CORE</text>
          <text x="0" y="10" fill="#a5b4fc" fontSize="7" textAnchor="middle">IF (D &lt; 20) BRAKE;</text>
          {[-24, -8, 8, 24].map((x, i) => (
            <React.Fragment key={i}>
              <line x1={x} y1="-36" x2={x} y2="-44" stroke="#94a3b8" strokeWidth="2.5" />
              <line x1={x} y1="36" x2={x} y2="44" stroke="#94a3b8" strokeWidth="2.5" />
            </React.Fragment>
          ))}
          <text x="0" y="52" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">Logic & Computation</text>
        </g>
      </svg>
    )
  },

  'output actuators': {
    title: 'Output Actuators',
    tag: 'IPO Framework: Output',
    color: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Converts electrical control signals into physical mechanical motion, illumination, or audible alert.',
    details: 'Actuators include DC drive motors, steering servo horns, LED status headlights, and piezoceramic buzzers.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(50, 65)">
          <rect x="-24" y="-18" width="48" height="36" rx="5" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <rect x="24" y="-5" width="12" height="10" rx="2" fill="#cbd5e1" />
          <text x="0" y="3" fill="#86efac" fontSize="7" fontWeight="bold" textAnchor="middle">DC Motor</text>
        </g>
        <g transform="translate(125, 65)">
          <rect x="-20" y="-18" width="40" height="36" rx="5" fill="#1e293b" stroke="#0ea5e9" strokeWidth="2" />
          <line x1="8" y1="-18" x2="22" y2="-32" stroke="#f59e0b" strokeWidth="3" strokeLinecap="round" />
          <text x="0" y="3" fill="#7dd3fc" fontSize="7" fontWeight="bold" textAnchor="middle">Servo</text>
        </g>
        <g transform="translate(195, 65)">
          <circle cx="0" cy="0" r="18" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <path d="M-6 -6 L6 6 M-6 6 L6 -6" stroke="#fbbf24" strokeWidth="2" />
          <text x="0" y="30" fill="#fde68a" fontSize="7" fontWeight="bold" textAnchor="middle">Buzzer/LED</text>
        </g>
        <text x="120" y="125" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Control Signals ➔ Physical Work</text>
      </svg>
    )
  },

  'feedback loop': {
    title: 'Sensory Feedback Loop',
    tag: 'Cybernetics',
    color: 'from-purple-500/20 to-blue-500/20 border-purple-500/40 text-purple-300',
    caption: 'Output movement modifies the robot environment, which sensors immediately re-measure.',
    details: 'This closed cycle allows robots to continuously steer closer to a track or correct drift on uneven terrain.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M40 70 A40 40 0 0 1 120 30 L160 30" stroke="#06b6d4" strokeWidth="3" fill="none" />
        <polygon points="160,26 168,30 160,34" fill="#06b6d4" />
        <path d="M200 70 A40 40 0 0 1 120 110 L80 110" stroke="#10b981" strokeWidth="3" fill="none" />
        <polygon points="80,106 72,110 80,114" fill="#10b981" />
        <rect x="20" y="55" width="50" height="30" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="45" y="73" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">INPUT</text>
        <rect x="95" y="55" width="50" height="30" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="120" y="73" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">PROCESS</text>
        <rect x="170" y="55" width="50" height="30" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
        <text x="195" y="73" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">OUTPUT</text>
        <text x="120" y="130" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">Continuous Correction Loop</text>
      </svg>
    )
  },

  'speed of sound (340 m/s)': {
    title: 'Speed of Sound (340 m/s)',
    tag: 'Acoustic Physics',
    color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Sound waves travel through room temperature air at 340 meters per second (0.034 cm/μs).',
    details: 'This constant speed allows ultrasonic sensors to convert elapsed echo microseconds into exact centimeters.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="30" y1="70" x2="210" y2="70" stroke="#334155" strokeWidth="2" strokeDasharray="4 4" />
        {[50, 85, 120, 155, 190].map((x, i) => (
          <path key={i} d={`M${x} 45 A25 25 0 0 1 ${x} 95`} stroke="#38bdf8" strokeWidth="2.5" fill="none" strokeLinecap="round" />
        ))}
        <rect x="70" y="15" width="100" height="24" rx="12" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
        <text x="120" y="31" fill="#22d3ee" fontSize="9" fontWeight="black" textAnchor="middle">v = 340 m/s (0.034 cm/μs)</text>
        <text x="120" y="115" fill="#7dd3fc" fontSize="8" textAnchor="middle">Acoustic Wavefront Progression</text>
      </svg>
    )
  },

  'time of flight': {
    title: 'Time of Flight (ToF)',
    tag: 'Rangefinding Formula',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Measures round-trip time; divide by 2 because the wave travels to the obstacle and returns.',
    details: 'Distance (cm) = (Time in microseconds × 0.034) ÷ 2. Dividing by 2 accounts for the two-way transit.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(40, 65)">
          <rect x="-15" y="-20" width="30" height="40" rx="4" fill="#0f766e" stroke="#2dd4bf" strokeWidth="2" />
          <text x="0" y="4" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">PING</text>
        </g>
        <path d="M60 52 L170 52" stroke="#f59e0b" strokeWidth="2.5" />
        <polygon points="166,48 174,52 166,56" fill="#f59e0b" />
        <text x="115" y="44" fill="#fbbf24" fontSize="7" textAnchor="middle">Outward Trip ➔</text>
        <path d="M170 78 L60 78" stroke="#38bdf8" strokeWidth="2.5" />
        <polygon points="64,74 56,78 64,82" fill="#38bdf8" />
        <text x="115" y="92" fill="#7dd3fc" fontSize="7" textAnchor="middle">Echo Return ⬅</text>
        <rect x="180" y="35" width="16" height="60" rx="3" fill="#ea580c" />
        <text x="120" y="122" fill="#fcd34d" fontSize="9" fontWeight="bold" textAnchor="middle">Distance = (Time × 0.034) ÷ 2</text>
      </svg>
    )
  },

  'ir phototransistor': {
    title: 'IR Phototransistor',
    tag: 'Optical Sensor',
    color: 'from-purple-500/20 to-pink-500/20 border-purple-500/40 text-purple-300',
    caption: 'Infrared LED emits invisible 940nm light; photodiode conducts current upon receiving bounced photons.',
    details: 'Used widely in autonomous line tracking rovers and edge cliff drop-off detection.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(80, 50)">
          <circle cx="0" cy="0" r="14" fill="#a855f7" stroke="#e9d5ff" strokeWidth="2" />
          <text x="0" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">IR LED</text>
          <path d="M0 16 L20 40" stroke="#f472b6" strokeWidth="2" strokeDasharray="3 3" />
        </g>
        <g transform="translate(160, 50)">
          <circle cx="0" cy="0" r="14" fill="#3b82f6" stroke="#93c5fd" strokeWidth="2" />
          <text x="0" y="3" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">PHOTO</text>
          <path d="M-20 40 L0 16" stroke="#38bdf8" strokeWidth="2" strokeDasharray="3 3" />
        </g>
        <line x1="40" y1="95" x2="200" y2="95" stroke="#cbd5e1" strokeWidth="5" />
        <text x="120" y="112" fill="#cbd5e1" fontSize="8" textAnchor="middle">White Surface Bounces IR Back</text>
      </svg>
    )
  },

  'absorption vs reflection': {
    title: 'Absorption vs Reflection',
    tag: 'Line Follower Physics',
    color: 'from-slate-500/20 to-blue-500/20 border-slate-500/40 text-blue-300',
    caption: 'White track reflects IR rays (HIGH signal); black tape line absorbs IR rays (LOW signal).',
    details: 'This sharp contrast allows line-tracking algorithms to detect edge boundaries with microsecond precision.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(25, 20)">
          <rect x="0" y="0" width="85" height="95" rx="6" fill="#0f172a" stroke="#38bdf8" strokeWidth="1.5" />
          <path d="M25 30 L42 60 L60 30" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
          <rect x="10" y="65" width="65" height="10" fill="#f8fafc" />
          <text x="42" y="85" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">White: Reflects (HIGH)</text>
        </g>
        <g transform="translate(130, 20)">
          <rect x="0" y="0" width="85" height="95" rx="6" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
          <path d="M30 30 L42 60" stroke="#ea580c" strokeWidth="2.5" />
          <rect x="10" y="65" width="65" height="10" fill="#020617" stroke="#334155" strokeWidth="1" />
          <text x="42" y="85" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Black: Absorbs (LOW)</text>
        </g>
      </svg>
    )
  },

  'voltage (v)': {
    title: 'Voltage (Volts)',
    tag: 'Electrical Pressure',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'The electromotive force or electrical pressure that pushes electrons through a circuit.',
    details: 'A 5V or 7.4V battery provides the potential difference required for current to flow through loads.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(70, 70)">
          <rect x="-25" y="-35" width="50" height="70" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="0" y="-10" fill="#ef4444" fontSize="16" fontWeight="black" textAnchor="middle">+</text>
          <text x="0" y="20" fill="#3b82f6" fontSize="16" fontWeight="black" textAnchor="middle">-</text>
          <text x="0" y="5" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">5.0V</text>
        </g>
        <path d="M100 50 L160 50" stroke="#22d3ee" strokeWidth="3" />
        <polygon points="156,46 164,50 156,54" fill="#22d3ee" />
        <text x="130" y="42" fill="#7dd3fc" fontSize="8" textAnchor="middle">Pushes Charge ➔</text>
        <text x="130" y="115" fill="#fcd34d" fontSize="9" fontWeight="bold" textAnchor="middle">Potential Difference (V)</text>
      </svg>
    )
  },

  'current (ma/a)': {
    title: 'Current (mA / A)',
    tag: 'Electron Flow',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    caption: 'The rate of electrical charge flow through a conductor, measured in amperes or milliamps.',
    details: 'Sensitive microchips need very little current (mA), while heavy DC motors draw hundreds of milliamps.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="30" y="50" width="180" height="40" rx="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        {[55, 85, 115, 145, 175].map((x, i) => (
          <circle key={i} cx={x} cy="70" r="8" fill="#0284c7" stroke="#7dd3fc" strokeWidth="1.5" />
        ))}
        {[55, 85, 115, 145, 175].map((x, i) => (
          <text key={i} x={x} y="73" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">e⁻</text>
        ))}
        <text x="120" y="115" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Charge Flow Rate (Coulombs/sec)</text>
      </svg>
    )
  },

  'gpio current limits': {
    title: 'GPIO Current Limits',
    tag: 'Pin Protection',
    color: 'from-red-500/20 to-orange-500/20 border-red-500/40 text-red-300',
    caption: 'Microcontroller pins can only output 20–40mA. Direct motor connection will burn the chip!',
    details: 'Always use an intermediate transistor or H-Bridge driver to supply high motor current safely.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(60, 65)">
          <rect x="-30" y="-25" width="60" height="50" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <text x="0" y="-5" fill="#10b981" fontSize="8" fontWeight="bold" textAnchor="middle">MCU PIN</text>
          <text x="0" y="12" fill="#86efac" fontSize="9" fontWeight="bold" textAnchor="middle">Max 40mA</text>
        </g>
        <g transform="translate(180, 65)">
          <rect x="-30" y="-25" width="60" height="50" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
          <text x="0" y="-5" fill="#ef4444" fontSize="8" fontWeight="bold" textAnchor="middle">DC MOTOR</text>
          <text x="0" y="12" fill="#fca5a5" fontSize="9" fontWeight="bold" textAnchor="middle">Needs 800mA!</text>
        </g>
        <text x="120" y="60" fill="#ef4444" fontSize="14" fontWeight="black" textAnchor="middle">⚠️</text>
        <text x="120" y="78" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Burn Risk!</text>
        <text x="120" y="120" fill="#fca5a5" fontSize="8" textAnchor="middle">Requires H-Bridge Isolation</text>
      </svg>
    )
  },

  'h-bridge circuit': {
    title: 'H-Bridge Circuit',
    tag: 'Motor Driver',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    caption: 'Four transistor switches arranged in an "H" shape allow bidirectional motor control.',
    details: 'Closing Q1 and Q4 spins motor forward; closing Q2 and Q3 reverses motor current direction!',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <line x1="-50" y1="-35" x2="50" y2="-35" stroke="#ef4444" strokeWidth="2" />
          <line x1="-50" y1="35" x2="50" y2="35" stroke="#3b82f6" strokeWidth="2" />
          <line x1="-40" y1="-35" x2="-40" y2="35" stroke="#94a3b8" strokeWidth="2" />
          <line x1="40" y1="-35" x2="40" y2="35" stroke="#94a3b8" strokeWidth="2" />
          <line x1="-40" y1="0" x2="40" y2="0" stroke="#f59e0b" strokeWidth="2" />
          <circle cx="0" cy="0" r="14" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="0" y="4" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">M</text>
          <rect x="-46" y="-22" width="12" height="10" rx="2" fill="#10b981" />
          <rect x="34" y="12" width="12" height="10" rx="2" fill="#10b981" />
          <text x="0" y="52" fill="#c084fc" fontSize="8" fontWeight="bold" textAnchor="middle">4 Transistor Switches (Q1-Q4)</text>
        </g>
      </svg>
    )
  },

  // =========================================================================
  // GRADE 8: ALGORITHMIC LOGIC, FLOWCHARTS & POLLING
  // =========================================================================
  'sequence': {
    title: 'Sequence',
    tag: 'Algorithm Building Block',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    caption: 'Executing commands in strict, top-to-bottom chronological order without jumping.',
    details: 'The fundamental baseline of code execution: step 1 completes fully before step 2 begins.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 25)">
          <rect x="-45" y="-12" width="90" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="0" y="3" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">1. Init Motors</text>
        </g>
        <path d="M120 37 L120 53" stroke="#38bdf8" strokeWidth="2" />
        <polygon points="117,50 120,56 123,50" fill="#38bdf8" />
        <g transform="translate(120, 68)">
          <rect x="-45" y="-12" width="90" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="0" y="3" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">2. Read Sensor</text>
        </g>
        <path d="M120 80 L120 96" stroke="#38bdf8" strokeWidth="2" />
        <polygon points="117,93 120,99 123,93" fill="#38bdf8" />
        <g transform="translate(120, 111)">
          <rect x="-45" y="-12" width="90" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="0" y="3" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">3. Set Speed</text>
        </g>
      </svg>
    )
  },

  'selection (conditionals)': {
    title: 'Selection (Conditionals)',
    tag: 'Branching Logic',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Branching code execution based on whether a truth condition evaluates to TRUE or FALSE.',
    details: 'IF Obstacle < 20cm THEN Execute Avoidance Turn ELSE Continue Driving Forward.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <polygon points="120,25 160,50 120,75 80,50" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
        <text x="120" y="53" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Obstacle?</text>
        <path d="M80 50 L40 50 L40 85" stroke="#ef4444" strokeWidth="2" />
        <text x="55" y="44" fill="#f87171" fontSize="7" fontWeight="bold">YES</text>
        <rect x="15" y="85" width="50" height="25" rx="4" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
        <text x="40" y="100" fill="#fca5a5" fontSize="7" fontWeight="bold" textAnchor="middle">Brake</text>
        <path d="M160 50 L200 50 L200 85" stroke="#10b981" strokeWidth="2" />
        <text x="180" y="44" fill="#34d399" fontSize="7" fontWeight="bold">NO</text>
        <rect x="175" y="85" width="50" height="25" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
        <text x="200" y="100" fill="#86efac" fontSize="7" fontWeight="bold" textAnchor="middle">Forward</text>
      </svg>
    )
  },

  'iteration (loops)': {
    title: 'Iteration (Loops)',
    tag: 'Repeating Execution',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    caption: 'Repeating a set of instructions until a target condition changes, or infinitely while running.',
    details: 'Mobile robots run continuous while(true) loops to sample sensors without ever halting unexpectedly.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="120" cy="65" r="38" fill="none" stroke="#a855f7" strokeWidth="3" strokeDasharray="6 3" />
        <polygon points="120,23 128,27 128,19" fill="#a855f7" />
        <g transform="translate(120, 65)">
          <rect x="-35" y="-18" width="70" height="36" rx="6" fill="#0f172a" stroke="#c084fc" strokeWidth="1.5" />
          <text x="0" y="-2" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">WHILE (true)</text>
          <text x="0" y="10" fill="#c084fc" fontSize="7" textAnchor="middle">Poll Sensors</text>
        </g>
        <text x="120" y="122" fill="#d8b4fe" fontSize="8" fontWeight="bold" textAnchor="middle">Continuous Infinite Loop</text>
      </svg>
    )
  },

  'unambiguous logic': {
    title: 'Unambiguous Logic',
    tag: 'Deterministic Code',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Robots cannot guess; every instruction must be mathematically defined with exact parameters.',
    details: 'Instead of "slow down", write "set motor PWM to 120 and monitor echo until distance exceeds 30cm".',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(25, 20)">
          <rect x="0" y="0" width="85" height="95" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="1.5" />
          <text x="42" y="24" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Vague ❌</text>
          <text x="42" y="50" fill="#94a3b8" fontSize="7" textAnchor="middle">"Drive a bit"</text>
          <text x="42" y="70" fill="#94a3b8" fontSize="7" textAnchor="middle">"Watch out"</text>
        </g>
        <g transform="translate(130, 20)">
          <rect x="0" y="0" width="85" height="95" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="42" y="24" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">Exact ✓</text>
          <text x="42" y="50" fill="#a7f3d0" fontSize="7" textAnchor="middle">Speed = 80%</text>
          <text x="42" y="70" fill="#a7f3d0" fontSize="7" textAnchor="middle">dist &lt; 20.0 cm</text>
        </g>
      </svg>
    )
  },

  'oval (terminal)': {
    title: 'Oval (Terminal)',
    tag: 'Flowchart Symbol',
    color: 'from-emerald-500/20 to-green-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Represents the START (boot) or END (shutdown) terminal boundary of a program flowchart.',
    details: 'Every flowchart begins with a Start stadium oval and ends with a Stop/Halt oval.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 45)">
          <rect x="-55" y="-18" width="110" height="36" rx="18" fill="#065f46" stroke="#34d399" strokeWidth="2.5" />
          <text x="0" y="5" fill="#ffffff" fontSize="11" fontWeight="black" textAnchor="middle">START</text>
        </g>
        <g transform="translate(120, 100)">
          <rect x="-55" y="-18" width="110" height="36" rx="18" fill="#7f1d1d" stroke="#f87171" strokeWidth="2.5" />
          <text x="0" y="5" fill="#ffffff" fontSize="11" fontWeight="black" textAnchor="middle">STOP / END</text>
        </g>
      </svg>
    )
  },

  'rectangle (process)': {
    title: 'Rectangle (Process)',
    tag: 'Flowchart Symbol',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    caption: 'Represents an internal action, mathematical calculation, or motor driver command.',
    details: 'Examples: Set LeftSpeed = 180, Calculate Distance, or Delay for 250 milliseconds.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-70" y="-28" width="140" height="56" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2.5" />
          <text x="0" y="-4" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">PROCESS BLOCK</text>
          <text x="0" y="14" fill="#38bdf8" fontSize="8" textAnchor="middle">motorSpeed = 200;</text>
          <text x="0" y="44" fill="#7dd3fc" fontSize="8" textAnchor="middle">Action / Motor Command</text>
        </g>
      </svg>
    )
  },

  'diamond (decision)': {
    title: 'Diamond (Decision)',
    tag: 'Flowchart Symbol',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'A diamond shape posing a conditional question with two distinct exiting branches (YES / NO).',
    details: 'Used to branch execution flow based on sensory checks: "Is Distance < 20cm?".',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <polygon points="120,20 180,65 120,110 60,65" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
        <text x="120" y="62" fill="#fbbf24" fontSize="9" fontWeight="bold" textAnchor="middle">Distance &lt; 20?</text>
        <path d="M180 65 L215 65" stroke="#10b981" strokeWidth="2" />
        <text x="195" y="58" fill="#34d399" fontSize="7" fontWeight="bold">YES</text>
        <path d="M60 65 L25 65" stroke="#ef4444" strokeWidth="2" />
        <text x="40" y="58" fill="#f87171" fontSize="7" fontWeight="bold">NO</text>
      </svg>
    )
  },

  'arrows (flow)': {
    title: 'Arrows (Flow Lines)',
    tag: 'Flowchart Symbol',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Directed lines connecting symbols to indicate the exact direction of programmatic execution.',
    details: 'Arrows remove all ambiguity, leading the CPU strictly from block to block.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M40 70 L190 70" stroke="#06b6d4" strokeWidth="3.5" />
        <polygon points="186,64 198,70 186,76" fill="#06b6d4" />
        <path d="M120 30 L120 110" stroke="#f59e0b" strokeWidth="3" />
        <polygon points="115,106 120,118 125,106" fill="#f59e0b" />
        <text x="120" y="132" fill="#7dd3fc" fontSize="8" fontWeight="bold" textAnchor="middle">Direction of Execution</text>
      </svg>
    )
  },

  'continuous polling': {
    title: 'Continuous Polling',
    tag: 'Real-Time Sensing',
    color: 'from-blue-500/20 to-teal-500/20 border-blue-500/40 text-blue-300',
    caption: 'Microcontroller repeatedly queries sensors at high frequency to detect sudden obstacles.',
    details: 'Continuous sampling prevents high-speed collisions by reacting within milliseconds.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <circle cx="0" cy="0" r="42" fill="none" stroke="#0ea5e9" strokeWidth="2.5" />
          {[0, 60, 120, 180, 240, 300].map((angle, i) => (
            <circle key={i} cx={35 * Math.cos(angle * Math.PI / 180)} cy={35 * Math.sin(angle * Math.PI / 180)} r="4" fill="#38bdf8" />
          ))}
          <text x="0" y="4" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">50 Hz Loop</text>
          <text x="0" y="55" fill="#7dd3fc" fontSize="8" textAnchor="middle">Query Every 20ms</text>
        </g>
      </svg>
    )
  },

  'sampling rate': {
    title: 'Sampling Rate (Hz)',
    tag: 'Telemetry Frequency',
    color: 'from-cyan-500/20 to-indigo-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'The number of sensor readings recorded per second, measured in Hertz (Hz).',
    details: 'Higher sampling rates provide smoother tracking but require more CPU processing cycles.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M30 70 Q55 20 80 70 T130 70 T180 70 T210 70" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
        {[42, 68, 92, 118, 142, 168, 192].map((x, i) => (
          <circle key={i} cx={x} cy="70" r="3.5" fill="#f59e0b" />
        ))}
        <text x="120" y="115" fill="#fde68a" fontSize="9" fontWeight="bold" textAnchor="middle">Discrete Sampling Pulses</text>
      </svg>
    )
  },

  'state trap': {
    title: 'State Trap & Deadlock',
    tag: 'Algorithmic Bug',
    color: 'from-red-500/20 to-orange-500/20 border-red-500/40 text-red-300',
    caption: 'A logic trap where the robot oscillates back and forth endlessly between two walls.',
    details: 'Solved by adding randomized evasion angles or turn-attempt limit counters.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="35" y1="20" x2="35" y2="120" stroke="#ef4444" strokeWidth="4" />
        <line x1="205" y1="20" x2="205" y2="120" stroke="#ef4444" strokeWidth="4" />
        <g transform="translate(120, 65)">
          <rect x="-20" y="-14" width="40" height="28" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <path d="M-30 0 L-10 0" stroke="#38bdf8" strokeWidth="2" />
          <path d="M30 0 L10 0" stroke="#38bdf8" strokeWidth="2" />
          <text x="0" y="4" fill="#ffffff" fontSize="7" fontWeight="bold" textAnchor="middle">ROVER</text>
        </g>
        <text x="120" y="115" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Endless Oscillation Trap</text>
      </svg>
    )
  },

  'failsafe timeout': {
    title: 'Failsafe Timeout',
    tag: 'Fault Recovery',
    color: 'from-amber-500/20 to-red-500/20 border-amber-500/40 text-amber-300',
    caption: 'A countdown timer that forcibly aborts stuck actions if progress isn’t made in time.',
    details: 'If reversing for >3 seconds fails to clear an obstacle, timeout forces emergency pivot.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="120" cy="65" r="36" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
        <line x1="120" y1="65" x2="120" y2="40" stroke="#ef4444" strokeWidth="3" strokeLinecap="round" />
        <line x1="120" y1="65" x2="140" y2="65" stroke="#ef4444" strokeWidth="2" strokeLinecap="round" />
        <text x="120" y="118" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Auto-Abort Stuck States</text>
      </svg>
    )
  },

  // =========================================================================
  // GRADE 9: MICROCONTROLLER ARCHITECTURE, SIGNALS & FSM
  // =========================================================================
  'von neumann vs harvard': {
    title: 'Von Neumann vs Harvard',
    tag: 'MCU Architecture',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300',
    caption: 'Harvard architecture features separate memory buses for Flash code and SRAM data.',
    details: 'Microcontrollers (like AVR/ESP32) fetch code and read variables simultaneously over distinct buses.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-25" y="-30" width="50" height="60" rx="4" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
          <text x="0" y="4" fill="#60a5fa" fontSize="8" fontWeight="bold" textAnchor="middle">CPU</text>
          <rect x="-95" y="-20" width="45" height="40" rx="4" fill="#1e293b" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="-72" y="4" fill="#fde68a" fontSize="7" textAnchor="middle">Flash</text>
          <line x1="-50" y1="0" x2="-25" y2="0" stroke="#f59e0b" strokeWidth="2" />
          <rect x="50" y="-20" width="45" height="40" rx="4" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="72" y="4" fill="#86efac" fontSize="7" textAnchor="middle">SRAM</text>
          <line x1="25" y1="0" x2="50" y2="0" stroke="#10b981" strokeWidth="2" />
          <text x="0" y="48" fill="#93c5fd" fontSize="8" textAnchor="middle">Separate Program & Data Buses</text>
        </g>
      </svg>
    )
  },

  'flash & sram': {
    title: 'Flash & SRAM Memory',
    tag: 'Embedded Storage',
    color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Flash retains compiled code without power; SRAM holds temporary runtime variables.',
    details: 'Flash is non-volatile ROM; SRAM is high-speed volatile RAM cleared upon system reboot.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(65, 60)">
          <rect x="-35" y="-30" width="70" height="60" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="2" />
          <text x="0" y="-8" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">FLASH</text>
          <text x="0" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">Permanent Code</text>
          <text x="0" y="24" fill="#22d3ee" fontSize="7" textAnchor="middle">Non-Volatile</text>
        </g>
        <g transform="translate(175, 60)">
          <rect x="-35" y="-30" width="70" height="60" rx="6" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
          <text x="0" y="-8" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">SRAM</text>
          <text x="0" y="10" fill="#94a3b8" fontSize="7" textAnchor="middle">Variables / Stack</text>
          <text x="0" y="24" fill="#86efac" fontSize="7" textAnchor="middle">Volatile RAM</text>
        </g>
      </svg>
    )
  },

  'gpio pin modes (input/output)': {
    title: 'GPIO Pin Modes (IN / OUT)',
    tag: 'Hardware Configuration',
    color: 'from-indigo-500/20 to-purple-500/20 border-indigo-500/40 text-indigo-300',
    caption: 'INPUT sets high-impedance listening mode; OUTPUT enables totem-pole power drivers.',
    details: 'pinMode(pin, OUTPUT) drives actuators; pinMode(pin, INPUT) listens safely to sensors.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(65, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="6" fill="#0f172a" stroke="#06b6d4" strokeWidth="1.5" />
          <text x="0" y="-5" fill="#22d3ee" fontSize="8" fontWeight="bold" textAnchor="middle">INPUT</text>
          <text x="0" y="12" fill="#94a3b8" fontSize="7" textAnchor="middle">Listens (Hi-Z)</text>
        </g>
        <g transform="translate(175, 65)">
          <rect x="-35" y="-25" width="70" height="50" rx="6" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
          <text x="0" y="-5" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">OUTPUT</text>
          <text x="0" y="12" fill="#94a3b8" fontSize="7" textAnchor="middle">Drives 0V / 5V</text>
        </g>
        <text x="120" y="120" fill="#c084fc" fontSize="8" textAnchor="middle">Software-Configured Pin States</text>
      </svg>
    )
  },

  'internal pull-up': {
    title: 'Internal Pull-Up Resistor',
    tag: 'Noise Prevention',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'Ties input pin to 5V (HIGH) internally to prevent floating erratic readings when switches open.',
    details: 'Eliminates external resistors on robot limit switches. Unpressed = HIGH, Pressed = LOW (GND).',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="80" y1="25" x2="80" y2="45" stroke="#ef4444" strokeWidth="2" />
        <text x="80" y="20" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">VCC (5V)</text>
        <path d="M80 45 L75 50 L85 55 L75 60 L85 65 L80 70" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
        <text x="100" y="60" fill="#fbbf24" fontSize="8">20kΩ</text>
        <line x1="80" y1="70" x2="80" y2="105" stroke="#38bdf8" strokeWidth="2" />
        <line x1="80" y1="85" x2="160" y2="85" stroke="#38bdf8" strokeWidth="2" />
        <rect x="160" y="70" width="50" height="30" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="185" y="88" fill="#38bdf8" fontSize="7" textAnchor="middle">MCU PIN</text>
        <text x="120" y="125" fill="#fcd34d" fontSize="8" textAnchor="middle">Prevents Floating Signal Noise</text>
      </svg>
    )
  },

  'digital binary (0/1)': {
    title: 'Digital Binary (0 / 1)',
    tag: 'Digital Electronics',
    color: 'from-blue-500/20 to-cyan-500/20 border-blue-500/40 text-blue-300',
    caption: 'Signals with only two states: HIGH (5V / binary 1) and LOW (0V / binary 0).',
    details: 'Ideal for optical encoder pulse counting, status LEDs, and limit bumper switches.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M30 85 L60 85 L60 45 L100 45 L100 85 L140 85 L140 45 L180 45 L180 85 L210 85" stroke="#06b6d4" strokeWidth="3" fill="none" />
        <text x="80" y="38" fill="#22d3ee" fontSize="8" fontWeight="bold">HIGH (5V = 1)</text>
        <text x="120" y="100" fill="#94a3b8" fontSize="8" fontWeight="bold">LOW (0V = 0)</text>
        <text x="120" y="125" fill="#7dd3fc" fontSize="8" textAnchor="middle">Discrete Two-State Logic</text>
      </svg>
    )
  },

  'analog adc (10-bit resolution)': {
    title: 'Analog ADC (10-Bit)',
    tag: 'Signal Quantization',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    caption: 'Converts continuous voltage gradients (0–5V) into integer values from 0 to 1023 (2¹⁰ steps).',
    details: 'A 2.5V center reading converts to 512, providing fine resolution for light and distance sensors.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M30 95 Q80 25 130 95 T210 95" stroke="#a855f7" strokeWidth="2" fill="none" strokeDasharray="3 3" />
        <path d="M30 95 L50 95 L50 80 L80 80 L80 45 L110 45 L110 75 L140 75 L140 95 L170 95" stroke="#38bdf8" strokeWidth="2.5" fill="none" />
        <text x="120" y="30" fill="#c084fc" fontSize="9" fontWeight="bold" textAnchor="middle">0V–5V ➔ 0–1023 Integer Steps</text>
        <text x="120" y="125" fill="#7dd3fc" fontSize="8" textAnchor="middle">1024 Quantized Value Levels</text>
      </svg>
    )
  },

  'pwm frequency & duty cycle': {
    title: 'PWM Speed Regulation',
    tag: 'Power Modulation',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Toggling full voltage ON and OFF rapidly simulates variable voltage without losing torque.',
    details: '25% Duty Cycle = slow crawl; 50% = medium cruise; 100% = maximum continuous sprint.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M25 45 L40 45 L40 70 L85 70 L85 45 L100 45 L100 70 L145 70" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
        <text x="65" y="38" fill="#fbbf24" fontSize="7" fontWeight="bold">25% Duty (Slow)</text>
        <path d="M25 95 L65 95 L65 115 L105 115 L105 95 L145 95" stroke="#10b981" strokeWidth="2.5" fill="none" />
        <text x="65" y="90" fill="#34d399" fontSize="7" fontWeight="bold">50% Duty (Medium)</text>
        <text x="180" y="80" fill="#fde68a" fontSize="8" fontWeight="bold" textAnchor="middle">Simulates Variable V</text>
      </svg>
    )
  },

  'pseudocode syntax': {
    title: 'Structured Pseudocode',
    tag: 'Algorithm Planning',
    color: 'from-cyan-500/20 to-blue-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Human-readable structured logic that plans robotic behaviors before writing code.',
    details: 'Prevents syntax errors and architectural bugs by laying out clean flow upfront.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="35" y="20" width="170" height="95" rx="6" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="50" y="42" fill="#f59e0b" fontSize="8" fontFamily="monospace">IF (sensor &lt; 20cm) &#123;</text>
        <text x="65" y="60" fill="#10b981" fontSize="8" fontFamily="monospace">reverseMotors(200ms);</text>
        <text x="65" y="78" fill="#38bdf8" fontSize="8" fontFamily="monospace">pivotRight(90deg);</text>
        <text x="50" y="96" fill="#f59e0b" fontSize="8" fontFamily="monospace">&#125;</text>
      </svg>
    )
  },

  'fsm states': {
    title: 'Finite State Machine (FSM)',
    tag: 'Control Architecture',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/40 text-purple-300',
    caption: 'Organizing robot behavior into distinct, mutually exclusive operational modes.',
    details: 'States like FORWARD, SCANNING, EVADING eliminate spaghetti code and unexpected bugs.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(60, 65)">
          <circle cx="0" cy="0" r="28" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="0" y="4" fill="#93c5fd" fontSize="8" fontWeight="bold" textAnchor="middle">FORWARD</text>
        </g>
        <path d="M88 65 L152 65" stroke="#f59e0b" strokeWidth="2.5" />
        <polygon points="148,61 156,65 148,69" fill="#f59e0b" />
        <g transform="translate(180, 65)">
          <circle cx="0" cy="0" r="28" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="0" y="4" fill="#fca5a5" fontSize="8" fontWeight="bold" textAnchor="middle">AVOID</text>
        </g>
        <text x="120" y="55" fill="#fde68a" fontSize="7" textAnchor="middle">dist &lt; 20</text>
        <text x="120" y="118" fill="#c084fc" fontSize="8" textAnchor="middle">Discrete Behavioral Modes</text>
      </svg>
    )
  },

  'state transitions': {
    title: 'State Transitions',
    tag: 'FSM Triggers',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Defined conditions and sensory events that trigger switching between behavioral states.',
    details: 'Ensures safe, deterministic state changes without deadlocks or skipped actions.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="50" cy="50" r="22" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
        <text x="50" y="54" fill="#86efac" fontSize="7" fontWeight="bold" textAnchor="middle">S1</text>
        <circle cx="190" cy="50" r="22" fill="#0f172a" stroke="#3b82f6" strokeWidth="2" />
        <text x="190" y="54" fill="#93c5fd" fontSize="7" fontWeight="bold" textAnchor="middle">S2</text>
        <path d="M72 42 Q120 18 168 42" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
        <polygon points="163,36 172,44 163,48" fill="#f59e0b" />
        <text x="120" y="24" fill="#fbbf24" fontSize="7" textAnchor="middle">Event: Obstacle Hit</text>
        <text x="120" y="115" fill="#fde68a" fontSize="8" textAnchor="middle">Deterministic Event Triggers</text>
      </svg>
    )
  },

  'deterministic control': {
    title: 'Deterministic Control',
    tag: 'Reliability',
    color: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Given the exact same sensory inputs, the robot will always produce the identical action.',
    details: 'Essential for safety-critical systems in surgical robots, aerospace, and industrial factories.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="40" y="35" width="160" height="60" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
        <text x="120" y="60" fill="#34d399" fontSize="9" fontWeight="bold" textAnchor="middle">Input X ➔ Always Output Y</text>
        <text x="120" y="78" fill="#94a3b8" fontSize="8" textAnchor="middle">100% Predictable & Repeatable</text>
        <text x="120" y="120" fill="#a7f3d0" fontSize="8" textAnchor="middle">Mission-Critical Repeatability</text>
      </svg>
    )
  },

  // =========================================================================
  // GRADE 10: CLOSED-LOOP FEEDBACK, SENSOR FUSION & FAILSAFES
  // =========================================================================
  'open-loop systems': {
    title: 'Open-Loop Control',
    tag: 'Non-Feedback Systems',
    color: 'from-slate-500/20 to-red-500/20 border-slate-500/40 text-slate-300',
    caption: 'Executes commands blindly without measuring real results (no sensor verification).',
    details: 'Example: "Drive forward for 3s". If wheels slip, the robot has no idea where it actually landed.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="25" y="50" width="55" height="35" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
        <text x="52" y="72" fill="#cbd5e1" fontSize="8" textAnchor="middle">Controller</text>
        <path d="M80 67 L115 67" stroke="#64748b" strokeWidth="2" />
        <rect x="115" y="50" width="55" height="35" rx="4" fill="#0f172a" stroke="#64748b" strokeWidth="1.5" />
        <text x="142" y="72" fill="#cbd5e1" fontSize="8" textAnchor="middle">Motor</text>
        <path d="M170 67 L205 67" stroke="#ef4444" strokeWidth="2" />
        <polygon points="201,63 209,67 201,71" fill="#ef4444" />
        <text x="120" y="118" fill="#fca5a5" fontSize="8" textAnchor="middle">No Sensor Feedback Verification ❌</text>
      </svg>
    )
  },

  'closed-loop feedback': {
    title: 'Closed-Loop Feedback',
    tag: 'Precision Control',
    color: 'from-emerald-500/20 to-cyan-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'Continuously measures output with sensors, compares against target, and corrects error.',
    details: 'The foundation of modern robotics: keeps rovers centered on lines and holding exact speeds.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="50" cy="50" r="14" fill="#0f172a" stroke="#f59e0b" strokeWidth="1.5" />
        <text x="50" y="54" fill="#fbbf24" fontSize="11" fontWeight="black" textAnchor="middle">Σ</text>
        <path d="M64 50 L100 50" stroke="#38bdf8" strokeWidth="2" />
        <rect x="100" y="35" width="55" height="30" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="127" y="53" fill="#38bdf8" fontSize="8" textAnchor="middle">Plant/Motor</text>
        <path d="M155 50 L195 50 L195 90 L135 90" stroke="#10b981" strokeWidth="2" />
        <rect x="80" y="75" width="55" height="30" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
        <text x="107" y="93" fill="#34d399" fontSize="8" textAnchor="middle">Sensor</text>
        <path d="M80 90 L50 90 L50 64" stroke="#10b981" strokeWidth="2" />
        <text x="120" y="128" fill="#86efac" fontSize="8" fontWeight="bold" textAnchor="middle">Self-Correcting Closed Loop ✓</text>
      </svg>
    )
  },

  'error calculation: e(t)': {
    title: 'Error Calculation: e(t)',
    tag: 'Control Math',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/40 text-amber-300',
    caption: 'Error = Desired Target - Current Measured Position. The core driver of PID control.',
    details: 'If target is 20cm and sensor sees 14cm, Error = +6cm. Correction is calculated from this difference.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="35" y="30" width="170" height="50" rx="8" fill="#0f172a" stroke="#f59e0b" strokeWidth="2" />
        <text x="120" y="60" fill="#fbbf24" fontSize="12" fontWeight="black" textAnchor="middle">e(t) = SetPoint - Measured</text>
        <text x="120" y="105" fill="#fde68a" fontSize="8" textAnchor="middle">Distance Discrepancy Vector</text>
      </svg>
    )
  },

  'proportional gain (kp)': {
    title: 'Proportional Gain (Kp)',
    tag: 'PID Parameter',
    color: 'from-purple-500/20 to-blue-500/20 border-purple-500/40 text-purple-300',
    caption: 'Scales corrective steering proportional to error size: large error = strong quick turn.',
    details: 'Correction = Kp × Error. As error approaches zero, corrective steering softly levels out.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <line x1="40" y1="95" x2="200" y2="95" stroke="#475569" strokeWidth="2" />
        <line x1="40" y1="95" x2="40" y2="25" stroke="#475569" strokeWidth="2" />
        <line x1="40" y1="95" x2="190" y2="35" stroke="#a855f7" strokeWidth="3" />
        <text x="120" y="55" fill="#c084fc" fontSize="9" fontWeight="bold">Output = Kp × e(t)</text>
        <text x="120" y="118" fill="#d8b4fe" fontSize="8" textAnchor="middle">Linear Error Multiplier</text>
      </svg>
    )
  },

  'sensor limitations': {
    title: 'Sensor Limitations',
    tag: 'Physical Constraints',
    color: 'from-red-500/20 to-amber-500/20 border-red-500/40 text-red-300',
    caption: 'Ultrasonic echoes glance off angled walls; bright sunlight blinds infrared photoreceivers.',
    details: 'Recognizing sensor blind spots is why engineers use multiple complementary sensors.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(60, 65)">
          <path d="M-20 -20 L15 0 L-20 20" stroke="#f59e0b" strokeWidth="2.5" fill="none" />
          <line x1="15" y1="-25" x2="25" y2="25" stroke="#ef4444" strokeWidth="3" />
          <text x="0" y="34" fill="#fca5a5" fontSize="7" textAnchor="middle">Angled Glancing</text>
        </g>
        <g transform="translate(170, 65)">
          <circle cx="0" cy="-10" r="14" fill="#f59e0b" />
          <text x="0" y="24" fill="#fed7aa" fontSize="7" textAnchor="middle">Sunlight Blinding</text>
        </g>
        <text x="120" y="125" fill="#f87171" fontSize="8" textAnchor="middle">No Single Sensor is 100% Reliable</text>
      </svg>
    )
  },

  'complementary fusion': {
    title: 'Complementary Fusion',
    tag: 'Multi-Sensor Fusion',
    color: 'from-cyan-500/20 to-teal-500/20 border-cyan-500/40 text-cyan-300',
    caption: 'Combines high-frequency gyro data with stable low-frequency ultrasonic & accelerometer readings.',
    details: 'Filters out vibration noise and cumulative sensor drift to calculate accurate true headings.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(45, 40)">
          <rect x="-25" y="-12" width="50" height="24" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
          <text x="0" y="4" fill="#38bdf8" fontSize="7" textAnchor="middle">Gyro (Fast)</text>
        </g>
        <g transform="translate(45, 85)">
          <rect x="-25" y="-12" width="50" height="24" rx="4" fill="#0f172a" stroke="#10b981" strokeWidth="1.5" />
          <text x="0" y="4" fill="#34d399" fontSize="7" textAnchor="middle">Sonar (Stable)</text>
        </g>
        <path d="M70 40 L130 60 M70 85 L130 65" stroke="#94a3b8" strokeWidth="2" />
        <rect x="130" y="45" width="80" height="36" rx="6" fill="#0f172a" stroke="#2dd4bf" strokeWidth="2" />
        <text x="170" y="67" fill="#2dd4bf" fontSize="8" fontWeight="bold" textAnchor="middle">Filtered Truth</text>
      </svg>
    )
  },

  'kalman filter concept': {
    title: 'Kalman Filter Concept',
    tag: 'State Estimation',
    color: 'from-blue-500/20 to-indigo-500/20 border-blue-500/40 text-blue-300',
    caption: 'A statistical algorithm that predicts true position even when measurements contain noise.',
    details: 'Weighs mathematical physics models against noisy sensor data to find the optimal state.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M30 95 Q80 20 130 95" stroke="#3b82f6" strokeWidth="2" fill="none" />
        <path d="M90 95 Q140 20 190 95" stroke="#10b981" strokeWidth="2" fill="none" />
        <path d="M80 95 Q115 5 150 95" stroke="#f59e0b" strokeWidth="3" fill="none" />
        <text x="115" y="118" fill="#fbbf24" fontSize="8" fontWeight="bold" textAnchor="middle">Optimal Bayesian Estimate</text>
      </svg>
    )
  },

  'wheel encoders & odometry': {
    title: 'Wheel Encoders & Odometry',
    tag: 'Dead Reckoning',
    color: 'from-amber-500/20 to-yellow-500/20 border-amber-500/40 text-amber-300',
    caption: 'Slotted optical disc pulses allow the microcontroller to calculate traveled distance and velocity.',
    details: 'Ticks × Wheel Circumference ÷ Slots = Distance in centimeters traveled.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="85" cy="65" r="38" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((angle, i) => (
          <line key={i} x1={85 + 24 * Math.cos(angle * Math.PI / 180)} y1={65 + 24 * Math.sin(angle * Math.PI / 180)} x2={85 + 36 * Math.cos(angle * Math.PI / 180)} y2={65 + 36 * Math.sin(angle * Math.PI / 180)} stroke="#0f172a" strokeWidth="3" />
        ))}
        <rect x="135" y="50" width="70" height="30" rx="4" fill="#0f172a" stroke="#0ea5e9" strokeWidth="1.5" />
        <text x="170" y="68" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">Optical Ticks</text>
        <text x="120" y="125" fill="#fde68a" fontSize="8" textAnchor="middle">Calculates Position from Wheel Ticks</text>
      </svg>
    )
  },

  'watchdog timers': {
    title: 'Watchdog Timer (WDT)',
    tag: 'Failsafe Hardware',
    color: 'from-red-500/20 to-orange-500/20 border-red-500/40 text-red-300',
    caption: 'A hardware countdown timer that automatically reboots the system if the main loop hangs.',
    details: 'Software must continuously reset ("kick") the watchdog; if code crashes, WDT triggers auto-reboot.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <g transform="translate(120, 65)">
          <rect x="-40" y="-30" width="80" height="60" rx="6" fill="#0f172a" stroke="#ef4444" strokeWidth="2" />
          <text x="0" y="-8" fill="#f87171" fontSize="9" fontWeight="bold" textAnchor="middle">WDT</text>
          <text x="0" y="10" fill="#fca5a5" fontSize="7" textAnchor="middle">Countdown</text>
          <path d="M-55 0 L-40 0" stroke="#10b981" strokeWidth="2.5" />
          <text x="-70" y="4" fill="#34d399" fontSize="7">"Kick"</text>
          <text x="0" y="48" fill="#fca5a5" fontSize="8" textAnchor="middle">Auto-Reboot on Software Freeze</text>
        </g>
      </svg>
    )
  },

  'motor stall detection': {
    title: 'Motor Stall Detection',
    tag: 'Overcurrent Protection',
    color: 'from-amber-500/20 to-red-500/20 border-amber-500/40 text-amber-300',
    caption: 'Detects sudden current spikes when wheels get trapped, cutting power to prevent motor burnout.',
    details: 'A trapped motor can draw 3–5x normal current, rapidly overheating H-bridge transistors.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <path d="M30 90 L80 90 L100 35 L120 35 L140 90 L210 90" stroke="#ef4444" strokeWidth="3" fill="none" />
        <text x="110" y="28" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">Stall Current Spike (2.5A)!</text>
        <text x="120" y="118" fill="#fbbf24" fontSize="8" textAnchor="middle">Cuts Power to Prevent Motor Damage</text>
      </svg>
    )
  },

  'failsafe defaults': {
    title: 'Failsafe Defaults',
    tag: 'Safety Architecture',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/40 text-emerald-300',
    caption: 'System defaults to safe state (brakes locked, power cut) whenever sensor communication fails.',
    details: 'Never allow actuators to run in undefined states if wiring snaps or battery voltage sags.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <rect x="40" y="30" width="160" height="65" rx="8" fill="#0f172a" stroke="#10b981" strokeWidth="2" />
        <text x="120" y="55" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">FAILSAFE STATE</text>
        <text x="120" y="75" fill="#a7f3d0" fontSize="8" textAnchor="middle">Brakes Engaged • Motors Cut</text>
        <text x="120" y="120" fill="#86efac" fontSize="8" textAnchor="middle">Safe Shutdown on Any Fault</text>
      </svg>
    )
  },

  'akshar bharati service mission': {
    title: 'Akshar Bharati Mission',
    tag: 'Service Learning',
    color: 'from-amber-500/20 to-blue-500/20 border-amber-500/40 text-amber-300',
    caption: 'Applying robotics and embedded engineering for community good in agriculture, accessibility, and education.',
    details: 'Building agricultural moisture rovers, mobility aids for the visually impaired, and accessible STEM kits.',
    renderSvg: () => (
      <svg viewBox="0 0 240 140" className="w-full h-28 drop-shadow-md">
        <circle cx="120" cy="55" r="30" fill="#0f172a" stroke="#f59e0b" strokeWidth="2.5" />
        <path d="M120 40 L128 50 L120 60 L112 50 Z" fill="#38bdf8" />
        <circle cx="120" cy="50" r="4" fill="#f59e0b" />
        <text x="120" y="105" fill="#fde68a" fontSize="9" fontWeight="black" textAnchor="middle">Robotics for Humanitarian Impact</text>
        <text x="120" y="122" fill="#7dd3fc" fontSize="8" textAnchor="middle">Agriculture • Accessibility • Education</text>
      </svg>
    )
  }
};

// Generic Fallback Generator for any unanticipated concept
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

export default function KeyConceptVisuals({ concepts = [], content = '', grade = 5 }) {
  const [activeConcept, setActiveConcept] = useState(null);
  const [viewMode, setViewMode] = useState('cards');

  if ((!concepts || concepts.length === 0) && !content) return null;

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
            {viewMode === 'cards'
              ? 'Visual diagrams to help you imagine and understand core mechanisms:'
              : 'Lesson notes with formatted headings, explanations, and lists:'}
          </p>
        </div>

        {/* View Toggle */}
        <div className="flex items-center gap-1 bg-slate-950 rounded-lg p-1 border border-slate-800 self-start sm:self-auto">
          <button
            onClick={() => setViewMode('cards')}
            aria-pressed={viewMode === 'cards'}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              viewMode === 'cards'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            🖼️ Visual Cards
          </button>
          <button
            onClick={() => setViewMode('text')}
            aria-pressed={viewMode === 'text'}
            className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
              viewMode === 'text'
                ? 'bg-blue-600 text-white shadow'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            Text Content
          </button>
        </div>
      </div>

      {/* FORMATTED TEXT CONTENT */}
      {viewMode === 'text' && (
        <article className="module-text-content">
          <h4>Module Text Content</h4>
          <ReactMarkdown
            components={{
              h1: ({ children }) => <h3>{children}</h3>,
              h2: ({ children }) => <h3>{children}</h3>,
              h3: ({ children }) => <h4>{children}</h4>,
            }}
          >
            {content}
          </ReactMarkdown>
        </article>
      )}

      {/* VISUAL CARDS GRID */}
      {viewMode === 'cards' && (
        <div className="concept-card-grid">
          {concepts.map((kc, i) => {
            const normalized = kc.toLowerCase().trim();
            const data = CONCEPT_DATA[normalized] || getFallbackConcept(kc);

            return (
              <button
                type="button"
                key={i}
                onClick={() => setActiveConcept(data)}
                className="concept-summary-card"
                aria-haspopup="dialog"
                aria-label={`Learn more about ${data.title}`}
              >
                <span className="concept-summary-tag">{data.tag}</span>
                <h4 className="concept-summary-title">{data.title}</h4>
                <div className="concept-summary-visual" aria-hidden="true">
                  {data.renderSvg()}
                </div>
                <p className="concept-summary-caption">{data.caption}</p>
                <span className="concept-summary-action">Explore concept <span aria-hidden="true">→</span></span>
              </button>
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
            className="concept-detail-modal relative w-full max-w-lg bg-slate-900 border border-cyan-500/50 rounded-2xl p-6 shadow-2xl text-left overflow-hidden"
            role="dialog"
            aria-modal="true"
            aria-labelledby="concept-detail-title"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveConcept(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-full w-8 h-8 flex items-center justify-center font-bold text-sm transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              ✕
            </button>

            {/* Modal Tag & Title */}
            <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan-950 text-cyan-300 border border-cyan-800">
              {activeConcept.tag}
            </span>

            <h3 id="concept-detail-title" className="text-xl font-black text-white mt-2 mb-1">
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
                className="px-5 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-bold transition-all shadow-md cursor-pointer"
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
