import React from "react";

const styles = `
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@700;800&family=DM+Sans:wght@300;400;500;600&display=swap');

* { margin: 0; padding: 0; box-sizing: border-box; }

.shnoor-page {
font-family: 'DM Sans', sans-serif;
background: linear-gradient(180deg, #0f2a4a 0%, #0d2e52 60%, #0a2540 100%);
color: #fff;
min-height: 100vh;
}

.page-container {
max-width: 900px;
margin: 0 auto;
width: 100%;
}

.shnoor-hero {
padding: 80px 32px 72px;
text-align: center;
position: relative;
overflow: hidden;
}
.shnoor-hero::before {
content: '';
position: absolute;
top: -100px; right: -100px;
width: 500px; height: 500px;
border-radius: 50%;
background: rgba(255,255,255,0.03);
pointer-events: none;
}
.shnoor-hero::after {
content: '';
position: absolute;
bottom: -120px; left: 20%;
width: 400px; height: 400px;
border-radius: 50%;
background: rgba(232,160,32,0.04);
pointer-events: none;
}
.hero-eyebrow {
font-size: 11px;
font-weight: 600;
letter-spacing: 0.22em;
text-transform: uppercase;
color: #e8a020;
margin-bottom: 20px;
}
.hero-title {
font-family: 'Playfair Display', serif;
font-size: clamp(34px, 5vw, 58px);
font-weight: 800;
color: #fff;
line-height: 1.1;
margin: 0 auto 28px;
}
.hero-title span { color: #e8a020; }
.hero-body {
font-size: 15.5px;
font-weight: 300;
color: rgba(255,255,255,0.75);
max-width: 800px;
margin: 0 auto;
line-height: 1.8;
text-align: justify;
}

.content-area {
padding: 0 32px 80px;
}

.section {
max-width: 900px;
margin: 0 auto 64px;
}
.section-heading {
font-family: 'Playfair Display', serif;
font-size: clamp(26px, 3.5vw, 40px);
font-weight: 700;
color: #fff;
margin-bottom: 18px;
line-height: 1.15;
text-align: center;
}
.section-body {
font-size: 15px;
font-weight: 300;
color: rgba(255,255,255,0.75);
line-height: 1.8;
text-align: justify;
}

.identify-grid {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
gap: 24px;
margin-top: 32px;
}
.identify-card {
background: rgba(255,255,255,0.06);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 14px;
padding: 24px 20px;
text-align: center;
transition: background 0.2s, border-color 0.2s, transform 0.2s;
cursor: default;
display: flex;
flex-direction: column;
align-items: center;
}
.identify-card:hover {
background: rgba(255,255,255,0.1);
border-color: rgba(232,160,32,0.4);
transform: translateY(-3px);
}
.identify-card-icon {
width: 48px;
height: 48px;
border-radius: 12px;
background: rgba(232,160,32,0.15);
display: flex;
align-items: center;
justify-content: center;
margin-bottom: 16px;
font-size: 24px;
}
.identify-card-title {
font-size: 16px;
font-weight: 600;
color: #fff;
margin-bottom: 10px;
}
.identify-card-desc {
font-size: 13px;
font-weight: 300;
color: rgba(255,255,255,0.65);
line-height: 1.65;
text-align: justify;
}

.important-notice {
background: rgba(232,160,32,0.1);
border: 1px solid rgba(232,160,32,0.3);
border-left: 4px solid #e8a020;
border-radius: 0 12px 12px 0;
padding: 18px 24px;
margin-top: 32px;
display: flex;
align-items: flex-start;
gap: 14px;
}
.notice-icon {
width: 24px;
height: 24px;
background: #e8a020;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 700;
color: #0f2a4a;
flex-shrink: 0;
margin-top: 2px;
}
.notice-text {
font-size: 14px;
color: rgba(255,255,255,0.88);
line-height: 1.6;
font-weight: 400;
text-align: justify;
}
.notice-text strong { color: #e8a020; }

.protect-list {
list-style: none;
margin-top: 28px;
display: flex;
flex-direction: column;
gap: 16px;
}
.protect-item {
display: flex;
align-items: flex-start;
gap: 14px;
font-size: 15px;
font-weight: 300;
color: rgba(255,255,255,0.8);
line-height: 1.65;
text-align: justify;
}
.protect-dot {
width: 8px;
height: 8px;
border-radius: 50%;
background: #e8a020;
flex-shrink: 0;
margin-top: 8px;
}

.safe-steps {
display: grid;
grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
gap: 20px;
margin-top: 32px;
}
.safe-step {
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.08);
border-radius: 14px;
padding: 20px;
display: flex;
align-items: center;
gap: 16px;
}
.step-num {
width: 40px;
height: 40px;
border-radius: 50%;
background: #e8a020;
color: #0f2a4a;
font-size: 18px;
font-weight: 700;
display: flex;
align-items: center;
justify-content: center;
flex-shrink: 0;
font-family: 'Playfair Display', serif;
}
.step-text {
font-size: 14px;
font-weight: 300;
color: rgba(255,255,255,0.8);
line-height: 1.6;
text-align: justify;
}

.report-section {
max-width: 900px;
margin: 0 auto;
background: rgba(255,255,255,0.05);
border: 1px solid rgba(255,255,255,0.1);
border-radius: 20px;
padding: 56px 48px;
text-align: center;
}
.report-section h2 {
font-family: 'Playfair Display', serif;
font-size: 36px;
font-weight: 700;
color: #fff;
margin-bottom: 16px;
}
.report-section p {
font-size: 15px;
font-weight: 300;
color: rgba(255,255,255,0.7);
max-width: 520px;
margin: 0 auto 32px;
line-height: 1.75;
text-align: justify;
}
.report-email-btn {
display: inline-flex;
align-items: center;
gap: 10px;
background: #e8a020;
color: #0f2a4a;
font-family: 'DM Sans', sans-serif;
font-size: 15px;
font-weight: 600;
padding: 14px 32px;
border-radius: 50px;
text-decoration: none;
border: none;
cursor: pointer;
transition: background 0.2s, transform 0.15s;
}
.report-email-btn:hover { background: #f5b430; transform: translateY(-2px); }
.report-email-btn svg { width: 18px; height: 18px; }
.report-tagline {
font-size: 13px;
color: rgba(255,255,255,0.4);
margin-top: 18px;
font-style: italic;
}

.section-divider {
height: 1px;
background: rgba(255,255,255,0.08);
max-width: 900px;
margin: 0 auto 64px;
}

.wa-btn {
position: fixed;
bottom: 28px;
right: 28px;
width: 56px;
height: 56px;
border-radius: 50%;
background: #25d366;
display: flex;
align-items: center;
justify-content: center;
box-shadow: 0 4px 20px rgba(37,211,102,0.4);
z-index: 999;
cursor: pointer;
border: none;
transition: transform 0.2s, box-shadow 0.2s;
}
.wa-btn:hover { transform: scale(1.1); box-shadow: 0 6px 28px rgba(37,211,102,0.5); }
.wa-btn svg { width: 30px; height: 30px; }

@media (max-width: 640px) {
.shnoor-hero { padding: 56px 20px 48px; }
.content-area { padding: 0 20px 60px; }
.report-section { padding: 36px 20px; }
.safe-step { flex-direction: column; text-align: center; }
.step-text { text-align: center; }
}
`;

