function SwapCase(inputString) {
  var swappedString = "";

  for (var i = 0; i < inputString.length; i++) {
    var char = inputString[i];

    if (char === char.toUpperCase()) {
      swappedString += char.toLowerCase();
    } else {
      swappedString += char.toUpperCase();
    }
  }

  return swappedString;
}

var inputString = "The Quick Brown Fox";
var result = SwapCase(inputString);
console.log(result);
