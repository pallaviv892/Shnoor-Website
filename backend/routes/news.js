const express = require('express');
const router = express.Router();
const pool = require('../db/pool');

router.get('/', async (req, res) => {
  try {
    const result = await pool.query(
      `SELECT id, title, slug, excerpt, image_url, read_time, published_at
       FROM news WHERE is_published = true ORDER BY published_at DESC`
    );
    res.json(result.rows);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch news.' });
  }
});

router.get('/:slug', async (req, res) => {
  try {
    const result = await pool.query(
      'SELECT * FROM news WHERE slug = $1 AND is_published = true',
      [req.params.slug]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Article not found.' });
    res.json(result.rows[0]);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch article.' });
  }
});

module.exports = router;
