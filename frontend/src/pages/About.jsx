import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const values = [
{ icon: '🎯', title: 'Innovation', desc: 'We constantly push boundaries to deliver cutting-edge solutions.' },
{ icon: '🤝', title: 'Integrity', desc: 'Transparent, honest relationships with every client and partner.' },
{ icon: '🌍', title: 'Global Reach', desc: 'Bridging markets across India, UAE, Oman, Bahrain, Qatar & Malaysia.' },
{ icon: '⭐', title: 'Excellence', desc: 'Uncompromising quality in every project, service, and interaction.' },
];

const team = [
{ name: 'Operations Team', role: 'Muscat, Oman', img: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=300&h=300&fit=crop' },
{ name: 'IT Solutions Team', role: 'UAE / Remote', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=300&h=300&fit=crop' },
{ name: 'Trade & Logistics', role: 'India / UAE', img: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=300&h=300&fit=crop' },
];

export default function About() {
return (
<div className="about-page">
<section className="page-hero">
<div className="page-hero-overlay" />
<div className="container page-hero-content">
<span className="section-tag">About Us</span>
<h1>Who We Are</h1>
<p>A global technology and trade company built on innovation, trust, and excellence.</p>
</div>
</section>

<section className="section-padding">
<div className="container mv-grid">
<div className="mv-card mission">
<div className="mv-icon">🎯</div>
<h2>Our Mission</h2>
<p>To provide innovative IT solutions and seamless global trade services that empower our clients to grow, adapt, and succeed in an ever-changing business landscape. We aim to deliver excellence through expertise, reliability, and customer-centric service.</p>
<p style={{marginTop:'14px'}}>Our team combines industry expertise with innovative thinking to deliver solutions that are tailored, scalable, and future ready. Whether you're seeking end-to-end product development, specialized IT talent, or application design that blends functionality with creativity—SHNOOR International is here to help you achieve success.</p>
</div>
<div className="mv-card vision">
<div className="mv-icon">🔭</div>
<h2>Our Vision</h2>
<p>To be a global leader in uniting technology and trade—transforming businesses with smart IT solutions and fostering stronger international connections that drive economic growth and mutual success.</p>
<p style={{marginTop:'14px'}}>In a world where connections matter, we bring technology, trust, and trade together. Our expertise in cross-border trade means smooth operations, transparent processes, and compliance with international standards.</p>
</div>
</div>
</section>

<section className="section-padding why-choose-section">
<div className="container">
<div className="why-choose-grid">
<div className="why-choose-text">
<span className="section-tag">Why Choose Us</span>
<h2 className="section-title">Why Choose SHNOOR INTERNATIONAL LLC?</h2>
<div className="why-list">
{[
'Proven record in multiple IT Domains',
'Commitment to quality, innovation, and client satisfaction',
'Strong international trade network',
'Seamless service delivery across industries and geographies',
'Deep cross-border trade expertise with transparent processes',
'Compliance with international standards and regulations',
].map((item, i) => (
<div key={i} className="why-item">
<span className="why-num">{String(i+1).padStart(2,'0')}</span>
<span>{item}</span>
</div>
))}
</div>
</div>
<div className="why-choose-image">
<img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=600&q=80" alt="Team at work" />
</div>
</div>
</div>
</section>

<section className="section-padding values-section">
<div className="container">
<div style={{textAlign:'center', marginBottom:'48px'}}>
<span className="section-tag">Our Core Values</span>
<h2 className="section-title">What We Stand For</h2>
</div>
<div className="values-grid">
{values.map((v, i) => (
<div key={i} className="value-card">
<span className="value-icon">{v.icon}</span>
<h3>{v.title}</h3>
<p>{v.desc}</p>
</div>
))}
</div>
</div>
</section>

<section className="section-padding long-desc">
<div className="container long-desc-grid">
<div>
<h3>Building Long-Term Partnerships</h3>
<p>At SHNOOR International LLC, we don't just offer services—we build long-term partnerships that help businesses thrive in both the digital and global marketplace. By blending technological expertise with international trade experience, we empower organizations to innovate faster, operate smarter, and reach new markets with confidence.</p>
</div>
<div>
<h3>Cross-Border Excellence</h3>
<p>Our expertise in cross-border trade means smooth operations, transparent processes, and compliance with international standards. Whether it's sourcing premium goods from India or delivering products to global destinations, SHNOOR International is your bridge to international business growth.</p>
</div>
</div>
</section>

<section className="section-padding team-section">
<div className="container">
<div style={{textAlign:'center', marginBottom:'48px'}}>
<span className="section-tag">Our People</span>
<h2 className="section-title">Our Teams</h2>
</div>
<div className="team-grid">
{team.map((t, i) => (
<div key={i} className="team-card">
<img src={t.img} alt={t.name} />
<h4>{t.name}</h4>
<span>{t.role}</span>
</div>
))}
</div>
</div>
</section>

<section className="about-cta">
<div className="container">
<h2>Ready to Work With Us?</h2>
<p>Let's build something great together. Reach out to our team today.</p>
<Link to="/contact" className="btn-gold" style={{marginTop:'24px', display:'inline-flex'}}>Contact Us →</Link>
</div>
</section>
</div>
);
}