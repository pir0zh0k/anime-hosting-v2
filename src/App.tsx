import { Routes, Route } from 'react-router-dom';
import Layout from './views/components/Layout/Layout';
import Home from './views/pages/Home/Home';
import Serials from './views/pages/Serials/Serials';
import Films from './views/pages/Films/Films';
import Anounces from './views/pages/Anounces/Anounces';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Home />} index/>
          <Route path="/serials" element={<Serials />}/>
          <Route path="/films" element={<Films />}/>
          <Route path="/anounces" element={<Anounces />}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
