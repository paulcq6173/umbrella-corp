import Footer from '@/components/Footer';
import TopNaviBar from '@/components/TopNaviBar';
import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';
import ProductPage from '@/pages/ProductPage';
import SignIn from '@/pages/SighIn';
import SignUp from '@/pages/SignUp';
import { useReactiveVar } from '@apollo/client';
import { Navigate, Route, Routes } from 'react-router-dom';
import { tokenVar } from './apollo-cache/cache';
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
  const token = useReactiveVar(tokenVar);
  const AuthCheck = ({ Target }: { Target: JSX.Element }) => {
    if (token) {
      return Target;
    }

    return <Navigate to="/" replace={true} />;
  };

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
        <Route
          path="/security"
          element={<AuthCheck Target={<SecurityPage />} />}
        />
        <Route
          path="/security/archives"
          element={<AuthCheck Target={<Archives />} />}
        />
        <Route
          path="/security/archives/:id"
          element={<AuthCheck Target={<Archive />} />}
        />
        <Route
          path="/security/projects/:id"
          element={<AuthCheck Target={<ProjectPage />} />}
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
