import React, { useState, useMemo } from 'react';
import { Card, CardBody } from "reactstrap";
import { useLocation } from "react-router-dom";

import { transactionIcons, transactions } from "../constants/constants";
import TransactionsFilter from './TranscationsFilter';
import TransactionItem from './TranscationItem';
import AllTranscations from './AllTranscations';

const Transactions = () => {
  const location = useLocation();
  const [filters, setFilters] = useState({});
  const [searchQuery, setSearchQuery] = useState('');

  // Filter transactions based on active filters and search query
  const filteredTransactions = useMemo(() => {
    return transactions.filter(transaction => {
      // Search filter (searching by wallet)
      if (searchQuery && !transaction.wallet.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      // Transaction type filter
      if (filters.type && transaction.type !== filters.type) {
        return false;
      }

      // Status filter
      if (filters.status && transaction.status !== filters.status) {
        return false;
      }

      // Date filter
      if (filters.date) {
        const transactionDate = new Date(transaction.date);
        const currentDate = new Date();
        const daysDiff = Math.floor((currentDate - transactionDate) / (1000 * 60 * 60 * 24));

        switch (filters.date) {
          case 'Last 7 days':
            if (daysDiff > 7) return false;
            break;
          case 'Last 30 days':
            if (daysDiff > 30) return false;
            break;
          case 'Last 90 days':
            if (daysDiff > 90) return false;
            break;
          default:
            break;
        }
      }

      return true;
    });
  }, [transactions, filters, searchQuery]);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="w-100 d-flex flex-column">
      <Card className="bg-secondary-dark rounded-4 p-2">
        <CardBody>
          {location.pathname === "/" && <AllTranscations/>}
          {location.pathname === "/transaction-history" && (
            <TransactionsFilter
              onFilterChange={handleFilterChange}
              onSearch={handleSearch}
            />
          )}
          <div style={{ height: "48vh", overflow: "auto" }}>
            {filteredTransactions.map((transaction, index) => (
              <TransactionItem
                key={index}
                transaction={transaction}
                transactionIcons={transactionIcons}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Transactions;