const scamIndicators = [
{ icon: "💰", title: "Requests for money or fees", desc: "Any demand for payment — deposits, processing fees, or charges — in exchange for a job placement." },
{ icon: "📧", title: "Unofficial email accounts", desc: "Communications from Gmail, Yahoo, or Hotmail instead of our verified @shnoor.com domain." },
{ icon: "📄", title: "Suspicious offer letters", desc: "Poorly written letters with spelling errors, unusual formatting, or missing official letterhead." },
{ icon: "🤝", title: "Guaranteed jobs, no interview", desc: "Promises of employment abroad without any formal interview or selection process." },
{ icon: "🌐", title: "Fake websites or social pages", desc: "Impersonation accounts claiming to be SHNOOR International on social media or via fake websites." },
];

const protectPoints = [
"We conduct all recruitment through our official website and verified communication channels.",
"Offer letters are issued only on our official letterhead and signed by authorized personnel.",
"All job-related communication is shared from our official domain email IDs.",
"We encourage applicants to verify the authenticity of any job offer by contacting us directly.",
];

const safeSteps = [
"Never share personal or financial details with unknown recruiters.",
"Verify email addresses and websites before responding.",
"Report suspicious activity to SHNOOR International's official contact channels.",
"Always check with our HR Department before accepting any offer.",
];

