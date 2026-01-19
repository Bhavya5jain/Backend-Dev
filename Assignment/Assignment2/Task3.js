const DB=[
        {id:1,name:"Rahul",isPremium:true,password:"1234"},
        {id:2,name:"Bhavya",isPremium:false,password:"2345"},
        {id:3,name:"satvik",isPremium:true,password:"3456"},
        {id:4,name:"ankit",isPremium:false,password:"4567"},
    ]

    const OrdersDB=[
        {userId:1,orderId:101,product:"Laptop",delivered:true,price:50000},
        {userId:1,orderId:102,product:"Mouse",delivered:false,price:1500},
        {userId:2,orderId:103,product:"Keyboard",delivered:true,price:2000},
        {userId:3,orderId:104,product:"Monitor",delivered:true,price:10000},
    ]

    function fetchUser(id){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const user = DB.find(user => user.id===id );
                if(user){
                    console.log("User fetched");
                    resolve(user);
                }else{
                    reject("User not found");
                }
            }, 1000);
        })
    }

    function fetchOrder(id){
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                const userdelivered = OrdersDB.filter(order => order.userId === id && order.delivered===true)
                resolve(userdelivered);
            }, 2000);
        })
    }

    async function displayDashboard(id) {
        await fetchUser(id).then((user)=>{
            console.log("User:",user);
            console.log("Fetching Orders...");
        }).catch((error)=>{
            console.log("Error:",error);
        });

        await fetchOrder(id).then((orders)=>{
            console.log("Orders fetched");
            console.log("Orders:",orders);
            return orders;
        }).then((userdelivered)=>{
            const price = userdelivered.map((order)=>{
            id=order.userId;
            if(DB.find(user => user.id===id && user.isPremium===true)){
                return order.price-(order.price*0.1);
            }else{
                return order.price;
            }
        })
        console.log("Total Price:",price.reduce((acc,cur)=>acc+cur,0));
        }).catch((error)=>{
            console.log("Error:",error);
        });

        
    }
    const userId=1;
    displayDashboard(userId);
    