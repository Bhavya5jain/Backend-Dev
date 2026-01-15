// const user = {name:"bhavya",email:"bhavya.jain_12@gmail.com" , phone: 1234567890};
// methods of object

// const userName = user.name;
// const email = user.email;
// console.log(userName);
// console.log(email);

// const {name , email , phone} = user;
// console.log(name);
// console.log(email);
// console.log(phone);
// const user1=user;
// user1.name="Bhavya Jain";
// console.log(user);
// const updateUser = {...user , address:"mathura"}
// console.log(updateUser);
// hide pasword with rest operator  :
// const {password,...publicData} = user;
// console.log(publicData);

// Array Methods:
// const number = [1,2,3,4,5]; 

// array ke har element ko 2 se multiply karke naya array newNumber banata hai.
// const newNumber = number.map((num) => num * 2); 
// console.log(newNumber);

// array ke elements ka cumulative sum nikalta hai, lekin initial value 1 set hone ki wajah se result mein 1 add ho jayega. Short: array ke sab numbers ka sum + 1):
// const sumofNumber = number.reduce((sum , number) => sum + number, 1);
// console.log(sumofNumber);


// Promises in js 

// Creation of Promise:

const fetchUser = (userId) => {
  return new Promise((resolve, reject) => {

    setTimeout(() => {
      const users = {
        1: {
          name: "Satvik",
          age: 21,
          email: "satvik.gaur12@gmail.com",
          phone: 1234567890,
          password: "satvik123",
          address: "mathura"
        },
        2: {
          name: "Arsh",
          age: 22,
          email: "arsh.gaur12@gmail.com",
          phone: 9876543210,
          password: "arsh123",
          address: "mathura"
        }
      };

      const user = users[userId];

      if (user) {
        resolve(user);
      } else {
        reject("User not found");
      }

    }, 5000);

  });
};

// Using the Promise:

fetchUser(2)
  .then(user => {
    console.log("User fetched:", user);
  })
  .catch(err => {
    console.log("Error:", err);
  });