import React from "react";
import {shallow} from "enzyme";
import {ExpensesSummary} from "../../components/ExpensesSummary";

test("should correctly render ExpenseSummary with 1 expense",()=>{
     const wrapper=shallow(<ExpensesSummary expenseCount={1} expenseTotal={235} />);
     expect(wrapper).toMatchSnapshot();
});

test("should correctly render ExpenseSummary with mutiple expenses",()=>{
    const wrapper=shallow(<ExpensesSummary expenseCount={123} expenseTotal={23512456} />);
    expect(wrapper).toMatchSnapshot();
});