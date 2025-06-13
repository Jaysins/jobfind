import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Waitlist from './pages/Waitlist';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/waitlist" element={<Waitlist />} />
    </Routes>
  );
}

export default App;
