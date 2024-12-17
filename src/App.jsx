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
import Dashboard from './components/Dashboard';
import ProtectedRoute from './components/auth/ProtectedRoute';

function App() {
  useTitle()

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LandingPage />} />

        {/* Auth routes */}
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route path="dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        {/* Public routes */}
        <Route path="features" element={<FeaturesPage />} />
        <Route path="features/ai" element={<AIFeatures />} />
        <Route path="features/social" element={<SocialFeatures />} />
        <Route path="features/automation" element={<AutomationFeatures />} />
        <Route path="social" element={<SocialPage/>} />
        <Route path="pricing" element={<PricingPage/>} />
        <Route path="about" element={<AboutPage/>} />
      </Route>
    </Routes>
  )
}

export default App
