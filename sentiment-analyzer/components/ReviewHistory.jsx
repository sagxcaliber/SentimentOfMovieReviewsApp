const ReviewHistory = ({ history }) => (
  <div>
    <h2 className="text-2xl font-semibold mb-4">History</h2>
    {history.length === 0 ? (
      <p className="text-gray-500">No reviews yet.</p>
    ) : (
      <ul className="space-y-4">
        {history.map((item, index) => (
          <li key={index} className="border rounded-md p-4">
            <p><strong>Review:</strong> {item.text}</p>
            <p><strong>Sentiment:</strong> {item.sentiment} ({item.score})</p>
          </li>
        ))}
      </ul>
    )}
  </div>
);

export default ReviewHistory;
