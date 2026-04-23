import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Careers from './pages/Careers';
import { Logistics, ExportManagement } from './pages/LogisticsExport';
import './index.css';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CompanyProfile from './pages/CompanyProfile';
import RecruitmentScams from "./pages/RecruitmentScams";
import StudentOpportunities from "./pages/StudentOpportunities";
function ScrollToTop() {
const { pathname } = useLocation();
useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
return null;
}

function WhatsAppButton() {
return (
<a
href="https://wa.me/1234567890"
target="_blank"
rel="noreferrer"
style={{
position: 'fixed',
bottom: '28px',
right: '28px',
width: '56px',
height: '56px',
background: '#25D366',
borderRadius: '50%',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
boxShadow: '0 4px 20px rgba(37,211,102,0.5)',
zIndex: 999,
transition: 'transform 0.2s ease',
textDecoration: 'none',
}}
onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
title="Chat on WhatsApp"
>
<svg
xmlns="http://www.w3.org/2000/svg"
viewBox="0 0 32 32"
width="32"
height="32"
fill="white"
>
<path d="M16 2C8.268 2 2 8.268 2 16c0 2.492.648 4.832 1.784 6.865L2 30l7.335-1.763A13.94 13.94 0 0 0 16 30c7.732 0 14-6.268 14-14S23.732 2 16 2zm0 25.5a11.44 11.44 0 0 1-5.826-1.594l-.418-.248-4.352 1.046 1.074-4.234-.272-.434A11.463 11.463 0 0 1 4.5 16C4.5 9.596 9.596 4.5 16 4.5S27.5 9.596 27.5 16 22.404 27.5 16 27.5zm6.29-8.448c-.344-.172-2.036-1.004-2.352-1.118-.316-.114-.546-.172-.776.172-.23.344-.888 1.118-1.09 1.348-.2.23-.402.258-.746.086-.344-.172-1.452-.535-2.766-1.707-1.022-.912-1.712-2.038-1.912-2.382-.2-.344-.022-.53.15-.702.155-.154.344-.402.516-.602.172-.2.23-.344.344-.574.114-.23.058-.43-.028-.602-.086-.172-.776-1.868-1.062-2.558-.28-.672-.564-.58-.776-.59l-.66-.012c-.23 0-.602.086-.918.43s-1.204 1.176-1.204 2.868 1.232 3.328 1.404 3.558c.172.23 2.424 3.7 5.874 5.19.82.354 1.46.566 1.96.724.822.262 1.572.224 2.164.136.66-.098 2.036-.832 2.324-1.634.286-.8.286-1.488.2-1.634-.084-.144-.314-.23-.658-.402z" />
</svg>
</a>
);
}

function NotFound() {
return (
<div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '16px', padding: '120px 24px' }}>
<h1 style={{ fontSize: '80px', fontWeight: '900', color: 'var(--navy)', lineHeight: 1 }}>404</h1>
<h2 style={{ fontSize: '24px', color: 'var(--text-dark)' }}>Page Not Found</h2>
<p style={{ color: 'var(--gray)' }}>The page you're looking for doesn't exist.</p>
<a href="/" className="btn-primary" style={{ marginTop: '12px', display: 'inline-flex', alignItems: 'center', gap: '8px' }}>Back to Home</a>
</div>
);
}

export default function App() {
return (
<Router>
<ScrollToTop />
<Navbar />
<main style={{ paddingTop: '110px' }}>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/about" element={<About />} />
<Route path="/services" element={<Services />} />
<Route path="/services/:slug" element={<Services />} />
<Route path="/logistics" element={<Logistics />} />
<Route path="/export" element={<ExportManagement />} />
<Route path="/careers" element={<Careers />} />
<Route path="/recruitment-scams" element={<RecruitmentScams />} />
        <Route path="/student-opportunities" element={<StudentOpportunities />} />
<Route path="/contact" element={<Contact />} />
<Route path="*" element={<NotFound />} />
<Route path="/privacy" element={<PrivacyPolicy />} />
<Route path="/terms" element={<TermsConditions />} />
<Route path="/company-profile" element={<CompanyProfile />} />
</Routes>
</main>
<Footer />
<WhatsAppButton />
</Router>
);
}