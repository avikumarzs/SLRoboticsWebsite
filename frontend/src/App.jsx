import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import InteractiveScreen from './pages/InteractiveScreen';
import LabsPage from './pages/LabsPage';
import RobotClickEffect from './components/RobotClickEffect';
import RobotScrollbar from './components/RobotScrollbar';

function App() {
  return (
    <Router>
      <RobotClickEffect />
      <RobotScrollbar />
      <Routes>
        <Route path="/" element={<div id="app-scroll-content"><LandingPage /></div>} />
        <Route path="/labs" element={<div id="app-scroll-content"><LabsPage /></div>} />
        <Route path="/learn/:grade" element={<div id="app-scroll-content"><InteractiveScreen /></div>} />
      </Routes>
    </Router>
  );
}

export default App;