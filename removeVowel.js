// function removeVowel(str) {
//   return str.replace(/[aeiouAEIOU]/g, "");
// }
// console.log(removeVowel("Eddyyuiure"));

let vowels = ["a", "i", "u", "o", "e"];

function removeVowel(word) {
  let result = word
    .split("")
    .filter((char) => !vowels.includes(char))
    .join("");
  return result;
}

let inputWord = "example";
let result = removeVowel(inputWord);
console.log(result);
