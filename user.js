const express = require('express');
const router = express.Router();
const { createClient } = require('@supabase/supabase-js');

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY);

router.get('/ratings', async (req, res) => {
  const { data, error } = await supabase.from('ratings').select('*');
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

router.post('/ratings', async (req, res) => {
  const { title, type, rating } = req.body;
  const { data, error } = await supabase.from('ratings').insert([{ title, type, rating }]);
  if (error) return res.status(500).json({ error: error.message });
  res.json(data);
});

module.exports = router;