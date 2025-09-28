import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import PageWrapper from './components/PageWrapper';
import Home from './pages/Home';
import Services from './pages/Services';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';
import Portal from './pages/Portal';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AppRoutes() {
  const location = useLocation();
  
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={
              <PageWrapper>
                <Home />
              </PageWrapper>
            } />
            <Route path="/services" element={
              <PageWrapper>
                <Services />
              </PageWrapper>
            } />
            <Route path="/blog" element={
              <PageWrapper>
                <Blog />
              </PageWrapper>
            } />
            <Route path="/blog/:id" element={
              <PageWrapper>
                <BlogPost />
              </PageWrapper>
            } />
            <Route path="/contact" element={
              <PageWrapper>
                <Contact />
              </PageWrapper>
            } />
            <Route path="/portal" element={
              <PageWrapper>
                <Portal />
              </PageWrapper>
            } />
            <Route path="/terms" element={
              <PageWrapper>
                <Terms />
              </PageWrapper>
            } />
            <Route path="/privacy" element={
              <PageWrapper>
                <Privacy />
              </PageWrapper>
            } />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <AppRoutes />
    </Router>
  );
}

export default App;
