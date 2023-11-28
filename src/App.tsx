import { Route, Routes } from 'react-router-dom';
import { Layout } from './views/components';
import { Anime, Franchises, Genres, Home } from './views/pages';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} index />
          <Route path="/genres" element={<Genres />} />
          <Route path="/franchises" element={<Franchises />} />
          <Route path="/anime" element={<Anime />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
