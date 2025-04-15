import React from 'react';

const FeedbackTable = ({ feedbacks }) => {
  return (
    <div style={{ padding: '1rem' }}>
      <h2>Feedback Submissions</h2>
      <table border="1" cellPadding="8" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th>Client ID</th>
            <th>Name</th>
            <th>Message</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          {feedbacks.map((f, idx) => (
            <tr key={idx}>
              <td>{f.clientId}</td>
              <td>{f.name}</td>
              <td>{f.message}</td>
              <td>{new Date(f.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FeedbackTable;
