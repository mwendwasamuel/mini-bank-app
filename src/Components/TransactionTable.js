import React, { useState } from 'react';

const TransactionTable = ({ transactions }) => {
  const [sortKey, setSortKey] = useState(null);

  const handleSort = (key) => {
    setSortKey(key);
  };

  const sortedTransactions = transactions.slice().sort((a, b) => {
    if (sortKey === 'category') {
      return a[sortKey].localeCompare(b[sortKey]);
    } else {
      return a[sortKey] - b[sortKey];
    }
  });

  return (
    <div>
      <h2>Transaction Table</h2>
      <table>
        <thead>
          <tr>
            <th>
              <button onClick={() => handleSort('date')}>Date</button>
            </th>
            <th>
              <button onClick={() => handleSort('description')}>
                Description
              </button>
            </th>
            <th>
              <button onClick={() => handleSort('category')}>Category</button>
            </th>
            <th>
              <button onClick={() => handleSort('amount')}>Amount</button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedTransactions.map((transaction) => (
            <tr key={transaction.id}>
              <td>{transaction.date}</td>
              <td>{transaction.description}</td>
              <td>{transaction.category}</td>
              <td>{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransactionTable;
