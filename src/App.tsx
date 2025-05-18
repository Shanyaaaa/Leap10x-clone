import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DemoVideo from './components/DemoVideo';
import TrustedBy from './components/TrustedBy';
import Features from './components/Features';
import Results from './components/Results';
import UseCases from './components/UseCases';
import Testimonials from './components/Testimonials';
import Blogs from './components/Blogs';
import Partners from './components/Partners';
import FinalCTA from './components/FinalCTA';
import FAQ from './components/FAQ';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

import { Routes, Route, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

import About from './pages/About';
import Contact from './pages/Contact';
import Partner from './pages/Partner';
import BlogsPage from './pages/Blogs';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function AnimatedPage({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  return (
    <div className="font-body bg-light text-primary min-h-screen">
      <Navbar />
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <AnimatedPage>
              <>
                <Hero />
                <DemoVideo />
                <TrustedBy />
                <Features />
                <Results />
                <UseCases />
                <Testimonials />
                <Blogs />
                <Partners />
                <FinalCTA />
                <FAQ />
                <Newsletter />
              </>
            </AnimatedPage>
          }
        />
        <Route
          path="/about-us"
          element={
            <AnimatedPage>
              <About />
            </AnimatedPage>
          }
        />
        <Route
          path="/contact-us"
          element={
            <AnimatedPage>
              <Contact />
            </AnimatedPage>
          }
        />
        <Route
          path="/partner-with-us"
          element={
            <AnimatedPage>
              <Partner />
            </AnimatedPage>
          }
        />
        <Route
          path="/blogs"
          element={
            <AnimatedPage>
              <BlogsPage />
            </AnimatedPage>
          }
        />
        <Route
          path="/terms-conditions"
          element={
            <AnimatedPage>
              <Terms />
            </AnimatedPage>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <AnimatedPage>
              <Privacy />
            </AnimatedPage>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
