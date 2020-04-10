import React , { createContext , useReducer} from 'react';
import AppReducer from './AppReducer'

//Initial Satate
const initialState = {
    transactions:[
        {id:1,text:'Flower',amount:-10},
        {id:2,text:'Salary',amount:+2500},
        {id:3,text:'Electricity',amount:-400},
        {id:4,text:'Fees',amount:+200},
    ]
}

//Create Context
export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
    const [state,dispatch] = useReducer(AppReducer,initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        });
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
    }}>
        {children}
    </GlobalContext.Provider>)
}