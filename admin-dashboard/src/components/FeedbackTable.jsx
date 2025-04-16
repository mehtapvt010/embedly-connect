import React from 'react';

const FeedbackTable = ({ feedbacks }) => {
  return (
    <div className="overflow-x-auto border rounded-lg shadow">
      <table className="min-w-full text-sm text-left border-collapse">
        <thead className="bg-gray-100 border-b text-gray-700 uppercase text-xs dark:bg-gray-700 dark:text-gray-200">
          <tr>
            <th className="px-6 py-3">Client ID</th>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Message</th>
            <th className="px-6 py-3">Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, idx) => (
            <tr key={idx} className="odd:bg-white even:bg-gray-50 hover:bg-blue-50 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-600">
              <td className="px-6 py-3 font-medium text-gray-900 dark:text-white">{f.clientId}</td>
              <td className="px-6 py-3 text-gray-800 dark:text-gray-100">{f.name}</td>
              <td className="px-6 py-3 text-gray-800 dark:text-gray-100">{f.message}</td>
              <td className="px-6 py-3 text-gray-800 dark:text-gray-100">
                {new Date(f.timestamp).toLocaleString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
