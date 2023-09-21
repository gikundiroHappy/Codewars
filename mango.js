function mango(quantity, price) {
  let totalCost = 0;
  let newQuantity = quantity - Math.floor(quantity / 3);
  totalCost = newQuantity * price;
  console.log(quantity, price);
  console.log(totalCost);
  return totalCost;
}
