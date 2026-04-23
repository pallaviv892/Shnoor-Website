import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from '../assets/logo.png';
import './Navbar.css';

const services = [
{ label: 'IT Consulting & Staffing', path: '/services/it-consulting' },
{ label: 'Cloud Management', path: '/services/cloud-management' },
{ label: 'Enterprise Management', path: '/services/enterprise-management' },
{ label: 'Data & AI', path: '/services/data-ai' },
{ label: 'SAP Outsourcing', path: '/services/sap-outsourcing' },
{ label: 'App Development', path: '/services/app-development' },
{ label: 'Background Verification', path: '/services/background-verification' },
{ label: 'Healthcare IT', path: '/services/healthcare' },
];

export default function Navbar() {
const [scrolled, setScrolled] = useState(false);
const [mobileOpen, setMobileOpen] = useState(false);
const [servicesOpen, setServicesOpen] = useState(false);
const dropRef = useRef(null);
const location = useLocation();

useEffect(() => {
const onScroll = () => setScrolled(window.scrollY > 50);
window.addEventListener('scroll', onScroll);
return () => window.removeEventListener('scroll', onScroll);
}, []);

useEffect(() => {
setMobileOpen(false);
setServicesOpen(false);
}, [location]);

useEffect(() => {
const handleClick = (e) => {
if (dropRef.current && !dropRef.current.contains(e.target)) {
setServicesOpen(false);
}
};
document.addEventListener('mousedown', handleClick);
return () => document.removeEventListener('mousedown', handleClick);
}, []);

return (
<nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
<div className="nav-container">
<Link to="/" className="nav-logo">
<img src={logo} alt="Shnoor International LLC" className="nav-logo-img" />
</Link>

<ul className="nav-links">
<li><NavLink to="/" end>Home</NavLink></li>
<li><NavLink to="/about">About Us</NavLink></li>
<li className="has-dropdown" ref={dropRef}>
<button
className="dropdown-trigger"
onClick={() => setServicesOpen(!servicesOpen)}
aria-expanded={servicesOpen}
>
Services <span className="arrow">▾</span>
</button>
{servicesOpen && (
<div className="dropdown-menu">
{services.map((s) => (
<Link key={s.path} to={s.path} className="dropdown-item">
{s.label}
</Link>
))}
</div>
)}
</li>
<li><NavLink to="/logistics">Logistics Management</NavLink></li>
<li><NavLink to="/careers">Careers</NavLink></li>
<li><NavLink to="/export">Export Management</NavLink></li>
<li><NavLink to="/contact" className="nav-contact-btn">Contact</NavLink></li>
</ul>

<button
className={`hamburger ${mobileOpen ? 'open' : ''}`}
onClick={() => setMobileOpen(!mobileOpen)}
aria-label="Toggle menu"
>
<span /><span /><span />
</button>
</div>

<div className={`mobile-menu ${mobileOpen ? 'open' : ''}`}>
<NavLink to="/" end>Home</NavLink>
<NavLink to="/about">About Us</NavLink>
<button className="mobile-services-toggle" onClick={() => setServicesOpen(!servicesOpen)}>
Services <span>{servicesOpen ? '▴' : '▾'}</span>
</button>
{servicesOpen && (
<div className="mobile-services">
{services.map((s) => (
<Link key={s.path} to={s.path}>{s.label}</Link>
))}
</div>
)}
<NavLink to="/logistics">Logistics Management</NavLink>
<NavLink to="/careers">Careers</NavLink>
<NavLink to="/export">Export Management</NavLink>
<NavLink to="/contact">Contact</NavLink>
</div>
</nav>
);
}