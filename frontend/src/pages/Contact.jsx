import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { submitContact } from '../api';
import './Contact.css';

const services = [
'IT Consulting & Staffing', 'Cloud Management', 'Enterprise Management',
'Data & AI', 'SAP Outsourcing', 'App Development',
'Background Verification', 'Healthcare IT', 'Import/Export', 'Other',
];

export default function Contact() {
const [form, setForm] = useState({ name: '', mobile: '', email: '', message: '', service: '' });
const [status, setStatus] = useState({ loading: false, success: false, error: '' });

const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

const handleSubmit = async (e) => {
e.preventDefault();
setStatus({ loading: true, success: false, error: '' });
try {
await submitContact(form);
setStatus({ loading: false, success: true, error: '' });
setForm({ name: '', mobile: '', email: '', message: '', service: '' });
} catch (err) {
setStatus({ loading: false, success: false, error: err.response?.data?.error || 'Failed to send. Please try again.' });
}
};

return (
<div className="contact-page">
<section className="contact-hero">
<div className="contact-hero-overlay" />
<div className="container contact-hero-content">
<h1>Let's Connect</h1>
<p>Feel free to contact us with any questions or concerns. We appreciate your interest and look forward to hearing from you.</p>
<div className="breadcrumb" style={{color:'rgba(255,255,255,0.5)'}}>
</div>
</div>
<div className="contact-hero-icons">
<span title="Location">📍</span>
<span title="Email">✉️</span>
<span title="Phone">📞</span>
<span title="Chat">💬</span>
<span title="Video">📹</span>
</div>
</section>

<section className="section-padding">
<div className="container contact-grid">
<div className="contact-form-wrapper">
<h2>Send Us a Message</h2>
<p>Fill out the form and our team will get back to you within 24 hours.</p>

{status.success && (
<div className="alert success">
✓ Thank you! Your message has been sent. We'll get back to you shortly.
</div>
)}
{status.error && <div className="alert error">⚠ {status.error}</div>}

<form onSubmit={handleSubmit} className="contact-form">
<div className="form-row">
<div className="form-group">
<label>Name *</label>
<input name="name" placeholder="Your full name" value={form.name} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Mobile Number *</label>
<input name="mobile" placeholder="Your mobile number" value={form.mobile} onChange={handleChange} required />
</div>
</div>
<div className="form-group">
<label>Email Address *</label>
<input type="email" name="email" placeholder="Your email address" value={form.email} onChange={handleChange} required />
</div>
<div className="form-group">
<label>Service Interested In</label>
<select name="service" value={form.service} onChange={handleChange}>
<option value="">Select a service (optional)</option>
{services.map((s) => <option key={s} value={s}>{s}</option>)}
</select>
</div>
<div className="form-group">
<label>Message *</label>
<textarea name="message" placeholder="Tell us about your requirements..." value={form.message} onChange={handleChange} required rows={5} />
</div>
<button type="submit" className="btn-primary submit-btn" disabled={status.loading}>
{status.loading ? <><span className="btn-spinner" /> Sending...</> : 'Send Message →'}
</button>
</form>
</div>

<div className="contact-info">
<div className="contact-info-card">
<h3>Get in Touch</h3>
<div className="contact-detail">
<span className="ci-icon">📧</span>
<div>
<strong>General Inquiries</strong>
<a href="mailto:info@shnoor.com">info@shnoor.com</a>
</div>
</div>
<div className="contact-detail">
<span className="ci-icon">📧</span>
<div>
<strong>Sales</strong>
<a href="mailto:proc@shnoor.com">proc@shnoor.com</a>
</div>
</div>
<div className="contact-detail">
<span className="ci-icon">📍</span>
<div>
<strong>Headquarters</strong>
<span>10009 Mount Tabor Road,<br />Odessa Missouri, United States</span>
</div>
</div>
<div className="contact-detail">
<span className="ci-icon">🕐</span>
<div>
<strong>Business Hours</strong>
<span>Mon–Fri: 9:00 AM – 6:00 PM<br />(GST / EST)</span>
</div>
</div>
</div>

<div className="contact-offices">
<h4>Regional Offices</h4>
<div className="office-item">
<span>🇴🇲</span>
<div><strong>Muscat, Oman</strong><small>Middle East Hub</small></div>
</div>
<div className="office-item">
<span>🇦🇪</span>
<div><strong>Dubai, UAE</strong><small>Trade Operations</small></div>
</div>
<div className="office-item">
<span>🇮🇳</span>
<div><strong>India</strong><small>IT & Export Center</small></div>
</div>
</div>

<div className="contact-whatsapp">
<a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" className="whatsapp-btn">
💬 Chat on WhatsApp
</a>
</div>
</div>
</div>
</section>

<div className="map-placeholder">
<iframe
title="SHNOOR Location"
src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d202643.45792965476!2d-94.08287369!3d39.020278!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87c0e3a67b04a41f%3A0x300da0de1ab2f97a!2sOdessa%2C%20MO!5e0!3m2!1sen!2sus!4v1693000000000!5m2!1sen!2sus"
width="100%"
height="400"
style={{ border: 0 }}
allowFullScreen
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
/>
</div>
</div>
);
}