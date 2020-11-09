import React from "react";
import {shallow} from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenListItem from "../../components/ExpenseListItem";

test("should render ExpenListItem f correctly",()=>{
    const wrapper=shallow(<ExpenListItem {...expenses[0]}/>);
    expect(wrapper).toMatchSnapshot();
})