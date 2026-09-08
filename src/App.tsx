import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Product from './pages/Product';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CookieConsent from './components/CookieConsent';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/product" element={<Product />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <CookieConsent />
    </BrowserRouter>
  );
}

export default App;
