import './ExpenseDate.css'
function ExpenseDate(props){
    const Month = props.date.toLocaleDateString('en-US', { month: 'long' })
    const Day = props.date.toLocaleDateString('en-US', { day: 'numeric' })
    const Year = props.date.toLocaleDateString('en-US', { year: 'numeric' })

    return (
        <div className='expense-date'>
        <div className='expense-date__month'>{Month}</div>
        <div className='expense-date__day'>{Day}</div>
        <div className='expense-date__year'>{Year}</div>
      </div>
    );
}
export default ExpenseDate;