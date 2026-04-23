import React from 'react';
import { Link } from 'react-router-dom';
import './LogisticsExport.css';
import exportImg from '../assets/images/export-cargo.jpg';
const routes = [
{ from: '🇮🇳 India', to: '🇦🇪 UAE', goods: 'Spices, Textiles, Machinery' },
{ from: '🇮🇳 India', to: '🇧🇭 Bahrain', goods: 'Food Products, Handicrafts' },
{ from: '🇮🇳 India', to: '🇶🇦 Qatar', goods: 'Chemicals, Auto Parts' },
{ from: '🇮🇳 India', to: '🇴🇲 Oman', goods: 'IT Equipment, Consumer Goods' },
{ from: '🇮🇳 India', to: '🇲🇾 Malaysia', goods: 'Pharmaceuticals, Electronics' },
];
export function Logistics() {
return (
<div className="logistics-page">
<section className="page-hero">
<div className="page-hero-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1400&q=60)' }} />
<div className="container page-hero-content">
<span className="section-tag">Logistics</span>
<h1>Logistics Management</h1>
<p>Seamless freight solutions and supply chain management across global markets</p>
</div>
</section>

<section className="section-padding">
<div className="container logistics-grid">
<div>
<span className="section-tag">Our Capabilities</span>
<h2 className="section-title">End-to-End Logistics Solutions</h2>
<p>SHNOOR International manages the complete logistics lifecycle—from procurement and warehousing to international shipping, customs clearance, and last-mile delivery. We ensure your goods move efficiently and compliantly across borders.</p>
<div className="logistics-features">
{['Air Freight', 'Sea Freight', 'Road Transport', 'Customs Clearance', 'Warehousing', 'Cold Chain Logistics', 'Door-to-Door Delivery', 'Track & Trace'].map((f, i) => (
<div key={i} className="log-feature"><span>✓</span> {f}</div>
))}
</div>
</div>
<div>
<img src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80" alt="Logistics" style={{ width: '100%', height: '420px', objectFit: 'cover', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)' }} />
</div>
</div>
</section>

<section className="section-padding trade-routes">
<div className="container">
<div style={{ textAlign: 'center', marginBottom: '48px' }}>
<span className="section-tag">Coverage</span>
<h2 className="section-title">Our Trade Routes</h2>
<p className="section-subtitle" style={{ margin: '0 auto' }}>We facilitate trade across key corridors between India and the Gulf & Southeast Asia</p>
</div>
<div className="routes-grid">
{routes.map((r, i) => (
<div key={i} className="route-card">
<div className="route-endpoints">
<span>{r.from}</span>
<span className="route-arrow">→</span>
<span>{r.to}</span>
</div>
<p>{r.goods}</p>
</div>
))}
</div>
</div>
</section>

<section className="section-padding" style={{ background: 'var(--navy)', textAlign: 'center' }}>
<div className="container">
<h2 style={{ color: 'white', fontSize: '32px', marginBottom: '12px' }}>Need a Logistics Quote?</h2>
<p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '28px' }}>Get a competitive rate for your next shipment.</p>
<Link to="/contact" className="btn-gold">Request a Quote</Link>
</div>
</section>
</div>
);
}