export default function RecruitmentScamsPage() {
return (
<>
<style>{styles}</style>
<div className="shnoor-page">
<section className="shnoor-hero">
<div className="page-container">
<div className="hero-eyebrow">Awareness &amp; Protection</div>
<h1 className="hero-title">
Recruitment Scams Awareness –{" "}
<span>SHNOOR International</span>
</h1>
<p className="hero-body">
At SHNOOR International, we are committed to maintaining the highest standards of
transparency, trust, and ethical practices in all our recruitment and consultancy
services. Unfortunately, many fraudulent individuals and unauthorized agencies misuse
the name of reputed companies to mislead job seekers with fake job offers, fraudulent
interviews, and false promises of overseas employment.
</p>
</div>
</section>

<div className="content-area">
<section className="section">
<h2 className="section-heading">What Are Recruitment Scams?</h2>
<p className="section-body">
Recruitment scams involve fraudulent job advertisements, fake offer letters, or demands
for money under the guise of employment opportunities. Scammers may use emails, fake
websites, social media platforms, or messaging apps to target job seekers by pretending
to represent SHNOOR International.
</p>
</section>

<div className="section-divider" />

<section className="section">
<h2 className="section-heading">How to Identify a Recruitment Scam?</h2>
<p className="section-body">Be alert if you notice any of the following:</p>
<div className="identify-grid">
{scamIndicators.map((item, i) => (
<div className="identify-card" key={i}>
<div className="identify-card-icon">{item.icon}</div>
<div className="identify-card-title">{item.title}</div>
<div className="identify-card-desc">{item.desc}</div>
</div>
))}
</div>
<div className="important-notice">
<div className="notice-icon">!</div>
<div className="notice-text">
<strong>Important:</strong> SHNOOR International never charges job seekers any money
for interviews, job applications, or placements.
</div>
</div>
</section>

<div className="section-divider" />

<section className="section">
<h2 className="section-heading">How We Protect Job Seekers</h2>
<ul className="protect-list">
{protectPoints.map((point, i) => (
<li className="protect-item" key={i}>
<span className="protect-dot" />
{point}
</li>
))}
</ul>
</section>

<div className="section-divider" />

<section className="section">
<h2 className="section-heading">How to Stay Safe</h2>
<div className="safe-steps">
{safeSteps.map((step, i) => (
<div className="safe-step" key={i}>
<div className="step-num">{i + 1}</div>
<div className="step-text">{step}</div>
</div>
))}
</div>
</section>

<div className="section-divider" />

<div className="report-section">
<h2>Report Fraud</h2>
<p>
If you suspect a recruitment scam using the name of SHNOOR International,
please contact us immediately.
</p>
<a className="report-email-btn" href="mailto:hr@shnoor.com">
<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
<rect x="2" y="4" width="20" height="16" rx="2" />
<polyline points="2,4 12,13 22,4" />
</svg>
hr@shnoor.com
</a>
<p className="report-tagline">
Together, we can fight recruitment fraud and ensure a safe and transparent job search experience.
</p>
</div>
</div>

<button className="wa-btn" aria-label="WhatsApp">
<svg viewBox="0 0 24 24" fill="#fff">
<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
</svg>
</button>
</div>
</>
);
}