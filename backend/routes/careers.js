const express = require('express');
const router = express.Router();
const pool = require('../db/pool');
router.get('/jobs', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM job_listings WHERE is_active = true ORDER BY created_at DESC'
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch jobs.' });
  }
});

router.post('/apply', async (req, res) => {
  const { full_name, email, phone, position, experience, cover_letter } = req.body;

  if (!full_name || !email || !phone || !position) {
    return res.status(400).json({ error: 'Please fill in all required fields.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO careers (full_name, email, phone, position, experience, cover_letter)
       VALUES ($1, $2, $3, $4, $5, $6) RETURNING id`,
      [full_name, email, phone, position, experience || null, cover_letter || null]
    );
    res.status(201).json({
      success: true,
      message: 'Application submitted successfully! We will review and contact you.',
      id: result.rows[0].id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit application.' });
  }
});

module.exports = router;
