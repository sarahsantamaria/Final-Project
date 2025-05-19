CREATE TABLE IF NOT EXISTS ratings (
  id SERIAL PRIMARY KEY,
  title TEXT NOT NULL,
  type TEXT CHECK (type IN ('movie', 'tv')),
  rating INTEGER CHECK (rating >= 0 AND rating <= 10),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
