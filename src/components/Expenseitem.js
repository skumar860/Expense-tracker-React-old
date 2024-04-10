import './Expenseitem.css';
import React, { useState} from 'react';
import ExpenseDate from './ExpenseDate';
import Card from'./Card';
// function Information({date,name,amount}) {
//   return (
//     <div className='expense-item'>
//       <div>{date.toLocaleDateString()}</div>
//       <div className='expense-item__description'>
//         <h2>{name}</h2>
//         <div className='expense-item__price'>${amount}</div>
//       </div>
//     </div>
//   );
// }
function Information(props) {
  const [value,setValue]= useState(props.name)
  function changeUpdate(){
   setValue('Updated')
  }
 
  return (
    <Card className='expense-item'>
       <ExpenseDate date={props.date}/>
      <div className='expense-item__description'>
        <h2>{value}</h2>
        <div className='expense-item__price'>${props.amount}</div>
      </div>
      <button id="changeTitle" onClick={changeUpdate}>Change Title</button>
    </Card>
  );
}
export default Information;