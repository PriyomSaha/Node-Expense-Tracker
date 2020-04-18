import React , {useState , useContext} from 'react';
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    let [enteredText, setText] = useState('');
    let [amount, setAmount] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id : Math.floor(Math.random()*100000000),
            text:enteredText,
            amount : +amount
        };
        
        setText('');
        setAmount('');
        addTransaction(newTransaction);
    }
    return (
        <>
        <h3>Add new transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" value={enteredText} onChange = {(e) => setText(e.target.value)}
            placeholder="Enter text..." />
            </div>
            <div className="form-control">
            <label htmlFor="amount"
                >Amount <br />
                (<b>-ve</b> - expense , <b>+ve</b> - income)</label
            >
            <input type="number" value={amount} onChange = {(e) => setAmount(e.target.value)}
            placeholder="Enter amount..." />
            </div>
            <button className="btn" >Add transaction</button>
        </form>
        </>
    )
}
