import { useEffect, useState } from 'react';
import ReviewForm from '../components/ReviewForm';
import ReviewHistory from '../components/ReviewHistory';
import { fetchHistory } from '../services/api';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    const res = await fetchHistory();
    setHistory(res.data);
  };

  const handleNewResult = (newItem) => {
    setHistory(prev => [newItem, ...prev]);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-start py-10 px-4 bg-white">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Movie Review Sentiment Analyzer
      </h1>

      <div className="w-full max-w-xl border rounded-lg p-6 shadow-sm">
        <ReviewForm onResult={handleNewResult} />
      </div>

      <div className="w-full max-w-xl mt-8">
        <ReviewHistory history={history} />
      </div>
    </div>
  );
}

export default App;
