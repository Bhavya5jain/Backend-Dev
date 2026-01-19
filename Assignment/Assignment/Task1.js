const rawUsers = [
{ id: 1, name: "Rahul", password: "fb_password", role: "admin" },
{ id: 2, name: "Sanya", password: "123_password", role: "user" },
{ id: 3, name: "Amit", password: "secret_password", role: "user" }
];

rawUsers.map((user) =>{
    const {password, ...restUser} = user;
    console.log(restUser);
})

console.log(rawUsers.filter((user) => {
    return user.role === "admin";
}))