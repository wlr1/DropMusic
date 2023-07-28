import Drop from './Components/Drop';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
import React from 'react';
import MusicPlayer from './Components/MusicPlayer';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Drop />} />
        <Route path="/music-player" element={<MusicPlayer />} />
      </Routes>
    </Router>
  );
};

export default App;
