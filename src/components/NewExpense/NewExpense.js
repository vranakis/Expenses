import React, { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {
    const onSaveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        
        props.onAddExpense(expenseData);
        console.log("eftasa");


        setNewExpense(<button onClick={clickHandler}>Add new expense</button>);

    }


    let [newExpense, setNewExpense] = useState(<button onClick={clickHandler}>Add new expense</button>);
    

    function onCancelExpenseData(){
        setNewExpense(<button onClick={clickHandler}>Add new expense</button>);
    }

    function clickHandler()
    {
        setNewExpense(<ExpenseForm onCancel={onCancelExpenseData} onSaveExpenseData={onSaveExpenseDataHandler} />);
    }


    return (
    <div className="new-expense">
        {newExpense}
    </div>
    );
};

export default NewExpense;