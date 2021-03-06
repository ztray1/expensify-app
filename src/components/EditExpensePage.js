import React from "react";
import {connect} from "react-redux";
import { startEditExpense } from "../actions/expenses";
import ExpenseForm from "./ExpenseForm";
import {startRemoveExpense} from "../actions/expenses";
import ConfirmModal from "./ConfirmModal";

export class EditExpensePage extends React.Component{
    state={
        removeconfirm:false
    };
    onSubmit =(expense)=>{
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push("/");
    };
    onRemove=()=>{
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push("/");
    };
    onRemoveClick=()=>{
        this.setState({removeconfirm:true});
    };
    handleCancelOption=()=>{
        this.setState(()=>({removeconfirm:false}))
    }
    handleConfirmRemoveOption=()=>{
        this.setState(()=>({removeconfirm:false}));
        this.onRemove();
    }
    render(){
        return (
            <div>
                <div className="page-header">
                    <div className="content-container">
                        <h1 className="page-header__title">Edit Expense</h1>
                    </div>
                </div>
                <div className="content-container">
                <ExpenseForm 
                    expense={this.props.expense}
                    onSubmitExpense={this.onSubmit}
                />
                <button className="button button--secondary" onClick={this.onRemoveClick}>
                    Remove Expense
                </button>
                <ConfirmModal selectedOption={this.state.removeconfirm} handleCancelOption={this.handleCancelOption} handleConfirmRemoveOption={this.handleConfirmRemoveOption}/>
                </div>
                <div className="App">
                </div>
            </div>);
    }
}

const mapStateToProps=(state,props)=> ({
    expense:state.expenses.find((expense)=> expense.id===props.match.params.id)
});

const mapDispatchToProps=(dispatch)=>({
    startEditExpense:(id,expense)=>dispatch(startEditExpense(id,expense)),
    startRemoveExpense:({id})=>dispatch(startRemoveExpense({id}))
});

export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);