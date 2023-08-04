import Drop from './Components/Drop';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MusicPlayer from './Components/MusicPlayer/MusicPlayer';

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
