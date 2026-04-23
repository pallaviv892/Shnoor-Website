import React, { useEffect } from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600;700&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

.shnoor-student-page {
font-family: 'DM Sans', sans-serif;
background: linear-gradient(180deg, #0f2a4a 0%, #0d2e52 60%, #0a2540 100%);
color: #fff;
min-height: 100vh;
}

.so-container {
max-width: 1280px;
margin: 0 auto;
padding: 48px 32px 80px;
}

.so-hero {
text-align: center;
margin-bottom: 64px;
padding: 60px 24px;
background: rgba(255,255,255,0.02);
border-radius: 32px;
border: 1px solid rgba(255,255,255,0.08);
backdrop-filter: blur(2px);
}
.hero-eyebrow {
font-size: 11px;
font-weight: 700;
letter-spacing: 0.22em;
text-transform: uppercase;
color: #e8a020;
margin-bottom: 20px;
}
.hero-title {
font-family: 'Playfair Display', serif;
font-size: clamp(32px, 5vw, 52px);
font-weight: 800;
color: #fff;
line-height: 1.2;
margin-bottom: 20px;
}
.hero-title span {
color: #e8a020;
}
.hero-sub {
font-size: 1rem;
font-weight: 300;
color: rgba(255,255,255,0.75);
max-width: 700px;
margin: 0 auto;
line-height: 1.7;
}

.section-header {
text-align: center;
margin-bottom: 48px;
}
.section-tag {
display: inline-block;
background: rgba(232,160,32,0.15);
color: #e8a020;
font-size: 11px;
font-weight: 700;
letter-spacing: 0.2em;
text-transform: uppercase;
padding: 5px 14px;
border-radius: 40px;
margin-bottom: 16px;
}
.section-title {
font-family: 'Playfair Display', serif;
font-size: 2.2rem;
font-weight: 700;
color: #fff;
margin-bottom: 16px;
}
.section-desc {
color: rgba(255,255,255,0.65);
max-width: 700px;
margin: 0 auto;
font-weight: 300;
}

.job-grid {
display: grid;
grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
gap: 32px;
margin-bottom: 64px;
}
.job-card {
background: rgba(255,255,255,0.05);
border-radius: 24px;
border: 1px solid rgba(255,255,255,0.1);
overflow: hidden;
transition: all 0.3s ease;
backdrop-filter: blur(4px);
}
.job-card:hover {
transform: translateY(-6px);
background: rgba(255,255,255,0.08);
border-color: rgba(232,160,32,0.4);
box-shadow: 0 20px 30px -12px rgba(0,0,0,0.3);
}
.job-card-header {
padding: 24px 24px 16px;
border-bottom: 1px solid rgba(255,255,255,0.08);
}
.job-title {
font-size: 1.4rem;
font-weight: 700;
color: #fff;
margin-bottom: 10px;
line-height: 1.3;
}
.job-badge {
display: inline-block;
background: rgba(232,160,32,0.2);
color: #e8a020;
font-size: 0.7rem;
font-weight: 600;
padding: 4px 12px;
border-radius: 30px;
}
.job-card-body {
padding: 20px 24px 24px;
}
.job-desc {
font-size: 0.88rem;
line-height: 1.6;
color: rgba(255,255,255,0.75);
margin-bottom: 20px;
}
.job-meta {
display: flex;
flex-wrap: wrap;
gap: 16px;
font-size: 0.8rem;
color: rgba(255,255,255,0.6);
margin-bottom: 20px;
padding-bottom: 12px;
border-bottom: 1px solid rgba(255,255,255,0.08);
}
.job-meta span {
display: inline-flex;
align-items: center;
gap: 6px;
}
.btn-apply {
display: inline-flex;
align-items: center;
gap: 8px;
background: #e8a020;
color: #0f2a4a;
padding: 10px 24px;
border-radius: 40px;
font-weight: 700;
font-size: 0.85rem;
text-decoration: none;
transition: all 0.2s ease;
border: none;
cursor: pointer;
}
.btn-apply:hover {
background: #f5b430;
transform: translateY(-2px);
}

.internship-box {
background: rgba(255,255,255,0.05);
border-radius: 28px;
padding: 40px;
margin: 48px 0;
border: 1px solid rgba(255,255,255,0.1);
backdrop-filter: blur(4px);
}
.internship-header {
display: flex;
flex-wrap: wrap;
justify-content: space-between;
align-items: center;
margin-bottom: 28px;
padding-bottom: 20px;
border-bottom: 1px solid rgba(255,255,255,0.1);
}
.internship-title {
font-family: 'Playfair Display', serif;
font-size: 1.7rem;
font-weight: 700;
color: #fff;
}
.internship-badge {
background: #e8a020;
color: #0f2a4a;
padding: 6px 18px;
border-radius: 40px;
font-size: 0.8rem;
font-weight: 700;
}
.details-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
gap: 24px;
margin-bottom: 32px;
}
.detail-item {
display: flex;
align-items: center;
gap: 12px;
font-size: 0.9rem;
color: rgba(255,255,255,0.8);
}
.detail-icon {
font-size: 1.3rem;
}
.skills-section {
margin-top: 32px;
}
.skills-title {
font-weight: 700;
color: #e8a020;
margin-bottom: 16px;
font-size: 1rem;
}
.skills-grid {
display: flex;
flex-wrap: wrap;
gap: 10px;
}
.skill-tag {
background: rgba(255,255,255,0.08);
border: 1px solid rgba(255,255,255,0.15);
padding: 6px 14px;
border-radius: 40px;
font-size: 0.75rem;
font-weight: 500;
color: rgba(255,255,255,0.85);
}

