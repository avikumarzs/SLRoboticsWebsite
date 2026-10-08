import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function InteractiveScreen() {
  const { grade } = useParams();
  const navigate = useNavigate();
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/content/${grade}`)
      .then(res => {
        setContent(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
      });
  }, [grade]);

  if (loading) return <div className="flex justify-center items-center h-screen text-2xl">Loading curriculum...</div>;
  
  if (!content) return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h2 className="text-2xl mb-4">Content for Grade {grade} is coming soon!</h2>
      <button onClick={() => navigate('/')} className="px-4 py-2 bg-blue-500 text-white rounded">Go Back</button>
    </div>
  );

  const isJunior = grade <= 6;
  const isSenior = grade >= 9;
  const themeClass = isJunior ? 'bg-indigo-50 text-gray-800' : isSenior ? 'bg-gray-900 text-gray-200' : 'bg-blue-50 text-gray-900';

  return (
    <div className={`min-h-screen p-8 ${themeClass}`}>
      <button onClick={() => navigate('/')} className="mb-8 px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
        ← Back to Grades
      </button>

      <header className="mb-10 text-center">
        <h1 className="text-4xl font-bold mb-4">Grade {grade}: {content.theme}</h1>
        <p className="text-xl max-w-3xl mx-auto">{content.introduction}</p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        <div className={`p-6 rounded-xl shadow-md ${isSenior ? 'bg-gray-800' : 'bg-white'}`}>
           <h2 className="text-2xl font-semibold mb-4 text-blue-500">Project Goals</h2>
           <ul className="list-disc pl-5 space-y-2">
             {content.projectGoals.map((goal, i) => <li key={i}>{goal}</li>)}
           </ul>
        </div>

        <div className={`p-6 rounded-xl shadow-md ${isSenior ? 'bg-gray-800' : 'bg-white'}`}>
           <h2 className="text-2xl font-semibold mb-4 text-red-400">Problem Statements</h2>
           <ul className="list-disc pl-5 space-y-2">
             {content.problemStatements.map((prob, i) => <li key={i}>{prob}</li>)}
           </ul>
        </div>
      </div>
    </div>
  );
}