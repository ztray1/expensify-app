import moment from "moment";

export default[
    {
        id:"1",
        description:"Gum",
        note:"",
        amount:444,
        createdAt:0
    },
    {
        id:"2",
        description:"Rent",
        note:"hello",
        amount:443,
        createdAt:moment(0).subtract(4,"days").valueOf()
    },
    {
        id:"3",
        description:"Credit Card",
        note:"yes",
        amount:442,
        createdAt:moment(0).add(4,"days").valueOf()
    }
];