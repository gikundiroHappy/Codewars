function sameCase(a, b) {
  let char = /^[A-Za-z]$/;
  if (!char.test(a) || !char.test(b)) {
    return -1;
  } else if (a.toLowerCase() === b.toLowerCase()) {
    return 1;
  } else {
    return 0;
  }
}
console.log(sameCase("G", "G"));
