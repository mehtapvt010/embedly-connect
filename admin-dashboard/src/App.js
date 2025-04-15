import './App.css';
import React, { useEffect, useState } from 'react';
import FeedbackTable from './components/FeedbackTable';
import { fetchFeedbacks } from './services/api';

function App() {
  const [feedbacks, setFeedbacks] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await fetchFeedbacks();
      setFeedbacks(data);
    };
    getData();
  }, []);

  return (
    <div>
      <h1 style={{ textAlign: 'center' }}>Embedly Connect Admin Panel</h1>
      <FeedbackTable feedbacks={feedbacks} />
    </div>
  );
}

export default App;
