import './App.css';
import { Routes, Route } from 'react-router-dom';
import Accueil from './pages/Accueil';
import Blog from './pages/Blog';
import Contacts from './pages/Contacts';
import Realisations from './pages/Realisations';
import Services from './pages/Services';
import Navi from './pages/Navi';
import Footer from './pages/Footer';
import Mentions from './pages/Mentions';
import ScrollToTopButton from './pages/ScrollToTopButton';
import ApiGithub from './pages/ApiGithub';
function App() {
  return (
    <div className="App">
      <Navi />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contacts" element={<Contacts  />} />
        <Route path="/realisations" element={<Realisations />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mentions" element={<Mentions />} />
        <Route path="/apigithub" element={<ApiGithub />} />
      </Routes>
      <ScrollToTopButton />
      <Footer />      
    </div>
  );
}

export default App;
