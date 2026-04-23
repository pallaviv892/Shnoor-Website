import React from 'react';
import { Link } from 'react-router-dom';

const TermsConditions = () => {
const styles = {
container: {
maxWidth: '1200px',
margin: '0 auto',
padding: '48px 24px',
fontFamily: "'Montserrat', sans-serif",
backgroundColor: '#f8f9fa',
minHeight: '100vh',
},
paper: {
backgroundColor: '#fff',
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
heading: {
fontSize: '22px',
fontWeight: '600',
color: '#0a192f',
marginBottom: '12px',
marginTop: '8px',
},
text: {
fontSize: '16px',
lineHeight: '1.6',
color: '#2c3e50',
marginBottom: '12px',
},
list: {
marginLeft: '24px',
marginBottom: '16px',
},
listItem: {
fontSize: '16px',
lineHeight: '1.6',
color: '#2c3e50',
marginBottom: '8px',
},
backLink: {
display: 'inline-block',
marginTop: '32px',
color: '#c9a03d',
textDecoration: 'none',
fontWeight: '500',
},
};

return (
<div style={styles.container}>
<div style={styles.paper}>
<h1 style={styles.title}>Terms and Conditions</h1>
<div style={styles.lastUpdated}>Effective date: April 22, 2026</div>

<div>
<p style={styles.text}>
Welcome to <strong>www.shnoor.com</strong>. These terms and conditions outline the rules and regulations for the use of 
SHNOOR INTERNATIONAL LLC's Website, located at <a href="https://www.shnoor.com" style={{ color: '#c9a03d' }}>https://www.shnoor.com</a>.
</p>
<p style={styles.text}>
By accessing this website, we assume you accept these terms and conditions. Do not continue to use www.shnoor.com 
if you do not agree to all of the terms and conditions stated on this page.
</p>
</div>

<div>
<h2 style={styles.heading}>Cookies</h2>
<p style={styles.text}>
The website uses cookies to help personalize your online experience. By accessing www.shnoor.com, you agreed to use 
the required cookies.
</p>
<p style={styles.text}>
A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs 
or deliver viruses to your computer. Cookies are uniquely assigned to you and can only be read by a web server in the 
domain that issued the cookie to you.
</p>
<p style={styles.text}>
We may use cookies to collect, store, and track information for statistical or marketing purposes to operate our website. 
You have the ability to accept or decline optional Cookies. There are some required Cookies that are necessary for the 
operation of our website.
</p>
</div>

<div>
<h2 style={styles.heading}>License</h2>
<p style={styles.text}>
Unless otherwise stated, SHNOOR INTERNATIONAL LLC and/or its licensors own the intellectual property rights for all 
material on www.shnoor.com. All intellectual property rights are reserved. You may access this for your own personal use 
subject to restrictions set in these terms and conditions.
</p>
<p style={styles.text}>You must not:</p>
<ul style={styles.list}>
<li style={styles.listItem}>Republish material from www.shnoor.com</li>
<li style={styles.listItem}>Sell, rent, or sub-license material from the website</li>
<li style={styles.listItem}>Reproduce, duplicate, or copy material from the website</li>
<li style={styles.listItem}>Redistribute content from SHNOOR INTERNATIONAL</li>
</ul>
</div>

<div>
<h2 style={styles.heading}>Hyperlinking to our Content</h2>
<p style={styles.text}>
Organizations such as government agencies, search engines, and news distributors may link to our website without prior 
written approval. We may approve link requests from other organizations at our discretion.
</p>
</div>

<div>
<h2 style={styles.heading}>Content Liability</h2>
<p style={styles.text}>
We shall not be held responsible for any content that appears on your website that links to us. You agree to protect 
and defend us against all claims arising from your website.
</p>
</div>

<div>
<h2 style={styles.heading}>Reservation of Rights</h2>
<p style={styles.text}>
We reserve the right to request that you remove all links or any particular link to our website. You approve to 
immediately remove all links to our website upon request.
</p>
</div>

<div>
<h2 style={styles.heading}>Governing Law</h2>
<p style={styles.text}>
These terms shall be governed and construed in accordance with the laws of the State of Missouri, United States, 
without regard to its conflict of law provisions.
</p>
</div>

<Link to="/" style={styles.backLink}>← Back to Home</Link>
</div>
</div>
);
};

export default TermsConditions;