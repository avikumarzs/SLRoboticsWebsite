// Client-side progress tracking using localStorage
// Stores progress per grade: modules read, activities completed, quiz results

const STORAGE_KEY = 'akshar_bharti_robotics_progress';

export function getAllProgress() {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    return data ? JSON.parse(data) : {};
  } catch (e) {
    console.warn('Failed to read progress from localStorage:', e);
    return {};
  }
}

export function getGradeProgress(grade) {
  const all = getAllProgress();
  return all[grade] || {
    completedModules: [],
    completedActivities: [],
    quizScore: null,
    lastVisited: null
  };
}

export function markModuleComplete(grade, moduleId) {
  try {
    const all = getAllProgress();
    const gradeProg = all[grade] || { completedModules: [], completedActivities: [], quizScore: null };
    if (!gradeProg.completedModules.includes(moduleId)) {
      gradeProg.completedModules.push(moduleId);
    }
    gradeProg.lastVisited = new Date().toISOString();
    all[grade] = gradeProg;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return gradeProg;
  } catch (e) {
    console.warn('Failed to save module progress:', e);
  }
}

export function markActivityComplete(grade, activityId) {
  try {
    const all = getAllProgress();
    const gradeProg = all[grade] || { completedModules: [], completedActivities: [], quizScore: null };
    if (!gradeProg.completedActivities.includes(activityId)) {
      gradeProg.completedActivities.push(activityId);
    }
    gradeProg.lastVisited = new Date().toISOString();
    all[grade] = gradeProg;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return gradeProg;
  } catch (e) {
    console.warn('Failed to save activity progress:', e);
  }
}

export function saveQuizScore(grade, score, total) {
  try {
    const all = getAllProgress();
    const gradeProg = all[grade] || { completedModules: [], completedActivities: [], quizScore: null };
    const percentage = Math.round((score / total) * 100);
    gradeProg.quizScore = {
      score,
      total,
      percentage,
      date: new Date().toISOString()
    };
    all[grade] = gradeProg;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(all));
    return gradeProg;
  } catch (e) {
    console.warn('Failed to save quiz progress:', e);
  }
}

export function getOverallStats() {
  const all = getAllProgress();
  let totalModules = 0;
  let totalActivities = 0;
  let quizzesTaken = 0;
  let totalScoreSum = 0;

  Object.values(all).forEach(g => {
    if (g.completedModules) totalModules += g.completedModules.length;
    if (g.completedActivities) totalActivities += g.completedActivities.length;
    if (g.quizScore) {
      quizzesTaken += 1;
      totalScoreSum += g.quizScore.percentage;
    }
  });

  const avgQuiz = quizzesTaken > 0 ? Math.round(totalScoreSum / quizzesTaken) : 0;
  return {
    totalModules,
    totalActivities,
    quizzesTaken,
    avgQuiz
  };
}

export function resetAllProgress() {
  try {
    localStorage.removeItem(STORAGE_KEY);
  } catch (e) {
    console.warn('Failed to clear progress:', e);
  }
}
