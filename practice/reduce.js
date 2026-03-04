let salesData=[
    { product: "Laptop", price: 1200 },
    { product: "Smartphone", price: 800 },
    { product: "Headphones", price: 150 },
    { product: "Keyboard", price: 80 },
]

let totalPrice = salesData.reduce((acc, sale)=> acc + sale.price,0)
console.log(totalPrice);


  let inventory = [
    { name: "Widget A", stock: 30 },
    { name: "Widget B", stock: 120 },
    { name: "Widget C", stock: 45 },
    { name: "Widget D", stock: 70 },
  ];

  let lowStock = inventory.filter((item)=>{
    return item.stock < 50
  })
  console.log(lowStock);
  

   let userActivity = [
    { user: "Alice", activityCount: 45 },
    { user: "Bob", activityCount: 12 },
    { user: "Charlie", activityCount: 33 },
  ];

  let totalCount = userActivity.reduce((acc, activity)=> acc + activity.activityCount,0)
  console.log(totalCount);
  

let mostActive = userActivity.reduce((maxUser, user) => user.activityCount< maxUser.activityCount ? user : maxUser)

console.log(mostActive);

  