import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Layout from "./layouts/Layout";
import Home from "./views/Home";
import Features from "./views/Features";
import Method from "./views/Method";
import Plans from "./views/Plans";
import Contact from "./views/Contact";
import About from "./views/About";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/caracteristicas" element={<Features />} />
          <Route path="/metodo" element={<Method />} />
          <Route path="/planes" element={<Plans />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/nosotros" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
}
