const cart = [
{ item: "Laptop", price: 50000, quantity: 1, inStock: true },
{ item: "Mouse", price: 1500, quantity: 2, inStock: true },
{ item: "Keyboard", price: 3000, quantity: 1, inStock: false }
];

const readyToShip = cart.reduce((acc, item) => {
    return acc && item.inStock;
}, true)
console.log("All items in stock:", readyToShip);

const notInStockItems = cart.filter((item) => {
    return !item.inStock;
});
console.log("Items not in stock:", notInStockItems);

const itemInStock = cart.filter((item) => {
    return item.inStock;
});
console.log("Items after restocking:", itemInStock);

const totalCost = itemInStock.reduce((acc,curr)=>{
    return acc+curr.price*curr.quantity;
},0)

console.log("total Cost Of Shipment : ",totalCost);