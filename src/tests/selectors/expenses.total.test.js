import selectExpenseTotal from "../../selectors/expenses-total";
import expenses from "../fixtures/expenses";

test("should return 0 if no expenses",()=>{
    const res=selectExpenseTotal([]);
    expect(res).toBe(0);
})

test("should correctly add up to a single expense",()=>{
    const res=selectExpenseTotal([expenses[0]]);
    expect(res).toBe(444);
})

test("should correctly add up mutiple expenses",()=>{
    const res=selectExpenseTotal(expenses);
    expect(res).toBe(1329);
})