export function ExportManagement() {
const tradeSolutions = [
'Product Sourcing & Procurement',
'International Shipping & Logistics',
'Quality Control & Compliance',
'Market Expansion Support',
'Customized Export Strategies',
];

const whatWeDoDetails = [
{
title: 'Product Sourcing & Procurement',
description: 'With our deep understanding of global markets and complex supply chains, we offer complete management of your procurement process. This includes everything from identifying and qualifying reliable sources to logistics coordination.',
image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
},
{
title: 'International Shipping & Logistics',
description: 'At SHNOOR International LLC, we make global trade simple by delivering reliable, efficient, and cost-effective international shipping & logistics solutions. From India to markets across the UAE, Bahrain, Qatar, Oman, Malaysia, and beyond, we ensure every product meets international standards.',
image: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
},
{
title: 'Quality Control & Compliance',
description: 'Our Quality Control & Compliance services ensure every product we source, export, or import meets international standards and client expectations. We work with certified inspection agencies, follow stringent testing procedures, and maintain high-quality standards.',
image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?w=600&q=80',
},
];

const exportSteps = [
{ title: 'Market Analysis', desc: 'Identify target markets and assess demand for your products.', icon: 'https://img.icons8.com/color/48/000000/statistics.png' },
{ title: 'Regulatory Compliance', desc: 'Ensure adherence to export regulations and trade laws.', icon: 'https://img.icons8.com/color/48/000000/rules.png' },
{ title: 'Documentation', desc: 'Prepare all required commercial invoices, certificates, and customs forms.', icon: 'https://img.icons8.com/color/48/000000/document.png' },
{ title: 'Freight Coordination', desc: 'Arrange optimal shipping routes and freight solutions.', icon: 'https://img.icons8.com/color/48/000000/freight.png' },
{ title: 'Customs Clearance', desc: 'Handle clearance procedures in both origin and destination countries.', icon: 'https://img.icons8.com/color/48/000000/customs.png' },
{ title: 'Delivery & Payment', desc: 'Coordinate final delivery and ensure secure payment terms.', icon: 'https://img.icons8.com/color/48/000000/delivery.png' },
];

return (
<div className="export-page">
<section className="page-hero">
<div className="page-hero-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1495020689067-958852a7765e?w=1400&q=60)' }} />
<div className="container page-hero-content">
<span className="section-tag">Global Trade Partner</span>
<h1>From India to the world, Seamlessly</h1>
<p>At SHNOOR International LLC, we bridge markets by delivering high-quality products from India to global destinations including the UAE, Bahrain, Qatar, Oman, and Malaysia.</p>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="export-intro" style={{ marginBottom: '48px' }}>
<div>
<span className="section-tag">Who We Are</span>
<h2 className="section-title">Built on Trust, Transparency & Timely Delivery</h2>
<p>Our import and export services are built on trust, transparency, and timely delivery, ensuring seamless cross-border trade. We specialize in sourcing, packaging, and shipping a wide range of products while complying with international trade standards. With a strong network of suppliers, logistics partners, and compliance experts, we make global trade simple, reliable, and profitable for our clients.</p>
<Link to="/contact" className="btn-primary" style={{ marginTop: '24px' }}>Partner With Us →</Link>
</div>
<img src={exportImg} alt="Global Trade" className="fade-in-img" />
</div>
</div>
</section>

<section className="section-padding alt-bg">
<div className="container">
<div style={{ textAlign: 'center', marginBottom: '48px' }}>
<span className="section-tag">What We Offer</span>
<h2 className="section-title">Our Trade Solutions Include</h2>
<p className="section-subtitle">End-to-end export management tailored to your business needs</p>
</div>
<div className="solutions-grid">
{tradeSolutions.map((solution, idx) => (
<div key={idx} className="solution-card">
<img src="https://img.icons8.com/ios-filled/50/FFB800/approval.png" alt="solution" className="solution-icon" />
<h3>{solution}</h3>
</div>
))}
</div>
</div>
</section>

<section className="section-padding">
<div className="container">
<div style={{ textAlign: 'center', marginBottom: '48px' }}>
<span className="section-tag">Expertise</span>
<h2 className="section-title">What We Do</h2>
<p className="section-subtitle">We specialize in sourcing, packaging, and shipping a wide range of products while complying with international trade standards. With a strong network of suppliers, logistics partners, and compliance experts, we make global trade <strong>simple, reliable, and profitable</strong> for our clients.</p>
</div>

<div className="whatwedo-grid">
{whatWeDoDetails.map((item, idx) => (
<div key={idx} className="whatwedo-card">
<img src={item.image} alt={item.title} className="whatwedo-image" />
<h3>{item.title}</h3>
<p>{item.description}</p>
</div>
))}
</div>
</div>
</section>

<section className="section-padding alt-bg">
<div className="container">
<div style={{ textAlign: 'center', marginBottom: '48px' }}>
<span className="section-tag">Our Process</span>
<h2 className="section-title">Export Process Steps</h2>
</div>
<div className="process-grid">
{exportSteps.map((step, i) => (
<div key={i} className="process-card">
<img src={step.icon} alt={step.title} className="process-icon" />
<h4>{step.title}</h4>
<p>{step.desc}</p>
</div>
))}
</div>
</div>
</section>

<section className="section-padding cta-section">
<div className="container">
<h2>Ready to expand globally?</h2>
<p>Whether you’re looking to export premium products from India or import goods into growing markets, SHNOOR International is your trusted partner in global trade.</p>
<Link to="/contact" className="btn-gold btn-large">Get a Free Consultation</Link>
</div>
</section>
</div>
);
}