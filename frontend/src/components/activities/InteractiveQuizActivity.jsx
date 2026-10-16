import React, { useState } from 'react';
import { saveQuizScore } from '../../utils/progressManager';

export default function InteractiveQuizActivity({ grade = 5, quizQuestions = [], onCompleted }) {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [answers, setAnswers] = useState({}); // { [questionIdx]: selectedOptionIdx }
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

  if (!quizQuestions || quizQuestions.length === 0) {
    return (
      <div className="p-8 text-center bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800">
        <p className="text-slate-600 dark:text-slate-400">Quiz questions are currently being loaded...</p>
      </div>
    );
  }

  const currentQ = quizQuestions[currentIdx];
  const isLastQuestion = currentIdx === quizQuestions.length - 1;

  const handleSelectOption = (index) => {
    if (isAnswerSubmitted) return;
    setSelectedOption(index);
  };

  const handleConfirmAnswer = () => {
    if (selectedOption === null || isAnswerSubmitted) return;

    setIsAnswerSubmitted(true);
    const isCorrect = selectedOption === currentQ.correctIndex;
    const newScore = isCorrect ? score + 1 : score;
    setScore(newScore);

    setAnswers(prev => ({
      ...prev,
      [currentIdx]: {
        selected: selectedOption,
        correct: isCorrect,
        correctIndex: currentQ.correctIndex
      }
    }));
  };

  const handleNext = () => {
    if (isLastQuestion) {
      setQuizFinished(true);
      saveQuizScore(grade, score, quizQuestions.length);
      if (onCompleted) onCompleted('interactive-quiz');
    } else {
      setCurrentIdx(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handleRetry = () => {
    setCurrentIdx(0);
    setSelectedOption(null);
    setAnswers({});
    setIsAnswerSubmitted(false);
    setScore(0);
    setQuizFinished(false);
  };

  const percentage = Math.round((score / quizQuestions.length) * 100);

  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-6 md:p-8 transition-colors">
      {!quizFinished ? (
        <div>
          {/* Quiz Header & Progress Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider rounded-full bg-indigo-100 text-indigo-800 dark:bg-indigo-900/60 dark:text-indigo-300 mb-1">
                Knowledge Mastery Check
              </span>
              <h2 className="text-xl md:text-2xl font-bold text-slate-800 dark:text-white">
                Grade {grade} Robotics Challenge Quiz
              </h2>
            </div>
            <div className="text-right">
              <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Question Progress</span>
              <div className="text-base font-bold text-indigo-600 dark:text-indigo-400">
                {currentIdx + 1} of {quizQuestions.length}
              </div>
            </div>
          </div>

          {/* Progress Bar */}
          <div className="w-full bg-slate-100 dark:bg-slate-800 h-2 rounded-full overflow-hidden mb-8">
            <div
              className="bg-gradient-to-r from-blue-500 to-indigo-600 h-full transition-all duration-300"
              style={{ width: `${((currentIdx + 1) / quizQuestions.length) * 100}%` }}
            />
          </div>

          {/* Question Card */}
          <div className="mb-6">
            <h3 className="text-lg md:text-xl font-semibold text-slate-900 dark:text-slate-100 mb-6 leading-snug">
              <span className="text-indigo-600 dark:text-indigo-400 mr-2">Q{currentIdx + 1}.</span>
              {currentQ.question}
            </h3>

            {/* Multiple Choice Options */}
            <div className="space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedOption === idx;
                const isCorrectAnswer = idx === currentQ.correctIndex;

                let optionStyles = 'border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/60 hover:border-indigo-400 dark:hover:border-indigo-500';

                if (isAnswerSubmitted) {
                  if (isCorrectAnswer) {
                    optionStyles = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-900 dark:text-emerald-100 ring-2 ring-emerald-500/40';
                  } else if (isSelected && !isCorrectAnswer) {
                    optionStyles = 'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-900 dark:text-rose-100 ring-2 ring-rose-500/40';
                  } else {
                    optionStyles = 'border-slate-200 dark:border-slate-800 opacity-50';
                  }
                } else if (isSelected) {
                  optionStyles = 'border-indigo-600 dark:border-indigo-400 bg-indigo-50 dark:bg-indigo-950/50 text-indigo-950 dark:text-indigo-100 ring-2 ring-indigo-500';
                }

                return (
                  <div
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center justify-between text-sm md:text-base ${optionStyles}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-lg font-bold text-xs flex items-center justify-center ${
                        isSelected
                          ? 'bg-indigo-600 text-white'
                          : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                      }`}>
                        {String.fromCharCode(65 + idx)}
                      </span>
                      <span className="font-medium text-slate-800 dark:text-slate-200">{option}</span>
                    </div>

                    {isAnswerSubmitted && isCorrectAnswer && (
                      <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">✓</span>
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrectAnswer && (
                      <span className="text-rose-600 dark:text-rose-400 font-bold text-lg">✕</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Immediate Educational Explanation Box */}
          {isAnswerSubmitted && (
            <div className={`p-4 rounded-xl border mb-6 transition-all ${
              selectedOption === currentQ.correctIndex
                ? 'bg-emerald-50 dark:bg-emerald-950/30 border-emerald-300 dark:border-emerald-800/80'
                : 'bg-amber-50 dark:bg-amber-950/30 border-amber-300 dark:border-amber-800/80'
            }`}>
              <div className="flex items-center gap-2 mb-1.5 font-bold text-sm">
                <span>{selectedOption === currentQ.correctIndex ? '🎉 Correct!' : '💡 Learning Concept:'}</span>
                <span className={selectedOption === currentQ.correctIndex ? 'text-emerald-700 dark:text-emerald-300' : 'text-amber-800 dark:text-amber-300'}>
                  {selectedOption === currentQ.correctIndex ? 'Well done!' : 'Here is why this is important:'}
                </span>
              </div>
              <p className="text-xs md:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                {currentQ.explanation}
              </p>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex justify-end gap-3 pt-4 border-t border-slate-100 dark:border-slate-800">
            {!isAnswerSubmitted ? (
              <button
                onClick={handleConfirmAnswer}
                disabled={selectedOption === null}
                className={`px-6 py-2.5 rounded-xl font-bold text-sm transition-all ${
                  selectedOption !== null
                    ? 'bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-600/20'
                    : 'bg-slate-200 dark:bg-slate-800 text-slate-400 cursor-not-allowed'
                }`}
              >
                Submit Answer
              </button>
            ) : (
              <button
                onClick={handleNext}
                className="px-6 py-2.5 rounded-xl font-bold text-sm bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-lg transition-all"
              >
                {isLastQuestion ? 'View Results & Score' : 'Next Question →'}
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Final Results Screen */
        <div className="py-6 text-center max-w-lg mx-auto">
          <div className="text-6xl mb-4">
            {percentage >= 80 ? '🏆' : percentage >= 50 ? '🥈' : '📚'}
          </div>

          <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Quiz Completed!
          </h3>

          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            You scored <strong className="text-indigo-600 dark:text-indigo-400">{score}</strong> out of <strong className="text-slate-800 dark:text-slate-200">{quizQuestions.length}</strong> questions ({percentage}%).
          </p>

          <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 mb-6 text-sm text-slate-700 dark:text-slate-300">
            {percentage === 100 && 'Outstanding performance! You have mastered all Grade ' + grade + ' robotics concepts!'}
            {percentage >= 75 && percentage < 100 && 'Great job! You have a solid grasp of the robotics principles covered in this unit.'}
            {percentage < 75 && 'Good effort! Review the module readings and retry the quiz to master these concepts.'}
          </div>

          <ol className="quiz-review" aria-label="Question review">
            {quizQuestions.map((item, index) => {
              const answer = answers[index];
              return <li key={item.id || index} className={answer?.correct ? 'quiz-review-correct' : 'quiz-review-incorrect'}>
                <strong>{answer?.correct ? '✓' : '↺'} Q{index + 1}: {item.question}</strong>
                <span>{answer ? `Your answer: ${item.options[answer.selected]}` : 'Not answered'}</span>
                {!answer?.correct && <span>Correct answer: {item.options[item.correctIndex]}</span>}
              </li>;
            })}
          </ol>

          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={handleRetry}
              className="px-6 py-2.5 rounded-xl font-bold text-sm bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-200 transition-all"
            >
              🔄 Retry Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
