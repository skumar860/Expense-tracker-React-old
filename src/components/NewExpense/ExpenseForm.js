
import React , { useState} from 'react';
import './ExpenseForm.css';
const ExpenseForm = (props) => {
   const[enteredTitle,setEnteredTitle]=useState('') //here the three states will update and work seperately
   const[enteredAmount,setEnteredAmount]=useState('')
   const[enteredDate,setEnteredDate]=useState('')
   // below is example of using one state instead of multiple states
   // const[userInput,setUserInput]=useState(
   //    {
   //       enteredTitle:'',
   //       enteredAmount:'',
   //       enteredDAte:''
   //    })   //This will work same as three diffrent state only the difference is that we need to change value of each key value when updating this usecase state object

   const titlechangeHandler=(event)=>{ //here event parameter can be named customised and is default given by react
    setEnteredTitle(event.target.value)
   // using one state approach to manage object from usesate we will follow below approach.
   // setUserInput(
   //    // {
   //    //    enteredTitle:'event.target.value',
   //    //    enteredAmount:'',
   //    //    enteredDate:''      // the other values of object which were not been updated need to copy same as earlier.
   //    // }) above method is not safe when updating multiple state in one state update safest one is given below
   //    (prevState)=>{
   //     return {...prevState, enteredTitle:'event.target.value'}
   //    }) // this approach of using function with previous state sanpshot as parameter is safest way whenever state update depends on previous state. 
   }
   const amountchangeHandler=(event)=>{
      setEnteredAmount(event.target.value)
   }
   const datechangeHandler=(event)=>{
      setEnteredDate(event.target.value)
   }
   const submitHandler=(event)=>{
      event.preventDefault();
      const expenseData={
         title:enteredTitle,
         amount:enteredAmount,
         date:new Date(enteredDate)
      }
      props.onSaveExpenseData(expenseData)
      setEnteredTitle('')
      setEnteredAmount('')
      setEnteredDate('')
   }
      return (
      <form onSubmit={submitHandler} >
         <div className='new-expense__controls'>
            <div className='new-expense__control'>
               <label>Title</label>
               <input type="text" value={enteredTitle}  onChange={titlechangeHandler}/>
            </div>
            <div className='new-expense__control'>
               <label>Amount</label>
               <input type="number" value={enteredAmount} min='0.01' step='0.01' onChange={amountchangeHandler}/>
            </div>
            <div className='new-expense__control'>
               <label>Date</label>
               <input type="date" value={enteredDate} min='2023-01-01' max='2024-12-31' onChange={datechangeHandler}/>
            </div>
         </div>
         <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
         </div>
      </form>
   );
}
export default ExpenseForm;