const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.post('/', async (req, res) => {
  const { name, mobile, email, message, service } = req.body;

  if (!name || !mobile || !email || !message) {
    return res.status(400).json({ error: 'All required fields must be filled.' });
  }

  try {
    const result = await pool.query(
      `INSERT INTO contacts (name, mobile, email, message, service)
       VALUES ($1, $2, $3, $4, $5) RETURNING id, created_at`,
      [name, mobile, email, message, service || null]
    );
    res.status(201).json({
      success: true,
      message: 'Thank you! We will get back to you shortly.',
      id: result.rows[0].id,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to submit. Please try again.' });
  }
});

router.get('/', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM contacts ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch contacts.' });
  }
});

module.exports = router;
