import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";
const NewExpense =(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const idNumber=Math.random()*9991
        const expenseData={
            ...enteredExpenseData,
            id: idNumber.toString()
        }
        props.onAddExpense(expenseData)
    }
 return (
   <div className="new-expense">
    <ExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>
   </div>
 );
}
export default NewExpense;