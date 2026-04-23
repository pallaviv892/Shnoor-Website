import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import jsPDF from 'jspdf';

const CompanyProfile = () => {
  const [downloadStatus, setDownloadStatus] = useState('preparing');
  const generateAndDownloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(22);
    doc.setTextColor(10, 25, 47);
    doc.text('SHNOOR INTERNATIONAL LLC', 20, 30);
    doc.setFontSize(12);
    doc.setTextColor(100, 100, 100);
    doc.text('Company Profile', 20, 40);
    
    doc.setFontSize(10);
    doc.setTextColor(0, 0, 0);
    const content = [
      '',
      'About Us',
      'SHNOOR INTERNATIONAL LLC is a global leader in IT solutions,',
      'international trade, and consulting services. With headquarters',
      'in Odessa, Missouri, we serve clients across North America,',
      'Europe, and Asia.',
      '',
      'Core Services',
      '• Cloud Management',
      '• Enterprise Management',
      '• Data & Artificial Intelligence',
      '• Consulting & Staffing',
      '• Background Verification',
      '• Health Care Solutions',
      '',
      'Contact Information',
      'Email: info@shnoor.com',
      'Phone: +1 (816) 555-1234',
      'Address: 10009 Mount Tabor Road, Odessa, MO, USA',
      '',
      '© 2025 SHNOOR INTERNATIONAL LLC. All rights reserved.'
    ];
    
    let y = 70;
    content.forEach(line => {
      doc.text(line, 20, y);
      y += 8;
    });
    
    doc.save('SHNOOR_Company_Profile.pdf');
    setDownloadStatus('downloaded');
  };

  useEffect(() => {
    generateAndDownloadPDF();
  }, []);

  const styles = {
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '48px 24px',
      fontFamily: "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
      backgroundColor: '#f8f9fa',
      minHeight: '100vh',
      textAlign: 'center',
    },
    paper: {
      backgroundColor: '#ffffff',
      borderRadius: '12px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
      padding: '48px',
      maxWidth: '600px',
      margin: '0 auto',
    },
    icon: {
      fontSize: '64px',
      marginBottom: '20px',
    },
    title: {
      fontSize: '28px',
      fontWeight: '700',
      color: '#0a192f',
      marginBottom: '16px',
    },
    message: {
      fontSize: '16px',
      color: '#2c3e50',
      marginBottom: '24px',
      lineHeight: '1.6',
    },
    button: {
      backgroundColor: '#c9a03d',
      color: '#ffffff',
      border: 'none',
      padding: '12px 28px',
      fontSize: '16px',
      fontWeight: '600',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'all 0.2s',
      marginTop: '16px',
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
        <div style={styles.icon}>📄</div>
        <h1 style={styles.title}>Company Profile</h1>
        <p style={styles.message}>
          {downloadStatus === 'preparing' && 'Generating your PDF... Please wait.'}
          {downloadStatus === 'downloaded' && 'Your download should have started automatically. If not, click below.'}
        </p>
        <button 
          style={styles.button}
          onClick={generateAndDownloadPDF}
        >
          Download Company Profile (PDF)
        </button>
        <div style={{ marginTop: '24px' }}>
          <Link to="/" style={styles.backLink}>← Back to Home</Link>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;