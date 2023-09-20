function findMultiples(number, limit) {
  const multiples = [];
  for (let i = number; i <= limit; i++) {
    if (i % number === 0) {
      multiples.push(i);
    }
  }
  return multiples;
}
console.log(findMultiples(2, 6));
