import { Route, Routes, useLocation } from 'react-router-dom';
import LanguageGate from './components/LanguageGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import NotFound from './pages/NotFound';
import StudentHelper from './pages/StudentHelper';
import { useLanguage } from './context/LanguageContext';

export default function App() {
  const { hasLanguage } = useLanguage();
  const location = useLocation();
  const isStudentHelper = location.pathname === '/projects/studenthelper';

  return (
    <>
      {!hasLanguage && <LanguageGate />}
      <div className={hasLanguage ? 'site-shell is-ready' : 'site-shell'} aria-hidden={!hasLanguage}>
        {!isStudentHelper && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/studenthelper" element={<StudentHelper />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isStudentHelper && <Footer />}
      </div>
    </>
  );
}
