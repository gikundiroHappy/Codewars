for (i = 0; i < 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += "*";
  }
  console.log(str);
}
console.log("-----------------");

for (i = 0; i < 5; i++) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += i;
  }
  console.log(str);
}
console.log("-----------------");

for (i = 4; i > 0; i--) {
  var str = "";
  for (j = 1; j <= i; j++) {
    str += j;
  }
  console.log(str);
}
console.log("-----------------");

let n = 5;
let string = "";

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);
