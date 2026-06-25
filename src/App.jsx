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
  const isStudentHelper =
    location.pathname === '/projects/studenthelper' ||
    location.pathname === '/studenthelper';

  return (
    <>
      {!hasLanguage && <LanguageGate />}
      <div className={hasLanguage ? 'site-shell is-ready' : 'site-shell'} aria-hidden={!hasLanguage}>
        {!isStudentHelper && <Navbar />}
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Long-form project routes */}
          <Route path="/projects/studenthelper" element={<StudentHelper />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* Short-path aliases — URL stays as /chocorramo etc. */}
          <Route path="/chocorramo"    element={<ProjectDetail slug="chocorramo-index" />} />
          <Route path="/votar"         element={<ProjectDetail slug="votar-desde-lejos" />} />
          <Route path="/transit"       element={<ProjectDetail slug="seq-transit-predictor" />} />
          <Route path="/cepeda"        element={<ProjectDetail slug="ivan-cepeda-analysis" />} />
          <Route path="/patria-milagro" element={<ProjectDetail slug="patria-milagro-analysis" />} />
          <Route path="/travel"        element={<ProjectDetail slug="travel-planner-colombia-australia" />} />
          <Route path="/studenthelper" element={<StudentHelper />} />
          <Route path="/waterbuilt"    element={<ProjectDetail slug="waterbuilt-site-vision" />} />
          <Route path="/fracking"      element={<ProjectDetail slug="fracking-papers-analysis" />} />
          <Route path="/discurso2026"  element={<ProjectDetail slug="colombia-2026-discourse" />} />
          <Route path="/lockdown"        element={<ProjectDetail slug="inclusive-alert-system" />} />
          <Route path="/inclusive-alert" element={<ProjectDetail slug="inclusive-alert-system" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isStudentHelper && <Footer />}
      </div>
    </>
  );
}
