// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Link } from 'react-router-dom';
// // // // // // import { getJobs, submitApplication } from '../api';
// // // // // // import './Careers.css';

// // // // // // export default function Careers() {
// // // // // // const [jobs, setJobs] = useState([]);
// // // // // // const [selectedJob, setSelectedJob] = useState(null);
// // // // // // const [showForm, setShowForm] = useState(false);
// // // // // // const [form, setForm] = useState({ full_name: '', email: '', phone: '', position: '', experience: '', cover_letter: '' });
// // // // // // const [status, setStatus] = useState({ loading: false, success: false, error: '' });
// // // // // // const [loading, setLoading] = useState(true);

// // // // // // useEffect(() => {
// // // // // // getJobs()
// // // // // // .then((res) => { setJobs(res.data); setLoading(false); })
// // // // // // .catch(() => { setLoading(false); });
// // // // // // }, []);

// // // // // // const openApply = (job) => {
// // // // // // setSelectedJob(job);
// // // // // // setForm({ ...form, position: job.title });
// // // // // // setShowForm(true);
// // // // // // window.scrollTo({ top: 0, behavior: 'smooth' });
// // // // // // };

// // // // // // const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // // // // // const handleSubmit = async (e) => {
// // // // // // e.preventDefault();
// // // // // // setStatus({ loading: true, success: false, error: '' });
// // // // // // try {
// // // // // // await submitApplication(form);
// // // // // // setStatus({ loading: false, success: true, error: '' });
// // // // // // setForm({ full_name: '', email: '', phone: '', position: '', experience: '', cover_letter: '' });
// // // // // // setShowForm(false);
// // // // // // } catch (err) {
// // // // // // setStatus({ loading: false, success: false, error: err.response?.data?.error || 'Submission failed.' });
// // // // // // }
// // // // // // };

// // // // // // const placeholderJobs = [
// // // // // // { id: 1, title: 'SAP Consultant', department: 'IT Solutions', location: 'Muscat, Oman', type: 'Full-time', description: 'We are looking for an experienced SAP Consultant to join our growing team.', requirements: 'Bachelor degree in IT or related field, 3+ years SAP experience' },
// // // // // // { id: 2, title: 'IT Project Manager', department: 'Technology', location: 'UAE / Remote', type: 'Full-time', description: 'Lead end-to-end IT project delivery for our international clients.', requirements: '5+ years project management, PMP certification preferred' },
// // // // // // { id: 3, title: 'Export Coordinator', department: 'Trade & Logistics', location: 'Muscat, Oman', type: 'Full-time', description: 'Manage export documentation, customs compliance, and logistics operations.', requirements: '2+ years in export/import, Knowledge of GCC trade regulations' },
// // // // // // { id: 4, title: 'Software Developer (Full Stack)', department: 'IT Solutions', location: 'Remote', type: 'Full-time', description: 'Build scalable web applications for our global clients.', requirements: 'React, Node.js, PostgreSQL experience, 3+ years development' },
// // // // // // { id: 5, title: 'Business Development Executive', department: 'Sales', location: 'UAE / India', type: 'Full-time', description: 'Drive new business acquisition and maintain client relationships.', requirements: '3+ years B2B sales, International market experience' },
// // // // // // ];

// // // // // // const displayJobs = jobs.length > 0 ? jobs : placeholderJobs;

// // // // // // return (
// // // // // // <div className="careers-page">
// // // // // // <section className="page-hero">
// // // // // // <div className="page-hero-overlay" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1497366216548-37526070297c?w=1400&q=60)' }} />
// // // // // // <div className="container page-hero-content">
// // // // // // <span className="section-tag">Join Our Team</span>
// // // // // // <h1>Careers at SHNOOR</h1>
// // // // // // <p>Be part of a global team driving innovation in technology and trade</p>
// // // // // // </div>
// // // // // // </section>

// // // // // // <section className="section-padding" style={{ background: 'var(--off-white)' }}>
// // // // // // <div className="container">
// // // // // // <div style={{ textAlign: 'center', marginBottom: '48px' }}>
// // // // // // <span className="section-tag">Why Join Us</span>
// // // // // // <h2 className="section-title">Why Work at SHNOOR?</h2>
// // // // // // </div>
// // // // // // <div className="perks-grid">
// // // // // // {[
// // // // // // { icon: '🌍', title: 'Global Exposure', desc: 'Work with clients and teams across 6+ countries.' },
// // // // // // { icon: '📈', title: 'Career Growth', desc: 'Structured learning paths and promotion opportunities.' },
// // // // // // { icon: '💡', title: 'Innovative Culture', desc: 'A creative, forward-thinking work environment.' },
// // // // // // { icon: '🤝', title: 'Collaborative Team', desc: 'Work alongside experts in IT and international trade.' },
// // // // // // { icon: '⚖️', title: 'Work-Life Balance', desc: 'Flexible policies that respect your personal time.' },
// // // // // // { icon: '💰', title: 'Competitive Pay', desc: 'Market-leading compensation and benefits packages.' },
// // // // // // ].map((p, i) => (
// // // // // // <div key={i} className="perk-card">
// // // // // // <span>{p.icon}</span>
// // // // // // <h4>{p.title}</h4>
// // // // // // <p>{p.desc}</p>
// // // // // // </div>
// // // // // // ))}
// // // // // // </div>
// // // // // // </div>
// // // // // // </section>

// // // // // // <section className="section-padding">
// // // // // // <div className="container">
// // // // // // <div style={{ textAlign: 'center', marginBottom: '48px' }}>
// // // // // // <span className="section-tag">Open Positions</span>
// // // // // // <h2 className="section-title">Current Openings</h2>
// // // // // // </div>

// // // // // // {status.success && (
// // // // // // <div className="alert success" style={{ marginBottom: '28px' }}>
// // // // // // ✓ Application submitted successfully! We will review and contact you shortly.
// // // // // // </div>
// // // // // // )}

// // // // // // {loading ? (
// // // // // // <div className="page-loader"><div className="spinner" /></div>
// // // // // // ) : (
// // // // // // <div className="jobs-list">
// // // // // // {displayJobs.map((job, i) => (
// // // // // // <div key={job.id || i} className="job-card">
// // // // // // <div className="job-header">
// // // // // // <div>
// // // // // // <h3>{job.title}</h3>
// // // // // // <div className="job-tags">
// // // // // // <span className="job-tag dept">🏢 {job.department}</span>
// // // // // // <span className="job-tag loc">📍 {job.location}</span>
// // // // // // <span className="job-tag type">⏱ {job.type}</span>
// // // // // // </div>
// // // // // // </div>
// // // // // // <button className="btn-primary" onClick={() => openApply(job)}>Apply Now</button>
// // // // // // </div>
// // // // // // <p className="job-desc">{job.description}</p>
// // // // // // <div className="job-requirements">
// // // // // // <strong>Requirements:</strong> {job.requirements}
// // // // // // </div>
// // // // // // </div>
// // // // // // ))}
// // // // // // </div>
// // // // // // )}
// // // // // // </div>
// // // // // // </section>

// // // // // // {showForm && (
// // // // // // <div className="modal-overlay" onClick={(e) => e.target.classList.contains('modal-overlay') && setShowForm(false)}>
// // // // // // <div className="modal-box">
// // // // // // <div className="modal-header">
// // // // // // <div>
// // // // // // <h3>Apply for: {selectedJob?.title}</h3>
// // // // // // <p>{selectedJob?.department} — {selectedJob?.location}</p>
// // // // // // </div>
// // // // // // <button className="modal-close" onClick={() => setShowForm(false)}>✕</button>
// // // // // // </div>
// // // // // // {status.error && <div className="alert error">{status.error}</div>}
// // // // // // <form onSubmit={handleSubmit}>
// // // // // // <div className="form-row">
// // // // // // <div className="form-group">
// // // // // // <label>Full Name *</label>
// // // // // // <input name="full_name" value={form.full_name} onChange={handleChange} placeholder="Your full name" required />
// // // // // // </div>
// // // // // // <div className="form-group">
// // // // // // <label>Email *</label>
// // // // // // <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Your email" required />
// // // // // // </div>
// // // // // // </div>
// // // // // // <div className="form-row">
// // // // // // <div className="form-group">
// // // // // // <label>Phone *</label>
// // // // // // <input name="phone" value={form.phone} onChange={handleChange} placeholder="Your phone number" required />
// // // // // // </div>
// // // // // // <div className="form-group">
// // // // // // <label>Years of Experience</label>
// // // // // // <select name="experience" value={form.experience} onChange={handleChange}>
// // // // // // <option value="">Select experience</option>
// // // // // // <option>0-1 years</option><option>1-3 years</option>
// // // // // // <option>3-5 years</option><option>5-10 years</option><option>10+ years</option>
// // // // // // </select>
// // // // // // </div>
// // // // // // </div>
// // // // // // <div className="form-group">
// // // // // // <label>Cover Letter</label>
// // // // // // <textarea name="cover_letter" value={form.cover_letter} onChange={handleChange}
// // // // // // placeholder="Tell us why you'd be a great fit..." rows={4} />
// // // // // // </div>
// // // // // // <div className="modal-actions">
// // // // // // <button type="button" className="btn-outline" style={{ color: 'var(--navy)', borderColor: 'var(--gray-light)' }} onClick={() => setShowForm(false)}>Cancel</button>
// // // // // // <button type="submit" className="btn-primary" disabled={status.loading}>
// // // // // // {status.loading ? 'Submitting...' : 'Submit Application'}
// // // // // // </button>
// // // // // // </div>
// // // // // // </form>
// // // // // // </div>
// // // // // // </div>
// // // // // // )}
// // // // // // </div>
// // // // // // );
// // // // // // }


// // // // // import React, { useState } from 'react';
// // // // // import './Careers.css';

// // // // // // ─── Job data from shnoor.com/student-opportunities ───────────────────────────
// // // // // const JOBS = [
// // // // //   {
// // // // //     id: 1,
// // // // //     title: 'Software Engineer Trainee: Gen AI',
// // // // //     type: 'Internship',
// // // // //     summary:
// // // // //       'Work with cutting-edge Generative AI and Agentic systems. Design and develop applications using OpenAI, Claude, Gemini, and more.',
// // // // //     eligibility: 'Final-year students or recent graduates (B.E/B.Tech – CS, IT, AI, DS)',
// // // // //     responsibilities: [
// // // // //       'Design and develop applications using Generative AI models (OpenAI, Claude, Gemini, etc.)',
// // // // //       'Work on Agentic AI systems that can reason, plan, and act autonomously in enterprise workflows',
// // // // //       'Build prototypes and proof-of-concepts using LLM APIs, prompt engineering, vector databases, and embeddings',
// // // // //       'Collaborate with solution teams to create smart assistants, copilots, and automation agents',
// // // // //       'Stay updated with Gen AI, LLM fine-tuning, RAG pipelines, and open-source frameworks (LangChain, LlamaIndex, etc.)',
// // // // //     ],
// // // // //     skills: [
// // // // //       'Strong foundation in Python and APIs',
// // // // //       'Understanding of AI/ML concepts, LLMs, and NLP fundamentals',
// // // // //       'Exposure to tools like LangChain, OpenAI, HuggingFace, or Pinecone',
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 2,
// // // // //     title: 'Software Engineer Trainee: SAP',
// // // // //     type: 'Internship',
// // // // //     summary:
// // // // //       'Build enterprise-level applications on the SAP platform using ABAP. Collaborate with functional consultants to deliver technical solutions.',
// // // // //     eligibility: 'Engineering graduates (B.E/B.Tech – CS, IT, AI, DS or equivalent)',
// // // // //     responsibilities: [
// // // // //       'Design, develop, and maintain applications using SAP ABAP',
// // // // //       'Collaborate with functional consultants to understand business requirements',
// // // // //       'Participate in code reviews, debugging, and performance optimization',
// // // // //       'Ensure high-quality deliverables and adherence to SAP development standards',
// // // // //     ],
// // // // //     skills: [
// // // // //       'Strong foundation in Object-Oriented Programming (OOP)',
// // // // //       'Familiarity with SQL and database concepts',
// // // // //       'Good to have: SAP BTP, CDS Views, RAP, Fiori/UI5 knowledge',
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 3,
// // // // //     title: 'Software Engineer Trainee: Application Development',
// // // // //     type: 'Internship',
// // // // //     summary:
// // // // //       'Develop scalable web applications using React/Angular (front-end) and .NET/Node.js (back-end) in an agile environment.',
// // // // //     eligibility: 'Fresh graduates (B.E/B.Tech – CS/IT)',
// // // // //     responsibilities: [
// // // // //       'Design and develop dynamic web applications using React/Angular and .NET/Node.js',
// // // // //       'Contribute to API design, UI/UX discussions, and deployment processes',
// // // // //       'Collaborate with cross-functional teams in agile sprints',
// // // // //     ],
// // // // //     skills: [
// // // // //       'Proficiency in HTML, CSS, JavaScript, and React or Angular',
// // // // //       'Working knowledge of Node.js or .NET Core for backend development',
// // // // //       'Understanding of SQL and NoSQL database concepts',
// // // // //     ],
// // // // //   },
// // // // //   {
// // // // //     id: 4,
// // // // //     title: 'Software Engineer Trainee: Salesforce Developer',
// // // // //     type: 'Internship',
// // // // //     summary:
// // // // //       'Build and customize Salesforce applications. Configure business processes and develop REST/SOAP-based integrations with external systems.',
// // // // //     eligibility: 'Fresh graduates (B.E/B.Tech)',
// // // // //     responsibilities: [
// // // // //       'Build and customize Salesforce applications using Apex, Visualforce, and Lightning Components',
// // // // //       'Configure and automate business processes through Flows, Validation Rules, and Approval Processes',
// // // // //       'Develop and maintain REST/SOAP-based integrations with external systems',
// // // // //       'Participate in the full software development lifecycle — design, development, testing, and deployment',
// // // // //     ],
// // // // //     skills: [
// // // // //       'Strong interest in cloud platforms and Salesforce architecture',
// // // // //       'Good to have: Salesforce Trailhead modules, Apex triggers, SOQL',
// // // // //       'Understanding of data modeling and security settings in Salesforce',
// // // // //     ],
// // // // //   },
// // // // // ];

