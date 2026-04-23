

CREATE DATABASE shnoor_db;
\c shnoor_db;

-- Contact form submissions
CREATE TABLE IF NOT EXISTS contacts (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  mobile VARCHAR(20) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  service VARCHAR(100),
  status VARCHAR(20) DEFAULT 'new',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Career applications
CREATE TABLE IF NOT EXISTS careers (
  id SERIAL PRIMARY KEY,
  full_name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  position VARCHAR(100) NOT NULL,
  experience VARCHAR(50),
  cover_letter TEXT,
  resume_url VARCHAR(255),
  status VARCHAR(20) DEFAULT 'pending',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Job listings
CREATE TABLE IF NOT EXISTS job_listings (
  id SERIAL PRIMARY KEY,
  title VARCHAR(150) NOT NULL,
  department VARCHAR(100),
  location VARCHAR(100),
  type VARCHAR(50),
  description TEXT,
  requirements TEXT,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- News/Blog posts
CREATE TABLE IF NOT EXISTS news (
  id SERIAL PRIMARY KEY,
  title VARCHAR(200) NOT NULL,
  slug VARCHAR(200) UNIQUE NOT NULL,
  excerpt TEXT,
  content TEXT,
  image_url VARCHAR(255),
  read_time INTEGER DEFAULT 2,
  is_published BOOLEAN DEFAULT true,
  published_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Newsletter subscriptions
CREATE TABLE IF NOT EXISTS newsletter (
  id SERIAL PRIMARY KEY,
  email VARCHAR(100) UNIQUE NOT NULL,
  subscribed_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Seed job listings
INSERT INTO job_listings (title, department, location, type, description, requirements) VALUES
('SAP Consultant', 'IT Solutions', 'Muscat, Oman', 'Full-time',
 'We are looking for an experienced SAP Consultant to join our growing team.',
 'Bachelor degree in IT or related field, 3+ years SAP experience, Strong analytical skills'),
('IT Project Manager', 'Technology', 'UAE / Remote', 'Full-time',
 'Lead end-to-end IT project delivery for our international clients.',
 '5+ years project management, PMP certification preferred, Excellent communication'),
('Export Coordinator', 'Trade & Logistics', 'Muscat, Oman', 'Full-time',
 'Manage export documentation, customs compliance, and logistics operations.',
 '2+ years in export/import, Knowledge of GCC trade regulations, Attention to detail'),
('Software Developer (Full Stack)', 'IT Solutions', 'Remote', 'Full-time',
 'Build scalable web applications for our clients across the globe.',
 'React, Node.js, PostgreSQL experience, 3+ years development experience'),
('Business Development Executive', 'Sales', 'UAE / India', 'Full-time',
 'Drive new business acquisition and maintain client relationships in the IT and trade sectors.',
 '3+ years B2B sales, International market experience, Strong networking skills');

-- Seed news
INSERT INTO news (title, slug, excerpt, content, image_url, read_time) VALUES
('SAP MM (Materials Management): A Comprehensive Overview, Features, and Business Benefits',
 'sap-mm-overview',
 'Learn how SAP MM helps businesses manage procurement, inventory, and vendor processes efficiently.',
 'SAP MM (Materials Management) is a core module of the SAP ERP system that handles procurement and inventory management functions...',
 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=500',
 2),
('Import & Export Solutions for India & UAE: Simplifying Global Trade Operations',
 'import-export-india-uae',
 'Discover reliable import and export solutions for India and UAE.',
 'International trade between India and UAE has grown significantly over the past decade...',
 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500',
 3),
('Building Trust and Security Through Reliable Background Verification Services',
 'background-verification-services',
 'Protect your organization with our professional background verification solutions.',
 'In today''s competitive job market, ensuring the integrity of your workforce starts with thorough background checks...',
 'https://images.unsplash.com/photo-1614064641938-3bbee52942c7?w=500',
 2);
