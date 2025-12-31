const express = require('express');
const app = express();

app.use(express.json());

app.post('/', (req, res) => {     // ← ROOT PATH
  const { artist } = req.body || {};
  if (!artist) return res.status(400).json({ error: 'Artist required' });
  res.json({
    success: true,
    artist,
    score: '97/110',
    recommendation: 'STRONG BUY',
    message: 'API LIVE! EXPRESS FIXED'
  });
});

module.exports = app;
