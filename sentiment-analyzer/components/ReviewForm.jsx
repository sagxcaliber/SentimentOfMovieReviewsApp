import { useState } from 'react';
import { submitReview } from '../services/api';

const ReviewForm = ({ onResult }) => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const res = await submitReview(text);
    onResult({ ...res.data, text });
    setText('');
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        placeholder="Write your review..."
        className="w-full p-3 border border-gray-400 rounded-md focus:outline-none"
      />
      <button
        type="submit"
        disabled={!text || loading}
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze'}
      </button>
    </form>
  );
};

export default ReviewForm;
