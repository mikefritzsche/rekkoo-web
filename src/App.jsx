import './App.css'
import useTitle from "./hooks/useTitle.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import SocialPage from "./components/SocialPage.jsx";
import PricingPage from "./components/PricingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import AIFeatures from "./components/features/AIFeatures.jsx";
import SocialFeatures from "./components/features/SocialFeatures.jsx";
import AutomationFeatures from "./components/features/AutomationFeatures.jsx";

// v0.0.1
function App() {
  useTitle()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
          <Route path="features" element={<FeaturesPage />} />
          {/* Nested feature routes */}
          <Route path="features/ai" element={<AIFeatures />} />
          <Route path="features/social" element={<SocialFeatures />} />
          <Route path="features/automation" element={<AutomationFeatures />} />
          {/* Main routes */}
          <Route path="social" element={<SocialPage/>} />
          <Route path="pricing" element={<PricingPage/>} />
          <Route path="about" element={<AboutPage/>} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
