import './App.css'
import useTitle from "./hooks/useTitle.js";
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import LandingPage from './components/LandingPage';
import FeaturesPage from './components/FeaturesPage';
import SocialPage from "./components/SocialPage.jsx";
import PricingPage from "./components/PricingPage.jsx";
import AboutPage from "./components/AboutPage.jsx";
import AIFeatures from "./components/features/AIFeatures.jsx";
import SocialFeatures from "./components/features/SocialFeatures.jsx";
import AutomationFeatures from "./components/features/AutomationFeatures.jsx";
import LoginPage from './components/auth/LoginPage';
import RegisterPage from './components/auth/RegisterPage';
import TermsOfService from "./components/TermsOfService.jsx";
import DataDeletion from "./components/DataDeletion.jsx";
import PrivacyPolicy from "./components/PrivacyPolicy.jsx";

function App() {
  useTitle()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        {/* Auth routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Public routes */}
        <Route path="features" element={<FeaturesPage />} />
        <Route path="features/ai" element={<AIFeatures />} />
        <Route path="features/social" element={<SocialFeatures />} />
        <Route path="features/automation" element={<AutomationFeatures />} />
        <Route path="social" element={<SocialPage/>} />
        <Route path="pricing" element={<PricingPage/>} />
        <Route path="about" element={<AboutPage/>} />
        <Route path="terms" element={<TermsOfService />} />
        <Route path="data-deletion" element={<DataDeletion />} />
        <Route path="privacy" element={<PrivacyPolicy />} />
      </Route>
    </Routes>
  )
}

export default App
