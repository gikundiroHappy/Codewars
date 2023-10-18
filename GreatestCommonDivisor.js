function GreatestCommonDivisor(a, b) {
  var gcd;
  while (a != b) {
    if (a > b) {
      a = a - b;
    } else {
      b = b - a;
    }
  }
  gcd = a;
  console.log(gcd);
}
GreatestCommonDivisor(2154, 458);
