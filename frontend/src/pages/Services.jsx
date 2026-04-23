// import React from 'react';
// import { Link, useParams } from 'react-router-dom';
// import './Services.css';

// const allServices = {
// 'cloud-management': {
// icon: '☁️',
// title: 'Cloud Management',
// tagline: 'Scalable cloud infrastructure for the modern enterprise',
// desc: 'SHNOOR International provides end-to-end cloud management services including cloud strategy, architecture design, migration, and ongoing management. We work across AWS, Azure, and Google Cloud platforms to deliver secure, scalable, and cost-efficient infrastructure.',
// features: ['Cloud Strategy & Roadmap', 'Infrastructure Migration', 'Cloud Security & Compliance', 'Cost Optimization', '24/7 Monitoring & Support', 'Multi-cloud Management'],
// image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
// },
// 'enterprise-management': {
// icon: '🏢',
// title: 'Enterprise Management',
// tagline: 'Streamline operations with powerful ERP solutions',
// desc: 'We deliver comprehensive enterprise management solutions including ERP implementation, business process optimization, and system integration. Our experts help organizations modernize their operations and improve efficiency across departments.',
// features: ['ERP Implementation', 'Process Automation', 'System Integration', 'Change Management', 'Business Analytics', 'Digital Transformation'],
// image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
// },
// 'data-ai': {
// icon: '🤖',
// title: 'Data & Artificial Intelligence',
// tagline: 'Turning data into your most powerful business asset',
// desc: 'Harness the power of big data and AI with SHNOOR\'s data science and analytics services. From data engineering to predictive modeling and AI-powered applications, we help you extract meaningful insights to drive smarter decisions.',
// features: ['Data Engineering & Pipelines', 'Machine Learning Models', 'Predictive Analytics', 'Business Intelligence', 'Natural Language Processing', 'AI-Powered Automation'],
// image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
// },
// 'it-consulting': {
// icon: '👥',
// title: 'IT Consulting & Staffing',
// tagline: 'Expert IT talent when and where you need it',
// desc: 'SHNOOR connects businesses with top IT professionals across multiple domains. Whether you need a single specialist or an entire team, our staffing solutions are tailored to match your technical requirements and corporate culture.',
// features: ['IT Staff Augmentation', 'Permanent Placement', 'Contract Staffing', 'Executive Search', 'Technical Assessment', 'Onboarding Support'],
// image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
// },
// 'background-verification': {
// icon: '🔍',
// title: 'Background Verification',
// tagline: 'Build trust with thorough, reliable verification',
// desc: 'Protect your organization with our professional background verification services. We help you validate candidate credentials, screen criminal records, verify employment history, and ensure every hire meets your company\'s standards.',
// features: ['Criminal Record Check', 'Employment History Verification', 'Education Credential Check', 'Reference Verification', 'Identity Verification', 'International Checks'],
// image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
// },
// 'healthcare': {
// icon: '🏥',
// title: 'Healthcare IT',
// tagline: 'Technology solutions tailored for healthcare providers',
// desc: 'SHNOOR offers specialized IT solutions designed for hospitals, clinics, and healthcare organizations. From electronic health records to telemedicine platforms, we help healthcare providers deliver better patient outcomes through technology.',
// features: ['Electronic Health Records (EHR)', 'Telemedicine Solutions', 'Hospital Management Systems', 'Medical Data Analytics', 'HIPAA Compliance', 'Healthcare Interoperability'],
// image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
// },
// 'sap-outsourcing': {
// icon: '⚙️',
// title: 'SAP Outsourcing',
// tagline: 'Full-spectrum SAP support and implementation',
// desc: 'Our SAP certified consultants deliver end-to-end SAP services including implementation, customization, migration, and ongoing support. We cover all major SAP modules to help businesses optimize their enterprise operations.',
// features: ['SAP Implementation', 'SAP S/4HANA Migration', 'SAP MM / SD / FI / HR', 'Custom SAP Development', 'SAP Support & Maintenance', 'SAP Training'],
// image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
// },
// 'app-development': {
// icon: '💻',
// title: 'App Development',
// tagline: 'Custom software built for your unique needs',
// desc: 'SHNOOR\'s development team builds high-performance web and mobile applications tailored to your business goals. From concept to deployment, we deliver scalable, user-friendly applications using modern technologies.',
// features: ['Web Application Development', 'Mobile App (iOS & Android)', 'UI/UX Design', 'API Development & Integration', 'Quality Assurance', 'DevOps & Deployment'],
// image: 'https://images.unsplash.com/photo-1587620962725-abab19836100?w=800&q=80',
// },
// };

