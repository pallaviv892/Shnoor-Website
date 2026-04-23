import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getNews } from '../api';
import './Home.css';

const heroSlides = [
{
title: 'Bridging Innovation and Trade with Expert IT Solutions and Global Reach',
subtitle: 'Connecting businesses across India, UAE, Bahrain, Qatar, Oman & Malaysia',
bg: 'hero-slide-1',
},
{
title: 'Predict the Future with SHNOOR',
subtitle: 'Tailored, scalable, future-ready IT solutions for tomorrow\'s challenges',
bg: 'hero-slide-2',
},
];

const services = [
{ icon: '☁️', title: 'Cloud Management', desc: 'Scalable cloud infrastructure design, migration, and management for modern enterprises.', path: '/services/cloud-management' },
{ icon: '🏢', title: 'Enterprise Management', desc: 'End-to-end ERP solutions and enterprise-grade IT systems for operational efficiency.', path: '/services/enterprise-management' },
{ icon: '🤖', title: 'Data & AI', desc: 'Harness the power of big data and artificial intelligence for smarter business decisions.', path: '/services/data-ai' },
{ icon: '👥', title: 'Consulting & Staffing', desc: 'Expert IT talent acquisition and consulting services across multiple technology domains.', path: '/services/it-consulting' },
{ icon: '🔍', title: 'Background Verification', desc: 'Comprehensive background checks to ensure trustworthy hires for your organization.', path: '/services/background-verification' },
{ icon: '🏥', title: 'Health Care IT', desc: 'Specialized IT solutions for healthcare providers, hospitals, and medical institutions.', path: '/services/healthcare' },
{ icon: '⚙️', title: 'SAP Outsourcing', desc: 'Full-spectrum SAP consulting, implementation, and support for enterprise operations.', path: '/services/sap-outsourcing' },
{ icon: '💻', title: 'App Development', desc: 'Custom web and mobile application development with cutting-edge technologies.', path: '/services/app-development' },
];

const stats = [
{ value: '100+', label: 'Happy Clients' },
{ value: '10+', label: 'Countries Served' },
{ value: '50+', label: 'IT Experts' },
{ value: '5+', label: 'Years Experience' },
];

