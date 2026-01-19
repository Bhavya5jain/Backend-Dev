const DB=[
    {name: "Rahul", type:"Premium"},
    {name: "Ankit", type:"Basic"},
    {name: "Sonia", type:"Premium"},
    {name: "Neha", type:"Basic"}
];

function checkSubscription(user){
    return new Promise ((resolve,reject)=>{
        if(user.type==='Premium'){
            resolve("Access Granted to Netflix");
        }else{
            reject("Please Subscribe");
        }
    })
}

const getUser = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const user=DB.find((user)=>user.name==="Rahul");
        if(user){
            resolve(user);
        }else{
            reject("User not found");
        }
    },1500)
});

getUser.then((user)=>{
    console.log("User fetched:",user);
    // return user.type;
    checkSubscription(user).then((res)=>{
        console.log(res);
    }).catch((err)=>{
        console.log(err);
    })
}).catch((err)=>{
    console.log("Error:",err);
})