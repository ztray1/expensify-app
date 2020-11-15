const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        reject("this is my resolved data");
    },1500);
});


promise.then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})

console.log("first");
