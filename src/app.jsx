import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Layout from './components/layout/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Divisions from './pages/Divisions';
import Structure from './pages/Structure';
import LogoPhilosophy from './pages/LogoPhilosophy';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import PageNotFound from './libs/PageNotFound.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/divisions" element={<Divisions />} />
          <Route path="/structure" element={<Structure />} />
          <Route path="/logo-philosophy" element={<LogoPhilosophy />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  )
}

export default App
