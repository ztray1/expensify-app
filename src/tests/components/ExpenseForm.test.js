import React from "react";
import {shallow} from "enzyme";
import moment from "moment";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should render ExpenseForm correctly",()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
})

test("should render ExpenseFrom correctly with expense data",()=>{
    const wrapper=shallow(<ExpenseForm expenses={expenses[1]} />);
    expect(wrapper).toMatchSnapshot();
})

test("should render error for invalid from sumbmission",()=>{
    const wrapper=shallow(<ExpenseForm />);
    expect(wrapper).toMatchSnapshot();
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    });
    expect(wrapper.state("error").length).toBeGreaterThan(0);
    expect(wrapper).toMatchSnapshot();
})

test("should set description oninput change",()=>{
    const value="new description";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("input").at(0).simulate("change",{
        target:{value}
    });
    expect(wrapper.state("description")).toBe(value);
})

test("should set note on textarea change",()=>{
    const value="new note value";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("textarea").simulate("change",{
        target:{value}
    });
    expect(wrapper.state("note")).toBe(value);
})

test("should call onSubmit prop for valid form submission",()=>{
    const onSubmitSpy=jest.fn();
    const wrapper=shallow(<ExpenseForm expense={expenses[1]} onSubmitExpense={onSubmitSpy} />);
    wrapper.find("form").simulate("submit",{
        preventDefault:()=>{}
    });
    expect(onSubmitSpy).toHaveBeenLastCalledWith(
        {
            description:expenses[1].description,
            amount:expenses[1].amount,
            note:expenses[1].note,
            createdAt:expenses[1].createdAt
        }
    );
})

test("should set amount if valid input",()=>{
    const value="23.5";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value}
    })
    expect(wrapper.state("amount")).toBe(value);
})

test("should set amount if invalid input",()=>{
    const amount="23.444";
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("input").at(1).simulate("change",{
        target:{value:amount}
    })
    expect(wrapper.state("amount")).toBe("");
})

test("should set now date on date change",()=>{
    const now=moment();
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onDateChange")(now);
    expect(wrapper.state("createdAt")).toEqual(now);
})

test("should set calendar focus on change",()=>{
    const focused=true;
    const wrapper=shallow(<ExpenseForm />);
    wrapper.find("SingleDatePicker").prop("onFocusChange")({focused});
    expect(wrapper.state("calendarFocused")).toBe(focused);
})
