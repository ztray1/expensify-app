import {login,logout} from "../../actions/auth";

test("should generate login acion object",()=>{
    const uid="123456789";
    const action = login(uid);
    expect(action).toEqual({
        type:"LOGIN",
        uid:uid
    })
})

test("should generate logout action object",()=>{
    const action=logout();
    expect(action).toEqual({
        type:"LOGOUT"
    })
})