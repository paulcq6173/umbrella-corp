import Footer from '@/components/Footer';
import TopNaviBar from '@/mobile/components/MobileTopNaviBar';
import AboutPage from '@/pages/About';
import HomePage from '@/pages/Home';
import ProductPage from '@/pages/ProductPage';
import SignIn from '@/pages/SighIn';
import SignUp from '@/pages/SignUp';
import { Route, Routes } from 'react-router-dom';
import './main.css';
import NotFoundPage from './pages/NotFound';
import SearchResultPage from './pages/SearchResult';

function App() {
  return (
    <div className="w-screen h-fit">
      <TopNaviBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/products/search" element={<SearchResultPage />} />
        <Route path="/products/:id" element={<ProductPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
