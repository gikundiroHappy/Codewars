function doubleChar(str) {
  let word = "";
  for (let i = 0; i < str.length; i++) {
    word += str[i].repeat(2);
  }
  return word;
}