export default function Home() {
const [currentSlide, setCurrentSlide] = useState(0);
const [news, setNews] = useState([]);

useEffect(() => {
const timer = setInterval(() => {
setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
}, 5000);
return () => clearInterval(timer);
}, []);

useEffect(() => {
getNews().then((res) => setNews(res.data.slice(0, 3))).catch(() => {});
}, []);

const slide = heroSlides[currentSlide];

return (
<div className="home">
<section className={`hero ${slide.bg}`}>
<div className="hero-overlay" />
<div className="container hero-content">
<div className="hero-badge animate-fadeIn">★★★★★ Top rated by 100+ clients</div>
<h1 className="hero-title animate-fadeUp">{slide.title}</h1>
<p className="hero-subtitle animate-fadeUp">{slide.subtitle}</p>
<div className="hero-actions animate-fadeUp">
<Link to="/contact" className="btn-primary">Get Started</Link>
<Link to="/about" className="btn-outline">Learn More</Link>
</div>
</div>
<div className="hero-dots">
{heroSlides.map((_, i) => (
<button
key={i}
className={`hero-dot ${i === currentSlide ? 'active' : ''}`}
onClick={() => setCurrentSlide(i)}
aria-label={`Slide ${i + 1}`}
/>
))}
</div>
</section>

<section className="stats-bar">
<div className="container stats-grid">
{stats.map((s, i) => (
<div key={i} className="stat-item">
<span className="stat-value">{s.value}</span>
<span className="stat-label">{s.label}</span>
</div>
))}
</div>
</section>

<section className="section-padding about-intro">
<div className="container about-grid">
<div className="about-text">
<span className="section-tag">Who We Are</span>
<h2 className="section-title">SHNOOR International LLC</h2>
<p className="justified-text">SHNOOR INTERNATIONAL LLC has been formed to work progressively in the field of various IT needs focusing primarily on IT Consulting & Staffing, IT Product Development, Application Designing & Development, SAP Outsourcing, Import & Exports of various products from India to United Arab Emirates, Bahrain, Qatar, Oman & Malaysia.</p>
<p className="justified-text" style={{marginTop: '16px'}}>We deal reasonably with producers, farmers, wholesalers, importers, and other stakeholders to establish a strong global presence in international trade. Headquartered in MUSCAT - Oman, we specialize in import and export of quality products from India to the UAE, Bahrain, Qatar, Oman, and Malaysia—building strong trade bridges and lasting partnerships worldwide.</p>
<div style={{marginTop: '28px', display:'flex', gap:'12px', flexWrap:'wrap'}}>
<Link to="/about" className="btn-primary">About Us</Link>
<Link to="/contact" className="btn-gold">Contact Us</Link>
</div>
</div>
<div className="about-image">
<img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80" alt="Team collaboration" />
<div className="about-image-badge">
<span>🌍</span>
<div>
<strong>Global Presence</strong>
<small>6+ Countries</small>
</div>
</div>
</div>
</div>
</section>

<section className="section-padding services-section">
<div className="container">
<div style={{textAlign:'center', marginBottom:'48px'}}>
<span className="section-tag">What We Offer</span>
<h2 className="section-title">Our Services</h2>
<p className="section-subtitle" style={{margin:'0 auto'}}>Comprehensive IT and trade solutions designed to help your business grow globally</p>
</div>
<div className="services-grid">
{services.map((s, i) => (
<Link to={s.path} key={i} className="service-card">
<span className="service-icon">{s.icon}</span>
<h3>{s.title}</h3>
<p>{s.desc}</p>
<span className="service-arrow">→</span>
</Link>
))}
</div>
</div>
</section>

<section className="section-padding why-section">
<div className="container">
<div className="why-grid">
<div className="why-content">
<span className="section-tag">Why SHNOOR</span>
<h2 className="section-title" style={{color:'var(--white)'}}>Connecting Technology & Trade Together</h2>
<p className="justified-text" style={{color:'rgba(255,255,255,0.7)', marginBottom:'24px'}}>At SHNOOR International LLC, we believe innovation should have no borders. Our unique approach combines cutting-edge IT solutions with seamless global trade services.</p>
<div className="why-points">
{['Proven record in multiple IT Domains', 'Commitment to quality, innovation, and client satisfaction', 'Strong international trade network', 'Seamless service delivery across industries and geographies'].map((p, i) => (
<div key={i} className="why-point">
<span className="why-check">✓</span>
<span>{p}</span>
</div>
))}
</div>
<Link to="/about" className="btn-gold" style={{marginTop:'28px'}}>Discover More</Link>
</div>
<div className="why-visual">
<img src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&q=80" alt="Innovation" />
</div>
</div>
</div>
</section>

<section className="section-padding news-section">
<div className="container">
<div style={{textAlign:'center', marginBottom:'48px'}}>
<span className="section-tag">Stay Informed</span>
<h2 className="section-title">Latest News</h2>
</div>
<div className="news-grid">
{news.length > 0 ? news.map((article, i) => (
<Link to={`/news/${article.slug}`} key={i} className="news-card">
<div className="news-image">
<img src={article.image_url} alt={article.title} onError={(e)=>{e.target.src='https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=400'}} />
</div>
<div className="news-body">
<h3>{article.title}</h3>
<p>{article.excerpt}</p>
<div className="news-meta">
<span>{new Date(article.published_at).toLocaleDateString('en-US', {month:'numeric', day:'numeric', year:'numeric'})}</span>
<span>· {article.read_time} min read</span>
</div>
</div>
</Link>
)) : (
[
{
title: 'SAP MM: A Comprehensive Overview',
excerpt: 'Learn how SAP MM helps businesses manage procurement and inventory.',
meta: '12/16/2025 · 2 min read',
image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80'
},
{
title: 'Import & Export Solutions for India & UAE',
excerpt: 'Discover reliable solutions for global trade operations.',
meta: '12/15/2025 · 3 min read',
image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80'
},
{
title: 'Building Trust Through Background Verification',
excerpt: 'Protect your organization with professional verification services.',
meta: '10/14/2025 · 2 min read',
image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&q=80'
}
].map((a, i) => (
<div key={i} className="news-card">
<div className="news-image">
<img src={a.image} alt={a.title} />
</div>
<div className="news-body">
<h3>{a.title}</h3>
<p>{a.excerpt}</p>
<div className="news-meta">
<span>{a.meta}</span>
</div>
</div>
</div>
))
)}
</div>
</div>
</section>

<section className="testimonial-section">
<div className="container">
<div className="testimonial-card">
<div className="stars">★★★★★</div>
<blockquote>
"Working with SHNOOR International LLC has been a game-changer for our business. Their IT consulting team understood our requirements perfectly and delivered a custom solution that improved our efficiency by leaps and bounds. On top of that, their import services were smooth, reliable, and hassle-free. It's rare to find a partner who excels in both technology and trade—SHNOOR does it effortlessly."
</blockquote>
<div className="testimonial-author">
<img src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=60&h=60&fit=crop" alt="Amita Khanna" />
<div>
<strong>Amita Khanna</strong>
<span>Delivery Head — SF Technologies, Singapore</span>
</div>
</div>
</div>
</div>
</section>

<section className="cta-section">
<div className="container">
<h2>Ready to Take Your Business Global?</h2>
<p>Partner with SHNOOR International for cutting-edge IT solutions and seamless trade services.</p>
<div style={{display:'flex', gap:'12px', justifyContent:'center', marginTop:'28px', flexWrap:'wrap'}}>
<Link to="/contact" className="btn-gold">Get In Touch</Link>
<Link to="/services" className="btn-outline">View Services</Link>
</div>
</div>
</section>

<style>{`
.service-card {
text-align: center;
display: flex;
flex-direction: column;
align-items: center;
}
.service-icon {
display: inline-flex;
align-items: center;
justify-content: center;
font-size: 48px;
margin-bottom: 16px;
}
.service-card h3 {
text-align: center;
}
.service-card p {
text-align: center;
}
`}</style>
</div>
);
}