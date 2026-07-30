import { Route, Routes, useLocation } from 'react-router-dom';
import LanguageGate from './components/LanguageGate';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ArticleDetail from './pages/ArticleDetail';
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

          {/* Editorial / opinion articles */}
          <Route path="/articulos/:id" element={<ArticleDetail />} />
          <Route path="/articles/:id" element={<ArticleDetail />} />

          {/* Long-form project routes */}
          <Route path="/projects/studenthelper" element={<StudentHelper />} />
          <Route path="/projects/:slug" element={<ProjectDetail />} />

          {/* Canonical clean case-study paths */}
          <Route path="/chocorramo-index" element={<ProjectDetail slug="chocorramo-index" />} />
          <Route path="/impuesto-saludable" element={<ProjectDetail slug="impuesto-saludable-colombia" />} />
          <Route path="/votar-desde-lejos" element={<ProjectDetail slug="votar-desde-lejos" />} />
          <Route path="/seq-transit" element={<ProjectDetail slug="seq-transit-predictor" />} />
          <Route path="/cepeda-program" element={<ProjectDetail slug="ivan-cepeda-analysis" />} />
          <Route path="/patria-milagro" element={<ProjectDetail slug="patria-milagro-analysis" />} />
          <Route path="/cepeda-context" element={<ProjectDetail slug="cepeda-context-evaluation" />} />
          <Route path="/travel-planner" element={<ProjectDetail slug="travel-planner-colombia-australia" />} />
          <Route path="/studenthelper" element={<StudentHelper />} />
          <Route path="/careerops" element={<ProjectDetail slug="careerops-agent" />} />
          <Route path="/waterbuilt-vision" element={<ProjectDetail slug="siteguard-vision" />} />
          <Route path="/fracking-papers" element={<ProjectDetail slug="fracking-papers-analysis" />} />
          <Route path="/digital-discourse" element={<ProjectDetail slug="colombia-2026-discourse" />} />
          <Route path="/inclusive-alert" element={<ProjectDetail slug="inclusive-alert-system" />} />

          {/* Legacy aliases retained so existing links do not break */}
          <Route path="/chocorramo" element={<ProjectDetail slug="chocorramo-index" />} />
          <Route path="/votar" element={<ProjectDetail slug="votar-desde-lejos" />} />
          <Route path="/transit" element={<ProjectDetail slug="seq-transit-predictor" />} />
          <Route path="/cepeda" element={<ProjectDetail slug="ivan-cepeda-analysis" />} />
          <Route path="/travel" element={<ProjectDetail slug="travel-planner-colombia-australia" />} />
          <Route path="/waterbuilt" element={<ProjectDetail slug="siteguard-vision" />} />
          <Route path="/siteguard" element={<ProjectDetail slug="siteguard-vision" />} />
          <Route path="/fracking" element={<ProjectDetail slug="fracking-papers-analysis" />} />
          <Route path="/discurso2026" element={<ProjectDetail slug="colombia-2026-discourse" />} />
          <Route path="/lockdown" element={<ProjectDetail slug="inclusive-alert-system" />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
        {!isStudentHelper && <Footer />}
      </div>
    </>
  );
}
