import React, { useState } from 'react';

import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import Card from '../UI/Card';
import ExpensesChart from './ExpensesChart';
import './Expenses.css';


const Expenses = (props) => {

    const [newDate, setNewDate] = useState("2021");


  const changeDateHandler = selectedDate => {
    setNewDate(selectedDate);
  };

  const filteredExpenses = props.items.filter(expense => {
    return expense.date.getFullYear().toString() === newDate;

  });

  return (
    <div>
    
    <Card className="expenses">
      <ExpensesFilter 
        selected={newDate} 
        onDateChange={changeDateHandler}
      /> {/*  sta teleutaia courses tou 4. (Assignment 2, 61, 62) exei alla onomata autos */}
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>   
    </Card>
    </div>
  );
}

export default Expenses;