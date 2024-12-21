import React, { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Header from "./pages/custom-components/Header";
import { ThemeProvider } from "./components/theme-provider";
import About from "./pages/About";
import Footer from "./pages/custom-components/Footer";
import InvestmentPage from "./pages/InvestmentPage";
import BusinessModel from "./pages/BusinessModel";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./pages/custom-components/ScrollToTop";
import Preloader from "./pages/custom-components/PreLoader";
import ProjectPage from "./pages/ProjectPage";
import PersonaHills from "./pages/project-pages/PersonaHills";
import NotFound from "./pages/NotFound";
import { HelmetProvider } from "react-helmet-async";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);


  useEffect(() => {
    AOS.init({
      duration: 1500,
    });
  });

  return (
    // <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        {/* <DynamicTitle /> */}
        <Routes>
          <Route path="/" element={loading ? <Preloader /> : <HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/investment" element={<InvestmentPage />} />
          <Route path="/projects" element={<ProjectPage />} />
          <Route path="/projects/persona-hills" element={<PersonaHills />} />
          <Route path="/business" element={<BusinessModel />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
    // </ThemeProvider>
  );
};

// const DynamicTitle = () => {
//   const location = useLocation();

//   useEffect(() => {

//     const routeTitles = {
//       "/": "Home - Buildifie",
//       "/about": "About Us - Buildifie",
//       "/investment": "Investment Opportunities - Buildifie",
//       "/projects": "Our Projects - Buildifie",
//       "/business": "Business Model - Buildifie",
//     };

//     const title = routeTitles[location.pathname] || "Buildifie";
//     document.title = title;
//   }, [location]);

//   return null;
// };

export default App;
