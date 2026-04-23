import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
const styles = {
container: {
maxWidth: '1200px',
margin: '0 auto',
padding: '48px 24px',
fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
backgroundColor: '#f8f9fa',
minHeight: '100vh',
},
paper: {
backgroundColor: '#ffffff',
borderRadius: '12px',
boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
padding: '48px',
maxWidth: '900px',
margin: '0 auto',
},
title: {
fontSize: '32px',
fontWeight: '700',
color: '#0a192f',
marginBottom: '8px',
borderLeft: '4px solid #c9a03d',
paddingLeft: '20px',
},
lastUpdated: {
fontSize: '14px',
color: '#6c757d',
marginBottom: '32px',
marginTop: '8px',
paddingLeft: '24px',
},
section: {
marginBottom: '28px',
},
heading: {
fontSize: '22px',
fontWeight: '600',
color: '#0a192f',
marginBottom: '12px',
marginTop: '8px',
},
subheading: {
fontSize: '18px',
fontWeight: '600',
color: '#112240',
marginBottom: '10px',
marginTop: '20px',
},
text: {
fontSize: '16px',
lineHeight: '1.6',
color: '#2c3e50',
marginBottom: '12px',
},
backLink: {
display: 'inline-block',
marginTop: '32px',
color: '#c9a03d',
textDecoration: 'none',
fontWeight: '500',
transition: 'all 0.2s',
},
};

return (
<div style={styles.container}>
<div style={styles.paper}>
<h1 style={styles.title}>Privacy Policy</h1>
<div style={styles.lastUpdated}>Last updated: April 22, 2026</div>

<div style={styles.section}>
<p style={styles.text}>
At SHNOOR INTERNATIONAL LLC, accessible from www.shnoor.com, your privacy is one of our main priorities. 
This Privacy Policy document describes the types of information we collect and how we use it.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>1. Information We Collect</h2>
<p style={styles.text}>
We may collect personal information such as your name, email address, phone number, and company details 
when you fill out forms, subscribe to our newsletter, or contact us for services.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>2. How We Use Your Information</h2>
<p style={styles.text}>
We use the information to improve our website, personalize your experience, send periodic emails regarding 
our services, and respond to inquiries.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>3. Cookies</h2>
<p style={styles.text}>
We use cookies to enhance your browsing experience, analyze site traffic, and understand where visitors are coming from. 
You can choose to disable cookies through your browser settings.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>4. Third-Party Services</h2>
<p style={styles.text}>
We may use third-party analytics tools (e.g., Google Analytics) and advertising partners. These services have their own 
privacy policies governing data usage.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>5. Data Security</h2>
<p style={styles.text}>
We implement appropriate security measures to protect your personal information from unauthorized access, alteration, 
or disclosure.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>6. Your Rights</h2>
<p style={styles.text}>
You have the right to request access, correction, or deletion of your personal data. To exercise these rights, 
contact us at <strong>info@shnoor.com</strong>.
</p>
</div>

<div style={styles.section}>
<h2 style={styles.heading}>7. Changes to This Policy</h2>
<p style={styles.text}>
We may update our Privacy Policy from time to time. Any changes will be posted on this page with a revised "Last updated" date.
</p>
</div>

<Link to="/" style={styles.backLink}>← Back to Home</Link>
</div>
</div>
);
};

export default PrivacyPolicy;