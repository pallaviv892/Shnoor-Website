import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Services.css';

const allServices = {
'cloud-management': {
icon: '☁️',
title: 'Cloud Management',
tagline: 'Scalable cloud infrastructure for the modern enterprise',
desc: 'SHNOOR International provides end-to-end cloud management services including cloud strategy, architecture design, migration, and ongoing management. We work across AWS, Azure, and Google Cloud platforms to deliver secure, scalable, and cost-efficient infrastructure.',
features: ['Cloud Strategy & Roadmap', 'Infrastructure Migration', 'Cloud Security & Compliance', 'Cost Optimization', '24/7 Monitoring & Support', 'Multi-cloud Management'],
image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
},
'enterprise-management': {
icon: '🏢',
title: 'Enterprise Management',
tagline: 'Streamline operations with powerful ERP solutions',
desc: 'We deliver comprehensive enterprise management solutions including ERP implementation, business process optimization, and system integration. Our experts help organizations modernize their operations and improve efficiency across departments.',
features: ['ERP Implementation', 'Process Automation', 'System Integration', 'Change Management', 'Business Analytics', 'Digital Transformation'],
image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
},
'data-ai': {
icon: '🤖',
title: 'Data & Artificial Intelligence',
tagline: 'Turning data into your most powerful business asset',
desc: 'Harness the power of big data and AI with SHNOOR\'s data science and analytics services. From data engineering to predictive modeling and AI-powered applications, we help you extract meaningful insights to drive smarter decisions.',
features: ['Data Engineering & Pipelines', 'Machine Learning Models', 'Predictive Analytics', 'Business Intelligence', 'Natural Language Processing', 'AI-Powered Automation'],
image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
},
'it-consulting': {
icon: '👥',
title: 'IT Consulting & Staffing',
tagline: 'Expert IT talent when and where you need it',
desc: 'SHNOOR connects businesses with top IT professionals across multiple domains. Whether you need a single specialist or an entire team, our staffing solutions are tailored to match your technical requirements and corporate culture.',
features: ['IT Staff Augmentation', 'Permanent Placement', 'Contract Staffing', 'Executive Search', 'Technical Assessment', 'Onboarding Support'],
image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
},
'background-verification': {
icon: '🔍',
title: 'Background Verification',
tagline: 'Build trust with thorough, reliable verification',
desc: 'Protect your organization with our professional background verification services. We help you validate candidate credentials, screen criminal records, verify employment history, and ensure every hire meets your company\'s standards.',
features: ['Criminal Record Check', 'Employment History Verification', 'Education Credential Check', 'Reference Verification', 'Identity Verification', 'International Checks'],
image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
},
'healthcare': {
icon: '🏥',
title: 'Healthcare IT',
tagline: 'Technology solutions tailored for healthcare providers',
desc: 'SHNOOR offers specialized IT solutions designed for hospitals, clinics, and healthcare organizations. From electronic health records to telemedicine platforms, we help healthcare providers deliver better patient outcomes through technology.',
features: ['Electronic Health Records (EHR)', 'Telemedicine Solutions', 'Hospital Management Systems', 'Medical Data Analytics', 'HIPAA Compliance', 'Healthcare Interoperability'],
image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
},
'sap-outsourcing': {
icon: '⚙️',
title: 'SAP Outsourcing',
tagline: 'Full-spectrum SAP support and implementation',
desc: 'Our SAP certified consultants deliver end-to-end SAP services including implementation, customization, migration, and ongoing support. We cover all major SAP modules to help businesses optimize their enterprise operations.',
features: ['SAP Implementation', 'SAP S/4HANA Migration', 'SAP MM / SD / FI / HR', 'Custom SAP Development', 'SAP Support & Maintenance', 'SAP Training'],
image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
},
'app-development': {
icon: '💻',
title: 'App Development',
tagline: 'Custom software built for your unique needs',
desc: 'SHNOOR\'s development team builds high-performance web and mobile applications tailored to your business goals. From concept to deployment, we deliver scalable, user-friendly applications using modern technologies.',
features: ['Web Application Development', 'Mobile App (iOS & Android)', 'UI/UX Design', 'API Development & Integration', 'Quality Assurance', 'DevOps & Deployment'],
image: 'https://images.unsplash.com/photo-1587620962725-abab19836100?w=800&q=80',
},
};

const serviceList = Object.entries(allServices).map(([slug, s]) => ({ slug, ...s }));

export default function Services() {
const { slug } = useParams();
const service = slug ? allServices[slug] : null;

if (service) {
return (
<div className="service-detail">
<section className="page-hero">
<div className="page-hero-overlay" style={{backgroundImage:`url(${service.image})`}} />
<div className="container page-hero-content">
<span className="section-tag">Services</span>
<h1>{service.icon} {service.title}</h1>
<p>{service.tagline}</p>
<div className="breadcrumb">
</div>
</div>
</section>

<section className="section-padding">
<div className="container service-detail-grid">
<div className="service-detail-main">
<h2>Overview</h2>
<p>{service.desc}</p>
<h3 style={{marginTop:'32px', marginBottom:'20px'}}>Key Features</h3>
<div className="features-grid">
{service.features.map((f, i) => (
<div key={i} className="feature-item">
<span className="feature-check">✓</span>
<span>{f}</span>
</div>
))}
</div>
<div style={{marginTop:'36px', display:'flex', gap:'12px', flexWrap:'wrap'}}>
<Link to="/contact" className="btn-primary">Get Started</Link>
<Link to="/services" className="btn-gold">All Services</Link>
</div>
</div>
<div className="service-detail-sidebar">
<div className="sidebar-card">
<h4>All Services</h4>
{serviceList.map((s) => (
<Link key={s.slug} to={`/services/${s.slug}`} className={`sidebar-link ${slug === s.slug ? 'active' : ''}`}>
<span>{s.icon}</span> {s.title}
</Link>
))}
</div>
<div className="sidebar-cta">
<h4>Need Help?</h4>
<p>Talk to our experts about the best solution for your business.</p>
<Link to="/contact" className="btn-primary" style={{marginTop:'16px', width:'100%', justifyContent:'center'}}>Contact Us</Link>
</div>
</div>
</div>
</section>
</div>
);
}

return (
<div className="services-page">
<section className="page-hero">
<div className="page-hero-overlay" />
<div className="container page-hero-content">
<span className="section-tag">What We Offer</span>
<h1>Our Services</h1>
<p>Comprehensive IT and global trade solutions for modern businesses</p>
<div className="breadcrumb">

</div>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="services-listing">
{serviceList.map((s, i) => (
<div key={i} className={`service-listing-card ${i % 2 === 1 ? 'reverse' : ''}`}>
<div className="slc-image">
<img src={s.image} alt={s.title} />
</div>
<div className="slc-content">
<span className="slc-icon">{s.icon}</span>
<h2>{s.title}</h2>
<p className="slc-tagline">{s.tagline}</p>
<p>{s.desc.substring(0, 200)}...</p>
<div className="slc-features">
{s.features.slice(0, 4).map((f, fi) => (
<span key={fi} className="slc-feature-tag">{f}</span>
))}
</div>
<Link to={`/services/${s.slug}`} className="btn-primary" style={{marginTop:'20px'}}>Learn More →</Link>
</div>
</div>
))}
</div>
</div>
</section>
</div>
);
}