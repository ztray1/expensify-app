import authReducer from "../../reducers/auth";

test("should set uid for login",()=>{
    const defaultState={};
    const action={
        type:"LOGIN",
        uid:"123456789"
    }
    const state=authReducer(defaultState,action);
    expect(state).toEqual({uid:action.uid});
})

test("should clear uid for logout",()=>{
    const action={
        type:"LOGOUT"
    }
    const startState={uid:"123456789"};
    const state=authReducer(startState,action);
    expect(state).toEqual({});
})