.cta-section {
background: rgba(232,160,32,0.1);
border-radius: 32px;
padding: 48px;
text-align: center;
margin: 48px 0;
border: 1px solid rgba(232,160,32,0.2);
}
.cta-title {
font-family: 'Playfair Display', serif;
font-size: 1.8rem;
font-weight: 700;
color: #fff;
margin-bottom: 16px;
}
.cta-text {
color: rgba(255,255,255,0.75);
margin-bottom: 28px;
max-width: 600px;
margin-left: auto;
margin-right: auto;
}
.btn-cta {
display: inline-flex;
align-items: center;
gap: 10px;
background: #e8a020;
color: #0f2a4a;
padding: 12px 32px;
border-radius: 60px;
font-weight: 700;
text-decoration: none;
transition: all 0.2s;
}
.btn-cta:hover {
transform: translateY(-2px);
background: #f5b430;
box-shadow: 0 8px 20px rgba(0,0,0,0.2);
}

.back-button {
display: inline-flex;
align-items: center;
gap: 6px;
background: rgba(255,255,255,0.08);
color: rgba(255,255,255,0.8);
padding: 8px 20px;
border-radius: 40px;
font-weight: 500;
text-decoration: none;
transition: all 0.2s;
border: 1px solid rgba(255,255,255,0.1);
}
.back-button:hover {
background: rgba(255,255,255,0.12);
transform: translateX(-3px);
color: #e8a020;
}