// const serviceList = Object.entries(allServices).map(([slug, s]) => ({ slug, ...s }));

// export default function Services() {
// const { slug } = useParams();
// const service = slug ? allServices[slug] : null;

// if (service) {
// return (
// <div className="service-detail">
// <section className="page-hero">
// <div className="page-hero-overlay" style={{backgroundImage:`url(${service.image})`}} />
// <div className="container page-hero-content">
// <span className="section-tag">Services</span>
// <h1>{service.icon} {service.title}</h1>
// <p>{service.tagline}</p>
// <div className="breadcrumb">
// </div>
// </div>
// </section>

// <section className="section-padding">
// <div className="container service-detail-grid">
// <div className="service-detail-main">
// <h2>Overview</h2>
// <p>{service.desc}</p>
// <h3 style={{marginTop:'32px', marginBottom:'20px'}}>Key Features</h3>
// <div className="features-grid">
// {service.features.map((f, i) => (
// <div key={i} className="feature-item">
// <span className="feature-check">✓</span>
// <span>{f}</span>
// </div>
// ))}
// </div>
// <div style={{marginTop:'36px', display:'flex', gap:'12px', flexWrap:'wrap'}}>
// <Link to="/contact" className="btn-primary">Get Started</Link>
// <Link to="/services" className="btn-gold">All Services</Link>
// </div>
// </div>
// <div className="service-detail-sidebar">
// <div className="sidebar-card">
// <h4>All Services</h4>
// {serviceList.map((s) => (
// <Link key={s.slug} to={`/services/${s.slug}`} className={`sidebar-link ${slug === s.slug ? 'active' : ''}`}>
// <span>{s.icon}</span> {s.title}
// </Link>
// ))}
// </div>
// <div className="sidebar-cta">
// <h4>Need Help?</h4>
// <p>Talk to our experts about the best solution for your business.</p>
// <Link to="/contact" className="btn-primary" style={{marginTop:'16px', width:'100%', justifyContent:'center'}}>Contact Us</Link>
// </div>
// </div>
// </div>
// </section>
// </div>
// );
// }

// return (
// <div className="services-page">
// <section className="page-hero">
// <div className="page-hero-overlay" />
// <div className="container page-hero-content">
// <span className="section-tag">What We Offer</span>
// <h1>Our Services</h1>
// <p>Comprehensive IT and global trade solutions for modern businesses</p>
// <div className="breadcrumb">

// </div>
// </div>
// </section>

// <section className="section-padding">
// <div className="container">
// <div className="services-listing">
// {serviceList.map((s, i) => (
// <div key={i} className={`service-listing-card ${i % 2 === 1 ? 'reverse' : ''}`}>
// <div className="slc-image">
// <img src={s.image} alt={s.title} />
// </div>
// <div className="slc-content">
// <span className="slc-icon">{s.icon}</span>
// <h2>{s.title}</h2>
// <p className="slc-tagline">{s.tagline}</p>
// <p>{s.desc.substring(0, 200)}...</p>
// <div className="slc-features">
// {s.features.slice(0, 4).map((f, fi) => (
// <span key={fi} className="slc-feature-tag">{f}</span>
// ))}
// </div>
// <Link to={`/services/${s.slug}`} className="btn-primary" style={{marginTop:'20px'}}>Learn More →</Link>
// </div>
// </div>
// ))}
// </div>
// </div>
// </section>
// </div>
// );
// }
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Services.css';