// // // // // const AIMS = [
// // // // //   'Exciting career paths in IT services',
// // // // //   'Offer structured internships and live projects',
// // // // //   'Conduct skill development workshops',
// // // // //   'Recruit talented graduates',
// // // // // ];

// // // // // // ─── Component ────────────────────────────────────────────────────────────────
// // // // // export default function Careers() {
// // // // //   const [selectedJob, setSelectedJob] = useState(null);
// // // // //   const [showModal, setShowModal] = useState(false);
// // // // //   const [form, setForm] = useState({
// // // // //     full_name: '', email: '', phone: '', experience: '', cover_letter: '',
// // // // //   });
// // // // //   const [status, setStatus] = useState({ loading: false, success: false, error: '' });

// // // // //   const openApply = (job) => {
// // // // //     setSelectedJob(job);
// // // // //     setShowModal(true);
// // // // //     setStatus({ loading: false, success: false, error: '' });
// // // // //     window.scrollTo({ top: 0, behavior: 'smooth' });
// // // // //   };

// // // // //   const closeModal = () => {
// // // // //     setShowModal(false);
// // // // //     setSelectedJob(null);
// // // // //   };

// // // // //   const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     // Redirect to the Google Form as shown on the actual site
// // // // //     window.open('https://forms.gle/JEUN9MAgvwMmkCk18', '_blank');
// // // // //     closeModal();
// // // // //   };

// // // // //   return (
// // // // //     <div className="careers-page">

// // // // //       {/* ── Hero ──────────────────────────────────────────────────────────── */}
// // // // //       <section className="page-hero">
// // // // //         <div
// // // // //           className="page-hero-overlay"
// // // // //           style={{
// // // // //             backgroundImage:
// // // // //               'url(https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png)',
// // // // //           }}
// // // // //         />
// // // // //         <div className="container page-hero-content">
// // // // //           <span className="section-tag">Join Our Team</span>
// // // // //           <h1>Find Your Future</h1>
// // // // //           <p>Are you ready to take on the challenge?</p>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Intro ─────────────────────────────────────────────────────────── */}
// // // // //       <section className="section-padding" style={{ background: 'var(--off-white)' }}>
// // // // //         <div className="container careers-intro-grid">
// // // // //           <div className="careers-intro-text">
// // // // //             <span className="section-tag">Who We Are</span>
// // // // //             <h2 className="section-title">Build a Career, Not Just a Job</h2>
// // // // //             <p>
// // // // //               At SHNOOR International LLC, we believe that great companies are built by great people.
// // // // //               We're looking for innovators, problem-solvers, and go-getters who are passionate about
// // // // //               making an impact in the worlds of technology and global trade.
// // // // //             </p>
// // // // //             <p style={{ marginTop: '16px' }}>
// // // // //               Whether you're an IT expert, software developer, SAP consultant, business strategist,
// // // // //               or trade professional, this is your chance to be part of a company that values
// // // // //               creativity, collaboration, and continuous growth.
// // // // //             </p>
// // // // //             <p style={{ marginTop: '16px', fontWeight: 600, color: 'var(--navy)' }}>
// // // // //               SHNOOR — Get the future you want.
// // // // //             </p>
// // // // //           </div>
// // // // //           <div className="careers-aims-box">
// // // // //             <h3>SHNOOR INTERNATIONAL LLC AIMS TO</h3>
// // // // //             <ul>
// // // // //               {AIMS.map((aim, i) => (
// // // // //                 <li key={i}>
// // // // //                   <span className="aim-dot" />
// // // // //                   {aim}
// // // // //                 </li>
// // // // //               ))}
// // // // //             </ul>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Explore SHNOOR ────────────────────────────────────────────────── */}
// // // // //       <section className="section-padding explore-section">
// // // // //         <div className="container explore-grid">
// // // // //           <div className="explore-image">
// // // // //             <img
// // // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
// // // // //               alt="Explore SHNOOR"
// // // // //             />
// // // // //           </div>
// // // // //           <div className="explore-text">
// // // // //             <span className="section-tag">Explore SHNOOR</span>
// // // // //             <h2 className="section-title">Predict the Future by Creating It</h2>
// // // // //             <p>
// // // // //               When you join us, you become part of a passionate, diverse, and forward-thinking team
// // // // //               that believes in pushing boundaries and delivering excellence. From IT Consulting,
// // // // //               Product Development, and SAP Outsourcing to international import &amp; export
// // // // //               operations, our work spans industries, regions, and technologies.
// // // // //             </p>
// // // // //             <p style={{ marginTop: '16px' }}>
// // // // //               At SHNOOR International LLC, every career path is a journey of growth, innovation,
// // // // //               and impact. We are more than just a workplace — we're a dynamic hub where technology
// // // // //               meets global trade, creating opportunities that challenge your skills and expand your
// // // // //               horizons.
// // // // //             </p>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Current Openings ──────────────────────────────────────────────── */}
// // // // //       <section className="section-padding" style={{ background: 'var(--off-white)' }}>
// // // // //         <div className="container">
// // // // //           <div style={{ textAlign: 'center', marginBottom: '48px' }}>
// // // // //             <span className="section-tag">Open Positions</span>
// // // // //             <h2 className="section-title">Latest Openings</h2>
// // // // //           </div>

// // // // //           {/* Internship banner */}
// // // // //           <div className="internship-banner">
// // // // //             <div className="internship-detail"><strong>Duration:</strong> 3 Months</div>
// // // // //             <div className="internship-detail"><strong>Stipend:</strong> ₹10K – ₹12K/month</div>
// // // // //             <div className="internship-detail"><strong>PPO:</strong> 6 LPA</div>
// // // // //             <div className="internship-detail"><strong>Mode:</strong> Work From Home · 5 days/week</div>
// // // // //           </div>

// // // // //           <div className="jobs-list">
// // // // //             {JOBS.map((job) => (
// // // // //               <div key={job.id} className="job-card">
// // // // //                 <div className="job-header">
// // // // //                   <div>
// // // // //                     <h3>{job.title}</h3>
// // // // //                     <div className="job-tags">
// // // // //                       <span className="job-tag type">⏱ {job.type}</span>
// // // // //                       <span className="job-tag loc">🎓 {job.eligibility}</span>
// // // // //                     </div>
// // // // //                   </div>
// // // // //                   <button className="btn-primary" onClick={() => openApply(job)}>
// // // // //                     Apply Now
// // // // //                   </button>
// // // // //                 </div>
// // // // //                 <p className="job-desc">{job.summary}</p>
// // // // //                 <div className="job-requirements">
// // // // //                   <strong>Key Responsibilities:</strong>
// // // // //                   <ul>
// // // // //                     {job.responsibilities.map((r, i) => (
// // // // //                       <li key={i}>{r}</li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //                 <div className="job-requirements" style={{ marginTop: '12px' }}>
// // // // //                   <strong>Preferred Skills:</strong>
// // // // //                   <ul>
// // // // //                     {job.skills.map((s, i) => (
// // // // //                       <li key={i}>{s}</li>
// // // // //                     ))}
// // // // //                   </ul>
// // // // //                 </div>
// // // // //               </div>
// // // // //             ))}
// // // // //           </div>

// // // // //           <div style={{ textAlign: 'center', marginTop: '40px' }}>
// // // // //             <a
// // // // //               href="https://forms.gle/JEUN9MAgvwMmkCk18"
// // // // //               target="_blank"
// // // // //               rel="noopener noreferrer"
// // // // //               className="btn-primary"
// // // // //               style={{ display: 'inline-block', padding: '14px 48px', fontSize: '1rem' }}
// // // // //             >
// // // // //               Apply via Google Form
// // // // //             </a>
// // // // //           </div>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Recruitment Scams ─────────────────────────────────────────────── */}
// // // // //       <section style={{ background: '#1a2a5e', padding: '80px 0' }}>
// // // // //         <div className="container" style={{ maxWidth: '860px', textAlign: 'center' }}>
// // // // //           <h2
// // // // //             style={{
// // // // //               color: '#ffffff',
// // // // //               fontSize: '2.4rem',
// // // // //               fontWeight: 700,
// // // // //               marginBottom: '32px',
// // // // //             }}
// // // // //           >
// // // // //             Recruitment Scams
// // // // //           </h2>
// // // // //           <p
// // // // //             style={{
// // // // //               color: '#d0d8ee',
// // // // //               fontSize: '1rem',
// // // // //               lineHeight: 1.8,
// // // // //               marginBottom: '24px',
// // // // //               textAlign: 'justify',
// // // // //             }}
// // // // //           >
// // // // //             At SHNOOR International LLC, integrity and transparency are at the heart of our
// // // // //             recruitment process. We want to alert all job seekers that we never charge any fees,
// // // // //             request payments, or ask for financial information at any stage of our hiring process.
// // // // //           </p>
// // // // //           <p
// // // // //             style={{
// // // // //               color: '#d0d8ee',
// // // // //               fontSize: '1rem',
// // // // //               lineHeight: 1.8,
// // // // //               marginBottom: '40px',
// // // // //               textAlign: 'justify',
// // // // //             }}
// // // // //           >
// // // // //             To protect against spam, ensure emails come from{' '}
// // // // //             <strong style={{ color: '#ffffff' }}>@shnoor.com</strong>. If you receive any
// // // // //             communication — via email, phone, social media, or messaging apps — claiming to
// // // // //             represent SHNOOR International and requesting money for job opportunities, please treat
// // // // //             it as a scam. Such activities are fraudulent and have no connection with our company.
// // // // //           </p>
// // // // //           <a
// // // // //             href="/recruitment-scams"
// // // // //             style={{
// // // // //               display: 'inline-block',
// // // // //               padding: '14px 48px',
// // // // //               border: '2px solid #ffffff',
// // // // //               borderRadius: '50px',
// // // // //               color: '#ffffff',
// // // // //               fontWeight: 600,
// // // // //               fontSize: '0.95rem',
// // // // //               letterSpacing: '0.08em',
// // // // //               textDecoration: 'none',
// // // // //               transition: 'background 0.2s, color 0.2s',
// // // // //             }}
// // // // //             onMouseEnter={(e) => {
// // // // //               e.currentTarget.style.background = '#ffffff';
// // // // //               e.currentTarget.style.color = '#1a2a5e';
// // // // //             }}
// // // // //             onMouseLeave={(e) => {
// // // // //               e.currentTarget.style.background = 'transparent';
// // // // //               e.currentTarget.style.color = '#ffffff';
// // // // //             }}
// // // // //           >
// // // // //             READ MORE
// // // // //           </a>
// // // // //         </div>
// // // // //       </section>

// // // // //       {/* ── Apply Modal ───────────────────────────────────────────────────── */}
// // // // //       {showModal && (
// // // // //         <div
// // // // //           className="modal-overlay"
// // // // //           onClick={(e) => e.target.classList.contains('modal-overlay') && closeModal()}
// // // // //         >
// // // // //           <div className="modal-box">
// // // // //             <div className="modal-header">
// // // // //               <div>
// // // // //                 <h3>Apply for: {selectedJob?.title}</h3>
// // // // //                 <p>{selectedJob?.type} · Work From Home</p>
// // // // //               </div>
// // // // //               <button className="modal-close" onClick={closeModal}>
// // // // //                 ✕
// // // // //               </button>
// // // // //             </div>

// // // // //             <p style={{ marginBottom: '20px', color: 'var(--gray)', fontSize: '0.9rem' }}>
// // // // //               Applications are submitted via Google Forms. Clicking "Continue to Apply" will open
// // // // //               the official SHNOOR application form in a new tab.
// // // // //             </p>

// // // // //             {status.error && <div className="alert error">{status.error}</div>}

// // // // //             <form onSubmit={handleSubmit}>
// // // // //               <div className="form-row">
// // // // //                 <div className="form-group">
// // // // //                   <label>Full Name *</label>
// // // // //                   <input
// // // // //                     name="full_name"
// // // // //                     value={form.full_name}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="Your full name"
// // // // //                     required
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                   <label>Email *</label>
// // // // //                   <input
// // // // //                     type="email"
// // // // //                     name="email"
// // // // //                     value={form.email}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="Your email"
// // // // //                     required
// // // // //                   />
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="form-row">
// // // // //                 <div className="form-group">
// // // // //                   <label>Phone *</label>
// // // // //                   <input
// // // // //                     name="phone"
// // // // //                     value={form.phone}
// // // // //                     onChange={handleChange}
// // // // //                     placeholder="Your phone number"
// // // // //                     required
// // // // //                   />
// // // // //                 </div>
// // // // //                 <div className="form-group">
// // // // //                   <label>Years of Experience</label>
// // // // //                   <select name="experience" value={form.experience} onChange={handleChange}>
// // // // //                     <option value="">Select experience</option>
// // // // //                     <option>0-1 years</option>
// // // // //                     <option>1-3 years</option>
// // // // //                     <option>3-5 years</option>
// // // // //                     <option>5-10 years</option>
// // // // //                     <option>10+ years</option>
// // // // //                   </select>
// // // // //                 </div>
// // // // //               </div>
// // // // //               <div className="form-group">
// // // // //                 <label>Cover Letter</label>
// // // // //                 <textarea
// // // // //                   name="cover_letter"
// // // // //                   value={form.cover_letter}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Tell us why you'd be a great fit..."
// // // // //                   rows={4}
// // // // //                 />
// // // // //               </div>
// // // // //               <div className="modal-actions">
// // // // //                 <button
// // // // //                   type="button"
// // // // //                   className="btn-outline"
// // // // //                   style={{ color: 'var(--navy)', borderColor: 'var(--gray-light)' }}
// // // // //                   onClick={closeModal}
// // // // //                 >
// // // // //                   Cancel
// // // // //                 </button>
// // // // //                 <button type="submit" className="btn-primary">
// // // // //                   Continue to Apply →
// // // // //                 </button>
// // // // //               </div>
// // // // //             </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       )}
// // // // //     </div>
// // // // //   );
// // // // // }
// // // // import { useState, useEffect } from "react";

