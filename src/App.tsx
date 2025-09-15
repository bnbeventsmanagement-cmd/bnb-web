import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import Home from './pages/Home';
import Process from './pages/Process';
import Packages from './pages/Packages';
import About from './pages/About';
import FAQ from './pages/FAQ';
import Contact from './pages/Contact';
import Vendors from './pages/Vendors';
import Testimonials from './pages/Testimonials';
import Accessibility from './pages/Accessibility';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/process" element={<Process />} />
            <Route path="/packages" element={<Packages />} />
            <Route path="/about" element={<About />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/vendors" element={<Vendors />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/accessibility" element={<Accessibility />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </HelmetProvider>
  );
}