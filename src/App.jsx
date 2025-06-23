import { Routes, Route } from 'react-router-dom'
import LandingPage from './pages/LandingPage';
import Waitlist from './pages/Waitlist';
import Success from "./pages/Success";


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/waitlist" element={<Waitlist />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}

export default App;
