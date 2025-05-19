const express = require('express');
const router = express.Router();
const axios = require('axios');

const TMDB_API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

// Trending content (movies + shows)
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

// Search for movies/shows
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

// Get full details (trailers, cast, reviews, etc.)
router.get('/details/:type/:id', async (req, res) => {
  const { type, id } = req.params;
  try {
    const response = await axios.get(`${BASE_URL}/${type}/${id}`, {
      params: {
        api_key: TMDB_API_KEY,
        append_to_response: 'videos,credits,recommendations,reviews'
      }
    });
    res.json(response.data);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch details' });
  }
});

module.exports = router;
