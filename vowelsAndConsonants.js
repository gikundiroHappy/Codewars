function vowelsAndConsonants(s) {
  let vowels = ["a", "i", "u", "o", "e"];
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) > -1) {
      console.log(s[i]);
    }
  }
  for (let i = 0; i < s.length; i++) {
    if (vowels.indexOf(s[i]) < 0) {
      console.log(s[i]);
    }
  }
}

console.log(vowelsAndConsonants("Helloworld"));