// // // // // ─── DATA ────────────────────────────────────────────────────────────────────
// // // // const NAV_LINKS = [
// // // //   { label: "Home", href: "https://www.shnoor.com/" },
// // // //   { label: "About Us", href: "https://www.shnoor.com/about-us-business-expansion" },
// // // //   {
// // // //     label: "Services",
// // // //     href: "https://www.shnoor.com/httpswwwshnoorcomcloud-migration-services",
// // // //     children: [
// // // //       { label: "Cloud", href: "https://www.shnoor.com/cloud-management" },
// // // //       { label: "Enterprise Management", href: "https://www.shnoor.com/enterprise-management" },
// // // //       { label: "Data & Artificial Intelligence", href: "https://www.shnoor.com/data-and-artificial-intelligence" },
// // // //       { label: "Consulting & Staffing", href: "https://www.shnoor.com/consulting-and-staffing" },
// // // //       { label: "Background verification", href: "https://www.shnoor.com/background-verification" },
// // // //       { label: "Network Management", href: "https://www.shnoor.com/network-management" },
// // // //       { label: "Health Care", href: "https://www.shnoor.com/healthcare" },
// // // //     ],
// // // //   },
// // // //   { label: "Logistics Management", href: "https://www.shnoor.com/logistics-management" },
// // // //   { label: "Careers", href: "https://www.shnoor.com/international-careers", active: true },
// // // //   { label: "Export Management", href: "https://www.shnoor.com/export-management" },
// // // //   { label: "Contact", href: "https://www.shnoor.com/contact-us" },
// // // // ];

// // // // const CLIENT_LOGOS = [
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
// // // // ];

// // // // const PARTNER_LOGOS = [
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/meta-removebg-preview-AoP4qBZ2nviwL079.png", alt: "Meta" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/google-removebg-preview-m2WqaKlWovh4rZbp.png", alt: "Google" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=139,fit=crop/AQEZlaZbvrt8n2qw/semrush-removebg-preview-mP432qpLegs2OQE4.png", alt: "Semrush" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/diamond-removebg-preview-A0xv1yNgRrtgoXwa.png", alt: "Diamond" },
// // // // ];

// // // // const FOOTER_SERVICES = [
// // // //   { label: "Cloud Management", href: "https://www.shnoor.com/cloud-management" },
// // // //   { label: "Enterprise Management", href: "https://www.shnoor.com/enterprise-management" },
// // // //   { label: "Data & Artificial Intelligence", href: "https://www.shnoor.com/data-and-artificial-intelligence" },
// // // //   { label: "Consulting & Staffing", href: "https://www.shnoor.com/consulting-and-staffing" },
// // // //   { label: "Background Verification", href: "https://www.shnoor.com/background-verification" },
// // // //   { label: "Health Care", href: null },
// // // // ];

// // // // const FOOTER_LINKS = [
// // // //   { label: "Home", href: "https://www.shnoor.com/" },
// // // //   { label: "About Us", href: "https://www.shnoor.com/about-us-business-expansion" },
// // // //   { label: "Careers", href: "https://www.shnoor.com/international-careers" },
// // // //   { label: "Privacy Policy", href: "https://www.shnoor.com/privacy-policy" },
// // // //   { label: "Terms & Conditions", href: "https://www.shnoor.com/terms-and-conditions" },
// // // //   { label: "Company Profile", href: "https://assets.zyrosite.com/AQEZlaZbvrt8n2qw/shnoor-international-company-profile-1-dWxLB7EV98TQPz8B.pdf" },
// // // // ];

// // // // // ─── GLOBAL CSS ───────────────────────────────────────────────────────────────
// // // // const GLOBAL_CSS = `
// // // //   .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
// // // //   .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
// // // //   .sc-page a { text-decoration: none; color: inherit; }
// // // //   .sc-page img { display: block; }

// // // //   /* ── NAV ── */
// // // //   .sc-nav {
// // // //     background: #fff;
// // // //     border-bottom: 1px solid #e8e8e8;
// // // //     position: sticky;
// // // //     top: 0;
// // // //     z-index: 1000;
// // // //     height: 68px;
// // // //     display: flex;
// // // //     align-items: center;
// // // //     justify-content: space-between;
// // // //     padding: 0 48px;
// // // //     box-shadow: 0 1px 8px rgba(0,0,0,0.06);
// // // //   }
// // // //   .sc-nav-logo img { height: 44px; object-fit: contain; }
// // // //   .sc-nav-links {
// // // //     display: flex;
// // // //     align-items: center;
// // // //     gap: 2px;
// // // //     list-style: none;
// // // //   }
// // // //   .sc-nav-links > li { position: relative; }
// // // //   .sc-nav-links > li > a {
// // // //     padding: 8px 13px;
// // // //     font-size: 13.5px;
// // // //     font-weight: 500;
// // // //     color: #333;
// // // //     border-radius: 5px;
// // // //     display: block;
// // // //     white-space: nowrap;
// // // //     transition: color 0.15s, background 0.15s;
// // // //   }
// // // //   .sc-nav-links > li > a:hover { color: #1a2a5e; background: #f0f3fb; }
// // // //   .sc-nav-links > li.sc-active > a { color: #1a2a5e; font-weight: 700; }
// // // //   .sc-dropdown {
// // // //     display: none;
// // // //     position: absolute;
// // // //     top: calc(100% + 4px);
// // // //     left: 0;
// // // //     background: #fff;
// // // //     border: 1px solid #e5e5e5;
// // // //     border-radius: 8px;
// // // //     min-width: 220px;
// // // //     box-shadow: 0 8px 32px rgba(0,0,0,0.10);
// // // //     z-index: 9999;
// // // //     padding: 6px 0;
// // // //   }
// // // //   .sc-nav-links > li:hover .sc-dropdown { display: block; }
// // // //   .sc-dropdown a {
// // // //     display: block;
// // // //     padding: 10px 20px;
// // // //     font-size: 13px;
// // // //     color: #444;
// // // //     transition: background 0.12s, color 0.12s;
// // // //   }
// // // //   .sc-dropdown a:hover { background: #f5f7ff; color: #1a2a5e; }
// // // //   .sc-hamburger {
// // // //     display: none;
// // // //     flex-direction: column;
// // // //     gap: 5px;
// // // //     cursor: pointer;
// // // //     padding: 8px;
// // // //     background: none;
// // // //     border: none;
// // // //   }
// // // //   .sc-hamburger span { width: 24px; height: 2px; background: #1a2a5e; border-radius: 2px; display: block; }
// // // //   .sc-mobile-menu {
// // // //     display: flex;
// // // //     flex-direction: column;
// // // //     background: #fff;
// // // //     border-bottom: 1px solid #e5e5e5;
// // // //     padding: 8px 0;
// // // //   }
// // // //   .sc-mobile-menu a { padding: 11px 28px; font-size: 14px; color: #333; display: block; }
// // // //   .sc-mobile-menu a:hover { color: #1a2a5e; background: #f5f7ff; }

// // // //   /* ── HERO ── */
// // // //   .sc-hero {
// // // //     position: relative;
// // // //     min-height: 520px;
// // // //     display: flex;
// // // //     align-items: center;
// // // //     overflow: hidden;
// // // //   }
// // // //   .sc-hero-bg {
// // // //     position: absolute;
// // // //     inset: 0;
// // // //     background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
// // // //     background-size: cover;
// // // //     background-position: center;
// // // //   }
// // // //   .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
// // // //   .sc-hero-content {
// // // //     position: relative;
// // // //     z-index: 2;
// // // //     padding: 80px 64px;
// // // //     max-width: 680px;
// // // //   }
// // // //   .sc-hero-content h1 {
// // // //     font-size: 3.4rem;
// // // //     font-weight: 800;
// // // //     color: #fff;
// // // //     line-height: 1.12;
// // // //     margin-bottom: 18px;
// // // //     letter-spacing: -0.5px;
// // // //   }
// // // //   .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.88); }

// // // //   /* ── SECTIONS ── */
// // // //   .sc-section { padding: 88px 64px; }
// // // //   .sc-section-alt { background: #f7f8fc; }
// // // //   .sc-container { max-width: 1140px; margin: 0 auto; }
// // // //   .sc-label {
// // // //     display: inline-block;
// // // //     font-size: 11.5px;
// // // //     font-weight: 700;
// // // //     letter-spacing: 0.13em;
// // // //     text-transform: uppercase;
// // // //     color: #1a2a5e;
// // // //     background: #e8ecf8;
// // // //     padding: 5px 14px;
// // // //     border-radius: 20px;
// // // //     margin-bottom: 18px;
// // // //   }
// // // //   .sc-section-title {
// // // //     font-size: 2.1rem;
// // // //     font-weight: 800;
// // // //     color: #1a2a5e;
// // // //     line-height: 1.22;
// // // //     margin-bottom: 28px;
// // // //   }

// // // //   /* ── INTRO ── */
// // // //   .sc-intro-grid {
// // // //     display: grid;
// // // //     grid-template-columns: 1fr 1fr;
// // // //     gap: 72px;
// // // //     align-items: start;
// // // //     margin-top: 52px;
// // // //   }
// // // //   .sc-intro-text p {
// // // //     font-size: 0.97rem;
// // // //     color: #555;
// // // //     line-height: 1.9;
// // // //     margin-bottom: 16px;
// // // //   }
// // // //   .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; margin-bottom: 0; }
// // // //   .sc-intro-img { width: 100%; border-radius: 16px; object-fit: cover; max-height: 420px; }

// // // //   /* ── SCAM ── */
// // // //   .sc-scam { background: #1a2a5e; padding: 88px 64px; text-align: center; }
// // // //   .sc-scam-inner { max-width: 840px; margin: 0 auto; }
// // // //   .sc-scam h2 { color: #fff; font-size: 2.3rem; font-weight: 800; margin-bottom: 32px; }
// // // //   .sc-scam p { color: #cdd5ec; font-size: 0.97rem; line-height: 1.9; margin-bottom: 20px; text-align: justify; }
// // // //   .sc-scam strong { color: #fff; }
// // // //   .sc-btn-outline {
// // // //     display: inline-block;
// // // //     margin-top: 24px;
// // // //     padding: 13px 52px;
// // // //     border: 2px solid #fff;
// // // //     border-radius: 50px;
// // // //     color: #fff;
// // // //     font-weight: 700;
// // // //     font-size: 0.88rem;
// // // //     letter-spacing: 0.12em;
// // // //     text-transform: uppercase;
// // // //     transition: background 0.2s, color 0.2s;
// // // //     cursor: pointer;
// // // //   }
// // // //   .sc-btn-outline:hover { background: #fff; color: #1a2a5e; }

// // // //   /* ── EXPLORE ── */
// // // //   .sc-explore-grid {
// // // //     display: grid;
// // // //     grid-template-columns: 1fr 1fr;
// // // //     gap: 72px;
// // // //     align-items: center;
// // // //   }
// // // //   .sc-explore-img { width: 100%; border-radius: 16px; object-fit: cover; max-height: 500px; }
// // // //   .sc-explore-text h2 { font-size: 2.1rem; font-weight: 800; color: #1a2a5e; margin-bottom: 24px; }
// // // //   .sc-explore-text p { font-size: 0.97rem; color: #555; line-height: 1.9; margin-bottom: 16px; }
// // // //   .sc-btn-primary {
// // // //     display: inline-block;
// // // //     margin-top: 16px;
// // // //     padding: 14px 44px;
// // // //     background: #1a2a5e;
// // // //     color: #fff;
// // // //     font-weight: 700;
// // // //     font-size: 0.92rem;
// // // //     letter-spacing: 0.04em;
// // // //     border-radius: 7px;
// // // //     border: none;
// // // //     cursor: pointer;
// // // //     transition: background 0.2s, transform 0.15s;
// // // //     text-decoration: none;
// // // //   }
// // // //   .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); color: #fff; }

// // // //   /* ── CLIENTS ── */
// // // //   .sc-clients { background: #f7f8fc; padding: 88px 64px; }
// // // //   .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
// // // //   .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
// // // //   .sc-logos-wrap { overflow: hidden; position: relative; }
// // // //   .sc-logos-track {
// // // //     display: flex;
// // // //     gap: 48px;
// // // //     animation: sc-scroll 22s linear infinite;
// // // //     width: max-content;
// // // //   }
// // // //   .sc-logos-track:hover { animation-play-state: paused; }
// // // //   @keyframes sc-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// // // //   .sc-logo-item { height: 56px; width: 140px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
// // // //   .sc-logo-item img {
// // // //     max-height: 48px;
// // // //     max-width: 130px;
// // // //     object-fit: contain;
// // // //     filter: grayscale(1);
// // // //     opacity: 0.55;
// // // //     transition: opacity 0.2s, filter 0.2s;
// // // //   }
// // // //   .sc-logo-item img:hover { filter: grayscale(0); opacity: 1; }
// // // //   .sc-clients-desc { text-align: center; max-width: 720px; margin: 52px auto 0; font-size: 0.94rem; color: #666; line-height: 1.85; }

// // // //   /* ── FOOTER ── */
// // // //   .sc-footer { background: #1a2a5e; padding: 72px 64px 36px; }
// // // //   .sc-footer-grid {
// // // //     display: grid;
// // // //     grid-template-columns: 1.5fr 1fr 1fr 1fr;
// // // //     gap: 56px;
// // // //     max-width: 1140px;
// // // //     margin: 0 auto 56px;
// // // //   }
// // // //   .sc-footer-logo img { height: 50px; filter: brightness(0) invert(1); margin-bottom: 16px; object-fit: contain; }
// // // //   .sc-footer-desc { font-size: 0.82rem; color: #8899bb; line-height: 1.75; }
// // // //   .sc-footer-partner-logos { display: flex; gap: 16px; flex-wrap: wrap; align-items: center; margin-top: 20px; }
// // // //   .sc-footer-partner-logos img { height: 26px; width: 58px; object-fit: contain; filter: brightness(0) invert(1); opacity: 0.45; }
// // // //   .sc-footer-col h4 {
// // // //     font-size: 11px;
// // // //     font-weight: 700;
// // // //     letter-spacing: 0.13em;
// // // //     text-transform: uppercase;
// // // //     color: #fff;
// // // //     margin-bottom: 18px;
// // // //   }
// // // //   .sc-footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 9px; }
// // // //   .sc-footer-col ul li a { font-size: 0.82rem; color: #8899bb; transition: color 0.15s; }
// // // //   .sc-footer-col ul li a:hover { color: #fff; }
// // // //   .sc-footer-col ul li span { font-size: 0.82rem; color: #8899bb; }
// // // //   .sc-footer-contact-item { font-size: 0.82rem; color: #8899bb; margin-bottom: 10px; }
// // // //   .sc-footer-contact-item a { color: #8899bb; transition: color 0.15s; }
// // // //   .sc-footer-contact-item a:hover { color: #fff; }
// // // //   .sc-footer-bottom {
// // // //     border-top: 1px solid rgba(255,255,255,0.10);
// // // //     padding-top: 28px;
// // // //     text-align: center;
// // // //     font-size: 0.78rem;
// // // //     color: #6678a0;
// // // //     max-width: 1140px;
// // // //     margin: 0 auto;
// // // //   }
// // // //   .sc-footer-bottom a { color: #6678a0; transition: color 0.15s; margin: 0 6px; }
// // // //   .sc-footer-bottom a:hover { color: #fff; }

