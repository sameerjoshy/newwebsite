import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Frameworks from './pages/Frameworks';
import Tools from './pages/Tools';
import Resources from './pages/Resources';
import Contact from './pages/Contact';

// Detailed service pages
import RevenueArchitecture from './pages/services/RevenueArchitecture';
import GTMStrategy from './pages/services/GTMStrategy';
import SalesOptimization from './pages/services/SalesOptimization';
import CustomerExpansion from './pages/services/CustomerExpansion';
import RevOpsTools from './pages/services/RevOpsTools';
import RevenueAudit from './pages/services/RevenueAudit';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/frameworks" element={<Frameworks />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/contact" element={<Contact />} />

        {/* Service Detail Pages */}
        <Route path="/services/revenue-architecture" element={<RevenueArchitecture />} />
        <Route path="/services/gtm-strategy" element={<GTMStrategy />} />
        <Route path="/services/sales-optimization" element={<SalesOptimization />} />
        <Route path="/services/customer-expansion" element={<CustomerExpansion />} />
        <Route path="/services/revops-tools" element={<RevOpsTools />} />
        <Route path="/services/revenue-audit" element={<RevenueAudit />} />
      </Routes>
    </Router>
  );
}

export default App;
