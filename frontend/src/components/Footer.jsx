import React from 'react';
import { Link } from 'react-router-dom';

const COPYRIGHT_YEAR = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800/80 pt-12 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Mission Overview */}
          <div className="md:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img src="/akshar-bharati-logo.png" alt="Akshar Bharati Sewa International logo" className="h-12 w-[72px] object-contain" />
              <span className="text-white font-bold text-base tracking-tight">
                Akshar Bharati Sewa International
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed max-w-md">
              A Service Learning initiative transforming physical robotics booklets into an interactive, hands-on digital laboratory for school students across Grades 5 through 10.
            </p>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <span className="inline-block w-2 h-2 rounded-full bg-emerald-400" />
              <span>Dedicated to experiential STEM education in rural and government schools</span>
            </div>
          </div>

          {/* Quick Grade Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Curriculum Tiers
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/learn/5" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-blue-900/50 text-blue-300 font-mono">G5</span>
                  <span>Simple Machines & Robots</span>
                </Link>
              </li>
              <li>
                <Link to="/learn/6" className="hover:text-blue-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-blue-900/50 text-blue-300 font-mono">G6</span>
                  <span>Mechanisms & Motors</span>
                </Link>
              </li>
              <li>
                <Link to="/learn/7" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-purple-900/50 text-purple-300 font-mono">G7</span>
                  <span>Sensors & Circuits</span>
                </Link>
              </li>
              <li>
                <Link to="/learn/8" className="hover:text-purple-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-purple-900/50 text-purple-300 font-mono">G8</span>
                  <span>Algorithms & Flowcharts</span>
                </Link>
              </li>
              <li>
                <Link to="/learn/9" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 font-mono">G9</span>
                  <span>Microcontrollers & PWM</span>
                </Link>
              </li>
              <li>
                <Link to="/learn/10" className="hover:text-cyan-400 transition-colors flex items-center gap-1.5">
                  <span className="text-xs px-1.5 py-0.5 rounded bg-cyan-900/50 text-cyan-300 font-mono">G10</span>
                  <span>Autonomous Navigation</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Interactive Laboratories */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-white mb-4">
              Interactive Laboratories
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/learn/5" className="hover:text-slate-200 transition-colors">
                  🛠️ Build a Robot Assembly Lab
                </Link>
              </li>
              <li>
                <Link to="/learn/6" className="hover:text-slate-200 transition-colors">
                  🕹️ Rover Movement Simulator
                </Link>
              </li>
              <li>
                <Link to="/learn/7" className="hover:text-slate-200 transition-colors">
                  📡 Ultrasonic Sensor Logic
                </Link>
              </li>
              <li>
                <Link to="/learn/8" className="hover:text-slate-200 transition-colors">
                  📊 Visual Flowchart Builder
                </Link>
              </li>
              <li>
                <Link to="/learn/10" className="hover:text-slate-200 transition-colors">
                  🎯 Autonomous Mission Challenges
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Attribution */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <div>
            © {COPYRIGHT_YEAR} Akshar Bharati Sewa International. Robotics Simulation Lab for Grades 5–10.
          </div>
          <div className="flex items-center gap-4">
            <span>Grades 5–10 Curriculum</span>
            <span>•</span>
            <span>Full-Stack MERN Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
