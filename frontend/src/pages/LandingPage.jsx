import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { getAllProgress } from '../utils/progressManager';

const GRADES_METADATA = [
  {
    grade: 5,
    tier: 'Discover',
    tierLevel: 'Level 1',
    theme: 'Introduction to Simple Machines & Robots',
    summary: 'Explore levers, pulleys, wheels, and the anatomy of a robot through the Sense-Think-Act cycle.',
    border: 'hover:border-cyan-400',
    icon: '🤖',
    topics: ['What is Robotics?', 'Simple Machines', 'Robot Anatomy', 'Sense-Think-Act']
  },
  {
    grade: 6,
    tier: 'Discover',
    tierLevel: 'Level 2',
    theme: 'Mechanisms, Motors & Motion Dynamics',
    summary: 'Discover gear ratios, DC vs servo motors, torque vs speed, and differential drive steering.',
    border: 'hover:border-teal-400',
    icon: '⚙️',
    topics: ['Gear Ratios & Torque', 'DC vs Servo Motors', 'Differential Drive', 'Motion Control']
  },
  {
    grade: 7,
    tier: 'Explore',
    tierLevel: 'Level 3',
    theme: 'Sensors, Actuators & Circuit Fundamentals',
    summary: 'Connect sensory inputs to mechanical outputs using ultrasonic radar, IR sensors, and motor drivers.',
    border: 'hover:border-purple-400',
    icon: '📡',
    topics: ['Input-Process-Output', 'Ultrasonic HC-SR04', 'IR Line Sensing', 'H-Bridge Drivers']
  },
  {
    grade: 8,
    tier: 'Explore',
    tierLevel: 'Level 4',
    theme: 'Algorithms, Flowcharts & Control Sequences',
    summary: 'Design decision trees, conditional branches, loops, and visual flowchart logic for autonomy.',
    border: 'hover:border-pink-400',
    icon: '📊',
    topics: ['Algorithmic Logic', 'Standard Flowcharts', 'Conditional Branches', 'Continuous Polling']
  },
  {
    grade: 9,
    tier: 'Engineer',
    tierLevel: 'Level 5',
    theme: 'Microcontrollers, Pseudocode & Embedded Logic',
    summary: 'Explore microcontroller architectures, GPIO modes, ADC converters, and PWM motor modulation.',
    border: 'hover:border-cyan-400',
    icon: '💻',
    topics: ['MCU Architecture', 'Digital vs Analog', 'PWM Modulation', 'Finite State Machines']
  },
  {
    grade: 10,
    tier: 'Engineer',
    tierLevel: 'Level 6',
    theme: 'Autonomous Systems & Robotics Problem Solving',
    summary: 'Closed-loop feedback control, proportional error minimization, sensor fusion, and societal applications.',
    border: 'hover:border-blue-400',
    icon: '🚀',
    topics: ['Closed-Loop Feedback', 'Sensor Fusion', 'Watchdog Failsafes', 'Mission Engineering']
  }
];

