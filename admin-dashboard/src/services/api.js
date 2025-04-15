import axios from 'axios';

const API_BASE = 'http://localhost:4000/api';

export const fetchFeedbacks = async () => {
  try {
    const res = await axios.get(`${API_BASE}/feedback`);
    return res.data;
  } catch (err) {
    console.error('API error:', err);
    return [];
  }
};