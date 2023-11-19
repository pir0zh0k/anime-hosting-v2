import { Routes, Route } from 'react-router-dom';
import Layout from './views/components/Layout/Layout';
import Home from './views/pages/Home/Home';
import Anime from './views/pages/Anime/Anime';
import Anounces from './views/pages/Anounces/Anounces';
import OneAnime from './views/pages/OneAnime/OneAnime';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/:code/:episode" element={<OneAnime />} />
          <Route path="/anime/:page" element={<Anime />} />
          <Route path="/anounces" element={<Anounces />} />
          {/* <Route path="/anime/" element={<OneAnime />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
