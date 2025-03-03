import React from 'react';

const Transactions = ({ transactions }) => {
  return (
    <div className='container'>
        <div className="header">
            <div className="header-left">
                <span>Recent Transactions</span>
                Transactions overview
            </div>
            <div className="header-right">
                ...
            </div>
        </div>
        <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Card</th>
            <th>Date</th>
            <th>Status</th>
            <th>Amount($)</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={index}>
              <td>
                <div className="image">
                    <img src={transaction.image} alt="Card-type" />
                </div>
                <div className="Acc-details">
                    <span>{transaction.Account}</span>
                    {transaction.type}
                </div>
              </td>
              <td>
                <div className="date">
                <span>{transaction.date}</span>
                {transaction.time}
                </div>
              </td>
              <td>
                <div className={`status ${transaction.Status.toLowerCase()}`}>
                    {transaction.Status}
                </div>
              </td>
              <td>
                <div className={(transaction.type === 'credit' && transaction.Status.toLowerCase() === 'verified') ? 'amount-verified' : 'amount'}>
                    {transaction.amount.toFixed(2)}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default Transactions;
