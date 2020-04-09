import React from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <div className="container">
            <h3>Your Balance</h3>
            <h2>Rs : 00.00</h2>
        </div>
    )
}
