import ExpenseItem from "./ExpenseItem"

const ExpensesList = props =>{
    
    if(props.filteredList.length === 0){
        return <h2 className = 'expenses-list__fallback'>Found no expenses.</h2>;
    }

    return(
        <ul className = 'expenses-list'>
            {props.filteredList.map(expenses => <ExpenseItem key = {expenses.id} expense = {expenses}/>)}
        </ul>
    )
}

export default ExpensesList