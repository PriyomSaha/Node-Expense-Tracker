import React,{ useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    const amounts = transactions.map(transaction => transaction.amount);
    //console.log(amounts);
    
    const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="container">
            <h3>Your Balance</h3>
            <h2>Rs : {total}</h2>
        </div>
    )
}
