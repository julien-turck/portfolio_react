import logo from './logo.svg';
import github from './github.png';
import linkedin from './linkedin.png';
import twitter from './twitter.png';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Nav from './pages/Nav';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts  />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
      </Routes>
      <Footer />      
    </div>
  );
}

export default App;
