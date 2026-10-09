import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import BuildRobotActivity from '../components/activities/BuildRobotActivity';
import MovementSimActivity from '../components/activities/MovementSimActivity';
import SensorLogicActivity from '../components/activities/SensorLogicActivity';
import FlowchartBuilderActivity from '../components/activities/FlowchartBuilderActivity';
import InteractiveQuizActivity from '../components/activities/InteractiveQuizActivity';
import { fallbackCurriculum } from '../data/fallbackCurriculum';
import {
  getGradeProgress,
  markModuleComplete,
  markActivityComplete
} from '../utils/progressManager';

export default function InteractiveScreen() {
  const { grade } = useParams();
  const navigate = useNavigate();
  const gradeNum = parseInt(grade, 10);

  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview'); // 'overview', 'modules', 'activities', 'quiz'
  const [activeModuleId, setActiveModuleId] = useState(null);
  const [activeActivityType, setActiveActivityType] = useState('build-a-robot');
  const [progress, setProgress] = useState(getGradeProgress(gradeNum));
  const [dataSource, setDataSource] = useState('backend'); // 'backend' or 'fallback'

  // Fetch curriculum from backend with automatic fallback to local curriculum
  useEffect(() => {
    setLoading(true);
    setProgress(getGradeProgress(gradeNum));

    // Try fetching from Express backend
    axios.get(`http://localhost:5000/api/content/${gradeNum}`, { timeout: 3000 })
      .then(res => {
        if (res.data && res.data.grade) {
          setContent(res.data);
          setDataSource('backend');
          if (res.data.modules && res.data.modules.length > 0) {
            setActiveModuleId(res.data.modules[0].id);
          }
          if (res.data.activities && res.data.activities.length > 0) {
            setActiveActivityType(res.data.activities[0].type);
          }
        } else {
          loadFallback();
        }
        setLoading(false);
      })
      .catch(err => {
        console.warn(`Backend fetch note for Grade ${gradeNum}:`, err.message);
        loadFallback();
        setLoading(false);
      });
  }, [gradeNum]);

  const loadFallback = () => {
    const item = fallbackCurriculum.find(c => c.grade === gradeNum);
    if (item) {
      setContent(item);
      setDataSource('fallback');
      if (item.modules && item.modules.length > 0) {
        setActiveModuleId(item.modules[0].id);
      }
      if (item.activities && item.activities.length > 0) {
        setActiveActivityType(item.activities[0].type);
      }
    } else {
      setContent(null);
    }
  };

  const handleCompleteModule = (moduleId) => {
    const updated = markModuleComplete(gradeNum, moduleId);
    setProgress(updated);
  };

  const handleActivityCompleted = (actId) => {
    const updated = markActivityComplete(gradeNum, actId);
    setProgress(updated);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
        <Navbar currentGrade={gradeNum} />
        <div className="flex flex-col items-center justify-center p-12 text-center">
          <div className="w-12 h-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin mb-4" />
          <h2 className="text-xl font-bold">Loading Grade {grade} Curriculum...</h2>
          <p className="text-sm text-slate-400 mt-2">Connecting to Akshar Bharti learning laboratory</p>
        </div>
        <Footer />
      </div>
    );
  }

  if (!content) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-between">
        <Navbar currentGrade={gradeNum} />
        <div className="max-w-xl mx-auto my-auto p-8 text-center bg-slate-900 rounded-3xl border border-slate-800">
          <div className="text-5xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold mb-2">Grade {grade} Not Found</h2>
          <p className="text-sm text-slate-400 mb-6">
            The requested grade level is not supported. Please select one of the active grades (5, 6, 7, 8, 9, or 10).
          </p>
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {[5, 6, 7, 8, 9, 10].map(g => (
              <button
                key={g}
                onClick={() => navigate(`/learn/${g}`)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-sm font-semibold text-blue-400 border border-slate-700"
              >
                Grade {g}
              </button>
            ))}
          </div>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl text-xs font-bold transition-all"
          >
            ← Return to Home
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // Tier Theme Customization
  const tier = content.tier || (gradeNum <= 6 ? 'discover' : gradeNum <= 8 ? 'explore' : 'engineer');
  const isDiscover = tier === 'discover';
  const isExplore = tier === 'explore';
  const isEngineer = tier === 'engineer';

  const tierStyles = {
    badgeBg: isDiscover
      ? 'bg-blue-100 text-blue-800 dark:bg-blue-900/60 dark:text-blue-300'
      : isExplore
      ? 'bg-purple-100 text-purple-800 dark:bg-purple-900/60 dark:text-purple-300'
      : 'bg-cyan-100 text-cyan-800 dark:bg-cyan-900/60 dark:text-cyan-300',
    themeGradient: isDiscover
      ? 'from-blue-600 via-indigo-600 to-cyan-500'
      : isExplore
      ? 'from-indigo-600 via-purple-600 to-pink-500'
      : 'from-slate-700 via-cyan-800 to-blue-900',
    cardBg: isEngineer
      ? 'bg-slate-900/90 border-slate-800'
      : 'bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800'
  };

  const selectedModule = content.modules?.find(m => m.id === activeModuleId) || content.modules?.[0];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col selection:bg-blue-600 selection:text-white">
      <Navbar currentGrade={gradeNum} />

      {/* Grade Header Banner */}
      <header className="relative bg-slate-900 border-b border-slate-800/80 pt-8 pb-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div>
              {/* Breadcrumb & Tier Badge */}
              <div className="flex items-center gap-3 mb-2">
                <Link to="/" className="text-xs text-slate-400 hover:text-slate-200 transition-colors">
                  Home
                </Link>
                <span className="text-xs text-slate-600">/</span>
                <span className={`px-2.5 py-0.5 rounded-full text-xs font-bold uppercase tracking-wider ${tierStyles.badgeBg}`}>
                  Grade {gradeNum} • {tier.toUpperCase()} TIER
                </span>
                {dataSource === 'fallback' && (
                  <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[10px] font-mono bg-slate-800 text-slate-400 border border-slate-700">
                    Offline Ready
                  </span>
                )}
              </div>

              {/* Title & Subtitle */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                {content.theme}
              </h1>
              <p className="text-sm sm:text-base text-slate-300 mt-1 max-w-3xl">
                {content.subtitle || content.introduction}
              </p>
            </div>

            {/* Grade Switcher Pills */}
            <div className="flex flex-col items-start md:items-end gap-2">
              <span className="text-xs text-slate-400 font-medium">Switch Grade Level:</span>
              <div className="flex items-center gap-1.5 bg-slate-800/90 p-1.5 rounded-xl border border-slate-700">
                {[5, 6, 7, 8, 9, 10].map((g) => (
                  <button
                    key={g}
                    onClick={() => navigate(`/learn/${g}`)}
                    className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${
                      g === gradeNum
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'text-slate-400 hover:text-white hover:bg-slate-700'
                    }`}
                  >
                    G{g}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Tabs Bar */}
          <div className="flex items-center gap-2 mt-8 overflow-x-auto pb-1 border-b border-slate-800/80">
            <button
              onClick={() => setActiveTab('overview')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'overview'
                  ? 'border-blue-500 text-white bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>📋</span>
              <span>Overview & Goals</span>
            </button>

            <button
              onClick={() => setActiveTab('modules')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'modules'
                  ? 'border-blue-500 text-white bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>📖</span>
              <span>Learning Modules ({content.modules?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab('activities')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'activities'
                  ? 'border-blue-500 text-white bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>⚡</span>
              <span>Interactive Labs ({content.activities?.length || 0})</span>
            </button>

            <button
              onClick={() => setActiveTab('quiz')}
              className={`px-4 py-2.5 text-xs sm:text-sm font-bold rounded-t-xl transition-all border-b-2 flex items-center gap-2 ${
                activeTab === 'quiz'
                  ? 'border-blue-500 text-white bg-slate-800/60'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              <span>🏆</span>
              <span>Mastery Quiz</span>
              {progress?.quizScore && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-emerald-900/80 text-emerald-300">
                  {progress.quizScore.percentage}%
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-1 w-full">
        {/* TAB 1: OVERVIEW & PROJECT GOALS */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Introduction Card */}
            <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xl">🌟</span>
                <h3 className="text-lg font-bold text-white uppercase tracking-wider">
                  Grade {gradeNum} Curriculum Introduction
                </h3>
              </div>
              <p className="text-slate-300 text-base leading-relaxed">
                {content.introduction}
              </p>
            </div>

            {/* Goals & Problem Statements Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Project Goals */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl text-blue-400">🎯</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Project Learning Goals
                  </h3>
                </div>
                <ul className="space-y-3">
                  {content.projectGoals?.map((goal, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-blue-500/20 text-blue-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{goal}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Problem Statements */}
              <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-xl text-rose-400">❓</span>
                  <h3 className="text-base font-bold text-white uppercase tracking-wider">
                    Core Problem Statements
                  </h3>
                </div>
                <ul className="space-y-3">
                  {content.problemStatements?.map((prob, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                      <span className="w-5 h-5 rounded-full bg-rose-500/20 text-rose-400 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                        {idx + 1}
                      </span>
                      <span>{prob}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Interactive Module Highlights */}
            <div className="bg-slate-900/60 rounded-2xl border border-slate-800 p-6">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-4">
                Structured Modules in Grade {gradeNum}:
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.modules?.map((mod, i) => (
                  <div
                    key={mod.id}
                    onClick={() => {
                      setActiveModuleId(mod.id);
                      setActiveTab('modules');
                    }}
                    className="p-4 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 cursor-pointer transition-all hover:-translate-y-0.5"
                  >
                    <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                      <span className="font-mono text-blue-400 font-bold">Module {i + 1}</span>
                      <span>{mod.readTime}</span>
                    </div>
                    <h4 className="text-sm font-bold text-white mb-2">{mod.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{mod.summary}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Next Step Callout */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-6 rounded-2xl bg-gradient-to-r from-blue-900/30 to-indigo-900/30 border border-blue-800/40">
              <div>
                <h4 className="text-base font-bold text-white">Ready to begin learning?</h4>
                <p className="text-xs text-slate-400">
                  Read Module 1 or dive straight into the hands-on interactive activities.
                </p>
              </div>
              <div className="flex gap-3">
                <button
                  onClick={() => setActiveTab('modules')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-md"
                >
                  Read Modules →
                </button>
                <button
                  onClick={() => setActiveTab('activities')}
                  className="px-5 py-2.5 rounded-xl font-bold text-xs bg-slate-800 hover:bg-slate-700 text-white transition-all"
                >
                  Launch Interactive Lab
                </button>
              </div>
            </div>
          </div>
        )}

        {/* TAB 2: LEARNING MODULES */}
        {activeTab === 'modules' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Modules Sidebar List */}
            <div className="lg:col-span-4 space-y-3">
              <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                Grade {gradeNum} Reading Modules
              </h3>
              {content.modules?.map((m, idx) => {
                const isSelected = selectedModule?.id === m.id;
                const isCompleted = progress?.completedModules?.includes(m.id);
                return (
                  <div
                    key={m.id}
                    onClick={() => setActiveModuleId(m.id)}
                    className={`p-4 rounded-xl border transition-all cursor-pointer ${
                      isSelected
                        ? 'border-blue-500 bg-blue-950/40 shadow-lg text-white'
                        : 'border-slate-800 bg-slate-900/70 hover:border-slate-700 text-slate-300'
                    }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-mono text-blue-400 font-bold">Module {idx + 1}</span>
                      <div className="flex items-center gap-1.5">
                        <span className="text-[11px] text-slate-400">{m.readTime}</span>
                        {isCompleted && (
                          <span className="text-emerald-400 font-bold">✓ Read</span>
                        )}
                      </div>
                    </div>
                    <h4 className="text-sm font-bold mb-1">{m.title}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2">{m.summary}</p>
                  </div>
                );
              })}
            </div>

            {/* Selected Module Viewer */}
            <div className="lg:col-span-8">
              {selectedModule ? (
                <div className="bg-slate-900 rounded-2xl border border-slate-800 p-6 md:p-8">
                  <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-800 pb-4 mb-6">
                    <div>
                      <span className="text-xs font-mono text-blue-400 font-bold uppercase">
                        Module Reading
                      </span>
                      <h2 className="text-2xl font-bold text-white mt-1">
                        {selectedModule.title}
                      </h2>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleCompleteModule(selectedModule.id)}
                        className={`px-4 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                          progress?.completedModules?.includes(selectedModule.id)
                            ? 'bg-emerald-900/60 text-emerald-300 border border-emerald-700'
                            : 'bg-blue-600 hover:bg-blue-500 text-white shadow-md'
                        }`}
                      >
                        <span>{progress?.completedModules?.includes(selectedModule.id) ? '✓ Completed' : 'Mark as Read'}</span>
                      </button>
                    </div>
                  </div>

                  {/* Key Concepts Tags */}
                  {selectedModule.keyConcepts && (
                    <div className="mb-6 p-4 rounded-xl bg-slate-950/60 border border-slate-800">
                      <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider mb-2">
                        Key Engineering Concepts:
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {selectedModule.keyConcepts.map((kc, i) => (
                          <span
                            key={i}
                            className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-cyan-300 border border-slate-700"
                          >
                            • {kc}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Module Text Content */}
                  <div className="prose prose-invert max-w-none text-slate-300 text-sm leading-relaxed space-y-4 whitespace-pre-line">
                    {selectedModule.content}
                  </div>

                  {/* Action Footer */}
                  <div className="mt-8 pt-6 border-t border-slate-800 flex items-center justify-between">
                    <button
                      onClick={() => handleCompleteModule(selectedModule.id)}
                      className="text-xs font-semibold text-blue-400 hover:text-blue-300 flex items-center gap-1"
                    >
                      <span>✓ Save Progress</span>
                    </button>

                    <button
                      onClick={() => setActiveTab('activities')}
                      className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-bold transition-all"
                    >
                      Try Interactive Activity →
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-8 text-center bg-slate-900 rounded-2xl border border-slate-800 text-slate-400">
                  Select a module from the list to begin reading.
                </div>
              )}
            </div>
          </div>
        )}

        {/* TAB 3: INTERACTIVE ACTIVITIES */}
        {activeTab === 'activities' && (
          <div className="space-y-6">
            {/* Activity Switcher Bar */}
            <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-2xl bg-slate-900 border border-slate-800">
              <div className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                Choose Interactive Activity:
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveActivityType('build-a-robot')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeActivityType === 'build-a-robot'
                      ? 'bg-blue-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>🛠️</span>
                  <span>Build a Robot</span>
                </button>

                <button
                  onClick={() => setActiveActivityType('movement-sim')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeActivityType === 'movement-sim'
                      ? 'bg-emerald-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>🕹️</span>
                  <span>Rover Simulator</span>
                </button>

                <button
                  onClick={() => setActiveActivityType('sensor-logic')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeActivityType === 'sensor-logic'
                      ? 'bg-purple-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>📡</span>
                  <span>Sensor Logic</span>
                </button>

                <button
                  onClick={() => setActiveActivityType('flowchart-builder')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${
                    activeActivityType === 'flowchart-builder'
                      ? 'bg-amber-600 text-white shadow-md'
                      : 'bg-slate-800 text-slate-300 hover:bg-slate-700'
                  }`}
                >
                  <span>📊</span>
                  <span>Flowchart Builder</span>
                </button>
              </div>
            </div>

            {/* Active Activity Component Display */}
            <div>
              {activeActivityType === 'build-a-robot' && (
                <BuildRobotActivity
                  grade={gradeNum}
                  onCompleted={handleActivityCompleted}
                />
              )}

              {activeActivityType === 'movement-sim' && (
                <MovementSimActivity
                  grade={gradeNum}
                  onCompleted={handleActivityCompleted}
                />
              )}

              {activeActivityType === 'sensor-logic' && (
                <SensorLogicActivity
                  grade={gradeNum}
                  onCompleted={handleActivityCompleted}
                />
              )}

              {activeActivityType === 'flowchart-builder' && (
                <FlowchartBuilderActivity
                  grade={gradeNum}
                  onCompleted={handleActivityCompleted}
                />
              )}
            </div>
          </div>
        )}

        {/* TAB 4: MASTERY QUIZ */}
        {activeTab === 'quiz' && (
          <div className="max-w-3xl mx-auto">
            <InteractiveQuizActivity
              grade={gradeNum}
              quizQuestions={content.quiz || []}
              onCompleted={(actId) => handleActivityCompleted(actId)}
            />
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}