import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/Home/HomePage';
import WorksPage from './pages/WorksPage';

import WebDevelopment from './pages/Services/WebDevelopment';
import AppDevelopment from './pages/Services/AppDevelopment';
import SoftwareDevelopment from './pages/Services/SoftwareDevelopment';
import EcommerceSolutions from './pages/Services/EcommerceSolutions';
import AwsDevops from './pages/Services/AwsDevops';
import HostingServerManagement from './pages/Services/HostingServerManagement';
import ApiIntegrations from './pages/Services/ApiIntegrations';
import SecurityMaintenance from './pages/Services/SecurityMaintenance';
import AiRagChatbots from './pages/Services/AiRagChatbots';
import AiAutomation from './pages/Services/AiAutomation';
import IvrSolutions from './pages/Services/IvrSolutions';
import DigitalMarketing from './pages/Services/DigitalMarketing';

import ContactPage from './pages/Contact/ContactPage';
import AboutPage from './pages/About/AboutPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/works" element={<WorksPage />} />
            
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/app-development" element={<AppDevelopment />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/ecommerce-solutions" element={<EcommerceSolutions />} />
            <Route path="/services/aws-devops" element={<AwsDevops />} />
            <Route path="/services/hosting-server-management" element={<HostingServerManagement />} />
            <Route path="/services/api-integrations" element={<ApiIntegrations />} />
            <Route path="/services/security-maintenance" element={<SecurityMaintenance />} />
            <Route path="/services/ai-rag-chatbots" element={<AiRagChatbots />} />
            <Route path="/services/ai-automation" element={<AiAutomation />} />
            <Route path="/services/ivr-solutions" element={<IvrSolutions />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