@media (max-width: 700px) {
.so-container { padding: 24px 20px 60px; }
.hero-title { font-size: 2rem; }
.job-grid { grid-template-columns: 1fr; }
.internship-box { padding: 24px; }
.cta-section { padding: 32px 24px; }
.cta-title { font-size: 1.4rem; }
}
`;

const JOB_OPENINGS = [
{
title: "Software Engineer Trainee - Gen AI",
location: "Work From Home",
type: "Internship (3 Months)",
stipend: "₹10K - ₹12K / month",
ppo: "6 LPA",
description: "Design and develop cutting-edge applications using Generative AI models like OpenAI, Claude, and Gemini. Work on Agentic AI systems that can reason, plan, and act autonomously in enterprise workflows."
},
{
title: "Software Engineer Trainee - SAP",
location: "Work From Home",
type: "Internship (3 Months)",
stipend: "₹10K - ₹12K / month",
ppo: "6 LPA",
description: "Build enterprise-level applications on the SAP platform using ABAP. Collaborate with functional consultants to deliver effective technical solutions and participate in code reviews and performance optimization."
},
{
title: "Software Engineer Trainee - Application Development",
location: "Work From Home",
type: "Internship (3 Months)",
stipend: "₹10K - ₹12K / month",
ppo: "6 LPA",
description: "Design and develop dynamic web applications using front-end (React/Angular) and back-end (.NET/Node.js) technologies. Contribute to API design, UI/UX discussions, and agile sprints."
},
{
title: "Software Engineer Trainee - Salesforce Developer",
location: "Work From Home",
type: "Internship (3 Months)",
stipend: "₹10K - ₹12K / month",
ppo: "6 LPA",
description: "Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components. Configure business processes and develop REST/SOAP-based integrations."
}
];

const REQUIRED_SKILLS = [
"Object-Oriented Programming (OOP)",
"Java / C++ / Python",
"HTML, CSS, JavaScript",
"SQL (Joins, Primary/Foreign Keys)",
"Client-Server Architecture"
];

const GOOD_TO_HAVE = [
"Salesforce Trailhead modules",
"Apex triggers, SOQL",
"Lightning App Builder",
"Data modeling & security",
"CRM Concepts"
];

export default function StudentOpportunities() {
useEffect(() => {
const styleId = "shnoor-so-styles";
if (!document.getElementById(styleId)) {
const style = document.createElement("style");
style.id = styleId;
style.textContent = styles;
document.head.appendChild(style);
}
return () => {
const el = document.getElementById(styleId);
if (el) el.remove();
};
}, []);

return (
<div className="shnoor-student-page">
<div className="so-container">
<div className="so-hero">
<div className="hero-eyebrow">Join Our Team</div>
<h1 className="hero-title">
Student Opportunities & <span>Latest Openings</span>
</h1>
<p className="hero-sub">
Launch your career with SHNOOR International – we invest in fresh talent
</p>
</div>

<div className="section-header">
<div className="section-tag">Current Openings</div>
<h2 className="section-title">Internship Positions</h2>
<p className="section-desc">
We're looking for passionate final-year students and recent graduates to join our innovative teams
</p>
</div>

<div className="job-grid">
{JOB_OPENINGS.map((job, idx) => (
<div className="job-card" key={idx}>
<div className="job-card-header">
<div className="job-title">{job.title}</div>
<div className="job-badge">Internship → Full-time</div>
</div>
<div className="job-card-body">
<div className="job-meta">
<span>📍 {job.location}</span>
<span>⏳ {job.type}</span>
</div>
<div className="job-desc">{job.description}</div>
<div className="job-meta" style={{ borderBottom: "none", marginBottom: "16px", paddingBottom: 0 }}>
<span>💰 Stipend: {job.stipend}</span>
<span>🚀 PPO: {job.ppo}</span>
</div>
<a href={`mailto:careers@shnoor.com?subject=Application for ${encodeURIComponent(job.title)}`} className="btn-apply">
Apply Now
<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
<line x1="5" y1="12" x2="19" y2="12" />
<polyline points="12 5 19 12 12 19" />
</svg>
</a>
</div>
</div>
))}
</div>

<div className="internship-box">
<div className="internship-header">
<div className="internship-title">Internship Details</div>
<div className="internship-badge">3 Months Program</div>
</div>
<div className="details-grid">
<div className="detail-item">
<span className="detail-icon">💰</span>
<span>Stipend: ₹10,000 – ₹12,000 / month</span>
</div>
<div className="detail-item">
<span className="detail-icon">🚀</span>
<span>PPO Amount: 6 LPA</span>
</div>
<div className="detail-item">
<span className="detail-icon">🏠</span>
<span>Work From Home</span>
</div>
<div className="detail-item">
<span className="detail-icon">📅</span>
<span>5 Days Working</span>
</div>
</div>
<div className="skills-section">
<div className="skills-title">📘 Basic Knowledge Areas (Must-Have)</div>
<div className="skills-grid">
{REQUIRED_SKILLS.map((skill, i) => (
<span className="skill-tag" key={i}>{skill}</span>
))}
</div>
</div>
<div className="skills-section">
<div className="skills-title">✨ Good to Have (Added Advantage)</div>
<div className="skills-grid">
{GOOD_TO_HAVE.map((skill, i) => (
<span className="skill-tag" key={i}>{skill}</span>
))}
</div>
</div>
</div>

<div className="cta-section">
<h3 className="cta-title">Don't see a perfect match?</h3>
<p className="cta-text">
Send us your resume and we'll keep you in mind for future opportunities that fit your profile.
</p>
<a href="mailto:careers@shnoor.com" className="btn-cta">
Send your Resume →
</a>
</div>

<a href="/careers" className="back-button">
← Back to Careers
</a>
</div>
</div>
);
}