import filtersReducer from "../../reducers/filters";
import moment from "moment";

test("should setup default filter values",()=>{
    const state=filtersReducer(undefined,{type:"@@INIT"})
    expect(state).toEqual({
        text:"",
        sortBy:"date",
        startDate:moment().startOf("month"),
        endDate:moment().endOf("month")
    });
})

test("should set sortBy to date",()=>{
    const currentState={
        text:"",
        startDate:undefined,
        endDate:undefined,
        sortBy:"amount"
    }
    const state=filtersReducer(currentState,{type:"SORT_BY_DATE"});
    expect(state.sortBy).toEqual("date");
})

test("should set sortBy to amount",()=>{
    const state=filtersReducer(undefined,{type:"SORT_BY_AMOUNT"});
    expect(state.sortBy).toEqual("amount");
})

test("should set text filter",()=>{
    const action={
        type:"SET_TEXT_FILTER",
        text:"set text"
    }
    const state=filtersReducer(undefined,action);
    expect(state.text).toEqual("set text");
})

test("should set startDate filter",()=>{
    const action={
        type:"SET_START_DATE",
        startDate:moment(12)
    }
    const state=filtersReducer(undefined,action);
    expect(state.startDate).toEqual(moment(12));
})

test("should set endDate filter",()=>{
    const action={
        type:"SET_END_DATE",
        endDate:moment(13)
    }
    const state=filtersReducer(undefined,action);
    expect(state.endDate).toEqual(moment(13));
})

