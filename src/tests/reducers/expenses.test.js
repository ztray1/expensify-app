import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should remove expense by id",()=>{
    const action={
        type:"REMOVE_EXPENSE",
        id:expenses[1].id
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0],expenses[2]]);
})

test("should set default state",()=>{
    const state=expensesReducer(undefined,"@@INIT");
    expect(state).toEqual([]);
})

test("should not remove expense if not found",()=>{
    const action={
        type:"REMOVE_EXPENSE",
        id:-1
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test("should add an expense",()=>{
    const expense={
        id:"23",
        expense:"Hello",
        description:"Rent",
        note:"hello",
        amount:109500,
        createdAt:1000
    }
    const action={
        type:"ADD_EXPENSE",
        expense
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([...expenses,expense])
})

test("should edit an expense",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:"1",
        updates:{
            note:"hello world",
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([{
        id:"1",
        description:"Gum",
        note:"hello world",
        amount:444,
        createdAt:0
    },expenses[1],expenses[2]]);
})

test("should not edit expense if expense not find",()=>{
    const action={
        type:"EDIT_EXPENSE",
        id:"123",
        updates:{
            note:"hello world"
        }
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual(expenses);
})

test("should set expenses",()=>{
    const action={
        type:"SET_EXPENSES",
        expenses:[expenses[1]]
    }
    const state=expensesReducer(expenses,action);
    expect(state).toEqual([expenses[1]]);
})