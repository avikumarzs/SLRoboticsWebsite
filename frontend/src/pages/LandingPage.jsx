import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
  const navigate = useNavigate();
  const grades = [5, 6, 7, 8, 9, 10];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-slate-900 text-white">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold mb-4 text-blue-400">Akshar Bharati Robotics Initiative</h1>
        <p className="text-xl text-gray-300">Select your grade to start your journey!</p>
      </div>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {grades.map((grade) => (
          <button 
            key={grade}
            onClick={() => navigate(`/learn/${grade}`)}
            className="w-32 h-32 text-3xl font-bold bg-blue-600 hover:bg-blue-500 rounded-2xl shadow-lg transition-transform transform hover:scale-105 flex items-center justify-center"
          >
            Grade {grade}
          </button>
        ))}
      </div>
    </div>
  );
}