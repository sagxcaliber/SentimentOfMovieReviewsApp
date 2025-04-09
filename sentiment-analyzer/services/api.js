// src/services/api.js

import axios from 'axios';

const API_BASE = 'http://0.0.0.0:8000';

export const submitReview = async (text) => {
  const res = await axios.post(`${API_BASE}/checkSentiment`, {
    review: text,
  });

  // ✅ Return just the first review object (not the full wrapper)
  return res.data.response[0];
};

export const fetchHistory = async () => {
  const res = await axios.get(`${API_BASE}/listReviews`);
  return res.data.response; // ✅ just the array
};
