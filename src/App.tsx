import Footer from '@/components/Footer';
import TopNaviBar from '@/components/TopNaviBar';
import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';
import ProductPage from '@/pages/ProductPage';
import SignIn from '@/pages/SighIn';
import SignUp from '@/pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import './main.css';
import Archive from './pages/Archive';
import Archives from './pages/Archives';
import Materials from './pages/Materials';
import NotFoundPage from './pages/NotFound';
import ProjectPage from './pages/Project';
import RecruitmentPage from './pages/Recruitment';
import SearchResultPage from './pages/SearchResult';
import SecurityPage from './pages/Security';

function App() {
  return (
    <div className="w-screen h-screen">
      <TopNaviBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products/search" element={<SearchResultPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/materials" element={<Materials />} />
        <Route path="/recruitment" element={<RecruitmentPage />} />
        <Route path="/security" element={<SecurityPage />} />
        <Route path="/security/archives" element={<Archives />} />
        <Route path="/security/archives/:id" element={<Archive />} />
        <Route path="/security/project/:id" element={<ProjectPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