// // // //   /* ── RESPONSIVE ── */
// // // //   @media (max-width: 900px) {
// // // //     .sc-nav { padding: 0 24px; }
// // // //     .sc-nav-links { display: none !important; }
// // // //     .sc-hamburger { display: flex !important; }
// // // //     .sc-hero-content { padding: 60px 28px; }
// // // //     .sc-hero-content h1 { font-size: 2.4rem; }
// // // //     .sc-section { padding: 60px 24px; }
// // // //     .sc-intro-grid { grid-template-columns: 1fr; gap: 36px; margin-top: 32px; }
// // // //     .sc-explore-grid { grid-template-columns: 1fr; gap: 36px; }
// // // //     .sc-scam { padding: 60px 24px; }
// // // //     .sc-clients { padding: 60px 24px; }
// // // //     .sc-footer { padding: 60px 24px 32px; }
// // // //     .sc-footer-grid { grid-template-columns: 1fr 1fr; gap: 36px; }
// // // //   }
// // // //   @media (max-width: 560px) {
// // // //     .sc-footer-grid { grid-template-columns: 1fr; gap: 28px; }
// // // //     .sc-hero-content h1 { font-size: 2rem; }
// // // //   }
// // // // `;

// // // // // ─── SUBCOMPONENTS ────────────────────────────────────────────────────────────

// // // // function Navbar() {
// // // //   const [mobileOpen, setMobileOpen] = useState(false);

// // // //   return (
// // // //     <>
// // // //       <nav className="sc-nav">
// // // //         <div className="sc-nav-logo">
// // // //           <a href="https://www.shnoor.com/" target="_blank" rel="noopener noreferrer">
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/shnoor_tm_logo-removebg-preview-Y4LPVNJDezc30XEY.png"
// // // //               alt="SHNOOR INTERNATIONAL"
// // // //             />
// // // //           </a>
// // // //         </div>

// // // //         <ul className="sc-nav-links">
// // // //           {NAV_LINKS.map((link) => (
// // // //             <li key={link.label} className={link.active ? "sc-active" : ""}>
// // // //               <a href={link.href} target="_blank" rel="noopener noreferrer">
// // // //                 {link.label}
// // // //                 {link.children ? " ▾" : ""}
// // // //               </a>
// // // //               {link.children && (
// // // //                 <div className="sc-dropdown">
// // // //                   {link.children.map((child) => (
// // // //                     <a
// // // //                       key={child.label}
// // // //                       href={child.href}
// // // //                       target="_blank"
// // // //                       rel="noopener noreferrer"
// // // //                     >
// // // //                       {child.label}
// // // //                     </a>
// // // //                   ))}
// // // //                 </div>
// // // //               )}
// // // //             </li>
// // // //           ))}
// // // //         </ul>

// // // //         <button
// // // //           className="sc-hamburger"
// // // //           onClick={() => setMobileOpen((v) => !v)}
// // // //           aria-label="Toggle menu"
// // // //         >
// // // //           <span />
// // // //           <span />
// // // //           <span />
// // // //         </button>
// // // //       </nav>

// // // //       {mobileOpen && (
// // // //         <div className="sc-mobile-menu">
// // // //           {NAV_LINKS.map((link) => (
// // // //             <a
// // // //               key={link.label}
// // // //               href={link.href}
// // // //               target="_blank"
// // // //               rel="noopener noreferrer"
// // // //               onClick={() => setMobileOpen(false)}
// // // //             >
// // // //               {link.label}
// // // //             </a>
// // // //           ))}
// // // //         </div>
// // // //       )}
// // // //     </>
// // // //   );
// // // // }

// // // // function Hero() {
// // // //   return (
// // // //     <div className="sc-hero">
// // // //       <div className="sc-hero-bg" />
// // // //       <div className="sc-hero-overlay" />
// // // //       <div className="sc-hero-content">
// // // //         <h1>Find your future</h1>
// // // //         <p>Are you ready to take on the challenge</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function IntroSection() {
// // // //   return (
// // // //     <section className="sc-section sc-section-alt">
// // // //       <div className="sc-container">
// // // //         <div className="sc-intro-grid">
// // // //           <div className="sc-intro-text">
// // // //             <span className="sc-label">Careers</span>
// // // //             <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
// // // //             <p>
// // // //               At SHNOOR International LLC, we believe that great companies are built by great
// // // //               people. We're looking for innovators, problem-solvers, and go-getters who are
// // // //               passionate about making an impact in the worlds of technology and global trade.
// // // //             </p>
// // // //             <p>
// // // //               Whether you're an IT expert, software developer, SAP consultant, business strategist,
// // // //               or trade professional, this is your chance to be part of a company that values
// // // //               creativity, collaboration, and continuous growth.
// // // //             </p>
// // // //             <p>
// // // //               At SHNOOR International, you won't just be doing a job—you'll be building a career
// // // //               where your skills make a difference.
// // // //             </p>
// // // //             <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
// // // //           </div>

// // // //           <div>
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
// // // //               alt="SHNOOR Team"
// // // //               className="sc-intro-img"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function RecruitmentScams() {
// // // //   return (
// // // //     <section className="sc-scam">
// // // //       <div className="sc-scam-inner">
// // // //         <h2>Recruitment Scams</h2>
// // // //         <p>
// // // //           At SHNOOR International LLC, integrity and transparency are at the heart of our
// // // //           recruitment process. We want to alert all job seekers that we never charge any fees,
// // // //           request payments, or ask for financial information at any stage of our hiring process.
// // // //         </p>
// // // //         <p>
// // // //           To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
// // // //           receive any communication—via email, phone, social media, or messaging apps—claiming to
// // // //           represent SHNOOR International and requesting money for job opportunities, please treat
// // // //           it as a scam. Such activities are fraudulent and have no connection with our company.
// // // //         </p>
// // // //         <a
// // // //           href="https://www.shnoor.com/recruitment-scams"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //           className="sc-btn-outline"
// // // //         >
// // // //           Read More
// // // //         </a>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function ExploreSection() {
// // // //   return (
// // // //     <section className="sc-section">
// // // //       <div className="sc-container">
// // // //         <div className="sc-explore-grid">
// // // //           <div>
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
// // // //               alt="Explore SHNOOR"
// // // //               className="sc-explore-img"
// // // //             />
// // // //           </div>

// // // //           <div className="sc-explore-text">
// // // //             <span className="sc-label">Explore</span>
// // // //             <h2>Explore SHNOOR</h2>
// // // //             <p>
// // // //               When you join us, you become part of a passionate, diverse, and forward-thinking team
// // // //               that believes in pushing boundaries and delivering excellence. From IT Consulting,
// // // //               Product Development, and SAP Outsourcing to international import &amp; export
// // // //               operations, our work spans industries, regions, and technologies.
// // // //             </p>
// // // //             <p>
// // // //               At SHNOOR International LLC, every career path is a journey of growth, innovation,
// // // //               and impact. We are more than just a workplace—we're a dynamic hub where technology
// // // //               meets global trade, creating opportunities that challenge your skills and expand your
// // // //               horizons.
// // // //             </p>
// // // //             <a
// // // //               href="https://www.shnoor.com/student-opportunities"
// // // //               target="_blank"
// // // //               rel="noopener noreferrer"
// // // //               className="sc-btn-primary"
// // // //             >
// // // //               Latest Openings
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function ClientsSection() {
// // // //   const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
// // // //   return (
// // // //     <section className="sc-clients">
// // // //       <div className="sc-container">
// // // //         <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
// // // //         <p className="sc-clients-sub">
// // // //           "Building long-term partnerships, one success story at a time."
// // // //         </p>

// // // //         <div className="sc-logos-wrap">
// // // //           <div className="sc-logos-track">
// // // //             {doubled.map((logo, i) => (
// // // //               <div className="sc-logo-item" key={i}>
// // // //                 <img src={logo.src} alt={logo.alt} />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <p className="sc-clients-desc">
// // // //           At SHNOOR International LLC, our clients are at the heart of everything we do. From
// // // //           emerging startups to global enterprises, we work with businesses across industries and
// // // //           geographies—delivering IT solutions, SAP outsourcing, and global trade services that
// // // //           drive measurable results.
// // // //           <br />
// // // //           <br />
// // // //           We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
// // // //           and Malaysia, and our success is built on their success.
// // // //         </p>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function Footer() {
// // // //   return (
// // // //     <footer className="sc-footer">
// // // //       <div className="sc-footer-grid">
// // // //         {/* Brand */}
// // // //         <div>
// // // //           <div className="sc-footer-logo">
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,h=252,fit=crop/AQEZlaZbvrt8n2qw/shnoor_tm_logo-removebg-preview-Y4LPVNJDezc30XEY.png"
// // // //               alt="SHNOOR"
// // // //             />
// // // //           </div>
// // // //           <p className="sc-footer-desc">
// // // //             Bridging Innovation and Trade with Expert IT Solutions and Global Reach.
// // // //           </p>
// // // //           <div className="sc-footer-partner-logos">
// // // //             {PARTNER_LOGOS.map((p) => (
// // // //               <img key={p.alt} src={p.src} alt={p.alt} />
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         {/* Services */}
// // // //         <div className="sc-footer-col">
// // // //           <h4>Services</h4>
// // // //           <ul>
// // // //             {FOOTER_SERVICES.map((s) => (
// // // //               <li key={s.label}>
// // // //                 {s.href ? (
// // // //                   <a href={s.href} target="_blank" rel="noopener noreferrer">
// // // //                     {s.label}
// // // //                   </a>
// // // //                 ) : (
// // // //                   <span>{s.label}</span>
// // // //                 )}
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Useful Links */}
// // // //         <div className="sc-footer-col">
// // // //           <h4>Useful Links</h4>
// // // //           <ul>
// // // //             {FOOTER_LINKS.map((l) => (
// // // //               <li key={l.label}>
// // // //                 <a href={l.href} target="_blank" rel="noopener noreferrer">
// // // //                   {l.label}
// // // //                 </a>
// // // //               </li>
// // // //             ))}
// // // //           </ul>
// // // //         </div>

// // // //         {/* Contact */}
// // // //         <div className="sc-footer-col">
// // // //           <h4>Contacts</h4>
// // // //           <div className="sc-footer-contact-item">
// // // //             📧{" "}
// // // //             <a href="mailto:info@shnoor.com">info@shnoor.com</a>{" "}
// // // //             <span style={{ color: "#6678a0" }}>(General)</span>
// // // //           </div>
// // // //           <div className="sc-footer-contact-item">
// // // //             📧{" "}
// // // //             <a href="mailto:proc@shnoor.com">proc@shnoor.com</a>{" "}
// // // //             <span style={{ color: "#6678a0" }}>(Sales)</span>
// // // //           </div>
// // // //           <h4 style={{ marginTop: "24px" }}>Location</h4>
// // // //           <p className="sc-footer-desc">
// // // //             10009 Mount Tabor Road,
// // // //             <br />
// // // //             Odessa Missouri, United States.
// // // //           </p>
// // // //         </div>
// // // //       </div>

// // // //       <div className="sc-footer-bottom">
// // // //         ©Copyrights 2025. All Rights Reserved. SHNOOR INTERNATIONAL LLC &nbsp;|&nbsp;
// // // //         <a href="https://www.shnoor.com/privacy-policy" target="_blank" rel="noopener noreferrer">
// // // //           Privacy Policy
// // // //         </a>
// // // //         &nbsp;|&nbsp;
// // // //         <a
// // // //           href="https://www.shnoor.com/terms-and-conditions"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Terms &amp; Conditions
// // // //         </a>
// // // //         &nbsp;|&nbsp;
// // // //         <a
// // // //           href="https://assets.zyrosite.com/AQEZlaZbvrt8n2qw/shnoor-international-company-profile-1-dWxLB7EV98TQPz8B.pdf"
// // // //           target="_blank"
// // // //           rel="noopener noreferrer"
// // // //         >
// // // //           Company Profile
// // // //         </a>
// // // //       </div>
// // // //     </footer>
// // // //   );
// // // // }

// // // // // ─── ROOT ─────────────────────────────────────────────────────────────────────
// // // // export default function Careers() {
// // // //   useEffect(() => {
// // // //     const styleId = "shnoor-careers-global";
// // // //     if (!document.getElementById(styleId)) {
// // // //       const tag = document.createElement("style");
// // // //       tag.id = styleId;
// // // //       tag.textContent = GLOBAL_CSS;
// // // //       document.head.appendChild(tag);
// // // //     }
// // // //     return () => {
// // // //       const el = document.getElementById(styleId);
// // // //       if (el) el.remove();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="sc-page">
// // // //       <Navbar />
// // // //       <Hero />
// // // //       <IntroSection />
// // // //       <RecruitmentScams />
// // // //       <ExploreSection />
// // // //       <ClientsSection />
// // // //       <Footer />
// // // //     </div>
// // // //   );
// // // // }
// // // // pages/careers.tsx (or similar)
// // // // import { useEffect } from "react";

// // // // const CLIENT_LOGOS = [
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
// // // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
// // // // ];

// // // // const GLOBAL_CSS = `
// // // //   /* Same CSS as before, but without footer styles (since footer is removed) */
// // // //   .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
// // // //   .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
// // // //   .sc-page a { text-decoration: none; color: inherit; }
// // // //   .sc-page img { display: block; }

// // // //   .sc-hero {
// // // //     position: relative;
// // // //     min-height: 520px;
// // // //     display: flex;
// // // //     align-items: center;
// // // //     overflow: hidden;
// // // //   }
// // // //   .sc-hero-bg {
// // // //     position: absolute;
// // // //     inset: 0;
// // // //     background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
// // // //     background-size: cover;
// // // //     background-position: center;
// // // //   }
// // // //   .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
// // // //   .sc-hero-content {
// // // //     position: relative;
// // // //     z-index: 2;
// // // //     padding: 80px 64px;
// // // //     max-width: 680px;
// // // //   }
// // // //   .sc-hero-content h1 {
// // // //     font-size: 3.4rem;
// // // //     font-weight: 800;
// // // //     color: #fff;
// // // //     line-height: 1.12;
// // // //     margin-bottom: 18px;
// // // //     letter-spacing: -0.5px;
// // // //   }
// // // //   .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.88); }

