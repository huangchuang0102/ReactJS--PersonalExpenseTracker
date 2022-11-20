import React, {useState} from "react"

import './ExpenseForm.css'

const ExpenseForm = (props) =>{
    const [enteredTitle, setEnteredTitle] = useState(' ');
    const [enteredAmount, setEnteredAmount] = useState(' ');
    const [enteredDate, setEnteredDate] = useState(' ');

    const titleChange = (event) =>{setEnteredTitle(event.target.value)};
    const amountChange = (event) =>{setEnteredAmount(event.target.value)};
    const dateChange = (event) =>{setEnteredDate(event.target.value)};
    
    
    const submitHandler = (event) =>{
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle(' ');
        setEnteredAmount(' ');
        setEnteredDate(' ');
    };

    
    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type = 'txt' 
                        value = {enteredTitle} 
                        onChange = {titleChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type = 'number' 
                        value = {enteredAmount} 
                        min = "0.01" 
                        step = "0.01" 
                        onChange = {amountChange}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type = 'date' 
                        value = {enteredDate} 
                        min = "2022-10-18" 
                        max = "2022-12-25" 
                        onChange = {dateChange}/>
                </div>
               
                
            </div>
            <div className="new-expense__action">
                <button type = "button" onClick={props.onCancel} >Cancel </button>
                <button type = "submit">Add Expense</button>
            </div>
        </form>
    )
}

export default ExpenseForm;