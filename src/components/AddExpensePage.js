import React from "React";
import {connect} from "react-redux";
import ExpenseForm from "./ExpenseForm";
import {addExpense} from "../actions/expenses";

export class AddExpensePage extends React.Component{
    submit=(expense)=>{
        this.props.addExpense(expense);
        this.props.history.push("/");
        console.log(this.props);
    };
    render(){
        return(
            <div>
                <h1>Add Expense</h1>
                <ExpenseForm onSubmit={this.submit} />
            </div>
        );
    }
}

const mapDispatchToProps=(dispatch)=>({
    addExpense:(expense)=>dispatch(addExpense(expense))
});

export default connect(undefined, mapDispatchToProps)(AddExpensePage);