// // // //   .sc-section { padding: 88px 64px; }
// // // //   .sc-section-alt { background: #f7f8fc; }
// // // //   .sc-container { max-width: 1140px; margin: 0 auto; }
// // // //   .sc-label {
// // // //     display: inline-block;
// // // //     font-size: 11.5px;
// // // //     font-weight: 700;
// // // //     letter-spacing: 0.13em;
// // // //     text-transform: uppercase;
// // // //     color: #1a2a5e;
// // // //     background: #e8ecf8;
// // // //     padding: 5px 14px;
// // // //     border-radius: 20px;
// // // //     margin-bottom: 18px;
// // // //   }
// // // //   .sc-section-title {
// // // //     font-size: 2.1rem;
// // // //     font-weight: 800;
// // // //     color: #1a2a5e;
// // // //     line-height: 1.22;
// // // //     margin-bottom: 28px;
// // // //   }

// // // //   .sc-intro-grid {
// // // //     display: grid;
// // // //     grid-template-columns: 1fr 1fr;
// // // //     gap: 72px;
// // // //     align-items: start;
// // // //     margin-top: 52px;
// // // //   }
// // // //   .sc-intro-text p {
// // // //     font-size: 0.97rem;
// // // //     color: #555;
// // // //     line-height: 1.9;
// // // //     margin-bottom: 16px;
// // // //   }
// // // //   .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; margin-bottom: 0; }
// // // //   .sc-intro-img { width: 100%; border-radius: 16px; object-fit: cover; max-height: 420px; }

// // // //   .sc-scam { background: #1a2a5e; padding: 88px 64px; text-align: center; }
// // // //   .sc-scam-inner { max-width: 840px; margin: 0 auto; }
// // // //   .sc-scam h2 { color: #fff; font-size: 2.3rem; font-weight: 800; margin-bottom: 32px; }
// // // //   .sc-scam p { color: #cdd5ec; font-size: 0.97rem; line-height: 1.9; margin-bottom: 20px; text-align: justify; }
// // // //   .sc-scam strong { color: #fff; }
// // // //   .sc-btn-outline {
// // // //     display: inline-block;
// // // //     margin-top: 24px;
// // // //     padding: 13px 52px;
// // // //     border: 2px solid #fff;
// // // //     border-radius: 50px;
// // // //     color: #fff;
// // // //     font-weight: 700;
// // // //     font-size: 0.88rem;
// // // //     letter-spacing: 0.12em;
// // // //     text-transform: uppercase;
// // // //     transition: background 0.2s, color 0.2s;
// // // //     cursor: pointer;
// // // //   }
// // // //   .sc-btn-outline:hover { background: #fff; color: #1a2a5e; }

// // // //   .sc-explore-grid {
// // // //     display: grid;
// // // //     grid-template-columns: 1fr 1fr;
// // // //     gap: 72px;
// // // //     align-items: center;
// // // //   }
// // // //   .sc-explore-img { width: 100%; border-radius: 16px; object-fit: cover; max-height: 500px; }
// // // //   .sc-explore-text h2 { font-size: 2.1rem; font-weight: 800; color: #1a2a5e; margin-bottom: 24px; }
// // // //   .sc-explore-text p { font-size: 0.97rem; color: #555; line-height: 1.9; margin-bottom: 16px; }
// // // //   .sc-btn-primary {
// // // //     display: inline-block;
// // // //     margin-top: 16px;
// // // //     padding: 14px 44px;
// // // //     background: #1a2a5e;
// // // //     color: #fff;
// // // //     font-weight: 700;
// // // //     font-size: 0.92rem;
// // // //     letter-spacing: 0.04em;
// // // //     border-radius: 7px;
// // // //     border: none;
// // // //     cursor: pointer;
// // // //     transition: background 0.2s, transform 0.15s;
// // // //     text-decoration: none;
// // // //   }
// // // //   .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); color: #fff; }

// // // //   .sc-clients { background: #f7f8fc; padding: 88px 64px; }
// // // //   .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
// // // //   .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
// // // //   .sc-logos-wrap { overflow: hidden; position: relative; }
// // // //   .sc-logos-track {
// // // //     display: flex;
// // // //     gap: 48px;
// // // //     animation: sc-scroll 22s linear infinite;
// // // //     width: max-content;
// // // //   }
// // // //   .sc-logos-track:hover { animation-play-state: paused; }
// // // //   @keyframes sc-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// // // //   .sc-logo-item { height: 56px; width: 140px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
// // // //   .sc-logo-item img {
// // // //     max-height: 48px;
// // // //     max-width: 130px;
// // // //     object-fit: contain;
// // // //     filter: grayscale(1);
// // // //     opacity: 0.55;
// // // //     transition: opacity 0.2s, filter 0.2s;
// // // //   }
// // // //   .sc-logo-item img:hover { filter: grayscale(0); opacity: 1; }
// // // //   .sc-clients-desc { text-align: center; max-width: 720px; margin: 52px auto 0; font-size: 0.94rem; color: #666; line-height: 1.85; }

// // // //   @media (max-width: 900px) {
// // // //     .sc-hero-content { padding: 60px 28px; }
// // // //     .sc-hero-content h1 { font-size: 2.4rem; }
// // // //     .sc-section { padding: 60px 24px; }
// // // //     .sc-intro-grid { grid-template-columns: 1fr; gap: 36px; margin-top: 32px; }
// // // //     .sc-explore-grid { grid-template-columns: 1fr; gap: 36px; }
// // // //     .sc-scam { padding: 60px 24px; }
// // // //     .sc-clients { padding: 60px 24px; }
// // // //   }
// // // //   @media (max-width: 560px) {
// // // //     .sc-hero-content h1 { font-size: 2rem; }
// // // //   }
// // // // `;

// // // // function Hero() {
// // // //   return (
// // // //     <div className="sc-hero">
// // // //       <div className="sc-hero-bg" />
// // // //       <div className="sc-hero-overlay" />
// // // //       <div className="sc-hero-content">
// // // //         <h1>Find your future</h1>
// // // //         <p>Are you ready to take on the challenge</p>
// // // //       </div>
// // // //     </div>
// // // //   );
// // // // }

// // // // function IntroSection() {
// // // //   return (
// // // //     <section className="sc-section sc-section-alt">
// // // //       <div className="sc-container">
// // // //         <div className="sc-intro-grid">
// // // //           <div className="sc-intro-text">
// // // //             <span className="sc-label">Careers</span>
// // // //             <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
// // // //             <p>
// // // //               At SHNOOR International LLC, we believe that great companies are built by great
// // // //               people. We're looking for innovators, problem-solvers, and go-getters who are
// // // //               passionate about making an impact in the worlds of technology and global trade.
// // // //             </p>
// // // //             <p>
// // // //               Whether you're an IT expert, software developer, SAP consultant, business strategist,
// // // //               or trade professional, this is your chance to be part of a company that values
// // // //               creativity, collaboration, and continuous growth.
// // // //             </p>
// // // //             <p>
// // // //               At SHNOOR International, you won't just be doing a job—you'll be building a career
// // // //               where your skills make a difference.
// // // //             </p>
// // // //             <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
// // // //           </div>

