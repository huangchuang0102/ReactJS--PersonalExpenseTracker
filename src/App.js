
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import React, {useState} from "react";

const initialState = [
  {id:'e1', title:'Learning Expense', amount: 29.99, date: new Date(2019,9,28)},
  {id:'e2',title:'Renting Expense', amount: 500, date: new Date(2020,9,28)},
  {id:'e3',title:'Membership Expense', amount: 120, date: new Date(2021,9,28)},
  {id:'e4',title:'Utility Expense', amount: 200, date: new Date(2022,9,28)}
]
function App() {
  const [expenses, setExpenses] = useState(initialState);
  

  const addExpenseHandler = (expense) =>{
    setExpenses(prevExpense =>{
      return [expense, ...expenses];
    });
  };
  
  return (
    <div>
      <NewExpense onAddExpense = {addExpenseHandler}/>
      <Expenses data = {expenses} />
   </div>
  );
}

export default App;
