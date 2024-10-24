function longestCommonPrefix(strs) {
  console.log(strs.length);
  if (!strs.length) {
    return "";
  }
  for (let i = 0; i <= strs[0].length; i++) {
    console.log("i: ", i);
    for (let j = 1; j < strs.length; j++) {
      console.log("j: ", j);
      if (strs[0][i] !== strs[j][i]) {
        return strs[0].slice(0, i);
      }
    }
  }
  return strs[0];
}

console.log(longestCommonPrefix(["flower", "flow", "flight"]));