const allServices = {
'cloud-management': {
icon: '☁️',
title: 'Cloud Management',
tagline: 'Scalable cloud infrastructure for the modern enterprise',
desc: 'SHNOOR International provides end-to-end cloud management services including cloud strategy, architecture design, migration, and ongoing management. We work across AWS, Azure, and Google Cloud platforms to deliver secure, scalable, and cost-efficient infrastructure. Our cloud experts design, deploy, and manage solutions tailored to your business needs, ensuring you get the perfect balance of performance, security, and scalability.',
longDesc: 'In today\'s digital era, the cloud is no longer an option—it\'s a necessity. At SHNOOR International LLC, we help businesses harness the full potential of cloud technology to optimize operations, improve collaboration, and reduce infrastructure costs. From planning to ongoing optimization, our team is with you at every stage of your cloud journey. We offer three core categories of cloud services: Cloud for Customer First, Cloud for Enterprise Management, and Cloud for the Intelligent Enterprise.',
features: [
'Cloud Strategy & Roadmap',
'Infrastructure Migration',
'Cloud Security & Compliance',
'Cost Optimization',
'24/7 Monitoring & Support',
'Multi-cloud Management',
'AWS Cloud Solutions',
'Google Cloud Platform (GCP)',
'Microsoft Azure Services',
'Disaster Recovery & Backup',
'DevOps & CI/CD Pipelines',
'Cloud-Native App Development',
],
image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1753044346424-1ba619c33dc0?w=600&q=80',
caption: 'AWS Cloud — World\'s most comprehensive cloud platform',
},
{
url: 'https://images.unsplash.com/photo-1728710718080-3cf64d995d2c?w=600&q=80',
caption: 'Google Cloud — Agility, scalability, and innovation',
},
{
url: 'https://images.unsplash.com/photo-1570063578733-6a33b69d1439?w=600&q=80',
caption: 'Microsoft Azure — Leading enterprise cloud platform',
},
],
stats: [
{ value: '3+', label: 'Cloud Platforms' },
{ value: '99.9%', label: 'Uptime SLA' },
{ value: '40%', label: 'Avg Cost Reduction' },
{ value: '24/7', label: 'Support Coverage' },
],
},
'enterprise-management': {
icon: '🏢',
title: 'Enterprise Management',
tagline: 'Streamline operations with powerful ERP solutions',
desc: 'We deliver comprehensive enterprise management solutions including ERP implementation, business process optimization, and system integration. Our experts help organizations modernize their operations and improve efficiency across departments.',
longDesc: 'SHNOOR International LLC helps enterprises transform their operations through smart technology adoption. Whether you\'re looking to implement a new ERP system, automate repetitive processes, or integrate disparate business systems, our consultants bring deep domain expertise and proven methodologies to deliver results that matter. We work with businesses across manufacturing, services, retail, and public sectors to drive sustainable digital transformation.',
features: [
'ERP Implementation & Rollout',
'Business Process Optimization',
'System Integration & API Connectivity',
'Change Management & Training',
'Business Analytics & Reporting',
'Digital Transformation Strategy',
'Workflow Automation',
'Performance Management Systems',
'Compliance & Governance Frameworks',
'Legacy System Modernization',
'Vendor Management Solutions',
'Enterprise Architecture Consulting',
],
image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&q=80',
caption: 'Strategic planning for enterprise-wide transformation',
},
{
url: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&q=80',
caption: 'Cross-departmental collaboration and integration',
},
{
url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80',
caption: 'Real-time business analytics and dashboards',
},
],
stats: [
{ value: '150+', label: 'ERP Deployments' },
{ value: '30%', label: 'Efficiency Gain' },
{ value: '20+', label: 'Industries Served' },
{ value: '95%', label: 'Client Retention' },
],
},
'data-ai': {
icon: '🤖',
title: 'Data & Artificial Intelligence',
tagline: 'Turning data into your most powerful business asset',
desc: 'Harness the power of big data and AI with SHNOOR\'s data science and analytics services. From data engineering to predictive modeling and AI-powered applications, we help you extract meaningful insights to drive smarter decisions.',
longDesc: 'In a data-driven world, organizations that harness AI and analytics gain a decisive competitive edge. SHNOOR International\'s data and AI practice helps businesses build robust data foundations, deploy machine learning models, and create intelligent automation that scales. Our team of data engineers, scientists, and AI specialists work end-to-end—from raw data ingestion to production-ready AI solutions—delivering measurable business value at every step.',
features: [
'Data Engineering & Pipelines',
'Machine Learning Models',
'Predictive Analytics',
'Business Intelligence & Dashboards',
'Natural Language Processing (NLP)',
'AI-Powered Automation',
'Big Data Architecture',
'Computer Vision Solutions',
'Generative AI Integration',
'Data Governance & Quality',
'Real-Time Data Streaming',
'AI Model Monitoring & MLOps',
],
image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1509718443690-d8e2fb3474b7?w=600&q=80',
caption: 'Advanced analytics and machine learning in action',
},
{
url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80',
caption: 'Business intelligence dashboards for real-time decisions',
},
{
url: 'https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=600&q=80',
caption: 'Generative AI and NLP powering next-gen applications',
},
],
stats: [
{ value: '500TB+', label: 'Data Processed' },
{ value: '200+', label: 'AI Models Deployed' },
{ value: '60%', label: 'Decision Speed Gain' },
{ value: '50+', label: 'Data Engineers' },
],
},
'it-consulting': {
icon: '👥',
title: 'IT Consulting & Staffing',
tagline: 'Expert IT talent when and where you need it',
desc: 'SHNOOR connects businesses with top IT professionals across multiple domains. Whether you need a single specialist or an entire team, our staffing solutions are tailored to match your technical requirements and corporate culture.',
longDesc: 'Finding the right IT talent is one of the biggest challenges businesses face today. SHNOOR International\'s consulting and staffing division bridges this gap by providing highly skilled professionals across technology domains—on demand, on time, and on budget. From short-term contract roles to permanent placements and full team augmentation, we deliver talent solutions that accelerate your projects and strengthen your organization.',
features: [
'IT Staff Augmentation',
'Permanent Placement',
'Contract & Temp Staffing',
'Executive IT Search',
'Technical Skills Assessment',
'Onboarding Support',
'Managed IT Services',
'Project-Based Teams',
'Remote & Offshore Staffing',
'Technology Leadership Hiring',
'Vendor-Neutral Consulting',
'Compliance & Labour Advisory',
],
image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80',
caption: 'High-performing IT teams ready to deploy',
},
{
url: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=600&q=80',
caption: 'Rigorous technical assessment and vetting',
},
{
url: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&q=80',
caption: 'Executive search and leadership placement',
},
],
stats: [
{ value: '1000+', label: 'Placements Made' },
{ value: '48hrs', label: 'Average Time to Match' },
{ value: '30+', label: 'Tech Domains Covered' },
{ value: '98%', label: 'Client Satisfaction' },
],
},
'background-verification': {
icon: '🔍',
title: 'Background Verification',
tagline: 'Build trust with thorough, reliable verification',
desc: 'Protect your organization with our professional background verification services. We help you validate candidate credentials, screen criminal records, verify employment history, and ensure every hire meets your company\'s standards.',
longDesc: 'Every hire is a risk if not properly verified. SHNOOR International\'s background verification service provides organizations with a comprehensive, fast, and accurate screening process to help them make informed hiring decisions. We leverage a global network of verification partners and advanced technology to deliver detailed reports, reducing fraud risk and protecting your workplace culture. Our services cover domestic and international checks, making us the ideal partner for globally expanding organizations.',
features: [
'Criminal Record Check',
'Employment History Verification',
'Education Credential Verification',
'Reference Verification',
'Identity & Document Verification',
'International Background Checks',
'Credit History Screening',
'Social Media Screening',
'Drug & Health Screening',
'Professional License Verification',
'Address & Residency Check',
'GDPR-Compliant Data Handling',
],
image: 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80',
caption: 'Document verification and credential validation',
},
{
url: 'https://images.unsplash.com/photo-1568992687947-868a62a9f521?w=600&q=80',
caption: 'Secure, compliant identity screening processes',
},
{
url: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=600&q=80',
caption: 'Global background check network',
},
],
stats: [
{ value: '50K+', label: 'Checks Completed' },
{ value: '72hrs', label: 'Average Turnaround' },
{ value: '40+', label: 'Countries Covered' },
{ value: '99.5%', label: 'Accuracy Rate' },
],
},
'network-management': {
icon: '🌐',
title: 'Network Management',
tagline: 'Keeping your business connected, secure, and running smoothly',
desc: 'SHNOOR International offers comprehensive network management services that ensure your IT infrastructure stays reliable, secure, and optimized. From 24/7 monitoring to proactive threat management, we keep your networks performing at their best.',
longDesc: 'A robust, secure network is the backbone of every modern business. SHNOOR International\'s network management experts provide end-to-end visibility and control over your entire network environment. We proactively detect and resolve issues before they impact operations, optimize bandwidth usage, enforce security policies, and ensure your business stays connected at all times. Whether you run a single-site operation or a global enterprise network, our solutions scale with you.',
features: [
'Real-Time Network Monitoring',
'Security Threat Management',
'Firewall Configuration & Management',
'Network Performance Optimization',
'Configuration & Change Management',
'Fault Detection & Resolution',
'VPN Setup & Management',
'Bandwidth & Traffic Analysis',
'Wireless Network Management',
'SD-WAN Solutions',
'Network Compliance Reporting',
'Disaster Recovery Planning',
],
image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1516383274235-5f42d6c6426d?w=600&q=80',
caption: 'Real-time network monitoring and alerting dashboards',
},
{
url: 'https://images.unsplash.com/photo-1688413399498-e35ed74b554f?w=600&q=80',
caption: 'Professional NOC team monitoring your infrastructure 24/7',
},
{
url: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
caption: 'Advanced network security and threat prevention',
},
],
stats: [
{ value: '99.9%', label: 'Network Uptime' },
{ value: '<15min', label: 'Avg Issue Resolution' },
{ value: '24/7', label: 'NOC Monitoring' },
{ value: '60%', label: 'Cost vs In-House' },
],
},
'healthcare': {
icon: '🏥',
title: 'Healthcare IT',
tagline: 'Technology solutions tailored for healthcare providers',
desc: 'SHNOOR offers specialized IT solutions designed for hospitals, clinics, and healthcare organizations. From electronic health records to telemedicine platforms, we help healthcare providers deliver better patient outcomes through technology.',
longDesc: 'Healthcare organizations face unique challenges that demand specialized technology solutions. SHNOOR International\'s Healthcare IT practice brings together clinical workflow expertise and modern technology to help hospitals, clinics, and health systems improve patient care, streamline operations, and meet compliance requirements. We understand the sensitivity of medical data and build solutions with security, privacy, and interoperability at their core.',
features: [
'Electronic Health Records (EHR)',
'Telemedicine & Virtual Care Platforms',
'Hospital Management Systems (HMS)',
'Medical Data Analytics',
'HIPAA & Healthcare Compliance',
'Healthcare Interoperability (HL7/FHIR)',
'Patient Portal Development',
'Medical Billing & Revenue Cycle',
'Lab Information Systems (LIS)',
'Radiology Information Systems (RIS)',
'Healthcare Cybersecurity',
'AI-Assisted Diagnostics',
],
image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&q=80',
caption: 'Modern telemedicine and virtual care platforms',
},
{
url: 'https://images.unsplash.com/photo-1504813184591-01572f98c85f?w=600&q=80',
caption: 'Electronic Health Records for seamless patient management',
},
{
url: 'https://images.unsplash.com/photo-1551190822-a9333d879b1f?w=600&q=80',
caption: 'AI-assisted analytics improving patient outcomes',
},
],
stats: [
{ value: '100+', label: 'Healthcare Clients' },
{ value: '100%', label: 'HIPAA Compliant' },
{ value: '35%', label: 'Admin Time Saved' },
{ value: '15+', label: 'EHR Platforms Supported' },
],
},
'sap-outsourcing': {
icon: '⚙️',
title: 'SAP Outsourcing',
tagline: 'Full-spectrum SAP support and implementation',
desc: 'Our SAP certified consultants deliver end-to-end SAP services including implementation, customization, migration, and ongoing support. We cover all major SAP modules to help businesses optimize their enterprise operations.',
longDesc: 'SAP is the backbone of thousands of enterprises worldwide, and getting the most out of it requires specialized expertise. SHNOOR International\'s SAP practice offers comprehensive outsourcing services that span the entire SAP lifecycle—from initial assessment and implementation to upgrade, customization, and long-term support. Our certified SAP consultants bring hands-on experience across industries and modules, delivering projects on time, on budget, and with maximum business impact.',
features: [
'SAP Implementation & Go-Live',
'SAP S/4HANA Migration',
'SAP MM (Materials Management)',
'SAP SD (Sales & Distribution)',
'SAP FI/CO (Finance & Controlling)',
'SAP HR / SuccessFactors',
'Custom SAP Development (ABAP)',
'SAP BTP & Integration Suite',
'SAP Fiori / UI5 Development',
'SAP Support & AMS',
'SAP Training & Knowledge Transfer',
'SAP License Advisory',
],
image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80',
caption: 'SAP implementation and project management excellence',
},
{
url: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&q=80',
caption: 'SAP S/4HANA migration and modernization',
},
{
url: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600&q=80',
caption: 'Custom SAP development and Fiori UI solutions',
},
],
stats: [
{ value: '80+', label: 'SAP Projects Delivered' },
{ value: '30+', label: 'Certified Consultants' },
{ value: '12+', label: 'SAP Modules Covered' },
{ value: '10+', label: 'Years SAP Experience' },
],
},
'app-development': {
icon: '💻',
title: 'App Development',
tagline: 'Custom software built for your unique needs',
desc: 'SHNOOR\'s development team builds high-performance web and mobile applications tailored to your business goals. From concept to deployment, we deliver scalable, user-friendly applications using modern technologies.',
longDesc: 'In an increasingly digital world, your software is your product. SHNOOR International\'s application development team delivers custom web and mobile solutions that solve real business problems. We follow agile methodologies, prioritize clean code and UX design, and build with scalability in mind from day one. Whether you\'re building a customer-facing app, an internal tool, or a complex enterprise platform, we have the talent and experience to bring your vision to life.',
features: [
'Web Application Development',
'Mobile App (iOS & Android)',
'Cross-Platform Development (React Native/Flutter)',
'UI/UX Design & Prototyping',
'API Development & Integration',
'Quality Assurance & Testing',
'DevOps & CI/CD Deployment',
'Progressive Web Apps (PWA)',
'E-Commerce Development',
'Microservices Architecture',
'Cloud-Native Applications',
'Post-Launch Support & Maintenance',
],
image: 'https://images.unsplash.com/photo-1587620962725-abab19836100?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&q=80',
caption: 'Cross-platform mobile app development',
},
{
url: 'https://images.unsplash.com/photo-1581291518857-4e27b48ff24e?w=600&q=80',
caption: 'UI/UX design and intuitive user experiences',
},
{
url: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&q=80',
caption: 'Agile development, DevOps and CI/CD pipelines',
},
],
stats: [
{ value: '200+', label: 'Apps Delivered' },
{ value: '50+', label: 'Tech Stacks Used' },
{ value: '4.9★', label: 'Avg Client Rating' },
{ value: '12wk', label: 'Avg Time to Launch' },
],
},
'logistics-management': {
icon: '🚢',
title: 'Logistics Management',
tagline: 'Seamless global trade from port to destination',
desc: 'SHNOOR International simplifies global trade with reliable logistics management solutions. We specialize in dry container operations for seamless import and export, with strong presence at Mumbai Port and Mundra Port, Gujarat—ensuring safe, timely delivery across international markets.',
longDesc: 'At SHNOOR International LLC, we don\'t just move goods—we move businesses forward. Our logistics division provides end-to-end supply chain solutions connecting India with the UAE, Bahrain, Qatar, Oman, and Malaysia. With operational bases at Mumbai Port and Mundra Port, Gujarat, we offer unmatched connectivity and efficiency for businesses expanding their global reach. Our dedicated team ensures every shipment is handled with precision—from documentation to final delivery—so clients can focus on growth while we manage the complexity.',
features: [
'Dry Container Supply & Management',
'Import & Export Operations',
'Customs Clearance & Documentation',
'Cargo Handling, Packing & Securing',
'Multi-Modal Transport (Sea, Rail & Road)',
'Real-Time Shipment Tracking',
'End-to-End Supply Chain Support',
'Mumbai & Mundra Port Operations',
'International Trade Compliance',
'Freight Forwarding',
'Warehouse Management',
'Last-Mile Delivery Solutions',
],
image: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=600&q=80',
caption: 'Dry container operations at major Indian ports',
},
{
url: 'https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?w=600&q=80',
caption: 'Global shipping lanes connecting India to GCC & SE Asia',
},
{
url: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
caption: 'Real-time cargo tracking and supply chain visibility',
},
],
stats: [
{ value: '5+', label: 'Countries Served' },
{ value: '2', label: 'Major Port Hubs' },
{ value: '10K+', label: 'Shipments Handled' },
{ value: '100%', label: 'Customs Compliance' },
],
},
'export-management': {
icon: '🌍',
title: 'Export Management',
tagline: 'Bridging Indian markets with the world',
desc: 'SHNOOR International provides comprehensive export management services, connecting Indian producers, farmers, and wholesalers with buyers across the UAE, Bahrain, Qatar, Oman, and Malaysia. We handle everything from sourcing to delivery, ensuring quality and compliance every step of the way.',
longDesc: 'As a dedicated import-export company headquartered in Muscat, Oman, SHNOOR International\'s export management division is built to close the gap between Indian suppliers and international buyers. We work with producers, farmers, and wholesalers to bring the finest Indian goods to global markets. Our qualified consultants manage the full trade lifecycle—from product sourcing and quality assurance to documentation, logistics, and delivery—so you can grow internationally with confidence.',
features: [
'Product Sourcing from India',
'Quality Inspection & Assurance',
'Export Documentation & Compliance',
'Buyer-Seller Matchmaking',
'Trade Finance Guidance',
'Regulatory & Customs Advisory',
'Packaging & Labelling Standards',
'Agricultural Commodity Exports',
'Industrial Goods Export',
'Market Research & Entry Strategy',
'Freight & Logistics Coordination',
'Post-Shipment Support',
],
image: 'https://images.unsplash.com/photo-1500916434205-0c77489c6cf7?w=800&q=80',
gallery: [
{
url: 'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?w=600&q=80',
caption: 'Strategic market entry across GCC and SE Asia',
},
{
url: 'https://images.unsplash.com/photo-1607082349566-187342175e2f?w=600&q=80',
caption: 'Quality agricultural and industrial commodity exports',
},
{
url: 'https://images.unsplash.com/photo-1520583457224-aee11bad5112?w=600&q=80',
caption: 'Connecting Indian suppliers with global buyers',
},
],
stats: [
{ value: '5+', label: 'Target Markets' },
{ value: '100+', label: 'Trade Partners' },
{ value: '500+', label: 'Export Deals Facilitated' },
{ value: 'Muscat', label: 'HQ Location' },
],
},
};

