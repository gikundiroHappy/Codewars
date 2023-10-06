function calculateGCD(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

function calculateLCM(a, b) {
  const gcd = calculateGCD(a, b);
  return (a * b) / gcd;
}

const num1 = 4;
const num2 = 8;

const gcd = calculateGCD(num1, num2);
const lcm = calculateLCM(num1, num2);

console.log(`GCD of ${num1} and ${num2} is: ${gcd}`);
console.log(`LCM of ${num1} and ${num2} is: ${lcm}`);
