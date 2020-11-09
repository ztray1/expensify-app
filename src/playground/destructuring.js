//console.log("destructuring");

/*const book={
    title:"Ego is the Enemy",
    author:"Ryan Holiday",
    publisher:{
        //name:"penguin"
    }
}

const {name:publishername="self-publisher"}=book.publisher;

console.log(publishername);*/

const item=["coffee(hot)","$2.50","$2.00","$2.75"];

const [itemname, ,smallPrice]=item;

console.log(`${itemname} is ${smallPrice}`);