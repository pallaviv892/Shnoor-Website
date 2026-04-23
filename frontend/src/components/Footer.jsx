import companyPdf from '../assets/pdfs/company-profile.pdf';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { subscribeNewsletter } from '../api';
import logo from '../assets/logo.png';
import './Footer.css';

export default function Footer() {
const [email, setEmail] = useState('');
const [subMsg, setSubMsg] = useState('');

const handleSubscribe = async (e) => {
e.preventDefault();
try {
await subscribeNewsletter(email);
setSubMsg('✓ Subscribed successfully!');
setEmail('');
} catch {
setSubMsg('Please try again.');
}
};

return (
<footer className="footer">
<div className="footer-top">
<div className="container">
<div className="footer-grid">

<div className="footer-brand">
<div className="footer-logo">
<img src={logo} alt="Shnoor International LLC" style={{ height: '64px', width: 'auto', objectFit: 'contain' }} />
</div>
<p>Bridging technology and trade across global markets. Your trusted partner for IT solutions and international commerce.</p>
<div className="footer-social">
<a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
<a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" aria-label="WhatsApp">W</a>
</div>
</div>

<div className="footer-col">
<h4>Quick Links</h4>
<Link to="/">Home</Link>
<Link to="/about">About Us</Link>
<Link to="/services">Services</Link>
<Link to="/logistics">Logistics</Link>
<Link to="/careers">Careers</Link>
<Link to="/export">Export Management</Link>
<Link to="/contact">Contact</Link>
</div>


<div className="footer-col">
<h4>Services</h4>
<Link to="/services/cloud-management">Cloud Management</Link>
<Link to="/services/enterprise-management">Enterprise Management</Link>
<Link to="/services/data-ai">Data & Artificial Intelligence</Link>
<Link to="/services/it-consulting">Consulting & Staffing</Link>
<Link to="/services/background-verification">Background Verification</Link>
<Link to="/services/healthcare">Health Care</Link>
<Link to="/services/sap-outsourcing">SAP Outsourcing</Link>
</div>


<div className="footer-col">
<h4>Contact</h4>
<div className="footer-contact-item">
<span className="contact-icon">📧</span>
<div>
<a href="mailto:info@shnoor.com">info@shnoor.com</a>
<span className="contact-label">General</span>
</div>
</div>
<div className="footer-contact-item">
<span className="contact-icon">📧</span>
<div>
<a href="mailto:proc@shnoor.com">proc@shnoor.com</a>
<span className="contact-label">Sales</span>
</div>
</div>
<div className="footer-contact-item">
<span className="contact-icon">📍</span>
<div>
<span>10009 Mount Tabor Road,</span>
<span>Odessa Missouri, United States</span>
</div>
</div>
<div className="footer-newsletter">
<h5>Stay Updated</h5>
<form onSubmit={handleSubscribe} className="newsletter-form">
<input
type="email"
placeholder="Your email address"
value={email}
onChange={(e) => setEmail(e.target.value)}
required
/>
<button type="submit">→</button>
</form>
{subMsg && <p className="sub-msg">{subMsg}</p>}
</div>
</div>
</div>
</div>
</div>
<div className="footer-partners">
<div className="container">
<span>Our platforms:</span>
<div className="partners-logos">
<a href="https://lms.shnoor.com/" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{ textDecoration: 'none' }}>LMS Portal</a>
<a href="https://hrm.shnoor.com/" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{ textDecoration: 'none' }}>HRM Portal</a>
<a href="https://www.invoicecloud.in/" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{ textDecoration: 'none' }}>Invoice Cloud</a>
<a href="https://lms.shnoor.com/" target="_blank" rel="noopener noreferrer" className="partner-badge" style={{ textDecoration: 'none' }}>Assesment</a>
</div>
</div>
</div>
<div className="footer-partners">
<div className="container">
<span>Our Partners:</span>
<div className="partners-logos">
<span className="partner-badge google">Google Partner</span>
<span className="partner-badge semrush">SEMrush</span>
<span className="partner-badge hubspot">HubSpot Diamond</span>
<span className="partner-badge meta">Meta Business Partner</span>
</div>
</div>
</div>
<div className="footer-bottom">
<div className="container">
<p>©Copyrights 2025. All Rights Reserved. SHNOOR INTERNATIONAL LLC</p>
<div className="footer-legal">
<Link to="/privacy">Privacy Policy</Link>
<Link to="/terms">Terms & Conditions</Link>
<a
href="#"
onClick={(e) => {
e.preventDefault();
const link = document.createElement('a');
link.href = companyPdf;
link.download = 'SHNOOR_Company_Profile.pdf';
document.body.appendChild(link);
link.click();
document.body.removeChild(link);
}}
style={{ cursor: 'pointer', textDecoration: 'none', color: 'inherit' }}
>
Company Profile
</a>
</div>
</div>
</div>
</footer>
);
}