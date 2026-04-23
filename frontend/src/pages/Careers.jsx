
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

//   /* Clients section – COLOR logos, no grayscale/darkening */
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
//   /* Removed grayscale and opacity – full color logos */
//   .sc-logo-item img {
//     max-height: 55px;
//     max-width: 140px;
//     object-fit: contain;
//     filter: none;
//     opacity: 1;
//     transition: transform 0.2s;
//   }
//   .sc-logo-item img:hover {
//     transform: scale(1.05);
//   }
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

function Hero(){return(
<div className="sc-hero">
<div className="sc-hero-bg" />
<div className="sc-hero-overlay" />
<div className="sc-hero-content">
<h1>Find your future</h1>
<p>Are you ready to take on the challenge</p>
</div>
</div>
)}

function IntroSection(){return(
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
)}

function RecruitmentScams(){return(
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
)}

function ExploreSection(){return(
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
)}

function ClientsSection(){return(
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
)}

export default function Careers() {
useEffect(()=>{
const styleId="shnoor-careers-global";
if(!document.getElementById(styleId)){
const tag=document.createElement("style");
tag.id=styleId;
tag.textContent=GLOBAL_CSS;
document.head.appendChild(tag);
}
return()=>{const el=document.getElementById(styleId);if(el)el.remove();};
},[]);

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