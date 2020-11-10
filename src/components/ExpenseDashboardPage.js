import React from "react";
import ExpenseList from "./ExpenseList";
import ExpenselistFilters from "./ExpenseListFilters";

const ExpenseDashboardPage=()=>(
    <div>
        <ExpenseList />
        <ExpenselistFilters />
    </div>
);
export default ExpenseDashboardPage;