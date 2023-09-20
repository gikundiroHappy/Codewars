//  Moving the first letter of each word to the end of it, then add "ay" to the end of the word.
//  Leave punctuation marks untouched.

// pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
// pigIt('Hello world !');     // elloHay orldway !

function pigIt(str) {
  let array = str.split(" ");
  let newArr = [];
  for (let i = 0; i < array.length; i++) {
    if (/^[A-Za-z]+$/.test(array[i])) {
      newStr = array[i].slice(1) + array[i].charAt(0) + "ay";
      newArr.push(newStr);
    } else {
      newArr.push(array[i]);
    }
  }
  return newArr.join(" ");
}
console.log(pigIt("hello world"));
