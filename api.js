export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { artist } = req.body || {};
    if (!artist) return res.status(400).json({ error: 'Artist required' });
    
    res.json({
      success: true,
      artist,
      score: '97/110',
      recommendation: 'STRONG BUY',
      message: 'API LIVE! Ready for Perplexity integration.'
    });
  } else {
    res.status(405).json({ error: 'POST only' });
  }
}
