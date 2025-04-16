// App.js
import React, { useEffect, useState } from 'react';
import FeedbackTable from './components/FeedbackTable';
import { fetchFeedbacks } from './services/api';

const App = () => {
  const [feedbacks, setFeedbacks] = useState([]);
  const [filterText, setFilterText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [loading, setLoading] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const data = await fetchFeedbacks();
      setFeedbacks(data);
      setLoading(false);
    };
    getData();
  }, []);

  const filteredFeedbacks = feedbacks.filter(f =>
    f.clientId.toLowerCase().includes(filterText.toLowerCase())
  );

  const totalPages = Math.ceil(filteredFeedbacks.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentFeedbacks = filteredFeedbacks.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const handleItemsChange = (e) => {
    setItemsPerPage(parseInt(e.target.value));
    setCurrentPage(1);
  };

  return (
    <div className={`${darkMode ? 'dark' : ''}`}> 
      <div className="max-w-6xl mx-auto p-6 dark:bg-gray-900 dark:text-white min-h-screen transition-colors">
        <div className="flex justify-end mb-4">
          <button
            onClick={toggleDarkMode}
            className="text-sm px-4 py-2 bg-gray-300 dark:bg-gray-700 text-black dark:text-white rounded-md"
          >
            Toggle {darkMode ? 'Light' : 'Dark'} Mode
          </button>
        </div>

        <h1 className="text-4xl font-bold text-blue-700 text-center mb-8">
          Embedly Connect Admin Panel
        </h1>

        <div className="flex items-center gap-3 mb-4">
          <label htmlFor="filter" className="font-medium text-gray-700 dark:text-gray-100">Filter by Client ID:</label>
          <input
            type="text"
            id="filter"
            value={filterText}
            onChange={(e) => setFilterText(e.target.value)}
            placeholder="e.g. demo123"
            className="border border-gray-300 rounded-md px-3 py-1 shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div className="flex items-center gap-3 mb-6">
          <label htmlFor="itemsPerPage" className="font-medium text-gray-700 dark:text-gray-100">Items per page:</label>
          <select
            id="itemsPerPage"
            value={itemsPerPage}
            onChange={handleItemsChange}
            className="border border-gray-300 rounded-md px-3 py-1 shadow-sm"
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
          </select>
        </div>

        {loading ? (
          <div className="text-center text-blue-500 text-lg font-semibold py-10 dark:text-gray-100">Loading feedbacks...</div>
        ) : (
          <FeedbackTable feedbacks={currentFeedbacks} />
        )}

        <div className="flex items-center justify-between mt-6">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md font-medium ${
              currentPage === 1 ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Previous
          </button>

          <span className="text-sm text-gray-600 dark:text-gray-100">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md font-medium ${
              currentPage === totalPages ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
