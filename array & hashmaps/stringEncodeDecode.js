function encode(strs) {
  return strs.map((str) => `${str.length}/${str}`).join("");
}
const originalString = ["syed", "mohammed", "shafat", "hussain"];
const encodedString = encode(originalString);
console.log(encodedString);

function decode(s) {
  const result = [];
  let i = 0;
  while (i < s.length) {
    const slashIndex = s.indexOf("/", i);
    const length = parseInt(s.slice(i, slashIndex));
    result.push(s.slice(slashIndex + 1, slashIndex + 1 + length));
    i = slashIndex + 1 + length;
  }
  return result;
}
const decodedString = decode(encodedString);
console.log(decodedString);
