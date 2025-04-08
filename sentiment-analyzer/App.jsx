import { useEffect, useState } from 'react';
import ReviewForm from './components/ReviewForm';
import ReviewHistory from './components/ReviewHistory';
import { fetchHistory } from './services/api';

function App() {
  const [history, setHistory] = useState([]);

  useEffect(() => {
    loadHistory();
  }, []);

  const loadHistory = async () => {
    try {
      const res = await fetchHistory();
      setHistory(res.data);
    } catch (err) {
      console.error('Error loading history', err);
    }
  };

  const handleNewResult = (newItem) => {
    setHistory(prev => [newItem, ...prev]);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold text-center my-4">Movie Review Sentiment Analyzer</h1>
      <ReviewForm onResult={handleNewResult} />
      <ReviewHistory history={history} />
    </div>
  );
}

export default App;