export default function LandingPage() {
  const navigate = useNavigate();
  const [progressData] = useState(getAllProgress);

  const scrollToGrades = () => {
    const el = document.getElementById('grade-selection');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="landing-hero relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-32">
        {/* Subtle Background Glows */}
        <div className="landing-hero-glow absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] blur-[120px] pointer-events-none rounded-full" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#dc790018_1px,transparent_1px),linear-gradient(to_bottom,#dc790018_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            {/* Initiative Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-8 shadow-sm">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span>Akshar Bharati Sewa International • Robotics Simulation Lab • Grades 5–10</span>
            </div>

            {/* Official Required Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-6 leading-[1.1]">
              Discover Robotics.{' '}
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-cyan-400 bg-clip-text text-transparent">
                Build Ideas.
              </span>{' '}
              Shape the Future.
            </h1>

            {/* Official Required Supporting Text */}
            <p className="text-lg sm:text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-normal leading-relaxed">
              An interactive learning journey introducing young minds to robotics, engineering, creativity, and problem-solving.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button
                id="start-learning-btn"
                onClick={scrollToGrades}
                className="w-full sm:w-auto px-8 py-4 rounded-xl text-base font-bold bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 hover:from-blue-500 hover:via-indigo-500 hover:to-cyan-400 text-white shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2"
              >
                <span>🚀 Start Learning Now</span>
                <span className="text-lg">→</span>
              </button>

              <button
                onClick={() => navigate('/labs')}
                className="w-full sm:w-auto px-7 py-4 rounded-xl text-base font-bold bg-amber-500 hover:bg-amber-400 text-amber-950 shadow-lg transition-all"
              >
                Try the Robotics Labs →
              </button>
            </div>

            <div className="landing-facts" aria-label="Platform highlights">
              <div><strong>Grades 5–10</strong><span>Six learning pathways</span></div>
              <div><strong>Runs in your browser</strong><span>No installation needed</span></div>
              <div><strong>No robot kit needed</strong><span>Start with virtual activities</span></div>
            </div>
          </div>
        </div>
      </section>

      {/* Grade Selection Section */}
      <section id="grade-selection" className="py-20 bg-slate-900/50 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
              Curriculum Progression
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Select Your Grade Level
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Six tailored grade environments spanning from playful mechanical fundamentals in Grades 5–6 to embedded algorithms in Grades 7–8 and mission systems in Grades 9–10.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {GRADES_METADATA.map((item) => {
              const gradeProg = progressData[item.grade] || {};
              const modulesDone = gradeProg.completedModules?.length || 0;
              const hasQuizScore = gradeProg.quizScore !== undefined && gradeProg.quizScore !== null;
              const bestScore = gradeProg.bestQuizScore || gradeProg.quizScore?.percentage;

              return (
                <div
                  key={item.grade}
                  onClick={() => navigate(`/learn/${item.grade}`)}
                  onKeyDown={(event) => { if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); navigate(`/learn/${item.grade}`); } }}
                  role="link"
                  tabIndex={0}
                  className={`group relative rounded-2xl bg-slate-900 border border-slate-800 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 cursor-pointer flex flex-col justify-between ${item.border}`}
                >
                  <div>
                    {/* Header: Grade & Tier Badge */}
                    <div className="flex items-center justify-between gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <span className="text-3xl p-2 rounded-xl bg-slate-800/80 border border-slate-700/60 shadow-inner">
                          {item.icon}
                        </span>
                        <div>
                          <div className="text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                            Grade {item.grade}
                          </div>
                          <div className="text-xs text-slate-400 font-medium">
                            {item.tierLevel} • {item.tier}
                          </div>
                        </div>
                      </div>

                    </div>

                    {/* Theme Title */}
                    <h3 className="text-base font-bold text-slate-100 mb-2 leading-snug">
                      {item.theme}
                    </h3>

                    {/* Summary */}
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">
                      {item.summary}
                    </p>

                    {/* Topic Tags */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {item.topics.map((t, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-0.5 rounded bg-slate-800/80 text-[11px] font-medium text-slate-300 border border-slate-700/50"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Card Bottom Progress & Action */}
                  <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between text-xs">
                    <div className="text-slate-400">
                      <span className="text-slate-500 font-semibold flex items-center gap-1">
                        <span>{modulesDone ? '✓' : '•'}</span> {modulesDone} of {item.grade === 5 ? 3 : 4} modules read
                      </span>
                      {hasQuizScore && <span className="block mt-1 text-blue-800 font-semibold">Best quiz: {bestScore}%</span>}
                    </div>

                    <div className="flex items-center gap-1 font-bold text-blue-400 group-hover:translate-x-1 transition-transform">
                      <span>Launch Dashboard</span>
                      <span>→</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Learning Approach */}
      <section id="how-it-works" className="py-20 border-t border-slate-800/80 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-bold uppercase tracking-wider">
              A clear path from curiosity to confidence
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mt-3 mb-4">
              Learn robotics step by step
            </h2>
            <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
              Each grade combines focused reading with practical experiments and a chance to check what you’ve learned.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="landing-approach-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400 font-bold flex items-center justify-center mb-4">
                01
              </div>
              <h3 className="text-base font-bold text-white mb-2">Understand</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Read a lesson written for your grade, supported by diagrams and robotics examples.
              </p>
            </div>

            <div className="landing-approach-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400 font-bold flex items-center justify-center mb-4">
                02
              </div>
              <h3 className="text-base font-bold text-white mb-2">Build</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Explore robot components and see how they work together in a virtual workshop.
              </p>
            </div>

            <div className="landing-approach-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-xl bg-purple-600/20 border border-purple-500/30 text-purple-400 font-bold flex items-center justify-center mb-4">
                03
              </div>
              <h3 className="text-base font-bold text-white mb-2">Experiment</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Try movement, sensor, and logic simulations in the interactive labs.
              </p>
            </div>

            <div className="landing-approach-card p-6 rounded-2xl bg-slate-900/60 border border-slate-800 relative">
              <div className="w-10 h-10 rounded-xl bg-emerald-600/20 border border-emerald-500/30 text-emerald-400 font-bold flex items-center justify-center mb-4">
                04
              </div>
              <h3 className="text-base font-bold text-white mb-2">Check your progress</h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                Complete a short quiz and track finished modules in your browser.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section: Akshar Bharati Educational Purpose */}
      <section className="py-20 bg-slate-900/40 border-t border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-amber-50 via-white to-amber-100 rounded-3xl border border-amber-200 p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 space-y-4">
                <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-bold uppercase tracking-wider">
                  About the Initiative
                </span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-amber-950">
                  Akshar Bharati Sewa International: Robotics Learning for Young Minds
                </h2>
                <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                  This service-learning project introduces robotics ideas to students in Grades 5 through 10 through visual lessons and interactive simulations.
                </p>
                <p className="text-sm text-slate-400 leading-relaxed">
                  The resource is designed to make robotics approachable and accessible, whether students are meeting engineering ideas for the first time or ready to explore autonomous systems.
                </p>
                <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-slate-300">
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Open Educational Resource
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> No Hardware Purchase Required
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-blue-400">✓</span> Works on Mobile, Tablet & Desktop
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4 flex flex-col items-center justify-center p-6 bg-amber-100 rounded-2xl border border-amber-300 text-center">
                <div className="text-5xl mb-3">🤝</div>
                <h4 className="text-amber-950 font-bold text-base mb-1">Service Learning Project</h4>
                <p className="text-xs text-slate-400 mb-4">
                  Community-driven engineering for educational accessibility.
                </p>
                <span className="text-xs font-bold text-amber-800">Grades 5–10 · Open learning resource</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
