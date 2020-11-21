import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenselistFilters from "./ExpenseListFilters";
import ExpensesSummary from "./ExpensesSummary";

const ExpenseDashboardPage=()=>(
    <div>
        <ExpensesSummary />
        <ExpenselistFilters />
        <ExpenseList />
    </div>
);
export default ExpenseDashboardPage;