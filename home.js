const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

//Routes
const tmdbRoutes = require('./tmdb');
const userRoutes = require('./routes/user');

app.use('/api/tmdb', tmdbRoutes);
app.use('/api/user', userRoutes);

//server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});



const express = require('express');
const router = express.Router();
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

router.get('/trending', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/trending/all/week`, {
      params: { api_key: TMDB_API_KEY }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch trending data' });
  }
});

router.get('/search', async (req, res) => {
  const query = req.query.q;
  try {
    const response = await axios.get(`${BASE_URL}/search/multi`, {
      params: { api_key: TMDB_API_KEY, query }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Search failed' });
  }
});

router.get('/details/:type/:id', async (req, res) => {
  const { type, id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
      params: { api_key: TMDB_API_KEY, append_to_response: 'videos,credits,recommendations,reviews' }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch details' });
  }
});

module.exports = router;
