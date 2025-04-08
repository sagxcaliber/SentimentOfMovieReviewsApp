import axios from 'axios';

const API_BASE = 'http://localhost:8000/api'; // or your deployed backend URL

export const submitReview = (text) =>
  axios.post(`${API_BASE}/review`, { text });

export const fetchHistory = () =>
  axios.get(`${API_BASE}/history`);

//
//export const submitReview = async (text) => {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      resolve({
//        data: {
//          sentiment: text.toLowerCase().includes('bad') ? 'negative' : 'positive',
//          score: Math.random().toFixed(1),
//        },
//      });
//    }, 300);
//  });
//};
//
//export const fetchHistory = async () => {
//  return new Promise((resolve) => {
//    setTimeout(() => {
//      resolve({
//        data: [
//          { text: "The movie was great!", sentiment: "positive", score: 0.9 },
//        ],
//      });
//    }, 300);
//  });
//};