const serviceList = Object.entries(allServices).map(([slug, s]) => ({ slug, ...s }));

function StatsBar({ stats }) {
return (
<div className="service-stats-bar">
{stats.map((stat, i) => (
<div key={i} className="stat-item">
<span className="stat-value">{stat.value}</span>
<span className="stat-label">{stat.label}</span>
</div>
))}
</div>
);
}

function ImageGallery({ gallery }) {
return (
<div className="service-gallery">
{gallery.map((item, i) => (
<div key={i} className="gallery-item">
<img src={item.url} alt={item.caption} loading="lazy" />
<p className="gallery-caption">{item.caption}</p>
</div>
))}
</div>
);
}

export default function Services() {
const { slug } = useParams();
const service = slug ? allServices[slug] : null;

if (service) {
return (
<div className="service-detail">
<section className="page-hero">
<div className="page-hero-overlay" style={{ backgroundImage: `url(${service.image})` }} />
<div className="container page-hero-content">
<span className="section-tag">Services</span>
<h1>{service.icon} {service.title}</h1>
<p>{service.tagline}</p>
</div>
</section>

{service.stats && <StatsBar stats={service.stats} />}

<section className="section-padding">
<div className="container service-detail-grid">
<div className="service-detail-main">
<h2>Overview</h2>
<p>{service.longDesc || service.desc}</p>

<h3 style={{ marginTop: '32px', marginBottom: '20px' }}>Key Features & Capabilities</h3>
<div className="features-grid">
{service.features.map((f, i) => (
<div key={i} className="feature-item">
<span className="feature-check">✓</span>
<span>{f}</span>
</div>
))}
</div>

{service.gallery && (
<>
<h3 style={{ marginTop: '40px', marginBottom: '20px' }}>Our Work in Action</h3>
<ImageGallery gallery={service.gallery} />
</>
)}

<div style={{ marginTop: '36px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
<Link to="/contact" className="btn-primary">Get Started</Link>
<Link to="/services" className="btn-gold">All Services</Link>
</div>
</div>

<div className="service-detail-sidebar">
<div className="sidebar-card">
<h4>All Services</h4>
{serviceList.map((s) => (
<Link
key={s.slug}
to={`/services/${s.slug}`}
className={`sidebar-link ${slug === s.slug ? 'active' : ''}`}
>
<span>{s.icon}</span> {s.title}
</Link>
))}
</div>
<div className="sidebar-cta">
<h4>Need Help?</h4>
<p>Talk to our experts about the best solution for your business.</p>
<Link
to="/contact"
className="btn-primary"
style={{ marginTop: '16px', width: '100%', justifyContent: 'center' }}
>
Contact Us
</Link>
</div>
<div className="sidebar-contact-info">
<h4>Get in Touch</h4>
<p>📧 <a href="mailto:info@shnoor.com">info@shnoor.com</a></p>
<p>📧 <a href="mailto:proc@shnoor.com">proc@shnoor.com</a> (Sales)</p>
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
<p>Comprehensive IT solutions and global trade services for modern businesses</p>
</div>
</section>

<section className="section-padding">
<div className="container">
<div className="services-listing">
{serviceList.map((s, i) => (
<div key={i} className={`service-listing-card ${i % 2 === 1 ? 'reverse' : ''}`}>
<div className="slc-image">
<img src={s.image} alt={s.title} loading="lazy" />
{s.gallery && s.gallery[0] && (
<div className="slc-image-secondary">
<img src={s.gallery[0].url} alt={s.gallery[0].caption} loading="lazy" />
</div>
)}
</div>
<div className="slc-content">
<span className="slc-icon">{s.icon}</span>
<h2>{s.title}</h2>
<p className="slc-tagline">{s.tagline}</p>
<p>{s.desc.substring(0, 220)}...</p>
{s.stats && (
<div className="slc-stats">
{s.stats.slice(0, 3).map((stat, si) => (
<div key={si} className="slc-stat">
<span className="slc-stat-value">{stat.value}</span>
<span className="slc-stat-label">{stat.label}</span>
</div>
))}
</div>
)}
<div className="slc-features">
{s.features.slice(0, 4).map((f, fi) => (
<span key={fi} className="slc-feature-tag">{f}</span>
))}
</div>
<Link to={`/services/${s.slug}`} className="btn-primary" style={{ marginTop: '20px' }}>
Learn More →
</Link>
</div>
</div>
))}
</div>
</div>
</section>
</div>
);
}