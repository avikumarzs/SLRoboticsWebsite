import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { getOverallStats, resetAllProgress } from '../utils/progressManager';

export default function Navbar({ currentGrade = null }) {
  const navigate = useNavigate();
  const [showStatsModal, setShowStatsModal] = useState(false);
  const [stats, setStats] = useState(getOverallStats());

  const handleOpenStats = () => {
    setStats(getOverallStats());
    setShowStatsModal(true);
  };

  const handleReset = () => {
    if (window.confirm('Reset all your module reading and activity completion progress?')) {
      resetAllProgress();
      setStats(getOverallStats());
      setShowStatsModal(false);
      window.location.reload();
    }
  };

  return (
    <>
      <nav aria-label="Main navigation" className="sticky top-0 z-50 backdrop-blur-md bg-amber-50/95 border-b border-amber-200 text-amber-950 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & Title */}
            <Link to="/" className="flex min-w-0 items-center gap-2 sm:gap-3 group">
              <img src="/akshar-bharati-logo.png" alt="Akshar Bharati Sewa International logo" className="h-10 w-14 sm:h-12 sm:w-[72px] object-contain shrink-0" />
              <div className="leading-tight">
                <span className="block font-bold text-xs sm:text-base tracking-tight text-slate-900">
                  Akshar Bharati Sewa International
                </span>
                <span className="hidden sm:inline text-xs font-semibold text-blue-800">Robotics Simulation Lab</span>
              </div>
            </Link>

            {/* Grade Quick Selector Nav */}
            <div className="hidden md:flex items-center gap-1.5 bg-amber-100 p-1 rounded-xl border border-amber-300">
              <span className="text-xs text-amber-900 px-2 font-medium">Grades:</span>
              {[5, 6, 7, 8, 9, 10].map((g) => {
                const isSelected = currentGrade === g;
                return (
                  <button
                    key={g}
                    onClick={() => navigate(`/learn/${g}`)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-amber-600 text-amber-950 shadow-sm'
                        : 'text-amber-900 hover:text-amber-950 hover:bg-amber-200'
                    }`}
                  >
                    G{g}
                  </button>
                );
              })}
            </div>

            {/* Right Action buttons */}
            <div className="flex items-center gap-1.5 sm:gap-3">
              <Link
                to="/labs"
                className="navbar-labs-link"
              >
                <span aria-hidden="true">⚡</span>
                <span className="hidden sm:inline">Interactive Labs</span>
              </Link>

              <button
                onClick={handleOpenStats}
                className="navbar-progress-button"
                title="View Progress Tracker"
              >
                <span aria-hidden="true">📊</span>
                <span className="hidden sm:inline">My Progress</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Progress & Stats Modal */}
      {showStatsModal && (
        <div className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl max-w-md w-full p-6 text-white shadow-2xl relative">
            <button
              onClick={() => setShowStatsModal(false)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white text-lg"
            >
              ✕
            </button>

            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl">📊</span>
              <h3 className="text-lg font-bold text-white">Your Robotics Journey</h3>
            </div>

            <p className="text-xs text-slate-400 mb-6">
              Track your exploration across Grades 5 through 10. All progress is saved automatically in your browser.
            </p>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-[10px] uppercase font-mono text-slate-400">Modules Completed</div>
                <div className="text-2xl font-bold text-blue-400 mt-1">{stats.totalModules}</div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-[10px] uppercase font-mono text-slate-400">Activities Finished</div>
                <div className="text-2xl font-bold text-emerald-400 mt-1">{stats.totalActivities}</div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-[10px] uppercase font-mono text-slate-400">Quizzes Taken</div>
                <div className="text-2xl font-bold text-purple-400 mt-1">{stats.quizzesTaken}</div>
              </div>
              <div className="p-3 bg-slate-800/80 rounded-xl border border-slate-700">
                <div className="text-[10px] uppercase font-mono text-slate-400">Average Quiz Score</div>
                <div className="text-2xl font-bold text-amber-400 mt-1">{stats.avgQuiz}%</div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 text-xs">
              <button
                onClick={handleReset}
                className="text-rose-400 hover:text-rose-300 font-semibold"
              >
                Reset Progress
              </button>
              <button
                onClick={() => setShowStatsModal(false)}
                className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-bold text-white"
              >
                Continue Learning
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
