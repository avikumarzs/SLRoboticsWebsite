import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InteractiveScreen from './pages/InteractiveScreen';
import LabsPage from './pages/LabsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/labs" element={<LabsPage />} />
        <Route path="/learn/:grade" element={<InteractiveScreen />} />
      </Routes>
    </Router>
  );
}

export default App;