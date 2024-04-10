
import './App.css';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses';
const expenses = [{ title: "Car Insurance", amount: 234.98, date: new Date() },
  { title: "Home Insurance", amount: 234.98, date: new Date() },
  { title: "Bike Insurance", amount: 234.98, date: new Date() },
  { title: "Life Insurance", amount: 234.98, date: new Date() }
  ]

function App() {
  const onAddExpenseHAndler= expense=>{
    console.log(expense)
  }
  
  return (
    <div>
      <NewExpense onAddExpense={onAddExpenseHAndler}/>
      <Expenses items={expenses} ></Expenses>
    </div>

  );
}

export default App;
