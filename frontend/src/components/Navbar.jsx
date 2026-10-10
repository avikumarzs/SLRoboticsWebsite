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
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/90 border-b border-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo & Title */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 flex items-center justify-center text-xl shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
                🤖
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-100 to-slate-300 bg-clip-text text-transparent">
                  Akshar Bharti
                </span>
                <span className="hidden sm:inline-block ml-2 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider rounded-md bg-blue-500/20 text-blue-300 border border-blue-500/30">
                  Robotics Initiative
                </span>
              </div>
            </Link>

            {/* Grade Quick Selector Nav */}
            <div className="hidden md:flex items-center gap-1.5 bg-slate-800/80 p-1 rounded-xl border border-slate-700/60">
              <span className="text-xs text-slate-400 px-2 font-medium">Grades:</span>
              {[5, 6, 7, 8, 9, 10].map((g) => {
                const isSelected = currentGrade === g;
                return (
                  <button
                    key={g}
                    onClick={() => navigate(`/learn/${g}`)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-bold transition-all ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm'
                        : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                    }`}
                  >
                    G{g}
                  </button>
                );
              })}
            </div>

            {/* Right Action buttons */}
            <div className="flex items-center gap-3">
              <button
                onClick={handleOpenStats}
                className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold border border-slate-700 transition-colors"
                title="View Progress Tracker"
              >
                <span>📊</span>
                <span className="hidden sm:inline">My Progress</span>
              </button>

              <Link
                to="/"
                className="px-3.5 py-1.5 rounded-xl text-xs font-bold bg-blue-600 hover:bg-blue-500 text-white shadow-sm transition-all"
              >
                Home
              </Link>
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
