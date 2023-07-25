import React, { useState, useEffect } from 'react';
import axios from 'axios';
import TransactionTable from './Components/TransactionTable';
import TransactionForm from './Components/TransactionForm';
import SearchBar from './Components/searchBar';

const App = () => {
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch data from the local JSON server
    axios.get('http://localhost:3000/transactions')
      .then((response) => {
        console.log("response")
        setTransactions(response.data);
        setFilteredTransactions(response.data);
      })
      .catch((error) => {
        console.error('Error fetching transactions:', error);
      });
  }, []);



  const handleAddTransaction = (newTransaction) => {
    // Update the state with the new transaction
    setTransactions([...transactions, newTransaction]);
    // Update the filtered transactions as well
    setFilteredTransactions([...transactions, newTransaction]);
  };

  const handleSearch = (term) => {
    setSearchTerm(term);
    // Filter transactions based on search term
    const filtered = transactions.filter(
      (transaction) =>
        transaction.description.toLowerCase().includes(term.toLowerCase())
    );
    setFilteredTransactions(filtered);
  };

  return (
    <div>
      <h1>Bank Transactions</h1>
      <TransactionForm onAddTransaction={handleAddTransaction} />
      <SearchBar searchTerm={searchTerm} onSearch={handleSearch} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
};

export default App;
