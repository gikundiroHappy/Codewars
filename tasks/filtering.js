const items = [
  { name: "Bike", price: 100 },
  { name: "TV", price: 200 },
  { name: "Album", price: 10 },
  { name: "Book", price: 5 },
  { name: "Phone", price: 500 },
  { name: "Computer", price: 1000 },
];
// 1. Filter and show the product that will be bought when you don't have much money (Cheap one)
let cheapProduct = items.filter((item) => item.price < 10);
console.log(cheapProduct);

// 2. Filter and show the product that will be expensive in the array
let expensiveProduct = items.filter((item) => item.price > 500);
console.log(expensiveProduct);

// 3. Calculate the full price of all products combined

let allProduct = items.reduce((total, item) => total + item.price, 0);
console.log(allProduct);

// 4. Calculate the full price of all products combined and remove products that are under $10
console.log(
  items
    .filter((item) => item.price >= 10)
    .reduce((total, item) => total + item.price, 0)
);

// 5. Filter and show the product that will be start with letter b at first postion
console.log(items.filter((item) => item.name.toLowerCase().startsWith("b")));
