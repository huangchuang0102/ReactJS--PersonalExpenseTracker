import React, { useState } from 'react';

import './ExpenseItem.css';
import ExpenseDay from './ExpenseDate';
import Card from '../UI/Cards';

function ExpenseItem(props){

    //useState always return two elements, initial element and updated element
    const [title, setTitle] = useState(props.expense.title);

    const click = () => {
        setTitle('Updated');
        console.log(title);
    }
    return (
    <li>
        <Card className='expense-item'> 
            <ExpenseDay date = {props.expense.date}/>
            <div className='expense-item__description'>
                <h2>{props.expense.title}</h2>
                <div className = 'expense-item__price'>${props.expense.amount}</div>        
            </div>
            <button onClick = {click}>Change Title</button>
        </Card>
    </li>
    );
    
}
export default ExpenseItem;