// // // //           <div>
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
// // // //               alt="SHNOOR Team"
// // // //               className="sc-intro-img"
// // // //             />
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function RecruitmentScams() {
// // // //   return (
// // // //     <section className="sc-scam">
// // // //       <div className="sc-scam-inner">
// // // //         <h2>Recruitment Scams</h2>
// // // //         <p>
// // // //           At SHNOOR International LLC, integrity and transparency are at the heart of our
// // // //           recruitment process. We want to alert all job seekers that we never charge any fees,
// // // //           request payments, or ask for financial information at any stage of our hiring process.
// // // //         </p>
// // // //         <p>
// // // //           To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
// // // //           receive any communication—via email, phone, social media, or messaging apps—claiming to
// // // //           represent SHNOOR International and requesting money for job opportunities, please treat
// // // //           it as a scam. Such activities are fraudulent and have no connection with our company.
// // // //         </p>
// // // //         <a href="/recruitment-scams" className="sc-btn-outline">
// // // //           Read More
// // // //         </a>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function ExploreSection() {
// // // //   return (
// // // //     <section className="sc-section">
// // // //       <div className="sc-container">
// // // //         <div className="sc-explore-grid">
// // // //           <div>
// // // //             <img
// // // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
// // // //               alt="Explore SHNOOR"
// // // //               className="sc-explore-img"
// // // //             />
// // // //           </div>

// // // //           <div className="sc-explore-text">
// // // //             <span className="sc-label">Explore</span>
// // // //             <h2>Explore SHNOOR</h2>
// // // //             <p>
// // // //               When you join us, you become part of a passionate, diverse, and forward-thinking team
// // // //               that believes in pushing boundaries and delivering excellence. From IT Consulting,
// // // //               Product Development, and SAP Outsourcing to international import &amp; export
// // // //               operations, our work spans industries, regions, and technologies.
// // // //             </p>
// // // //             <p>
// // // //               At SHNOOR International LLC, every career path is a journey of growth, innovation,
// // // //               and impact. We are more than just a workplace—we're a dynamic hub where technology
// // // //               meets global trade, creating opportunities that challenge your skills and expand your
// // // //               horizons.
// // // //             </p>
// // // //             <a href="/student-opportunities" className="sc-btn-primary">
// // // //               Latest Openings
// // // //             </a>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // function ClientsSection() {
// // // //   const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
// // // //   return (
// // // //     <section className="sc-clients">
// // // //       <div className="sc-container">
// // // //         <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
// // // //         <p className="sc-clients-sub">
// // // //           "Building long-term partnerships, one success story at a time."
// // // //         </p>

// // // //         <div className="sc-logos-wrap">
// // // //           <div className="sc-logos-track">
// // // //             {doubled.map((logo, i) => (
// // // //               <div className="sc-logo-item" key={i}>
// // // //                 <img src={logo.src} alt={logo.alt} />
// // // //               </div>
// // // //             ))}
// // // //           </div>
// // // //         </div>

// // // //         <p className="sc-clients-desc">
// // // //           At SHNOOR International LLC, our clients are at the heart of everything we do. From
// // // //           emerging startups to global enterprises, we work with businesses across industries and
// // // //           geographies—delivering IT solutions, SAP outsourcing, and global trade services that
// // // //           drive measurable results.
// // // //           <br />
// // // //           <br />
// // // //           We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
// // // //           and Malaysia, and our success is built on their success.
// // // //         </p>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // }

// // // // export default function Careers() {
// // // //   useEffect(() => {
// // // //     const styleId = "shnoor-careers-global";
// // // //     if (!document.getElementById(styleId)) {
// // // //       const tag = document.createElement("style");
// // // //       tag.id = styleId;
// // // //       tag.textContent = GLOBAL_CSS;
// // // //       document.head.appendChild(tag);
// // // //     }
// // // //     return () => {
// // // //       const el = document.getElementById(styleId);
// // // //       if (el) el.remove();
// // // //     };
// // // //   }, []);

// // // //   return (
// // // //     <div className="sc-page">
// // // //       <Hero />
// // // //       <IntroSection />
// // // //       <RecruitmentScams />
// // // //       <ExploreSection />
// // // //       <ClientsSection />
// // // //     </div>
// // // //   );
// // // // }


// // // import { useEffect } from "react";

// // // const CLIENT_LOGOS = [
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
// // //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
// // // ];

// // // const GLOBAL_CSS = `
// // //   .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
// // //   .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
// // //   .sc-page a { text-decoration: none; color: inherit; }
// // //   .sc-page img { display: block; }

// // //   /* Hero - centered */
// // //   .sc-hero {
// // //     position: relative;
// // //     min-height: 520px;
// // //     display: flex;
// // //     align-items: center;
// // //     justify-content: center;
// // //     text-align: center;
// // //     overflow: hidden;
// // //   }
// // //   .sc-hero-bg {
// // //     position: absolute;
// // //     inset: 0;
// // //     background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
// // //     background-size: cover;
// // //     background-position: center;
// // //   }
// // //   .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
// // //   .sc-hero-content {
// // //     position: relative;
// // //     z-index: 2;
// // //     padding: 80px 64px;
// // //     max-width: 800px;
// // //     margin: 0 auto;
// // //   }
// // //   .sc-hero-content h1 {
// // //     font-size: 3.4rem;
// // //     font-weight: 800;
// // //     color: #fff;
// // //     line-height: 1.12;
// // //     margin-bottom: 18px;
// // //     letter-spacing: -0.5px;
// // //   }
// // //   .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.88); }

// // //   .sc-section { padding: 88px 64px; }
// // //   .sc-section-alt { background: #f7f8fc; }
// // //   .sc-container { max-width: 1140px; margin: 0 auto; }
// // //   .sc-label {
// // //     display: inline-block;
// // //     font-size: 11.5px;
// // //     font-weight: 700;
// // //     letter-spacing: 0.13em;
// // //     text-transform: uppercase;
// // //     color: #1a2a5e;
// // //     background: #e8ecf8;
// // //     padding: 5px 14px;
// // //     border-radius: 20px;
// // //     margin-bottom: 18px;
// // //   }
// // //   .sc-section-title {
// // //     font-size: 2.1rem;
// // //     font-weight: 800;
// // //     color: #1a2a5e;
// // //     line-height: 1.22;
// // //     margin-bottom: 28px;
// // //   }

// // //   .sc-intro-grid {
// // //     display: grid;
// // //     grid-template-columns: 1fr 1fr;
// // //     gap: 72px;
// // //     align-items: start;
// // //     margin-top: 52px;
// // //   }
// // //   .sc-intro-text p {
// // //     font-size: 0.97rem;
// // //     color: #555;
// // //     line-height: 1.9;
// // //     margin-bottom: 16px;
// // //   }
// // //   .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; margin-bottom: 0; }
// // //   .sc-intro-img { width: 100%; border-radius: 16px; object-fit: cover; height: auto; max-height: 420px; }

// // //   .sc-scam { background: #1a2a5e; padding: 88px 64px; text-align: center; }
// // //   .sc-scam-inner { max-width: 840px; margin: 0 auto; }
// // //   .sc-scam h2 { color: #fff; font-size: 2.3rem; font-weight: 800; margin-bottom: 32px; }
// // //   .sc-scam p { color: #cdd5ec; font-size: 0.97rem; line-height: 1.9; margin-bottom: 20px; text-align: justify; }
// // //   .sc-scam strong { color: #fff; }
  
// // //   /* Buttons - force white text */
// // //   .sc-btn-outline {
// // //     display: inline-block;
// // //     margin-top: 24px;
// // //     padding: 13px 52px;
// // //     border: 2px solid #fff;
// // //     border-radius: 50px;
// // //     color: #fff !important;
// // //     font-weight: 700;
// // //     font-size: 0.88rem;
// // //     letter-spacing: 0.12em;
// // //     text-transform: uppercase;
// // //     transition: background 0.2s, color 0.2s;
// // //     cursor: pointer;
// // //     background: transparent;
// // //   }
// // //   .sc-btn-outline:hover { background: #fff; color: #1a2a5e !important; }
  
// // //   .sc-btn-primary {
// // //     display: inline-block;
// // //     margin-top: 16px;
// // //     padding: 14px 44px;
// // //     background: #1a2a5e;
// // //     color: #fff !important;
// // //     font-weight: 700;
// // //     font-size: 0.92rem;
// // //     letter-spacing: 0.04em;
// // //     border-radius: 7px;
// // //     border: none;
// // //     cursor: pointer;
// // //     transition: background 0.2s, transform 0.15s;
// // //     text-decoration: none;
// // //   }
// // //   .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); color: #fff !important; }

// // //   .sc-explore-grid {
// // //     display: grid;
// // //     grid-template-columns: 1fr 1fr;
// // //     gap: 72px;
// // //     align-items: center;
// // //   }
// // //   .sc-explore-img { width: 100%; border-radius: 16px; object-fit: cover; height: auto; max-height: 500px; }
// // //   .sc-explore-text h2 { font-size: 2.1rem; font-weight: 800; color: #1a2a5e; margin-bottom: 24px; }
// // //   .sc-explore-text p { font-size: 0.97rem; color: #555; line-height: 1.9; margin-bottom: 16px; }

// // //   .sc-clients { background: #f7f8fc; padding: 88px 64px; }
// // //   .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
// // //   .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
// // //   .sc-logos-wrap { overflow: hidden; position: relative; }
// // //   .sc-logos-track {
// // //     display: flex;
// // //     gap: 48px;
// // //     animation: sc-scroll 22s linear infinite;
// // //     width: max-content;
// // //   }
// // //   .sc-logos-track:hover { animation-play-state: paused; }
// // //   @keyframes sc-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// // //   .sc-logo-item { height: 56px; width: 140px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
// // //   .sc-logo-item img {
// // //     max-height: 48px;
// // //     max-width: 130px;
// // //     object-fit: contain;
// // //     filter: grayscale(1);
// // //     opacity: 0.55;
// // //     transition: opacity 0.2s, filter 0.2s;
// // //   }
// // //   .sc-logo-item img:hover { filter: grayscale(0); opacity: 1; }
// // //   .sc-clients-desc { text-align: center; max-width: 720px; margin: 52px auto 0; font-size: 0.94rem; color: #666; line-height: 1.85; }

// // //   @media (max-width: 900px) {
// // //     .sc-hero-content { padding: 60px 28px; }
// // //     .sc-hero-content h1 { font-size: 2.4rem; }
// // //     .sc-section { padding: 60px 24px; }
// // //     .sc-intro-grid { grid-template-columns: 1fr; gap: 36px; margin-top: 32px; }
// // //     .sc-explore-grid { grid-template-columns: 1fr; gap: 36px; }
// // //     .sc-scam { padding: 60px 24px; }
// // //     .sc-clients { padding: 60px 24px; }
// // //   }
// // //   @media (max-width: 560px) {
// // //     .sc-hero-content h1 { font-size: 2rem; }
// // //   }
// // // `;

// // // function Hero() {
// // //   return (
// // //     <div className="sc-hero">
// // //       <div className="sc-hero-bg" />
// // //       <div className="sc-hero-overlay" />
// // //       <div className="sc-hero-content">
// // //         <h1>Find your future</h1>
// // //         <p>Are you ready to take on the challenge</p>
// // //       </div>
// // //     </div>
// // //   );
// // // }

// // // function IntroSection() {
// // //   return (
// // //     <section className="sc-section sc-section-alt">
// // //       <div className="sc-container">
// // //         <div className="sc-intro-grid">
// // //           <div className="sc-intro-text">
// // //             <span className="sc-label">Careers</span>
// // //             <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
// // //             <p>
// // //               At SHNOOR International LLC, we believe that great companies are built by great
// // //               people. We're looking for innovators, problem-solvers, and go-getters who are
// // //               passionate about making an impact in the worlds of technology and global trade.
// // //             </p>
// // //             <p>
// // //               Whether you're an IT expert, software developer, SAP consultant, business strategist,
// // //               or trade professional, this is your chance to be part of a company that values
// // //               creativity, collaboration, and continuous growth.
// // //             </p>
// // //             <p>
// // //               At SHNOOR International, you won't just be doing a job—you'll be building a career
// // //               where your skills make a difference.
// // //             </p>
// // //             <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
// // //           </div>

// // //           <div>
// // //             <img
// // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
// // //               alt="SHNOOR Team"
// // //               className="sc-intro-img"
// // //             />
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function RecruitmentScams() {
// // //   return (
// // //     <section className="sc-scam">
// // //       <div className="sc-scam-inner">
// // //         <h2>Recruitment Scams</h2>
// // //         <p>
// // //           At SHNOOR International LLC, integrity and transparency are at the heart of our
// // //           recruitment process. We want to alert all job seekers that we never charge any fees,
// // //           request payments, or ask for financial information at any stage of our hiring process.
// // //         </p>
// // //         <p>
// // //           To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
// // //           receive any communication—via email, phone, social media, or messaging apps—claiming to
// // //           represent SHNOOR International and requesting money for job opportunities, please treat
// // //           it as a scam. Such activities are fraudulent and have no connection with our company.
// // //         </p>
// // //         <a href="/recruitment-scams" className="sc-btn-outline">
// // //           Read More
// // //         </a>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function ExploreSection() {
// // //   return (
// // //     <section className="sc-section">
// // //       <div className="sc-container">
// // //         <div className="sc-explore-grid">
// // //           <div>
// // //             <img
// // //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
// // //               alt="Explore SHNOOR"
// // //               className="sc-explore-img"
// // //             />
// // //           </div>

// // //           <div className="sc-explore-text">
// // //             <span className="sc-label">Explore</span>
// // //             <h2>Explore SHNOOR</h2>
// // //             <p>
// // //               When you join us, you become part of a passionate, diverse, and forward-thinking team
// // //               that believes in pushing boundaries and delivering excellence. From IT Consulting,
// // //               Product Development, and SAP Outsourcing to international import &amp; export
// // //               operations, our work spans industries, regions, and technologies.
// // //             </p>
// // //             <p>
// // //               At SHNOOR International LLC, every career path is a journey of growth, innovation,
// // //               and impact. We are more than just a workplace—we're a dynamic hub where technology
// // //               meets global trade, creating opportunities that challenge your skills and expand your
// // //               horizons.
// // //             </p>
// // //             <a href="/student-opportunities" className="sc-btn-primary">
// // //               Latest Openings
// // //             </a>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // function ClientsSection() {
// // //   const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
// // //   return (
// // //     <section className="sc-clients">
// // //       <div className="sc-container">
// // //         <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
// // //         <p className="sc-clients-sub">
// // //           "Building long-term partnerships, one success story at a time."
// // //         </p>

// // //         <div className="sc-logos-wrap">
// // //           <div className="sc-logos-track">
// // //             {doubled.map((logo, i) => (
// // //               <div className="sc-logo-item" key={i}>
// // //                 <img src={logo.src} alt={logo.alt} />
// // //               </div>
// // //             ))}
// // //           </div>
// // //         </div>

// // //         <p className="sc-clients-desc">
// // //           At SHNOOR International LLC, our clients are at the heart of everything we do. From
// // //           emerging startups to global enterprises, we work with businesses across industries and
// // //           geographies—delivering IT solutions, SAP outsourcing, and global trade services that
// // //           drive measurable results.
// // //           <br />
// // //           <br />
// // //           We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
// // //           and Malaysia, and our success is built on their success.
// // //         </p>
// // //       </div>
// // //     </section>
// // //   );
// // // }

// // // export default function Careers() {
// // //   useEffect(() => {
// // //     const styleId = "shnoor-careers-global";
// // //     if (!document.getElementById(styleId)) {
// // //       const tag = document.createElement("style");
// // //       tag.id = styleId;
// // //       tag.textContent = GLOBAL_CSS;
// // //       document.head.appendChild(tag);
// // //     }
// // //     return () => {
// // //       const el = document.getElementById(styleId);
// // //       if (el) el.remove();
// // //     };
// // //   }, []);

// // //   return (
// // //     <div className="sc-page">
// // //       <Hero />
// // //       <IntroSection />
// // //       <RecruitmentScams />
// // //       <ExploreSection />
// // //       <ClientsSection />
// // //     </div>
// // //   );
// // // }

// // import { useEffect } from "react";

// // const CLIENT_LOGOS = [
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
// //   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
// // ];

// // const GLOBAL_CSS = `
// //   .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
// //   .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
// //   .sc-page a { text-decoration: none; color: inherit; }
// //   .sc-page img { display: block; max-width: 100%; height: auto; }

// //   /* Hero - perfectly centered with enough space */
// //   .sc-hero {
// //     position: relative;
// //     min-height: 520px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     text-align: center;
// //     overflow: hidden;
// //   }
// //   .sc-hero-bg {
// //     position: absolute;
// //     inset: 0;
// //     background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
// //     background-size: cover;
// //     background-position: center;
// //   }
// //   .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
// //   .sc-hero-content {
// //     position: relative;
// //     z-index: 2;
// //     padding: 60px 24px;
// //     max-width: 800px;
// //     margin: 0 auto;
// //   }
// //   .sc-hero-content h1 {
// //     font-size: 3.4rem;
// //     font-weight: 800;
// //     color: #fff;
// //     line-height: 1.2;
// //     margin-bottom: 18px;
// //   }
// //   .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.9); }

// //   /* Sections */
// //   .sc-section { padding: 80px 24px; }
// //   .sc-section-alt { background: #f7f8fc; }
// //   .sc-container { max-width: 1140px; margin: 0 auto; }
// //   .sc-label {
// //     display: inline-block;
// //     font-size: 11.5px;
// //     font-weight: 700;
// //     letter-spacing: 0.13em;
// //     text-transform: uppercase;
// //     color: #1a2a5e;
// //     background: #e8ecf8;
// //     padding: 5px 14px;
// //     border-radius: 20px;
// //     margin-bottom: 18px;
// //   }
// //   .sc-section-title {
// //     font-size: 2rem;
// //     font-weight: 800;
// //     color: #1a2a5e;
// //     line-height: 1.3;
// //     margin-bottom: 24px;
// //   }

// //   /* Intro grid – never hides text */
// //   .sc-intro-grid {
// //     display: grid;
// //     grid-template-columns: 1fr 1fr;
// //     gap: 48px;
// //     align-items: center;
// //     margin-top: 32px;
// //   }
// //   .sc-intro-text p {
// //     font-size: 0.97rem;
// //     color: #555;
// //     line-height: 1.8;
// //     margin-bottom: 16px;
// //   }
// //   .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; }
// //   .sc-intro-img {
// //     width: 100%;
// //     border-radius: 16px;
// //     object-fit: cover;
// //     max-height: 450px;
// //     width: auto;
// //   }

// //   /* Recruitment Scams – no images, safe */
// //   .sc-scam { background: #1a2a5e; padding: 80px 24px; text-align: center; }
// //   .sc-scam-inner { max-width: 840px; margin: 0 auto; }
// //   .sc-scam h2 { color: #fff; font-size: 2.2rem; font-weight: 800; margin-bottom: 28px; }
// //   .sc-scam p { color: #cdd5ec; font-size: 0.97rem; line-height: 1.8; margin-bottom: 20px; text-align: justify; }
// //   .sc-scam strong { color: #fff; }

// //   /* Buttons */
// //   .sc-btn-outline, .sc-btn-primary {
// //     display: inline-block;
// //     margin-top: 16px;
// //     padding: 12px 40px;
// //     font-weight: 700;
// //     font-size: 0.9rem;
// //     border-radius: 50px;
// //     transition: all 0.2s;
// //     cursor: pointer;
// //     text-decoration: none;
// //   }
// //   .sc-btn-outline {
// //     border: 2px solid #fff;
// //     color: #fff !important;
// //     background: transparent;
// //   }
// //   .sc-btn-outline:hover { background: #fff; color: #1a2a5e !important; }
// //   .sc-btn-primary {
// //     background: #1a2a5e;
// //     color: #fff !important;
// //     border: none;
// //     border-radius: 7px;
// //   }
// //   .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); }

// //   /* Explore grid – ensures text always visible */
// //   .sc-explore-grid {
// //     display: grid;
// //     grid-template-columns: 1fr 1fr;
// //     gap: 48px;
// //     align-items: center;
// //   }
// //   .sc-explore-img {
// //     width: 100%;
// //     border-radius: 16px;
// //     object-fit: cover;
// //     max-height: 480px;
// //   }
// //   .sc-explore-text h2 { font-size: 2rem; font-weight: 800; color: #1a2a5e; margin-bottom: 20px; }
// //   .sc-explore-text p { font-size: 0.97rem; color: #555; line-height: 1.8; margin-bottom: 16px; }

// //   /* Clients section – no text hiding */
// //   .sc-clients { background: #f7f8fc; padding: 80px 24px; }
// //   .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
// //   .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
// //   .sc-logos-wrap { overflow: hidden; position: relative; }
// //   .sc-logos-track {
// //     display: flex;
// //     gap: 48px;
// //     animation: sc-scroll 22s linear infinite;
// //     width: max-content;
// //   }
// //   .sc-logos-track:hover { animation-play-state: paused; }
// //   @keyframes sc-scroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
// //   .sc-logo-item {
// //     height: 70px;
// //     width: 150px;
// //     display: flex;
// //     align-items: center;
// //     justify-content: center;
// //     flex-shrink: 0;
// //   }
// //   .sc-logo-item img {
// //     max-height: 55px;
// //     max-width: 140px;
// //     object-fit: contain;
// //     filter: grayscale(1);
// //     opacity: 0.55;
// //     transition: all 0.2s;
// //   }
// //   .sc-logo-item img:hover { filter: grayscale(0); opacity: 1; }
// //   .sc-clients-desc {
// //     text-align: center;
// //     max-width: 780px;
// //     margin: 52px auto 0;
// //     font-size: 0.94rem;
// //     color: #666;
// //     line-height: 1.8;
// //   }

// //   /* Responsive – stack on mobile to prevent any overlap */
// //   @media (max-width: 900px) {
// //     .sc-hero-content h1 { font-size: 2.4rem; }
// //     .sc-intro-grid, .sc-explore-grid {
// //       grid-template-columns: 1fr;
// //       gap: 40px;
// //     }
// //     .sc-intro-img, .sc-explore-img {
// //       max-height: 350px;
// //       width: 100%;
// //       object-fit: cover;
// //     }
// //     .sc-section-title { font-size: 1.8rem; }
// //   }
// //   @media (max-width: 560px) {
// //     .sc-hero-content h1 { font-size: 1.9rem; }
// //     .sc-section { padding: 60px 20px; }
// //     .sc-btn-outline, .sc-btn-primary { padding: 10px 28px; font-size: 0.8rem; }
// //   }
// // `;

// // // Components (unchanged except CSS)
// // function Hero() {
// //   return (
// //     <div className="sc-hero">
// //       <div className="sc-hero-bg" />
// //       <div className="sc-hero-overlay" />
// //       <div className="sc-hero-content">
// //         <h1>Find your future</h1>
// //         <p>Are you ready to take on the challenge</p>
// //       </div>
// //     </div>
// //   );
// // }

// // function IntroSection() {
// //   return (
// //     <section className="sc-section sc-section-alt">
// //       <div className="sc-container">
// //         <div className="sc-intro-grid">
// //           <div className="sc-intro-text">
// //             <span className="sc-label">Careers</span>
// //             <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
// //             <p>
// //               At SHNOOR International LLC, we believe that great companies are built by great
// //               people. We're looking for innovators, problem-solvers, and go-getters who are
// //               passionate about making an impact in the worlds of technology and global trade.
// //             </p>
// //             <p>
// //               Whether you're an IT expert, software developer, SAP consultant, business strategist,
// //               or trade professional, this is your chance to be part of a company that values
// //               creativity, collaboration, and continuous growth.
// //             </p>
// //             <p>
// //               At SHNOOR International, you won't just be doing a job—you'll be building a career
// //               where your skills make a difference.
// //             </p>
// //             <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
// //           </div>
// //           <div>
// //             <img
// //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
// //               alt="SHNOOR Team"
// //               className="sc-intro-img"
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function RecruitmentScams() {
// //   return (
// //     <section className="sc-scam">
// //       <div className="sc-scam-inner">
// //         <h2>Recruitment Scams</h2>
// //         <p>
// //           At SHNOOR International LLC, integrity and transparency are at the heart of our
// //           recruitment process. We want to alert all job seekers that we never charge any fees,
// //           request payments, or ask for financial information at any stage of our hiring process.
// //         </p>
// //         <p>
// //           To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
// //           receive any communication — via email, phone, social media, or messaging apps — claiming
// //           to represent SHNOOR International and requesting money for job opportunities, please treat
// //           it as a scam. Such activities are fraudulent and have no connection with our company.
// //         </p>
// //         <a href="/recruitment-scams" className="sc-btn-outline">
// //           Read More
// //         </a>
// //       </div>
// //     </section>
// //   );
// // }

// // function ExploreSection() {
// //   return (
// //     <section className="sc-section">
// //       <div className="sc-container">
// //         <div className="sc-explore-grid">
// //           <div>
// //             <img
// //               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
// //               alt="Explore SHNOOR"
// //               className="sc-explore-img"
// //             />
// //           </div>
// //           <div className="sc-explore-text">
// //             <span className="sc-label">Explore</span>
// //             <h2>Explore SHNOOR</h2>
// //             <p>
// //               When you join us, you become part of a passionate, diverse, and forward-thinking team
// //               that believes in pushing boundaries and delivering excellence. From IT Consulting,
// //               Product Development, and SAP Outsourcing to international import &amp; export
// //               operations, our work spans industries, regions, and technologies.
// //             </p>
// //             <p>
// //               At SHNOOR International LLC, every career path is a journey of growth, innovation,
// //               and impact. We are more than just a workplace — we're a dynamic hub where technology
// //               meets global trade, creating opportunities that challenge your skills and expand your
// //               horizons.
// //             </p>
// //             <a href="/student-opportunities" className="sc-btn-primary">
// //               Latest Openings
// //             </a>
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }

// // function ClientsSection() {
// //   const doubled = [...CLIENT_LOGOS, ...CLIENT_LOGOS];
// //   return (
// //     <section className="sc-clients">
// //       <div className="sc-container">
// //         <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
// //         <p className="sc-clients-sub">
// //           "Building long-term partnerships, one success story at a time."
// //         </p>
// //         <div className="sc-logos-wrap">
// //           <div className="sc-logos-track">
// //             {doubled.map((logo, i) => (
// //               <div className="sc-logo-item" key={i}>
// //                 <img src={logo.src} alt={logo.alt} />
// //               </div>
// //             ))}
// //           </div>
// //         </div>
// //         <p className="sc-clients-desc">
// //           At SHNOOR International LLC, our clients are at the heart of everything we do. From
// //           emerging startups to global enterprises, we work with businesses across industries and
// //           geographies — delivering IT solutions, SAP outsourcing, and global trade services that
// //           drive measurable results.
// //           <br /><br />
// //           We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
// //           and Malaysia, and our success is built on their success.
// //         </p>
// //       </div>
// //     </section>
// //   );
// // }

// // export default function Careers() {
// //   useEffect(() => {
// //     const styleId = "shnoor-careers-global";
// //     if (!document.getElementById(styleId)) {
// //       const tag = document.createElement("style");
// //       tag.id = styleId;
// //       tag.textContent = GLOBAL_CSS;
// //       document.head.appendChild(tag);
// //     }
// //     return () => {
// //       const el = document.getElementById(styleId);
// //       if (el) el.remove();
// //     };
// //   }, []);

// //   return (
// //     <div className="sc-page">
// //       <Hero />
// //       <IntroSection />
// //       <RecruitmentScams />
// //       <ExploreSection />
// //       <ClientsSection />
// //     </div>
// //   );
// // }
// import { useEffect } from "react";

// const CLIENT_LOGOS = [
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
//   { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
// ];

// const GLOBAL_CSS = `
//   .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
//   .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
//   .sc-page a { text-decoration: none; color: inherit; }
//   .sc-page img { display: block; max-width: 100%; height: auto; }

//   /* Hero */
//   .sc-hero {
//     position: relative;
//     min-height: 520px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     text-align: center;
//     overflow: hidden;
//   }
//   .sc-hero-bg {
//     position: absolute;
//     inset: 0;
//     background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
//     background-size: cover;
//     background-position: center;
//   }
//   .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
//   .sc-hero-content {
//     position: relative;
//     z-index: 2;
//     padding: 60px 24px;
//     max-width: 800px;
//     margin: 0 auto;
//   }
//   .sc-hero-content h1 {
//     font-size: 3.4rem;
//     font-weight: 800;
//     color: #fff;
//     line-height: 1.2;
//     margin-bottom: 18px;
//   }
//   .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.9); }

//   /* Sections */
//   .sc-section { padding: 80px 24px; }
//   .sc-section-alt { background: #f7f8fc; }
//   .sc-container { max-width: 1140px; margin: 0 auto; }
//   .sc-label {
//     display: inline-block;
//     font-size: 11.5px;
//     font-weight: 700;
//     letter-spacing: 0.13em;
//     text-transform: uppercase;
//     color: #1a2a5e;
//     background: #e8ecf8;
//     padding: 5px 14px;
//     border-radius: 20px;
//     margin-bottom: 18px;
//   }
//   .sc-section-title {
//     font-size: 2rem;
//     font-weight: 800;
//     color: #1a2a5e;
//     line-height: 1.3;
//     margin-bottom: 24px;
//   }

//   /* Intro grid */
//   .sc-intro-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 48px;
//     align-items: center;
//     margin-top: 32px;
//   }
//   .sc-intro-text p {
//     font-size: 0.97rem;
//     color: #555;
//     line-height: 1.8;
//     margin-bottom: 16px;
//     text-align: left;
//   }
//   .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; }
//   .sc-intro-img {
//     width: 100%;
//     border-radius: 16px;
//     object-fit: cover;
//     max-height: 450px;
//   }

//   /* Recruitment Scams */
//   .sc-scam { background: #1a2a5e; padding: 80px 24px; text-align: center; }
//   .sc-scam-inner { max-width: 840px; margin: 0 auto; }
//   .sc-scam h2 { color: #fff; font-size: 2.2rem; font-weight: 800; margin-bottom: 28px; }
//   .sc-scam p {
//     color: #cdd5ec;
//     font-size: 0.97rem;
//     line-height: 1.8;
//     margin-bottom: 20px;
//     text-align: left;
//   }
//   .sc-scam strong { color: #fff; }

//   /* Buttons */
//   .sc-btn-outline, .sc-btn-primary {
//     display: inline-block;
//     margin-top: 16px;
//     padding: 12px 40px;
//     font-weight: 700;
//     font-size: 0.9rem;
//     border-radius: 50px;
//     transition: all 0.2s;
//     cursor: pointer;
//     text-decoration: none;
//   }
//   .sc-btn-outline {
//     border: 2px solid #fff;
//     color: #fff !important;
//     background: transparent;
//   }
//   .sc-btn-outline:hover { background: #fff; color: #1a2a5e !important; }
//   .sc-btn-primary {
//     background: #1a2a5e;
//     color: #fff !important;
//     border: none;
//     border-radius: 7px;
//   }
//   .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); }

//   /* Explore grid */
//   .sc-explore-grid {
//     display: grid;
//     grid-template-columns: 1fr 1fr;
//     gap: 48px;
//     align-items: center;
//   }
//   .sc-explore-img {
//     width: 100%;
//     border-radius: 16px;
//     object-fit: cover;
//     max-height: 480px;
//   }
//   .sc-explore-text h2 { font-size: 2rem; font-weight: 800; color: #1a2a5e; margin-bottom: 20px; }
//   .sc-explore-text p {
//     font-size: 0.97rem;
//     color: #555;
//     line-height: 1.8;
//     margin-bottom: 16px;
//     text-align: left;
//   }

//   /* Clients section – static logos, no animation */
//   .sc-clients { background: #f7f8fc; padding: 80px 24px; }
//   .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
//   .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
//   .sc-logos-wrap {
//     overflow-x: auto;
//     display: flex;
//     justify-content: center;
//   }
//   .sc-logos-track {
//     display: flex;
//     flex-wrap: wrap;
//     justify-content: center;
//     gap: 32px;
//     width: 100%;
//   }
//   .sc-logo-item {
//     height: 70px;
//     width: 150px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-shrink: 0;
//   }
//   .sc-logo-item img {
//     max-height: 55px;
//     max-width: 140px;
//     object-fit: contain;
//     filter: grayscale(1);
//     opacity: 0.55;
//     transition: all 0.2s;
//   }
//   .sc-logo-item img:hover { filter: grayscale(0); opacity: 1; }
//   .sc-clients-desc {
//     text-align: left;
//     max-width: 780px;
//     margin: 52px auto 0;
//     font-size: 0.94rem;
//     color: #666;
//     line-height: 1.8;
//   }

//   /* Responsive */
//   @media (max-width: 900px) {
//     .sc-hero-content h1 { font-size: 2.4rem; }
//     .sc-intro-grid, .sc-explore-grid {
//       grid-template-columns: 1fr;
//       gap: 40px;
//     }
//     .sc-intro-img, .sc-explore-img {
//       max-height: 350px;
//       width: 100%;
//       object-fit: cover;
//     }
//     .sc-section-title { font-size: 1.8rem; }
//     .sc-logos-track { gap: 20px; }
//     .sc-logo-item { width: 120px; height: 60px; }
//   }
//   @media (max-width: 560px) {
//     .sc-hero-content h1 { font-size: 1.9rem; }
//     .sc-section { padding: 60px 20px; }
//     .sc-btn-outline, .sc-btn-primary { padding: 10px 28px; font-size: 0.8rem; }
//   }
// `;

// function Hero() {
//   return (
//     <div className="sc-hero">
//       <div className="sc-hero-bg" />
//       <div className="sc-hero-overlay" />
//       <div className="sc-hero-content">
//         <h1>Find your future</h1>
//         <p>Are you ready to take on the challenge</p>
//       </div>
//     </div>
//   );
// }

// function IntroSection() {
//   return (
//     <section className="sc-section sc-section-alt">
//       <div className="sc-container">
//         <div className="sc-intro-grid">
//           <div className="sc-intro-text">
//             <span className="sc-label">Careers</span>
//             <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
//             <p>
//               At SHNOOR International LLC, we believe that great companies are built by great
//               people. We're looking for innovators, problem-solvers, and go-getters who are
//               passionate about making an impact in the worlds of technology and global trade.
//             </p>
//             <p>
//               Whether you're an IT expert, software developer, SAP consultant, business strategist,
//               or trade professional, this is your chance to be part of a company that values
//               creativity, collaboration, and continuous growth.
//             </p>
//             <p>
//               At SHNOOR International, you won't just be doing a job—you'll be building a career
//               where your skills make a difference.
//             </p>
//             <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
//           </div>
//           <div>
//             <img
//               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
//               alt="SHNOOR Team"
//               className="sc-intro-img"
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function RecruitmentScams() {
//   return (
//     <section className="sc-scam">
//       <div className="sc-scam-inner">
//         <h2>Recruitment Scams</h2>
//         <p>
//           At SHNOOR International LLC, integrity and transparency are at the heart of our
//           recruitment process. We want to alert all job seekers that we never charge any fees,
//           request payments, or ask for financial information at any stage of our hiring process.
//         </p>
//         <p>
//           To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
//           receive any communication — via email, phone, social media, or messaging apps — claiming
//           to represent SHNOOR International and requesting money for job opportunities, please treat
//           it as a scam. Such activities are fraudulent and have no connection with our company.
//         </p>
//         <a href="/recruitment-scams" className="sc-btn-outline">
//           Read More
//         </a>
//       </div>
//     </section>
//   );
// }

// function ExploreSection() {
//   return (
//     <section className="sc-section">
//       <div className="sc-container">
//         <div className="sc-explore-grid">
//           <div>
//             <img
//               src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
//               alt="Explore SHNOOR"
//               className="sc-explore-img"
//             />
//           </div>
//           <div className="sc-explore-text">
//             <span className="sc-label">Explore</span>
//             <h2>Explore SHNOOR</h2>
//             <p>
//               When you join us, you become part of a passionate, diverse, and forward-thinking team
//               that believes in pushing boundaries and delivering excellence. From IT Consulting,
//               Product Development, and SAP Outsourcing to international import &amp; export
//               operations, our work spans industries, regions, and technologies.
//             </p>
//             <p>
//               At SHNOOR International LLC, every career path is a journey of growth, innovation,
//               and impact. We are more than just a workplace — we're a dynamic hub where technology
//               meets global trade, creating opportunities that challenge your skills and expand your
//               horizons.
//             </p>
//             <a href="/student-opportunities" className="sc-btn-primary">
//               Latest Openings
//             </a>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

// function ClientsSection() {
//   return (
//     <section className="sc-clients">
//       <div className="sc-container">
//         <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
//         <p className="sc-clients-sub">
//           "Building long-term partnerships, one success story at a time."
//         </p>
//         <div className="sc-logos-wrap">
//           <div className="sc-logos-track">
//             {CLIENT_LOGOS.map((logo, i) => (
//               <div className="sc-logo-item" key={i}>
//                 <img src={logo.src} alt={logo.alt} />
//               </div>
//             ))}
//           </div>
//         </div>
//         <p className="sc-clients-desc">
//           At SHNOOR International LLC, our clients are at the heart of everything we do. From
//           emerging startups to global enterprises, we work with businesses across industries and
//           geographies — delivering IT solutions, SAP outsourcing, and global trade services that
//           drive measurable results.
//           <br /><br />
//           We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
//           and Malaysia, and our success is built on their success.
//         </p>
//       </div>
//     </section>
//   );
// }

// export default function Careers() {
//   useEffect(() => {
//     const styleId = "shnoor-careers-global";
//     if (!document.getElementById(styleId)) {
//       const tag = document.createElement("style");
//       tag.id = styleId;
//       tag.textContent = GLOBAL_CSS;
//       document.head.appendChild(tag);
//     }
//     return () => {
//       const el = document.getElementById(styleId);
//       if (el) el.remove();
//     };
//   }, []);

//   return (
//     <div className="sc-page">
//       <Hero />
//       <IntroSection />
//       <RecruitmentScams />
//       <ExploreSection />
//       <ClientsSection />
//     </div>
//   );
// }

import { useEffect } from "react";

const CLIENT_LOGOS = [
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/01-dWxORbGBg6sxgO1g.png", alt: "Client 1" },
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/02-YbNJR9eq7Kf56DK3.png", alt: "Client 2" },
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/03-mxBXR70MoNfDJ48L.jpg", alt: "Client 3" },
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/04-mv0JR7kok6S0P715.jpg", alt: "Client 4" },
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/10-m7VbaKEMlzf5y8EL.png", alt: "Client 5" },
  { src: "https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=375,fit=crop/AQEZlaZbvrt8n2qw/12-mk3JR98azWfGQP71.png", alt: "Client 6" },
];

const GLOBAL_CSS = `
  .sc-page * { margin: 0; padding: 0; box-sizing: border-box; }
  .sc-page { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #222; background: #fff; }
  .sc-page a { text-decoration: none; color: inherit; }
  .sc-page img { display: block; max-width: 100%; height: auto; }

  /* Hero */
  .sc-hero {
    position: relative;
    min-height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    overflow: hidden;
  }
  .sc-hero-bg {
    position: absolute;
    inset: 0;
    background-image: url('https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=1920,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png');
    background-size: cover;
    background-position: center;
  }
  .sc-hero-overlay { position: absolute; inset: 0; background: rgba(10,20,60,0.55); }
  .sc-hero-content {
    position: relative;
    z-index: 2;
    padding: 60px 24px;
    max-width: 800px;
    margin: 0 auto;
  }
  .sc-hero-content h1 {
    font-size: 3.4rem;
    font-weight: 800;
    color: #fff;
    line-height: 1.2;
    margin-bottom: 18px;
  }
  .sc-hero-content p { font-size: 1.15rem; color: rgba(255,255,255,0.9); }

  /* Sections */
  .sc-section { padding: 80px 24px; }
  .sc-section-alt { background: #f7f8fc; }
  .sc-container { max-width: 1140px; margin: 0 auto; }
  .sc-label {
    display: inline-block;
    font-size: 11.5px;
    font-weight: 700;
    letter-spacing: 0.13em;
    text-transform: uppercase;
    color: #1a2a5e;
    background: #e8ecf8;
    padding: 5px 14px;
    border-radius: 20px;
    margin-bottom: 18px;
  }
  .sc-section-title {
    font-size: 2rem;
    font-weight: 800;
    color: #1a2a5e;
    line-height: 1.3;
    margin-bottom: 24px;
  }

  /* Intro grid */
  .sc-intro-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
    margin-top: 32px;
  }
  .sc-intro-text p {
    font-size: 0.97rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 16px;
    text-align: left;
  }
  .sc-intro-text p.sc-bold { font-weight: 700; color: #1a2a5e; }
  .sc-intro-img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    max-height: 450px;
  }

  /* Recruitment Scams */
  .sc-scam { background: #1a2a5e; padding: 80px 24px; text-align: center; }
  .sc-scam-inner { max-width: 840px; margin: 0 auto; }
  .sc-scam h2 { color: #fff; font-size: 2.2rem; font-weight: 800; margin-bottom: 28px; }
  .sc-scam p {
    color: #cdd5ec;
    font-size: 0.97rem;
    line-height: 1.8;
    margin-bottom: 20px;
    text-align: left;
  }
  .sc-scam strong { color: #fff; }

  /* Buttons */
  .sc-btn-outline, .sc-btn-primary {
    display: inline-block;
    margin-top: 16px;
    padding: 12px 40px;
    font-weight: 700;
    font-size: 0.9rem;
    border-radius: 50px;
    transition: all 0.2s;
    cursor: pointer;
    text-decoration: none;
  }
  .sc-btn-outline {
    border: 2px solid #fff;
    color: #fff !important;
    background: transparent;
  }
  .sc-btn-outline:hover { background: #fff; color: #1a2a5e !important; }
  .sc-btn-primary {
    background: #1a2a5e;
    color: #fff !important;
    border: none;
    border-radius: 7px;
  }
  .sc-btn-primary:hover { background: #253d8a; transform: translateY(-2px); }

  /* Explore grid */
  .sc-explore-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 48px;
    align-items: center;
  }
  .sc-explore-img {
    width: 100%;
    border-radius: 16px;
    object-fit: cover;
    max-height: 480px;
  }
  .sc-explore-text h2 { font-size: 2rem; font-weight: 800; color: #1a2a5e; margin-bottom: 20px; }
  .sc-explore-text p {
    font-size: 0.97rem;
    color: #555;
    line-height: 1.8;
    margin-bottom: 16px;
    text-align: left;
  }

  /* Clients section – COLOR logos, no grayscale/darkening */
  .sc-clients { background: #f7f8fc; padding: 80px 24px; }
  .sc-clients-heading { text-align: center; font-size: 1.7rem; font-weight: 800; color: #1a2a5e; margin-bottom: 8px; }
  .sc-clients-sub { text-align: center; color: #999; font-style: italic; font-size: 0.9rem; margin-bottom: 52px; }
  .sc-logos-wrap {
    overflow-x: auto;
    display: flex;
    justify-content: center;
  }
  .sc-logos-track {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 32px;
    width: 100%;
  }
  .sc-logo-item {
    height: 70px;
    width: 150px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
  }
  /* Removed grayscale and opacity – full color logos */
  .sc-logo-item img {
    max-height: 55px;
    max-width: 140px;
    object-fit: contain;
    filter: none;
    opacity: 1;
    transition: transform 0.2s;
  }
  .sc-logo-item img:hover {
    transform: scale(1.05);
  }
  .sc-clients-desc {
    text-align: left;
    max-width: 780px;
    margin: 52px auto 0;
    font-size: 0.94rem;
    color: #666;
    line-height: 1.8;
  }

  /* Responsive */
  @media (max-width: 900px) {
    .sc-hero-content h1 { font-size: 2.4rem; }
    .sc-intro-grid, .sc-explore-grid {
      grid-template-columns: 1fr;
      gap: 40px;
    }
    .sc-intro-img, .sc-explore-img {
      max-height: 350px;
      width: 100%;
      object-fit: cover;
    }
    .sc-section-title { font-size: 1.8rem; }
    .sc-logos-track { gap: 20px; }
    .sc-logo-item { width: 120px; height: 60px; }
  }
  @media (max-width: 560px) {
    .sc-hero-content h1 { font-size: 1.9rem; }
    .sc-section { padding: 60px 20px; }
    .sc-btn-outline, .sc-btn-primary { padding: 10px 28px; font-size: 0.8rem; }
  }
`;

function Hero() {
  return (
    <div className="sc-hero">
      <div className="sc-hero-bg" />
      <div className="sc-hero-overlay" />
      <div className="sc-hero-content">
        <h1>Find your future</h1>
        <p>Are you ready to take on the challenge</p>
      </div>
    </div>
  );
}

function IntroSection() {
  return (
    <section className="sc-section sc-section-alt">
      <div className="sc-container">
        <div className="sc-intro-grid">
          <div className="sc-intro-text">
            <span className="sc-label">Careers</span>
            <h2 className="sc-section-title">Build a Career, Not Just a Job</h2>
            <p>
              At SHNOOR International LLC, we believe that great companies are built by great
              people. We're looking for innovators, problem-solvers, and go-getters who are
              passionate about making an impact in the worlds of technology and global trade.
            </p>
            <p>
              Whether you're an IT expert, software developer, SAP consultant, business strategist,
              or trade professional, this is your chance to be part of a company that values
              creativity, collaboration, and continuous growth.
            </p>
            <p>
              At SHNOOR International, you won't just be doing a job—you'll be building a career
              where your skills make a difference.
            </p>
            <p className="sc-bold">SHNOOR - Get the future you want. !!</p>
          </div>
          <div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=647,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_wx9vbuwx9vbuwx9v-dOqZ8KDrQZsMWo0k.png"
              alt="SHNOOR Team"
              className="sc-intro-img"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function RecruitmentScams() {
  return (
    <section className="sc-scam">
      <div className="sc-scam-inner">
        <h2>Recruitment Scams</h2>
        <p>
          At SHNOOR International LLC, integrity and transparency are at the heart of our
          recruitment process. We want to alert all job seekers that we never charge any fees,
          request payments, or ask for financial information at any stage of our hiring process.
        </p>
        <p>
          To protect any spam, ensure emails come from <strong>@shnoor.com</strong>. If you
          receive any communication — via email, phone, social media, or messaging apps — claiming
          to represent SHNOOR International and requesting money for job opportunities, please treat
          it as a scam. Such activities are fraudulent and have no connection with our company.
        </p>
        <a href="/recruitment-scams" className="sc-btn-outline">
          Read More
        </a>
      </div>
    </section>
  );
}

function ExploreSection() {
  return (
    <section className="sc-section">
      <div className="sc-container">
        <div className="sc-explore-grid">
          <div>
            <img
              src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=768,h=794,fit=crop/AQEZlaZbvrt8n2qw/gemini_generated_image_8dx5tx8dx5tx8dx5-mxB2MDw50Xhy2VxN.png"
              alt="Explore SHNOOR"
              className="sc-explore-img"
            />
          </div>
          <div className="sc-explore-text">
            <span className="sc-label">Explore</span>
            <h2>Explore SHNOOR</h2>
            <p>
              When you join us, you become part of a passionate, diverse, and forward-thinking team
              that believes in pushing boundaries and delivering excellence. From IT Consulting,
              Product Development, and SAP Outsourcing to international import &amp; export
              operations, our work spans industries, regions, and technologies.
            </p>
            <p>
              At SHNOOR International LLC, every career path is a journey of growth, innovation,
              and impact. We are more than just a workplace — we're a dynamic hub where technology
              meets global trade, creating opportunities that challenge your skills and expand your
              horizons.
            </p>
            <a href="/student-opportunities" className="sc-btn-primary">
              Latest Openings
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function ClientsSection() {
  return (
    <section className="sc-clients">
      <div className="sc-container">
        <h2 className="sc-clients-heading">Our Clients Worldwide</h2>
        <p className="sc-clients-sub">
          "Building long-term partnerships, one success story at a time."
        </p>
        <div className="sc-logos-wrap">
          <div className="sc-logos-track">
            {CLIENT_LOGOS.map((logo, i) => (
              <div className="sc-logo-item" key={i}>
                <img src={logo.src} alt={logo.alt} />
              </div>
            ))}
          </div>
        </div>
        <p className="sc-clients-desc">
          At SHNOOR International LLC, our clients are at the heart of everything we do. From
          emerging startups to global enterprises, we work with businesses across industries and
          geographies — delivering IT solutions, SAP outsourcing, and global trade services that
          drive measurable results.
          <br /><br />
          We take pride in earning the trust of organizations in India, UAE, Bahrain, Qatar, Oman,
          and Malaysia, and our success is built on their success.
        </p>
      </div>
    </section>
  );
}

export default function Careers() {
  useEffect(() => {
    const styleId = "shnoor-careers-global";
    if (!document.getElementById(styleId)) {
      const tag = document.createElement("style");
      tag.id = styleId;
      tag.textContent = GLOBAL_CSS;
      document.head.appendChild(tag);
    }
    return () => {
      const el = document.getElementById(styleId);
      if (el) el.remove();
    };
  }, []);

  return (
    <div className="sc-page">
      <Hero />
      <IntroSection />
      <RecruitmentScams />
      <ExploreSection />
      <ClientsSection />
    </div>
  );
}