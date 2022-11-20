import './Expenses.css';
import Cards from "../UI/Cards";
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import React, {useState} from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from './ExpensesChart';
function Expense (props){

    const [filteredYear, setFilterYear] = useState('2022');
    
    const filterChangeHandler = (event) =>{
        setFilterYear(event);
    };

    const filteredExpense = props.data.filter(checkDate => checkDate.date.getFullYear().toString()
        === filteredYear);

    return (
        <div>
            
            <Cards className="expenses">
            <ExpensesFilter selected = {filteredYear} onSaveFilter = {filterChangeHandler}/>
            <ExpensesChart expenses = {filteredExpense}/>
            <ExpensesList filteredList = {filteredExpense}/>
            </Cards>
        </div>
    )
}

export default Expense;