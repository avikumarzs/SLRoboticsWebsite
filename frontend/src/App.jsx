import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InteractiveScreen from './pages/InteractiveScreen';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/learn/:grade" element={<InteractiveScreen />} />
      </Routes>
    </Router>
  );
}

export default App;