import * as firebase from "firebase";
import expenses from "../tests/fixtures/expenses";

const config={
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGE_SENDER_ID
};

firebase.initializeApp(config);

const database=firebase.database();

export{firebase,database as default};

/*database.ref("expenses").on("child_removed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})

database.ref("expenses").on("child_changed",(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})

database.ref("expenses").on("child_added",(snapshot)=>{
    console.log(snapshot.key,snapshot.val());
})

/*database.ref("expenses").on("value",(snapshot)=>{
    const expense=[];
    snapshot.forEach((childSnapshot)=>{
        expense.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expense);
})*/

/*database.ref("expenses").once("value").then((snapshot)=>{
    const expense=[];
    snapshot.forEach((childSnapshot)=>{
        expense.push({
            id:childSnapshot.key,
            ...childSnapshot.val()
        })
    })
    console.log(expense);
})*/

/*database.ref("expenses").push({
    description:"hello",
    note:"note1",
    amount:"amount1",
    createdAt:"createdAt1"
})*/

/*database.ref("expenses").push({
    description:"hello",
    note:"note1",
    amount:"amount1",
    createdAt:"createdAt1"
})
*/
/*database.ref("expenses").push({
    description:"hello",
    note:"note1",
    amount:"amount1",
    createdAt:"createdAt1"
})
/*
/*database.ref("notes").push({
    title:"course topics",
    body:"react native"
});

database.ref("notes").push({
    title:"go for a run",
    body:"running course"
});*/

/*database.ref().set({
    name:"Ray Allen",
    age:26,
    stresslevel:6,
    isSingle: false,
    job:{
        title:"software developer",
        company:"Petra"
    },
    location:{
        city:"London",
        country:"Canada"
    }
}).then(()=>{
    console.log("data is saved");
}).catch((e)=>{
    console.log("this failed",e);
});

database.ref("isSingle").set(null);
/*
database.ref("age").set(27);
database.ref('location/city').set("toronto");
database.ref('attributes').set({
    height:178,
    weight:80
}).then((data)=>{
    console.log(data);
}).catch((e)=>{
    console.log("Things did not for the error",e);/*
})*/

/*database.ref()
    .remove()
    .then(()=>{
        console.log("Data was removed");
    }).catch((e)=>{
        console.log("did not remove data",e);
    })*/
/*
database.ref().update({
    stresslevel:9,
    "job/company":"Amazon",
    "location/city":"London"
})*/

/*database.ref().once("value")
.then((snapshot)=>{
    const val=snapshot.val();
    console.log(val);
})
.catch((e)=>{
    console.log("Error fetching data",e)
})*/


/*const onValueChange=database.ref().on("value",(snapshot)=>{
    console.log(snapshot.val());
},(e)=>{
    console.log("Error with data fetching",e);
});*/

/*database.ref().on("value",(snapshot)=>{
    const val=snapshot.val();
    console.log(`${val.name} is a ${val.job.title} in ${val.job.company}`);
})*/

//database.ref("notes/-MM3EaA4u9KQAcpwBVLT").remove();

